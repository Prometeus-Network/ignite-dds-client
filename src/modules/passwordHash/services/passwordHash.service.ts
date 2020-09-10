import {BadRequestException, Injectable} from "@nestjs/common";
import {Web3PrivateService} from "../web3Private.service";
import Web3 from "web3";
import {ConfigService} from "../../../config/config.service";

@Injectable()
export class PasswordHashService {
    private readonly web3: Web3;

    constructor(
        private readonly web3Service: Web3PrivateService,
        private readonly configService: ConfigService,
    ) {
        this.web3 = web3Service.httpInstance();
    }

    public contract() {
        return new this.web3.eth.Contract(
            this.configService.getPasswordHashContractAbi(),
            this.configService.getPasswordHashContractAddress(),
        );
    }

    public async getFromAddressInTransaction(transactionHash: string) {
        try {
            const transaction = await this.web3.eth.getTransaction(transactionHash);
            return transaction.from;
        } catch (e) {
            throw new BadRequestException(e.message);
        }
    }

    public async getPasswordByTransactionHash(transactionHash: string) {
        try {
            const contract = this.contract();
            const transaction = await this.web3.eth.getTransaction(transactionHash);
            return contract.methods.userPassword(transaction.from).call();
        } catch (e) {
            throw new BadRequestException(e.message);
        }
    }

    public async getBalance(address: string) {
        return this.web3.eth.getBalance(address);
    }

    public async sendEther(sender: string) {
        await this.web3.eth.personal.unlockAccount(
            this.configService.get('PRIVATE_NET_DEFAULT_ADDRESS'),
            this.configService.get('PRIVATE_NETWORK_ADDRESS_PASSWORD'),
            600
        );
        return this.web3.eth.sendTransaction({
            from: this.configService.get('PRIVATE_NET_DEFAULT_ADDRESS'),
            to: sender,
            value: this.web3.utils.toWei('0.1', 'ether')
        });
    }

    public async setNewPasswordHash(sender: string, newHash: string) {
        const contract = this.contract();
        const setNewPasswordHash = await contract.methods.setNewPassword(sender, newHash);
        const setNewPasswordHashAbi = setNewPasswordHash.encodeABI();
        const count = await this.web3.eth.getTransactionCount(this.configService.get('PRIVATE_NET_DEFAULT_ADDRESS'), 'pending');
        const signedTx = await this.web3.eth.accounts.signTransaction({
            nonce: count,
            from: this.configService.get('PRIVATE_NET_DEFAULT_ADDRESS'),
            to: this.configService.getPasswordHashContractAddress(),
            data: setNewPasswordHashAbi,
            gas: 200000,
        }, this.configService.get('PRIVATE_NETWORK_ADDRESS_PRIVATE_KEY'));

        return this.web3.eth.sendSignedTransaction(signedTx.rawTransaction);
    }

    public async getAddressHash(sender: string) {
        const contract = this.contract();
        return contract.methods.userPassword(sender).call();
    }
}
