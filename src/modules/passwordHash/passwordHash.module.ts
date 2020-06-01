import {Module} from "@nestjs/common";
import {PasswordHashController} from "./passwordHash.controller";
import {PasswordHashService} from "./services/passwordHash.service";
import {PasswordHashDto} from "./dto/passwordHash.dto";
import {Web3PrivateService} from "./web3Private.service";
import {NewPasswordHashHandler} from "./useCase/newPasswordHash/newPasswordHash.handler";
@Module({
    imports: [],
    controllers: [PasswordHashController],
    providers: [PasswordHashService, PasswordHashDto, Web3PrivateService, NewPasswordHashHandler],
})
export class PasswordHashModule {}
