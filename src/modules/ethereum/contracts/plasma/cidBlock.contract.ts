import {Injectable} from "@nestjs/common";
import Web3 from 'web3';
import {MainNetworkService} from "../../services/mainNetwork.service";
import {ConfigService} from "../../../../config/config.service";
import {PlasmaNetworkService} from "../../services/plasmaNetwork.service";

@Injectable()
export class CidBlockContract {
    private web3: Web3;
    private instance: any;

    constructor(
        private readonly config: ConfigService,
        private readonly plasmaNetworkService: PlasmaNetworkService
    ) {
        this.web3 = plasmaNetworkService.httpInstance();
        this.instance = new this.web3.eth.Contract(
            this.config.getPlasmaNetworkCidBlockContractAbi(),
            this.config.getPlasmaNetworkCidBlockContractAddress(),
        );
    }

    public async getLastCommittedBlock() {
        return this.instance.methods.lastCommittedBlock().call();
    }

    public async getPlasmaBlock(index: number) {
        return this.instance.methods.plasmaChain(index).call();
    }

    public async getEvent(btfsCid: string) {
        return this.instance.getPastEvents('BlockSubmitted', {
            filter: {btfsCid: btfsCid},
            fromBlock: 0,
            toBlock: 'latest'
        });
    }
}
