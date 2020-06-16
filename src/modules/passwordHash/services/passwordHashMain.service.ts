import {BadRequestException, Injectable} from "@nestjs/common";
import {Web3PrivateService} from "../web3Private.service";
import Web3 from "web3";
import {ConfigService} from "../../../config/config.service";
import {Web3MainNetService} from "../web3MainNet.service";

@Injectable()
export class PasswordHashMainService {
    private readonly web3: Web3;

    constructor(
        private readonly web3Service: Web3MainNetService,
        private readonly configService: ConfigService,
    ) {
        this.web3 = web3Service.httpInstance();
    }

    public contract() {
        return new this.web3.eth.Contract(
            this.configService.getPasswordHashMainContractAbi(),
            this.configService.getPasswordHashMainContractAddress(),
        );
    }

    public async getFromAddressInTransaction(transactionHash: string) {
        try {
            const transaction = await this.web3.eth.getTransaction(transactionHash);
            return transaction.from;
        } catch (e) {
            throw new BadRequestException(e.message);
        }
    }

    public async getPasswordByTransactionHash(transactionHash: string) {
        try {
            const contract = this.contract();
            const transaction = await this.web3.eth.getTransaction(transactionHash);
            return contract.methods.userPassword(transaction.from).call();
        } catch (e) {
            throw new BadRequestException(e.message);
        }
    }

    public async getAddressHash(sender: string) {
        const contract = this.contract();
        return contract.methods.userPassword(sender).call();
    }
}
