import { Module } from '@nestjs/common';
import {ConfigModule} from "./config/config.module";
import {SoterModule} from "./modules/soter/soter.module";
import {CidStorageModule} from "./modules/cidStorage/cidStorage.module";
import {PasswordHashModule} from "./modules/passwordHash/passwordHash.module";
import {EthereumModule} from "./modules/ethereum/ethereum.module";
import {BinanceModule} from "./modules/binance/binance.module";

@Module({
  imports: [ConfigModule, EthereumModule, BinanceModule, SoterModule, CidStorageModule, PasswordHashModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
