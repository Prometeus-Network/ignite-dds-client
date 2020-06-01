import {BadRequestException, Injectable, Logger} from "@nestjs/common";
import {PasswordHashDto} from "../../dto/passwordHash.dto";
import {Web3PrivateService} from "../../web3Private.service";
import {PasswordHashService} from "../../services/passwordHash.service";

@Injectable()
export class NewPasswordHashHandler{
    private readonly logger = new Logger(NewPasswordHashHandler.name);

    constructor(
        private readonly passwordHashService: PasswordHashService,
    ) {}

    public async handle(dto: PasswordHashDto) {
        try {
            console.log(1);
            await this.passwordHashService.sendEther(dto.address);
            const balance = await this.passwordHashService.getBalance(dto.address);
            console.log(balance.toString());
            console.log(balance);
            console.log(2);
            const tx = await this.passwordHashService.setNewPasswordHash(
                dto.address,
                dto.passwordHash,
                dto.privateKey
            );
            console.log(3);
            this.logger.debug('New password hash added!');
            this.logger.log(tx);
        } catch (e) {
            this.logger.error(e.message);
            throw new BadRequestException(e.message);
        }
    }
}
