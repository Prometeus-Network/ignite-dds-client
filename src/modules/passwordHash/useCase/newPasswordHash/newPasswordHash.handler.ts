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
            // await this.passwordHashService.sendEther(dto.address);
            console.log(2);
            const tx = await this.passwordHashService.setNewPasswordHash(
                dto.address,
                dto.passwordHash,
            );
            console.log(3);
            // await this.binancePasswordHashService.sendEther(dto.address);
            console.log(4);
            const txBinance = await this.binancePasswordHashService.setNewPasswordHash(
                dto.address,
                dto.passwordHash
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
            // this.logger.log(`handleForEthereum  sendEther ${JSON.stringify(dto.forLog())}`);
            // const sendEther = await this.passwordHashService.sendEther(dto.address);
            // this.logger.log(`handleForEthereum Ethereum sended ${JSON.stringify(sendEther)}`);
            this.logger.log(`handleForEthereum setNewPasswordHash`)
            const tx = await this.passwordHashService.setNewPasswordHash(
                dto.address,
                dto.passwordHash
            );
            this.logger.log(`handleForEthereum The password hash recorded: ${JSON.stringify(tx)} `)
            this.logger.debug('handleForEthereum New password hash added!');
        } catch (e) {
            console.error(e);
            this.logger.error(`handleForEthereum ${JSON.stringify(dto.forLog())}. Error: ${JSON.stringify(e)}`);
            throw new BadRequestException(e.message);
        }
    }

    public async handleForBinance(dto: PasswordHashDto){
        try {
            // this.logger.log(`handleForBinance sendEther ${JSON.stringify(dto.forLog())}`);
            // const sendEther = await this.binancePasswordHashService.sendEther(dto.address);
            // this.logger.log(`handleForBinance Ethereum sended ${JSON.stringify(sendEther)}`);
            this.logger.log(`handleForBinance setNewPasswordHash`)
            const txBinance = await this.binancePasswordHashService.setNewPasswordHash(
                dto.address,
                dto.passwordHash
            );
            this.logger.log(`handleForBinance The password hash recorded: ${JSON.stringify(txBinance)} `)
            this.logger.debug('handleForBinance New password hash added!');
        } catch (e) {
            console.error(e);
            this.logger.error(`handleForBinance ${JSON.stringify(dto.forLog())}. Error: ${JSON.stringify(e)}`);
            throw new BadRequestException(e.message);
        }
    }

    public async getHashForAddress(address: string): Promise<string>{
        try {
            let hash: string = ''
            this.logger.log(`getHashForAddress for ${address}`)

            hash = await this.passwordHashService.getAddressHash(address);

            if (!hash) {
                hash = await this.binancePasswordHashService.getAddressHash(address);
            }

            this.logger.log(`getHashForAddress The passwordHash given: ${JSON.stringify(hash)} `)

            this.logger.debug('getHashForAddress The passwordHash given!');
            return hash
        } catch (e) {
            console.error(e);
            this.logger.error(`getHashForAddress for ${address}. Error: ${JSON.stringify(e)}`);
            throw new BadRequestException(e.message);
        }
    }

    public async getPasswordForTransactionHash(transactionHash: string): Promise<{ address: string; hash: string }>{
        try {
            let address: string = '';
            let hash: string = '';
            this.logger.log(`getHashForTransactionHash for ${transactionHash}`);

            try {
                address = await this.passwordHashService.getFromAddressInTransaction(transactionHash);
                hash = await this.passwordHashService.getAddressHash(address);
            } catch (e) {
                try {
                    address = await this.binancePasswordHashService.getFromAddressInTransaction(transactionHash)
                    hash = await this.binancePasswordHashService.getAddressHash(address);
                } catch (e) {
                    console.error(e);
                    this.logger.error(`getPasswordForTransactionHash for ${transactionHash}. Error: ${JSON.stringify(e)}`);
                    throw new BadRequestException('not found');
                }
            }

            this.logger.log(`getPasswordForTransactionHash The address given: ${JSON.stringify(address)} `);
            this.logger.log(`getPasswordForTransactionHash The passwordHash given: ${JSON.stringify(hash)} `);

            this.logger.debug('getPasswordForTransactionHash The passwordHash given!');
            return { address, hash };
        } catch (e) {
            console.error(e);
            this.logger.error(`getPasswordForTransactionHash for ${transactionHash}. Error: ${JSON.stringify(e)}`);
            throw new BadRequestException(e.message);
        }
    }
}
