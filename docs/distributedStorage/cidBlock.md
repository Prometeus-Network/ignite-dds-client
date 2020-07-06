# Api for work with Cid Block in Plasma Network

## Api for fetch all cid block

### Route
> **Method**: Get
>
> **URI**: /api/v1/plasma-network/cid-block/all/:pageNumber/:pageSize

### Parameters
1. pageNumber - Paginate parameter page number
2. pageSize - Paginate parameter item count in one page

### Example success fetch all cid

#### Request 

* Url - http://localhost:3001/api/v1/plasma-network/cid-block/all/0/3
* Method - Get

#### Response
* Status - 200

Body:
```json
{
    "pageNumbers": 2248,
    "count": "6742",
    "data": [
        {
            "id": 6742,
            "btfsCid": "xB2Wgec6NWYhUviUTm738GZYMxQcVFsoI_K4DGrdEEk",
            "previousBtfsCid": "DdSS5ZlhOGewNBzUYKvldSYSjEW6a_oT_e76HeSnHjU",
            "address": "0x1287437E95931fc408a125836eE7b60C6B3A51Bd",
            "operator": "0x2D7A8D6Cf221e16D45A5a68f5124f14C16e7d442",
            "createdAt": "1594027848",
            "transactionHash": "0x13b4558903a9e14715c598ba66920cb10bd181ff0054ce78f7f40cd092a4a976",
            "ago": "a minute ago",
            "value": "0.00000000",
            "fullTransactionData": {
                "blockHash": "0x695396bbaf65f4b72086694e5bf260db718eb783bb64a84ae634d8ee2f226e16",
                "blockNumber": 265288,
                "from": "0x2D7A8D6Cf221e16D45A5a68f5124f14C16e7d442",
                "gas": 200869,
                "gasPrice": "8000000000",
                "hash": "0x13b4558903a9e14715c598ba66920cb10bd181ff0054ce78f7f40cd092a4a976",
                "input": "0x2acd67b10000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000002b78423257676563364e57596855766955546d373338475a594d7851635646736f495f4b344447726445456b000000000000000000000000000000000000000000",
                "nonce": 166,
                "to": "0x1287437E95931fc408a125836eE7b60C6B3A51Bd",
                "transactionIndex": 0,
                "value": "0",
                "v": "0x10f16d438ce9",
                "r": "0xaaa23388c49eae9f52d18ea3c95adcc8191a1db6cb904bd791acc48e965f1a52",
                "s": "0x326bed79d5b93bb48f0f1e8ae9ec65b02e74c41b99d6978db1c61f6e41fffc01"
            }
        },
        {
            "id": 6741,
            "btfsCid": "DdSS5ZlhOGewNBzUYKvldSYSjEW6a_oT_e76HeSnHjU",
            "previousBtfsCid": "JXVPm5AH_z5KCV4-uesdc2vf3WNqRQD4X-Mj2Gq4Hbk",
            "address": "0x1287437E95931fc408a125836eE7b60C6B3A51Bd",
            "operator": "0x2D7A8D6Cf221e16D45A5a68f5124f14C16e7d442",
            "createdAt": "1594027830",
            "transactionHash": "0x76af0c327ce9a5b057d2e08bda0391868e7b826bc3f257401f551f9cab9372ac",
            "ago": "a minute ago",
            "value": "0.00000000",
            "fullTransactionData": {
                "blockHash": "0xb123d6854b310afcb09882d737bb3fe2b5fa99177a42ab6c7cbc3a1191574318",
                "blockNumber": 265285,
                "from": "0x2D7A8D6Cf221e16D45A5a68f5124f14C16e7d442",
                "gas": 200869,
                "gasPrice": "8000000000",
                "hash": "0x76af0c327ce9a5b057d2e08bda0391868e7b826bc3f257401f551f9cab9372ac",
                "input": "0x2acd67b10000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000002b44645353355a6c684f4765774e427a55594b766c645359536a455736615f6f545f6537364865536e486a55000000000000000000000000000000000000000000",
                "nonce": 165,
                "to": "0x1287437E95931fc408a125836eE7b60C6B3A51Bd",
                "transactionIndex": 0,
                "value": "0",
                "v": "0x10f16d438cea",
                "r": "0xbf2e8e0171996de57a2ad7a3449ca657a395d33a48f196f2cac48ca2e6468ec7",
                "s": "0x2f9ab74d03c22567d6948a077848b27ee281a8045a841383cc13f21a16aa0e7f"
            }
        },
        {
            "id": 6740,
            "btfsCid": "JXVPm5AH_z5KCV4-uesdc2vf3WNqRQD4X-Mj2Gq4Hbk",
            "previousBtfsCid": "d6_ntRhnn2DlrEdIXj0NWIhfmYdzkUqN-MgVW-z-t-Y",
            "address": "0x1287437E95931fc408a125836eE7b60C6B3A51Bd",
            "operator": "0x2D7A8D6Cf221e16D45A5a68f5124f14C16e7d442",
            "createdAt": "1594027814",
            "transactionHash": "0x7fda7a71b4901276b0526d122355e02cc0805572646ac0300ee6b0f8d9e4ca21",
            "ago": "2 minutes ago",
            "value": "0.00000000",
            "fullTransactionData": {
                "blockHash": "0xf46c3e96bbcfd6ebf3eeb5ea4d9a27c987535af312931d9e5e35b8d5532d1a0d",
                "blockNumber": 265284,
                "from": "0x2D7A8D6Cf221e16D45A5a68f5124f14C16e7d442",
                "gas": 200869,
                "gasPrice": "8000000000",
                "hash": "0x7fda7a71b4901276b0526d122355e02cc0805572646ac0300ee6b0f8d9e4ca21",
                "input": "0x2acd67b10000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000002b4a5856506d3541485f7a354b4356342d756573646332766633574e7152514434582d4d6a3247713448626b000000000000000000000000000000000000000000",
                "nonce": 164,
                "to": "0x1287437E95931fc408a125836eE7b60C6B3A51Bd",
                "transactionIndex": 0,
                "value": "0",
                "v": "0x10f16d438cea",
                "r": "0x5e06da7b91f1c185ff175a6a981dffeddc293502895b683928b684035b6d7df1",
                "s": "0xcedf5f5a8f9e77931d8b60b32ac6139da8cc7c1f5c940a8154290c1ab303681"
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
    "id": "549",
    "btfsCid": "QmenvPBgYnPpVpf4nGqCHEkxz6QhoRwD7CubxiyEzntFmV",
    "previousBtfsCid": "QmcbnYsZeWwmv8ppNtafXnv4PkNEgpfLk9txtQhkhrrXPq",
    "operator": "0xeb821455258429bC1A3BF690B8aCc839e5B2d6d3",
    "createdAt": "1590744041",
    "address": "0x1287437E95931fc408a125836eE7b60C6B3A51Bd",
    "transactionHash": "0xe19ba9ef70b803246ed743269b1189d84e8ca7f4ec930ed61b7974748b2fd879",
    "ago": "a month ago",
    "value": "0.00000000",
    "fullTransactionData": {
        "blockHash": "0xa677fa728c68990cbcef2a76f3e757b99faca3d76ab68429617831937e01ffe4",
        "blockNumber": 2912,
        "from": "0xeb821455258429bC1A3BF690B8aCc839e5B2d6d3",
        "gas": 1000000,
        "gasPrice": "8000000000",
        "hash": "0xe19ba9ef70b803246ed743269b1189d84e8ca7f4ec930ed61b7974748b2fd879",
        "input": "0x2acd67b10000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000002e516d656e76504267596e5070567066346e47714348456b787a3651686f52774437437562786979457a6e74466d56000000000000000000000000000000000000",
        "nonce": 554,
        "to": "0x1287437E95931fc408a125836eE7b60C6B3A51Bd",
        "transactionIndex": 0,
        "value": "0",
        "v": "0x10f16d438cea",
        "r": "0x6a1e43f390cb2179dcffec7447e57baa9604062cf2b01b889e2142bc0ebbd633",
        "s": "0x3d1eb9b60d9eed52bebc48246aca3f492f62197e54b8e5fea2b4c59f30412f24"
    }
}
``` 
---------------------------------------------------------

## Api for fetch tx count

### Route
> **Method**: Get
>
> **URI**: /api/v1/plasma-network/cid-block/tx-count

### Example success fetch tx count

#### Request 

* Url - http://localhost:3001/api/v1/plasma-network/cid-block/tx-count
* Method - Get

#### Response
* Status - 200

Body:
```json
{
    "txCount": "6691"
}
``` 


