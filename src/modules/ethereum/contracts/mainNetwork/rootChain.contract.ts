import {Injectable} from "@nestjs/common";
import Web3 from 'web3';
import {MainNetworkService} from "../../services/mainNetwork.service";
import {ConfigService} from "../../../../config/config.service";

@Injectable()
export class RootChainContract {
    private web3: Web3;
    private instance: any;

    constructor(
        private readonly config: ConfigService,
        private readonly mainNetworkService: MainNetworkService
    ) {
        this.web3 = mainNetworkService.httpInstance();
        this.instance = new this.web3.eth.Contract(
            this.config.getMainNetworkRootChainContractAbi(),
            this.config.getMainNetworkRootChainContractAddress(),
        );
    }

    public async getVerificationBlockByIndex(index: number) {
        return this.instance.methods.verificationBlocks(index).call();
    }

    public async getLastVerificationBlock() {
        return this.instance.methods.lastVerificationBlock().call();
    }

    public async getEvent() {
        return this.instance.getPastEvents('VerificationBlockSubmitted', {
            fromBlock: 0,
            toBlock: 'latest'
        });
    }

    public async getTransaction(hash: string) {
        return this.web3.eth.getTransactionReceipt(hash);
    }
}
