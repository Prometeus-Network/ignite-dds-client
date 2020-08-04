import {Injectable} from "@nestjs/common";
import Web3 from 'web3';
import {ConfigService} from "../../../../config/config.service";
import {TestNetworkService} from "../../services/testNetwork.service";

@Injectable()
export class CidChainBinanceContract {
    private web3: Web3;

    constructor(
        private readonly config: ConfigService,
        private readonly testNetworkService: TestNetworkService
    ) {
        this.web3 = testNetworkService.httpInstance();
    }

    public instance() {
        return new this.web3.eth.Contract(
            this.config.getBinanceCidChainContractAbi(),
            this.config.getBinanceCidChainContractAddress(),
        );
    }

    public async getLastPushedBlock() {
        return this.instance().methods.lastPushedBlock().call();
    }

    public async getCidChainBlock(index: number) {
        return this.instance().methods.cidChain(index).call();
    }

    public async getEvent() {
        return this.instance().getPastEvents('CidChainBlockPushed', {
            fromBlock: 0,
            toBlock: 'latest'
        });
    }
}
