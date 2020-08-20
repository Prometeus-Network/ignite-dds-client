import {BadRequestException, Injectable, Logger} from "@nestjs/common";
import {PasswordHashDto} from "../../dto/passwordHash.dto";
import {Web3PrivateService} from "../../web3Private.service";
import {PasswordHashService} from "../../services/passwordHash.service";
import {PasswordHashMainService} from "../../services/passwordHashMain.service";
import {PasswordHashContract} from "../../../binance/contracts/testNet/passwordHash.contract";

@Injectable()
export class NewPasswordHashHandler{
    private readonly logger = new Logger(NewPasswordHashHandler.name);

    constructor(
        private readonly passwordHashService: PasswordHashService,
        private readonly binancePasswordHashService: PasswordHashContract
    ) {}

    public async handle(dto: PasswordHashDto) {
        try {
            console.log(1);
            await this.passwordHashService.sendEther(dto.address);
            console.log(2);
            const tx = await this.passwordHashService.setNewPasswordHash(
                dto.address,
                dto.passwordHash,
                dto.privateKey
            );
            console.log(3);
            await this.binancePasswordHashService.sendEther(dto.address);
            console.log(4);
            const txBinance = await this.binancePasswordHashService.setNewPasswordHash(
                dto.address,
                dto.passwordHash,
                dto.privateKey
            );
            console.log(5);
            console.log(txBinance);
            // console.log(tx);

            this.logger.debug('New password hash added!');
            // this.logger.log(tx);
        } catch (e) {
            this.logger.error(e.message);
            throw new BadRequestException(e.message);
        }
    }

    public async handleForEthereum(dto: PasswordHashDto) {
        try {
            this.logger.log(`sendEther ${JSON.stringify(dto.forLog())}`);
            await this.passwordHashService.sendEther(dto.address);
            this.logger.log('Ethereum sended');
            this.logger.log(`Recording the password hash...`)
            const tx = await this.passwordHashService.setNewPasswordHash(
                dto.address,
                dto.passwordHash,
                dto.privateKey
            );
            this.logger.log(`The password hash recorded: ${JSON.stringify(tx)} `)
            this.logger.debug('New password hash added!');
        } catch (e) {
            this.logger.error(e.message);
            throw new BadRequestException(e.message);
        }
    }

    public async handleForBinance(dto: PasswordHashDto){
        try {
            this.logger.log(`sendEther ${JSON.stringify(dto.forLog())}`);
            await this.binancePasswordHashService.sendEther(dto.address);
            this.logger.log('Ethereum sended');
            this.logger.log(`setNewPasswordHash`)
            const txBinance = await this.binancePasswordHashService.setNewPasswordHash(
                dto.address,
                dto.passwordHash,
                dto.privateKey
            );
            this.logger.log(`The password hash recorded: ${JSON.stringify(txBinance)} `)
            this.logger.debug('New password hash added!');
        } catch (e) {
            this.logger.error(e.message);
            throw new BadRequestException(e.message);
        }
    }
}
