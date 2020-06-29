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
    "count": "38",
    "pageNumbers": 13,
    "data": [
        {
            "id": 38,
            "verificationHash": "0xc68d7b1d19acf040ed69fac64001fc7837f32e44c8d2a4e3a3c8679b0d0d5ace",
            "operator": "0x4B37428f825fe94dbF6d3415D8344Fe1FF5aDD7A",
            "createdAt": "1593393357",
            "transactionHash": "0x2b77f6069c20f97bb50a7c5d92e4425d75837647b9480ac50ae11e3f9e5a779f",
            "ago": "9 hours ago"
        },
        {
            "id": 37,
            "verificationHash": "0x152419c6a47ca115074701b9812c8587e6a575bfe3ab47b8ed041439cad1c895",
            "operator": "0x4B37428f825fe94dbF6d3415D8344Fe1FF5aDD7A",
            "createdAt": "1593306313",
            "transactionHash": "0xb23106587a67d1c2c4769adde0f13ea5c2584749afacd7fe824c984e2c095825",
            "ago": "a day ago"
        },
        {
            "id": 36,
            "verificationHash": "0x6d27406346558db57672c1df3f6bf3962d05364c80f995ab78181f292ad860b3",
            "operator": "0x4B37428f825fe94dbF6d3415D8344Fe1FF5aDD7A",
            "createdAt": "1593219922",
            "transactionHash": "0xe42abf84af25d90ead4ae59c3fd3415f6d6de4cae7c9bdd408996170d6e326c8",
            "ago": "2 days ago"
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
    "ago": "a month ago"
}
``` 
---------------------------------------------------------


