[< Return to Summary](summary.md) | File Generated: Fri Jul 22 2022 10:41:59 GMT+0000 (Coordinated Universal Time)

# common-error-conditions >> unknown-endpoint

**Booking Flow:** 

**Opportunity Type:** 

**Feature:** Core / Common error conditions (Implemented) 

**Test:**  Expect an UnknownOrIncorrectEndpointError for requests to unknown endpoints

Send a request to an endpoint that does not exist, and expect an UnknownOrIncorrectEndpointError to be returned

### Running only this test

```bash
npm start -- --runInBand test/features/core/common-error-conditions/implemented/unknown-endpoint-test.js
```

---

✅ 2 passed with 0 failures, 0 warnings and 0 suggestions 

---


## Unknown Endpoint - JSON PUT

### UnknownEndpoint Request
PUT https://localhost:5001/api/openbooking/ordeeeeers/abc

* **Content-Type:** `"application/vnd.openactive.booking+json; version=1"`
* **Authorization:** `"Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkIwNEY3QjkxREUzQjk0NzhDNjE4MzNGQjI0QUE1Q0RCIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2NTg0ODU2NTYsImV4cCI6MTY1ODQ4OTI1NiwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NTAwMyIsImF1ZCI6Im9wZW5ib29raW5nIiwiY2xpZW50X2lkIjoiNTYwZGJjNzUtZTQ0Yy00YjAzLWExMGMtOTIxMTk3YWFlM2ExIiwiaHR0cHM6Ly9vcGVuYWN0aXZlLmlvL2NsaWVudElkIjoiNTYwZGJjNzUtZTQ0Yy00YjAzLWExMGMtOTIxMTk3YWFlM2ExIiwic3ViIjoiMTAwIiwiYXV0aF90aW1lIjoxNjU4NDg1NjU1LCJpZHAiOiJsb2NhbCIsImh0dHBzOi8vb3BlbmFjdGl2ZS5pby9zZWxsZXJJZCI6Imh0dHBzOi8vbG9jYWxob3N0OjUwMDEvYXBpL2lkZW50aWZpZXJzL3NlbGxlcnMvMSIsImp0aSI6IjkxQTNBNUUzMkU1NzZEODEyNkNGMjNCMDNFQkUzMUFBIiwic2lkIjoiMUFEM0IxMEQ5MDA4QkY0NzREMThFRTU2MzZEMDVBREYiLCJpYXQiOjE2NTg0ODU2NTYsInNjb3BlIjpbIm9wZW5pZCIsIm9wZW5hY3RpdmUtb3BlbmJvb2tpbmciLCJvcGVuYWN0aXZlLWlkZW50aXR5Iiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbInB3ZCJdfQ.a2EuRMF8HKqvnIK46S7jGAnFYJTLs5usIok3hM1GayeDD5bQGinKSWhljkFFzPUIey5JBLEDu-ncYu-gmWg85CyMyWM9tUvfXdyzUDelvQDh3aKsUQ82RB-flVXtzeTGkWKx57d03Cfzne_1lnhP0C9P6FWsUueTy_yw_4txHVgbA4y7FYcos624uxw0DUDYakjtSHoOQpXsWzzYUp20Ax_cxJC_zvpslDxQBFX3jTSXKDurUmkVGcFDiC-sRZLvRw9A5iAscUsSLbZBLF-oBQJOYFcXXeT2UsdJLx15MUh9_zKZ932UtV3XtWf8F47Dw8uSfvOl41VL7Q-zTfwKKg"`

```json
{
  "hi": "there"
}
```

---
Response status code: 404 Not Found. Responded in 60.622029ms.
```json
{
  "@context": "https://openactive.io/",
  "@type": "UnknownOrIncorrectEndpointError",
  "name": "The Booking System has no endpoint matching the one requested.",
  "statusCode": 404
}
```
### Specs
* ✅ should return a response containing `"@type": "UnknownOrIncorrectEndpointError"` with status code `404`

## Unknown Endpoint - GET

### UnknownEndpoint Request
GET https://localhost:5001/api/openbooking/ordeeeeers/abc


---
Response status code: 404 Not Found. Responded in 18.26828ms.
```json
{
  "@context": "https://openactive.io/",
  "@type": "UnknownOrIncorrectEndpointError",
  "name": "The Booking System has no endpoint matching the one requested.",
  "statusCode": 404
}
```
### Specs
* ✅ should return a response containing `"@type": "UnknownOrIncorrectEndpointError"` with status code `404`


