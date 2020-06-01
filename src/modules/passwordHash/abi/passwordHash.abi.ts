import {AbiItem} from 'web3-utils';
export const passwordHashAbi: AbiItem[] = [
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "name": "userPassword",
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
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "sender",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "hash",
                "type": "string"
            }
        ],
        "name": "PasswordUpdated",
        "type": "event"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_sender",
                "type": "address"
            },
            {
                "name": "_hash",
                "type": "string"
            }
        ],
        "name": "setNewPassword",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }
];
