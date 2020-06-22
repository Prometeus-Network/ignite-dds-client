import {Module} from "@nestjs/common";
import {RootChainController} from "./rootChain.controller";
import {RootChainFetcher} from "./fetchers/mainNetwork/rootChain.fetcher";
import {RootChainContract} from "./contracts/mainNetwork/rootChain.contract";
import {MainNetworkService} from "./services/mainNetwork.service";
import {CidBlockFetcher} from "./fetchers/plasma/cidBlock.fetcher";
import {CidBlockContract} from "./contracts/plasma/cidBlock.contract";
import {PlasmaNetworkService} from "./services/plasmaNetwork.service";
import {CidBlockController} from "./cidBlock.controller";

@Module({
    imports: [],
    controllers: [
        RootChainController,
        CidBlockController
    ],
    providers: [
        RootChainFetcher,
        RootChainContract,
        MainNetworkService,
        CidBlockFetcher,
        CidBlockContract,
        PlasmaNetworkService
    ],
})
export class EthereumModule {}
