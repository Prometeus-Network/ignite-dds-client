import {Injectable} from "@nestjs/common";
import {ConfigService} from "../../config/config.service";
import Web3 from "web3";

@Injectable()
export class Web3MainNetService {
    constructor(private readonly config: ConfigService) {}

    public httpInstance(): Web3 {
        return new Web3(new Web3.providers.HttpProvider(this.config.get('ETHEREUM_MAIN_NET')));
    }
}
