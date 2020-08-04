import * as dotenv from 'dotenv';
import * as fs from 'fs';
import {KafkaOptions, Transport} from "@nestjs/microservices";
import {AbiItem} from 'web3-utils';
import {passwordHashAbi} from "../modules/passwordHash/abi/passwordHash.abi";
import {passwordHashMainAbi} from "../modules/passwordHash/abi/passwordHashMain.abi";
import {cidStorageAbi} from "./contracts/mainNetwork/cidStorage.abi";
import {rootChainAbi} from "./contracts/mainNetwork/rootChain.abi";
import {cidBlockAbi} from "./contracts/plasma/cidBlock.abi";
import {cidChainAbiBinance} from "./contracts/binance/cidChain.abi";
import {passwordHashAbiBinance} from "./contracts/binance/passwordHash.abi";
export class ConfigService {
    private readonly envConfig: { [key: string]: string };

    constructor(filePath: any) {
        this.envConfig = dotenv.parse(fs.readFileSync(filePath));
    }

    get(key: string): string {
        return this.envConfig[key];
    }

    public getKafkaOptions(): KafkaOptions {
        return {
            transport: Transport.KAFKA,
            options: {
                client: {
                    clientId: 'ignite',
                    ssl: false,
                    brokers: [this.get('KAFKA_SERVER_1')],
                },
            },
        };
    }

    public getPasswordHashContractAbi(): AbiItem[] {
        return passwordHashAbi;
    }

    public getPasswordHashMainContractAbi(): AbiItem[] {
        return passwordHashMainAbi;
    }

    public getPasswordHashMainContractAddress(): string {
        return this.get('PASSWORD_HASH_MAIN_NET_CONTRACT_ADDRESS');
    }

    public getPasswordHashContractAddress(): string {
        return this.get('PASSWORD_HASH_CONTRACT_ADDRESS');
    }

    public getCidStorageContractAbi(): AbiItem[] {
        return cidStorageAbi;
    }

    public getCidStorageContractAddress(): string {
        return this.get('CID_STORAGE_CONTRACT_ADDRESS');
    }

    public getMainNetworkRootChainContractAbi(): AbiItem[] {
        return rootChainAbi;
    }

    public getMainNetworkRootChainContractAddress(): string {
        return this.get('MAIN_NETWORK_ROOT_CHAIN_CONTRACT_ADDRESS');
    }
    // Plasma config
    public getPlasmaNetworkCidBlockContractAbi(): AbiItem[] {
        return cidBlockAbi;
    }

    public getPlasmaNetworkCidBlockContractAddress(): string {
        return this.get('PLASMA_NETWORK_CID_BLOCK_CONTRACT_ADDRESS');
    }

    //    Binance Config
    public getBinanceCidChainContractAbi(): AbiItem[] {
        return cidChainAbiBinance;
    }

    public getBinanceCidChainContractAddress(): string {
        return this.get('BINANCE_CID_CHAIN_ADDRESS');
    }

    public getPasswordHashBinanceSmartChainContractAbi(): AbiItem[] {
        return passwordHashAbiBinance;
    }

    public getBinanceTestNetworkPasswordHashContractAddress(): string {
        return this.get('BINANCE_TEST_NETWORK_PASSWORD_HASH_CONTRACT_ADDRESS');
    }
}
