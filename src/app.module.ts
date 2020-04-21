import { Module } from '@nestjs/common';
import {ConfigModule} from "./config/config.module";
import {SoterModule} from "./modules/soter/soter.module";
import {CidStorageModule} from "./modules/cidStorage/cidStorage.module";

@Module({
  imports: [ConfigModule, SoterModule, CidStorageModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
