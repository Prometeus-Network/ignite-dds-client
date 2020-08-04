import {Module} from "@nestjs/common";
import {CidChainController} from "./cidChain.controller";
import {TestNetworkService} from "./services/testNetwork.service";
import {CidChainFetcher} from "./fetchers/testNet/cidChain.fetcher";
import {CidChainBinanceContract} from "./contracts/testNet/cidChainBinance.contract";
import {PasswordHashContract} from "./contracts/testNet/passwordHash.contract";

@Module({
    imports: [],
    controllers: [CidChainController],
    providers: [TestNetworkService, CidChainFetcher, CidChainBinanceContract, PasswordHashContract],
    exports: [TestNetworkService, CidChainFetcher, CidChainBinanceContract, PasswordHashContract]
})
export class BinanceModule {}
