# Api for work with Root Chain contract in Main Network

## Api for fetch all root chain block

### Route
> **Method**: Get
>
> **URI**: /api/v1/main-network/root-chain/all/:pageNumber/:pageSize

### Parameters
1. pageNumber - Paginate parameter page number
2. pageSize - Paginate parameter item count in one page 

### Example success fetch all root chain block

#### Request 

* Url - http://localhost:3001/api/v1/main-network/root-chain/all/0/3
* Method - Get

#### Response
* Status - 200

Body:
```json
{
    "count": "46",
    "pageNumbers": 16,
    "data": [
        {
            "id": 46,
            "verificationHash": "0xfdc167cb62c8712d30deafb77d8b28375653c0a8d426a357e40911a840bc4573",
            "operator": "0x4B37428f825fe94dbF6d3415D8344Fe1FF5aDD7A",
            "createdAt": "1593997523",
            "transactionHash": "0x0766a9d7db75e9c9e290346a872dbec4b945f2e7b5bf2f57da71a11bcd60c1b7",
            "ago": "8 hours ago",
            "value": "0.00000000",
            "fullTransactionData": {
                "blockHash": "0xbf6f0e5d4e0fcefbf80571f0d6f554ea247e73cedf78f471ceea794ae9547bf7",
                "blockNumber": 10402799,
                "from": "0x4B37428f825fe94dbF6d3415D8344Fe1FF5aDD7A",
                "gas": 200000,
                "gasPrice": "20100000000",
                "hash": "0x0766a9d7db75e9c9e290346a872dbec4b945f2e7b5bf2f57da71a11bcd60c1b7",
                "input": "0x6132afa1000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000017be0000000000000000000000000000000000000000000000000000000000000042307866646331363763623632633837313264333064656166623737643862323833373536353363306138643432366133353765343039313161383430626334353733000000000000000000000000000000000000000000000000000000000000",
                "nonce": 403,
                "r": "0xb206809f68a01f731afe77d409df4964d5283dd7c2abe29ec28b83f112037e16",
                "s": "0x3126c1a17ad56287856c54a48e6c1b2d7512d2e40a86266a07f004ecebfe68b5",
                "to": "0x66A567d118dF2a752622CEbD509D4d15E5eEA7Dd",
                "transactionIndex": 142,
                "v": "0x26",
                "value": "0"
            }
        },
        {
            "id": 45,
            "verificationHash": "0x106e424c8430246cb5bded32adf50f336d0c5202afa8585773109ed75f6a1c70",
            "operator": "0x4B37428f825fe94dbF6d3415D8344Fe1FF5aDD7A",
            "createdAt": "1593910859",
            "transactionHash": "0x6217d4ebc22d8e7602c18b7f3ec34a1036374313ca64395b65a88c69398b4f65",
            "ago": "a day ago",
            "value": "0.00000000",
            "fullTransactionData": {
                "blockHash": "0x3a6dafb0e2a213617ef58be5de9210de4595e42c7772155997bf43d8a7106249",
                "blockNumber": 10396311,
                "from": "0x4B37428f825fe94dbF6d3415D8344Fe1FF5aDD7A",
                "gas": 200000,
                "gasPrice": "20294761904",
                "hash": "0x6217d4ebc22d8e7602c18b7f3ec34a1036374313ca64395b65a88c69398b4f65",
                "input": "0x6132afa10000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000169e0000000000000000000000000000000000000000000000000000000000000042307831303665343234633834333032343663623562646564333261646635306633333664306335323032616661383538353737333130396564373566366131633730000000000000000000000000000000000000000000000000000000000000",
                "nonce": 401,
                "r": "0x62da2545aa36d200a2b493f99450b60a4c34302becd6dceb223923b1654880b5",
                "s": "0x71c30cfc75158ebe84cee33ce0662bc4c5386bff93ea56ce2423d82eb69687bc",
                "to": "0x66A567d118dF2a752622CEbD509D4d15E5eEA7Dd",
                "transactionIndex": 123,
                "v": "0x25",
                "value": "0"
            }
        },
        {
            "id": 44,
            "verificationHash": "0x106e424c8430246cb5bded32adf50f336d0c5202afa8585773109ed75f6a1c70",
            "operator": "0x4B37428f825fe94dbF6d3415D8344Fe1FF5aDD7A",
            "createdAt": "1593910845",
            "transactionHash": "0x6217d4ebc22d8e7602c18b7f3ec34a1036374313ca64395b65a88c69398b4f65",
            "ago": "a day ago",
            "value": "0.00000000",
            "fullTransactionData": {
                "blockHash": "0x3a6dafb0e2a213617ef58be5de9210de4595e42c7772155997bf43d8a7106249",
                "blockNumber": 10396311,
                "from": "0x4B37428f825fe94dbF6d3415D8344Fe1FF5aDD7A",
                "gas": 200000,
                "gasPrice": "20294761904",
                "hash": "0x6217d4ebc22d8e7602c18b7f3ec34a1036374313ca64395b65a88c69398b4f65",
                "input": "0x6132afa10000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000169e0000000000000000000000000000000000000000000000000000000000000042307831303665343234633834333032343663623562646564333261646635306633333664306335323032616661383538353737333130396564373566366131633730000000000000000000000000000000000000000000000000000000000000",
                "nonce": 401,
                "r": "0x62da2545aa36d200a2b493f99450b60a4c34302becd6dceb223923b1654880b5",
                "s": "0x71c30cfc75158ebe84cee33ce0662bc4c5386bff93ea56ce2423d82eb69687bc",
                "to": "0x66A567d118dF2a752622CEbD509D4d15E5eEA7Dd",
                "transactionIndex": 123,
                "v": "0x25",
                "value": "0"
            }
        }
    ]
}
``` 
---------------------------------------------------------

