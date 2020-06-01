import * as dotenv from 'dotenv';
import * as fs from 'fs';
import {KafkaOptions, Transport} from "@nestjs/microservices";
import {AbiItem} from 'web3-utils';
import {passwordHashAbi} from "../modules/passwordHash/abi/passwordHash.abi";

export class ConfigService {
    private readonly envConfig: { [key: string]: string };

    constructor(filePath: any) {
        this.envConfig = dotenv.parse(fs.readFileSync(filePath));
    }

    get(key: string): string {
        return this.envConfig[key];
    }

    getKafkaOptions(): KafkaOptions {
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

    public getPasswordHashContractAddress(): string {
        return this.get('PASSWORD_HASH_CONTRACT_ADDRESS');
    }

    public getCidStorageContractAbi(): AbiItem[] {
        return [
            {
                "constant": true,
                "inputs": [],
                "name": "cidCount",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "allCid",
                "outputs": [
                    {
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "cidIndex",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "name": "cid",
                        "type": "string"
                    }
                ],
                "name": "CidSaved",
                "type": "event"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "cid",
                        "type": "string"
                    }
                ],
                "name": "setCid",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            }
        ];
    }

    public getCidStorageContractAddress(): string {
        return this.get('CID_STORAGE_CONTRACT_ADDRESS');
    }
}
