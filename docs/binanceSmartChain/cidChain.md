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
    "pageNumbers": 659,
    "count": "1976",
    "data": [
        {
            "id": 1976,
            "node": "0x4B37428f825fe94dbF6d3415D8344Fe1FF5aDD7A",
            "btfsCid": "QmdACMCNTZiaCaEYhj6E6MgN9EDXDiKXgWs5HyMsFnU87g",
            "createdAt": "1593406514",
            "ago": "10 minutes ago"
        },
        {
            "id": 1975,
            "node": "0x4B37428f825fe94dbF6d3415D8344Fe1FF5aDD7A",
            "btfsCid": "QmP8LUv7Ut7BQYiTs3V6ayULVsKhwxUxGMztjF3PsG43je",
            "createdAt": "1593406226",
            "ago": "15 minutes ago"
        },
        {
            "id": 1974,
            "node": "0x4B37428f825fe94dbF6d3415D8344Fe1FF5aDD7A",
            "btfsCid": "QmTWaZMtZtvjwzdpxSQkLG66hnp9VLtvBq9pmVhCteNakv",
            "createdAt": "1593405614",
            "ago": "25 minutes ago"
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
    "id": "1976",
    "node": "0x4B37428f825fe94dbF6d3415D8344Fe1FF5aDD7A",
    "btfsCid": "QmdACMCNTZiaCaEYhj6E6MgN9EDXDiKXgWs5HyMsFnU87g",
    "createdAt": "1593406514",
    "ago": "an hour ago"
}
``` 
---------------------------------------------------------
