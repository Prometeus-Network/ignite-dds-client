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
    "pageNumbers": 1517,
    "count": "4550",
    "data": [
        {
            "id": 4550,
            "btfsCid": "QmQJFqw1ZBL9Bnqs5FCyd8oqtooP62tvgcmyKZPJnygpNr",
            "previousBtfsCid": "QmYdno11YYVnZNepBSn4GXSK1eNkbgpeH63KETXhYrmJoQ",
            "address": "0x1287437E95931fc408a125836eE7b60C6B3A51Bd",
            "operator": "0xeb821455258429bC1A3BF690B8aCc839e5B2d6d3",
            "createdAt": "1593425090",
            "transactionHash": "0xbc1b4c9060a5b91a1e7a020d02ecee03e130af9b137db65763ef5c66294cbc10",
            "ago": "5 minutes ago"
        },
        {
            "id": 4549,
            "btfsCid": "QmYdno11YYVnZNepBSn4GXSK1eNkbgpeH63KETXhYrmJoQ",
            "previousBtfsCid": "QmULdWHFyGzYN9hY1LbcjNDA7UjdhnUZZkG9dSyXaDS6yR",
            "address": "0x1287437E95931fc408a125836eE7b60C6B3A51Bd",
            "operator": "0xeb821455258429bC1A3BF690B8aCc839e5B2d6d3",
            "createdAt": "1593424797",
            "transactionHash": "0xe630b0a13e6bf07749419273ef59c96d27e251c29407b94cf0113af8041983b0",
            "ago": "10 minutes ago"
        },
        {
            "id": 4548,
            "btfsCid": "QmULdWHFyGzYN9hY1LbcjNDA7UjdhnUZZkG9dSyXaDS6yR",
            "previousBtfsCid": "QmQY94LrghTWmEyjT3vSizmjcUGMZ3MV1r8xE8RDD4BUYD",
            "address": "0x1287437E95931fc408a125836eE7b60C6B3A51Bd",
            "operator": "0xeb821455258429bC1A3BF690B8aCc839e5B2d6d3",
            "createdAt": "1593424478",
            "transactionHash": "0x8a5e21d281282e03de55d4fda4c32720a36793506e83e12c566169339db769d3",
            "ago": "15 minutes ago"
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


