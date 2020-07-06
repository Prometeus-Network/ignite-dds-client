# Api for work with Cid Chain

## Api for fetch all cid chain

### Route
> **Method**: Get
>
> **URI**: /api/v1/binance-smart-chain-test-network/cid-chain/all/:pageNumber/:pageSize

### Parameters
1. pageNumber - Paginate parameter page number
2. pageSize - Paginate parameter item count in one page

### Example success fetch all cid chain

#### Request 

* Url - http://localhost:3001/api/v1/binance-smart-chain-test-network/cid-chain/all/0/15
* Method - Get

#### Response
* Status - 200

Body:
```json
{
    "pageNumbers": 1100,
    "count": "3299",
    "data": [
        {
            "id": 3299,
            "node": "0x6d610fBEECfb19ED714aA44B9075159c1fD4c497",
            "btfsCid": "lpf_81AvQRfz5cVUu49cscbYe_gowcmb8ToR1K6Wx24",
            "createdAt": "1594027988",
            "ago": "just now",
            "value": "0.00000000",
            "fullTransactionData": {
                "blockHash": "0xd8d9d9311deb64b7020c1a193aecf92044f9db5492417025f00a36456b2b2f7f",
                "blockNumber": 1292471,
                "from": "0xfd60DEBc293951ff6dC44bA2e0A4c4e340cF96b3",
                "gas": 135030,
                "gasPrice": "18000000000",
                "hash": "0xaf7268d685b12722747275660091f79f9e1ce166547f744d8aed96dbbf02c5da",
                "input": "0x73d1cc230000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000002b6c70665f383141765152667a356356557534396373636259655f676f77636d6238546f52314b3657783234000000000000000000000000000000000000000000",
                "nonce": 27,
                "to": "0xce50A399DbC550BA04aA0722e2E32E58A7d68449",
                "transactionIndex": 0,
                "value": "0",
                "v": "0xe3",
                "r": "0x240d7be773cccc827451738b7c07b917be52061b1ecf544792a8c402bac3ecee",
                "s": "0x5ac264780847850711d78863dad1eb35d4d4b61835e0405ce48260058fe4fa0"
            }
        },
        {
            "id": 3298,
            "node": "0xF0291BE50725Ef8eA95694Ba18BF162026f8fCE9",
            "btfsCid": "lpf_81AvQRfz5cVUu49cscbYe_gowcmb8ToR1K6Wx24",
            "createdAt": "1594027988",
            "ago": "just now",
            "value": "0.00000000",
            "fullTransactionData": {
                "blockHash": "0xd8d9d9311deb64b7020c1a193aecf92044f9db5492417025f00a36456b2b2f7f",
                "blockNumber": 1292471,
                "from": "0xfd60DEBc293951ff6dC44bA2e0A4c4e340cF96b3",
                "gas": 135030,
                "gasPrice": "18000000000",
                "hash": "0xaf7268d685b12722747275660091f79f9e1ce166547f744d8aed96dbbf02c5da",
                "input": "0x73d1cc230000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000002b6c70665f383141765152667a356356557534396373636259655f676f77636d6238546f52314b3657783234000000000000000000000000000000000000000000",
                "nonce": 27,
                "to": "0xce50A399DbC550BA04aA0722e2E32E58A7d68449",
                "transactionIndex": 0,
                "value": "0",
                "v": "0xe3",
                "r": "0x240d7be773cccc827451738b7c07b917be52061b1ecf544792a8c402bac3ecee",
                "s": "0x5ac264780847850711d78863dad1eb35d4d4b61835e0405ce48260058fe4fa0"
            }
        },
        {
            "id": 3297,
            "node": "0x4B37428f825fe94dbF6d3415D8344Fe1FF5aDD7A",
            "btfsCid": "lpf_81AvQRfz5cVUu49cscbYe_gowcmb8ToR1K6Wx24",
            "createdAt": "1594027988",
            "ago": "just now",
            "value": "0.00000000",
            "fullTransactionData": {
                "blockHash": "0xd8d9d9311deb64b7020c1a193aecf92044f9db5492417025f00a36456b2b2f7f",
                "blockNumber": 1292471,
                "from": "0xfd60DEBc293951ff6dC44bA2e0A4c4e340cF96b3",
                "gas": 135030,
                "gasPrice": "18000000000",
                "hash": "0xaf7268d685b12722747275660091f79f9e1ce166547f744d8aed96dbbf02c5da",
                "input": "0x73d1cc230000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000002b6c70665f383141765152667a356356557534396373636259655f676f77636d6238546f52314b3657783234000000000000000000000000000000000000000000",
                "nonce": 27,
                "to": "0xce50A399DbC550BA04aA0722e2E32E58A7d68449",
                "transactionIndex": 0,
                "value": "0",
                "v": "0xe3",
                "r": "0x240d7be773cccc827451738b7c07b917be52061b1ecf544792a8c402bac3ecee",
                "s": "0x5ac264780847850711d78863dad1eb35d4d4b61835e0405ce48260058fe4fa0"
            }
        }
    ]
}
``` 

---------------------------------------------------------

## Api for fetch one cid chain

### Route
> **Method**: Get
>
> **URI**: /api/v1/binance-smart-chain-test-network/cid-chain/block/:id

### Parameters

1. id - Item identifier

### Example success fetch one cid chain

#### Request 

* Url - http://localhost:3001/api/v1/binance-smart-chain-test-network/cid-chain/block/1976
* Method - Get

#### Response
* Status - 200

Body:
```json
{
    "transactionHash": "0x3e6af336e19b8cbba75d60fa0ed3de7878a2f77b719e34c95b24a3028c7c9c3a",
    "id": "1976",
    "node": "0x4B37428f825fe94dbF6d3415D8344Fe1FF5aDD7A",
    "btfsCid": "QmdACMCNTZiaCaEYhj6E6MgN9EDXDiKXgWs5HyMsFnU87g",
    "createdAt": "1593406514",
    "ago": "a week ago",
    "value": "0.00000000",
    "fullTransactionData": {
        "blockHash": "0xae98bd99f552e8c6d76baf185eb81a6ab39b9b75929b49a8c72ecb609debb004",
        "blockNumber": 1085314,
        "from": "0x4B37428f825fe94dbF6d3415D8344Fe1FF5aDD7A",
        "gas": 135066,
        "gasPrice": "20000000000",
        "hash": "0x3e6af336e19b8cbba75d60fa0ed3de7878a2f77b719e34c95b24a3028c7c9c3a",
        "input": "0x73d1cc230000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000002e516d6441434d434e545a696143614559686a3645364d674e3945445844694b586757733548794d73466e55383767000000000000000000000000000000000000",
        "nonce": 3990,
        "to": "0xce50A399DbC550BA04aA0722e2E32E58A7d68449",
        "transactionIndex": 0,
        "value": "0",
        "v": "0xe4",
        "r": "0x69f6f0f38d972eb7b15efba17f8ee3c268b1ad16fdcc4946ec8589f0ae1c4848",
        "s": "0x6bfe5a025a561ca02e332da4a7bd6dbfb5c442b6d146ccb441c365a4e7ffd836"
    }
}
``` 
---------------------------------------------------------

## Api for fetch tx count

### Route
> **Method**: Get
>
> **URI**: /api/v1/binance-smart-chain-test-network/cid-chain/tx-count

### Example success fetch tx count

#### Request 

* Url - http://localhost:3001/api/v1/binance-smart-chain-test-network/cid-chain/tx-count
* Method - Get

#### Response
* Status - 200

Body:
```json
{
    "txCount": "3253"
}
``` 
