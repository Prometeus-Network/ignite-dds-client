import {BadRequestException, Injectable} from "@nestjs/common";
import Web3 from 'web3';
import {ConfigService} from "../../../../config/config.service";
import {TestNetworkService} from "../../services/testNetwork.service";

@Injectable()
export class PasswordHashContract {
    private web3: Web3;
    private instance: any;

    constructor(
        private readonly config: ConfigService,
        private readonly testNetworkService: TestNetworkService
    ) {
        this.web3 = testNetworkService.httpInstance();
        this.instance = new this.web3.eth.Contract(
            this.config.getPasswordHashBinanceSmartChainContractAbi(),
            this.config.getBinanceTestNetworkPasswordHashContractAddress(),
        );
    }

    public async getFromAddressInTransaction(transactionHash: string) {
        try {
            const transaction = await this.web3.eth.getTransaction(transactionHash);
            if (transaction == null) {
                return '';
            }
            return transaction.from;
        } catch (e) {
            throw new BadRequestException(e.message);
        }
    }

    public async getPasswordByTransactionHash(transactionHash: string) {
        try {
            const transaction = await this.web3.eth.getTransaction(transactionHash);
            if (transaction == null) {
                return '';
            }

            let hash = await this.instance.methods.userPassword(transaction.from).call();

            if (!hash) {
                hash = this.web3.utils.hexToAscii(transaction.input);
            }

            return hash;
        } catch (e) {
            throw new BadRequestException(e.message);
        }
    }

    public async getBalance(address: string) {
        return this.web3.eth.getBalance(address);
    }

    public async sendEther(sender: string) {
        const count = await this.web3.eth.getTransactionCount(this.config.get('DEFAULT_ADDRESS_BINANCE'));
        const signedTx = await this.web3.eth.accounts.signTransaction({
            nonce: count,
            from: this.config.get('DEFAULT_ADDRESS_BINANCE'),
            to: sender,
            value: this.web3.utils.toWei('0.1', 'ether'),
            gas: 200000,
        }, this.config.get('PRIVATE_KEY_BINANCE'));

        return this.web3.eth.sendSignedTransaction(signedTx.rawTransaction);

        // return this.web3.eth.sendTransaction({
        //     from: this.config.get('DEFAULT_ADDRESS'),
        //     to: sender,
        //     value: this.web3.utils.toWei('0.1', 'ether')
        // });
    }

    public async setNewPasswordHash(sender: string, newHash: string) {
        const setNewPasswordHash = await this.instance.methods.setNewPassword(sender, newHash);
        const setNewPasswordHashAbi = setNewPasswordHash.encodeABI();
        const count = await this.web3.eth.getTransactionCount(this.config.get('DEFAULT_ADDRESS_BINANCE'), 'pending');
        const signedTx = await this.web3.eth.accounts.signTransaction({
            nonce: count,
            from: this.config.get('DEFAULT_ADDRESS_BINANCE'),
            to: this.config.getBinanceTestNetworkPasswordHashContractAddress(),
            data: setNewPasswordHashAbi,
            gas: 200000,
        }, this.config.get('PRIVATE_KEY_BINANCE'));

        return this.web3.eth.sendSignedTransaction(signedTx.rawTransaction);
    }

    public async getAddressHash(sender: string) {
        return this.instance.methods.userPassword(sender).call();
    }
}
