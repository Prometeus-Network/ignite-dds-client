import {Module} from "@nestjs/common";
import {Web3Service} from "./web3.service";
import {CidStorageService} from "./cidStorage.service";
import {CidStorageController} from "./cidStorage.controller";
import {ContractFetcher} from "./fetchers/contract.fetcher";

@Module({
    imports: [],
    controllers: [CidStorageController],
    providers: [Web3Service, CidStorageService, ContractFetcher],
})
export class CidStorageModule {}
