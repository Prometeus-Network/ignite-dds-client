import {Injectable} from "@nestjs/common";
import Web3 from 'web3';
import {ConfigService} from "../../../config/config.service";

@Injectable()
export class MainNetworkService {
    constructor(private readonly config: ConfigService) {}

    public httpInstance(): Web3 {
        return new Web3(new Web3.providers.HttpProvider(this.config.get('ETHEREUM_MAIN_NET')));
    }

    public async getTransaction(transactionHash: string) {
        const instance = this.httpInstance();
        return instance.eth.getTransaction(transactionHash);
    }
}
