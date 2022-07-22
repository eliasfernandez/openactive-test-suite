[< Return to Summary](summary.md) | File Generated: Fri Jul 22 2022 10:40:51 GMT+0000 (Coordinated Universal Time)

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
* **Authorization:** `"Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkIwNEY3QjkxREUzQjk0NzhDNjE4MzNGQjI0QUE1Q0RCIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2NTg0ODU2NTAsImV4cCI6MTY1ODQ4OTI1MCwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NTAwMyIsImF1ZCI6Im9wZW5ib29raW5nIiwiY2xpZW50X2lkIjoiNjJiNGY3MmUtZmJmOS00OTk0LTlkNDQtYmQ5NTMwOTllMTM0IiwiaHR0cHM6Ly9vcGVuYWN0aXZlLmlvL2NsaWVudElkIjoiNjJiNGY3MmUtZmJmOS00OTk0LTlkNDQtYmQ5NTMwOTllMTM0Iiwic3ViIjoiMTAwIiwiYXV0aF90aW1lIjoxNjU4NDg1NjQ5LCJpZHAiOiJsb2NhbCIsImh0dHBzOi8vb3BlbmFjdGl2ZS5pby9zZWxsZXJJZCI6Imh0dHBzOi8vbG9jYWxob3N0OjUwMDEvYXBpL2lkZW50aWZpZXJzL3NlbGxlcnMvMSIsImp0aSI6IkZFNjE5OTM5Q0M2MUVFRTFDQTFDRUIyNzczMTYyMjg5Iiwic2lkIjoiMEI1RjVGRDEzODJGNTY2REE2NzI2RUM1RjBENjRFQ0QiLCJpYXQiOjE2NTg0ODU2NTAsInNjb3BlIjpbIm9wZW5pZCIsIm9wZW5hY3RpdmUtb3BlbmJvb2tpbmciLCJvcGVuYWN0aXZlLWlkZW50aXR5Iiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbInB3ZCJdfQ.o-QctzkQMggVF6J8EIsjxJ43llGhs2jSEGiCfZxoPJjg0Coj1XkqaKd5Bltzc2D21dEBtbq-c5sKreCqebPhxuDlg_pDikudK9_wCosxWyOPIBS3OX6HFWM-J-Ofpxgkk5thfLTkLlDW8N6f3jtsTIRGm9dZvKsGypmwxnDdRhGKwxSDhnabWbPtFCABWC6DxK5mgb6V5SX3W3QxbI181T1tQioKui-N8j1FSgIpXrE3qy2ShkI-QbxwmMBCYhqcTbhLi41SUSx6gKgtl54lc_JEx-kSBlgsQmOrRKMDDrEecM9JQMNAliL2mJeIClUfC8k_SUKbJ8VvbNBbMjVSCw"`

```json
{
  "hi": "there"
}
```

---
Response status code: 404 Not Found. Responded in 82.836408ms.
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
Response status code: 404 Not Found. Responded in 13.325514ms.
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


