# Api for work with password hash

## Api for set password hash

### Route
> **Method**: Post
>
> **URI**: /api/v1/password/hash/set

### Parameters
```
    address - required|string
    privateKey - required|string
    passwordHash - required|string
```

Description:
1. address - Address who changes
2. privateKey - Address private key
3. passwordHash - New password hash
------------------------------------------------------------------------------------------------

### Example success set new password hash

#### Request 

* Url - http://localhost:3000/api/v1/password/hash/set
* Method - Post
* Header - Content-type: application/json

Body:
```json
{
	"address": "0xfd60DEBc293951ff6dC44bA2e0A4c4e340cF96b3",
	"privateKey": "9C515D95F113F1CA5746EB5CAD51E791475EF52E0C9B0853E22529C485A5DA41",
	"passwordHash": "$2y$06$9181GMlG101P5ahcjvGXxeuNU6LqmnMQuyOIOyUmRsJ00NBiKvsZS"
}
``` 

#### Response
* Status - 200

Body:
```json
{
    "message": "To new hash success changed!"
}
``` 
---------------------------------------------------------

### Example error set new password hash

#### Request 

* Url - http://localhost:3000/api/v1/password/hash/set
* Method - Post
* Header - Content-type: application/json

Body:
```json
{
	"address": "0xfd60DEBc293951ff6dC44bA2e0A4c4e340cF96b3",
	"privateKey": "9C515D95F113F1CA5746EB5CAD51E791475EF52E0C9B0853E22529C485A5DA41",
	"passwordHash": "$2y$06$9181GMlG101P5ahcjvGXxeuNU6LqmnMQuyOIOyUmRsJ00NBiKvsZS"
}
``` 

#### Response
* Status - 400

Body:
```json
{
    "statusCode": 400,
    "error": "Bad Request",
    "message": "Returned error: insufficient funds for gas * price + value"
}
``` 

## Api for get password hash with address
### Route
> **Method**: GET
>
> **URI**: /api/v1/password/hash/:address

### Parameters
```
    address - required|string
```

Description:
1. address - User address 
------------------------------------------------------------------------------------------------

### Example success get password hash

#### Request 

* Url - http://localhost:3000/api/v1/password/hash/0xfd60DEBc293951ff6dC44bA2e0A4c4e340cF96b3
* Method - GET
* Header - Content-type: application/json

#### Response
* Status - 200

Body:
```json
{
    "hash": "$2y$06$9181GMlG101P5ahcjvGXxeuNU6LqmnMQuyOIOyUmRsJ00NBiKvsZS"
}
```
---------------------------------------------------------------------------------------------------

## Api for get password hash with transaction hash
### Route
> **Method**: GET
>
> **URI**: /api/v1/password/:transactionHash

### Parameters
```
    transactionHash - required|string
```

Description:
1. transactionHash - Hash transaction 
------------------------------------------------------------------------------------------------

### Example success get password hash with transaction hash

#### Request 

* Url - http://localhost:3001/api/v1/password/0x19ccf41db869a32270cbcace451888f926f948adb9a47d8ecd2a576c7c890d97
* Method - GET
* Header - Content-type: application/json

#### Response
* Status - 200

Body:
```json
{
    "hash": "$2y$06$9181GMlG101P5ahcjvGXxeuNU6LqmnMQuyOIOyUmRsJ00NBiKvsZS"
}
``` 