## Api for fetch one cid block

### Route
> **Method**: Get
>
> **URI**: /api/v1/plasma-network/cid-block/block/:id

### Parameters

1. id - Item identifier

### Example success fetch one cid block

#### Request 

* Url - http://localhost:3001/api/v1/plasma-network/cid-block/block/549
* Method - Get

#### Response
* Status - 200

Body:
```json
{
    "id": "6",
    "verificationHash": "0x25af24e5ed43bb9baf860bddb110ce81f354900c1f69ee4fbe4989a367a0a382",
    "operator": "0x4B37428f825fe94dbF6d3415D8344Fe1FF5aDD7A",
    "createdAt": "1590742503",
    "transactionHash": "0xbaba30f37a4def87a2abeabfed278d697383a047ef0a7ff9ca6fea6302153bbb",
    "address": "0x66A567d118dF2a752622CEbD509D4d15E5eEA7Dd",
    "ago": "a month ago",
    "value": "0.00000000",
    "fullTransactionData": {
        "blockHash": "0x5e27ddd254860cf334d8a7a6e447e557f59ff31a25a8e62b5ee85d7cbfd876c1",
        "blockNumber": 10159712,
        "from": "0x4B37428f825fe94dbF6d3415D8344Fe1FF5aDD7A",
        "gas": 200000,
        "gasPrice": "30000000000",
        "hash": "0xbaba30f37a4def87a2abeabfed278d697383a047ef0a7ff9ca6fea6302153bbb",
        "input": "0x6132afa1000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000001200000000000000000000000000000000000000000000000000000000000000042307832356166323465356564343362623962616638363062646462313130636538316633353439303063316636396565346662653439383961333637613061333832000000000000000000000000000000000000000000000000000000000000",
        "nonce": 352,
        "r": "0x8ddbed4984e30c55d383ff27c783244175fbdaf59135cd9ee3d8acd1ec792956",
        "s": "0x559abc4ab18035988ec7cf9fb74cd05bd76abb403d5ef01bcfacb08d503b5571",
        "to": "0x66A567d118dF2a752622CEbD509D4d15E5eEA7Dd",
        "transactionIndex": 71,
        "v": "0x25",
        "value": "0"
    }
}
``` 
---------------------------------------------------------

## Api for fetch tx count

### Route
> **Method**: Get
>
> **URI**: /api/v1/main-network/root-chain/tx-count

### Example success fetch tx count

#### Request 

* Url - http://localhost:3001/api/v1/main-network/root-chain/tx-count
* Method - Get

#### Response
* Status - 200

Body:
```json
{
    "txCount": "46"
}
``` 
---------------------------------------------------------


