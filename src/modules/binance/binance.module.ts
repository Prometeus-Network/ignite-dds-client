import {Module} from "@nestjs/common";
import {CidChainController} from "./cidChain.controller";
import {TestNetworkService} from "./services/testNetwork.service";
import {CidChainFetcher} from "./fetchers/testNet/cidChain.fetcher";
import {CidChainContract} from "./contracts/testNet/cidChain.contract";
import {PasswordHashContract} from "./contracts/testNet/passwordHash.contract";

@Module({
    imports: [],
    controllers: [CidChainController],
    providers: [TestNetworkService, CidChainFetcher, CidChainContract, PasswordHashContract],
    exports: [TestNetworkService, CidChainFetcher, CidChainContract, PasswordHashContract]
})
export class BinanceModule {}
