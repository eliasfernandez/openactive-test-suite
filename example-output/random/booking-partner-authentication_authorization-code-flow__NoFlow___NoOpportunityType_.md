[< Return to Summary](summary.md) | File Generated: Fri Jul 22 2022 10:47:42 GMT+0000 (Coordinated Universal Time)

# booking-partner-authentication >> authorization-code-flow

**Booking Flow:** 

**Opportunity Type:** 

**Feature:** Authentication / Booking Partner Authentication for Multiple Seller Systems (Implemented) 

**Test:**  Authorization Code Flow

The Authorization Code Flow allows Sellers to authenticate with Booking Partners

### Running only this test

```bash
npm start -- --runInBand test/features/authentication/booking-partner-authentication/implemented/authorization-code-flow-test.js
```

---

✅ 5 passed with 0 failures, 0 warnings and 0 suggestions 

---


## Open ID Connect Authentication

### Credentials


The test suite is using the credentials below for this test:
* **clientId**: `560dbc75-e44c-4b03-a10c-921197aae3a1`
* **clientSecret**: `i0OAXsFX40D0iRCrc8JIxy5bziyAepTYDSqZhJdtNSZ`

These credentials were retrieved using Dynamic Client Registration by the Broker Microservice upon startup, using the following configuration within `bookingPartners.primary.authentication`:
* **initialAccessToken**: `openactive_test_suite_client_12345xaq`





### Discovery Request
GET https://localhost:5003/.well-known/openid-configuration

* **accept:** `"application/json"`
* **accept-encoding:** `"gzip, deflate, br"`
* **host:** `"localhost:5003"`


---
Response status code: 200.
```json
{
  "issuer": "https://localhost:5003",
  "jwks_uri": "https://localhost:5003/.well-known/openid-configuration/jwks",
  "authorization_endpoint": "https://localhost:5003/connect/authorize",
  "token_endpoint": "https://localhost:5003/connect/token",
  "userinfo_endpoint": "https://localhost:5003/connect/userinfo",
  "end_session_endpoint": "https://localhost:5003/connect/endsession",
  "check_session_iframe": "https://localhost:5003/connect/checksession",
  "revocation_endpoint": "https://localhost:5003/connect/revocation",
  "introspection_endpoint": "https://localhost:5003/connect/introspect",
  "device_authorization_endpoint": "https://localhost:5003/connect/deviceauthorization",
  "frontchannel_logout_supported": true,
  "frontchannel_logout_session_supported": true,
  "backchannel_logout_supported": true,
  "backchannel_logout_session_supported": true,
  "scopes_supported": [
    "openid",
    "openactive-identity",
    "openactive-openbooking",
    "openactive-ordersfeed",
    "offline_access"
  ],
  "claims_supported": [
    "sub",
    "https://openactive.io/sellerId",
    "https://openactive.io/sellerName",
    "https://openactive.io/sellerUrl",
    "https://openactive.io/sellerLogo",
    "https://openactive.io/bookingServiceName",
    "https://openactive.io/bookingServiceUrl",
    "name",
    "https://openactive.io/clientId"
  ],
  "grant_types_supported": [
    "authorization_code",
    "client_credentials",
    "refresh_token",
    "implicit",
    "urn:ietf:params:oauth:grant-type:device_code"
  ],
  "response_types_supported": [
    "code",
    "token",
    "id_token",
    "id_token token",
    "code id_token",
    "code token",
    "code id_token token"
  ],
  "response_modes_supported": [
    "form_post",
    "query",
    "fragment"
  ],
  "token_endpoint_auth_methods_supported": [
    "client_secret_basic",
    "client_secret_post"
  ],
  "id_token_signing_alg_values_supported": [
    "RS256"
  ],
  "subject_types_supported": [
    "public"
  ],
  "code_challenge_methods_supported": [
    "plain",
    "S256"
  ],
  "request_parameter_supported": true,
  "registration_endpoint": "https://localhost:5003/connect/register"
}
```

### Authorization Code Flow - 1 Request
POST http://localhost:3000/browser-automation-for-auth

* **accept:** `"application/json, text/plain, */*"`
* **content-type:** `"application/json;charset=utf-8"`
* **content-length:** `415`
* **host:** `"localhost:3000"`

```json
{
  "headless": true,
  "offlineAccess": true,
  "username": "test1",
  "password": "test1",
  "authorizationUrl": "https://localhost:5003/connect/authorize?client_id=560dbc75-e44c-4b03-a10c-921197aae3a1&scope=openid%20openactive-openbooking%20offline_access%20openactive-identity&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcb&code_challenge=ed8CJOJQXc825rHNNe32FWnifZ3V0RSL525PaMsT4LA&code_challenge_method=S256"
}
```

---


#### Screenshot: Login page
```json
"https://localhost:5003/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3D560dbc75-e44c-4b03-a10c-921197aae3a1%26scope%3Dopenid%2520openactive-openbooking%2520offline_access%2520openactive-identity%26response_type%3Dcode%26redirect_uri%3Dhttp%253A%252F%252Flocalhost%253A3000%252Fcb%26code_challenge%3Ded8CJOJQXc825rHNNe32FWnifZ3V0RSL525PaMsT4LA%26code_challenge_method%3DS256"
```

![Screenshot: Login page](data:image/png;base64,[object Promise])


#### Screenshot: Authorization page
```json
"https://localhost:5003/consent?returnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3D560dbc75-e44c-4b03-a10c-921197aae3a1%26scope%3Dopenid%2520openactive-openbooking%2520offline_access%2520openactive-identity%26response_type%3Dcode%26redirect_uri%3Dhttp%253A%252F%252Flocalhost%253A3000%252Fcb%26code_challenge%3Ded8CJOJQXc825rHNNe32FWnifZ3V0RSL525PaMsT4LA%26code_challenge_method%3DS256"
```

![Screenshot: Authorization page](data:image/png;base64,[object Promise])


#### Callback URL
```json
"/cb?code=0779AB20ECEAB6EAA11EE9F4F86E424C57FF81389B541044C6CA91DB7C9FB1B1&scope=openid%20openactive-openbooking%20offline_access%20openactive-identity&session_state=BKUl9ylZS_Wu2DPKDFe23uEcaorLZ5nsYHPei_KHTbw.F27511C5A678397A516F83A217F7B845"
```


### Authorization Code Flow - 2 Request
POST https://localhost:5003/connect/token

* **authorization:** `"Basic NTYwZGJjNzUtZTQ0Yy00YjAzLWExMGMtOTIxMTk3YWFlM2ExOmkwT0FYc0ZYNDBEMGlSQ3JjOEpJeHk1YnppeUFlcFRZRFNxWmhKZHROU1o="`
* **accept:** `"application/json"`
* **content-type:** `"application/x-www-form-urlencoded"`
* **content-length:** `"205"`
* **accept-encoding:** `"gzip, deflate, br"`
* **host:** `"localhost:5003"`

```json
"grant_type=authorization_code&code=0779AB20ECEAB6EAA11EE9F4F86E424C57FF81389B541044C6CA91DB7C9FB1B1&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcb&code_verifier=WfyWV1tDkqaiN9LIlOyijxQBnHVYpA6_VhtEetYhPTE"
```

---
Response status code: 200.
```json
{
  "id_token": "eyJhbGciOiJSUzI1NiIsImtpZCI6IkIwNEY3QjkxREUzQjk0NzhDNjE4MzNGQjI0QUE1Q0RCIiwidHlwIjoiSldUIn0.eyJuYmYiOjE2NTg0ODY4NjQsImV4cCI6MTY1ODQ4NzE2NCwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NTAwMyIsImF1ZCI6IjU2MGRiYzc1LWU0NGMtNGIwMy1hMTBjLTkyMTE5N2FhZTNhMSIsImlhdCI6MTY1ODQ4Njg2NCwiYXRfaGFzaCI6InpVN2ZEWDN5R0c5U09GQ3FieUdTVXciLCJzaWQiOiJBRjNDQzNGMkQzMDE0MjdCMzhFNTBENUNEQjUyRDEwNSIsInN1YiI6IjEwMCIsImF1dGhfdGltZSI6MTY1ODQ4Njg2MywiaWRwIjoibG9jYWwiLCJodHRwczovL29wZW5hY3RpdmUuaW8vc2VsbGVyTmFtZSI6IkFjbWUgRml0bmVzcyBMdGQiLCJodHRwczovL29wZW5hY3RpdmUuaW8vc2VsbGVySWQiOiJodHRwczovL2xvY2FsaG9zdDo1MDAxL2FwaS9pZGVudGlmaWVycy9zZWxsZXJzLzEiLCJodHRwczovL29wZW5hY3RpdmUuaW8vc2VsbGVyVXJsIjoiaHR0cHM6Ly93d3cuZXhhbXBsZS5jb20iLCJodHRwczovL29wZW5hY3RpdmUuaW8vc2VsbGVyTG9nbyI6Imh0dHBzOi8vcGxhY2VraXR0ZW4uY29tLzY0MC8zNjAiLCJhbXIiOlsicHdkIl19.PVc3OxkadNqeQJf62pscFW6CRt67NYcX5HZUXsK5dcVpKR9JaoCBqyqXsvQwfmkt5DhWsCDuDW7YPWxehOxVdfcqXuRV5ns8eA5vQvlAi6nQA5xivF88YEBpCx35BAMlTDHHcbmPiKa-BpFPhtG0NDvfCOd4l3Eo4W7GZUY9PrAnhUW7-ViadBRUbkmUrccgDAsfqf8zgZWUvBwWl5GdcDMO3DyDLo0PzaDZSwKR5xd6XcypUS5p10b6igFYpVPrWdNOtFTAdvGaHwbte04Zaxqn-lHrzzjWTqDiILm-2AEfSSJttXOX9ewpxyAI4rKGCqOXljEYkBBlMp6fxZsCTw",
  "access_token": "eyJhbGciOiJSUzI1NiIsImtpZCI6IkIwNEY3QjkxREUzQjk0NzhDNjE4MzNGQjI0QUE1Q0RCIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2NTg0ODY4NjQsImV4cCI6MTY1ODQ5MDQ2NCwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NTAwMyIsImF1ZCI6Im9wZW5ib29raW5nIiwiY2xpZW50X2lkIjoiNTYwZGJjNzUtZTQ0Yy00YjAzLWExMGMtOTIxMTk3YWFlM2ExIiwiaHR0cHM6Ly9vcGVuYWN0aXZlLmlvL2NsaWVudElkIjoiNTYwZGJjNzUtZTQ0Yy00YjAzLWExMGMtOTIxMTk3YWFlM2ExIiwic3ViIjoiMTAwIiwiYXV0aF90aW1lIjoxNjU4NDg2ODYzLCJpZHAiOiJsb2NhbCIsImh0dHBzOi8vb3BlbmFjdGl2ZS5pby9zZWxsZXJJZCI6Imh0dHBzOi8vbG9jYWxob3N0OjUwMDEvYXBpL2lkZW50aWZpZXJzL3NlbGxlcnMvMSIsImp0aSI6IjQzNEU5ODQ0RUYxOUY2MTM5NUNEOTc0M0UzRjI1NDcxIiwic2lkIjoiQUYzQ0MzRjJEMzAxNDI3QjM4RTUwRDVDREI1MkQxMDUiLCJpYXQiOjE2NTg0ODY4NjQsInNjb3BlIjpbIm9wZW5pZCIsIm9wZW5hY3RpdmUtb3BlbmJvb2tpbmciLCJvcGVuYWN0aXZlLWlkZW50aXR5Iiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbInB3ZCJdfQ.B9GdhQgtgAVVWMuDFobF9yzzeh410rZDIjteIhBhzDphFSQn62MB22ZH1EwjfQV3t4Nk4N7iYtm_9aKcgTg3RhCM8vZpJtH-ftQLNTKPjVDQhcbUHc0-3bJK4rKcohYWv0WFf7HwDV47TgFNryFR45MI4zH0x9arAMAyKcGrLA0ppq5ROftYeeROGtGzkoOzuW7mGf7dszYtIVxmF3BNh0IPzgzxbAmmJWJIeu4fcGA7sHy5JFeCQmHCH43JeEycXqaETgAvo9Cx9ZZdpJuLxGp9gMMci15wSV2jRKo1xes9MlqpPSryDqIpyNjX3uYVR2d8VRWuUWmVgReEosdYkw",
  "expires_in": 3600,
  "token_type": "Bearer",
  "refresh_token": "E2DD0C30E059AFF24DCAFF43BA543FC202C6742B6A437DDE52D4A47C415D096E",
  "scope": "openid openactive-openbooking offline_access openactive-identity"
}
```

### Authorization Code Flow - 3 Request
GET https://localhost:5003/.well-known/openid-configuration/jwks

* **accept:** `"application/json"`
* **accept-encoding:** `"gzip, deflate, br"`
* **host:** `"localhost:5003"`


---
Response status code: 200.
```json
{
  "keys": [
    {
      "kty": "RSA",
      "use": "sig",
      "kid": "B04F7B91DE3B9478C61833FB24AA5CDB",
      "e": "AQAB",
      "n": "yZO68vCGrvfBQ5R1z0DVCRAADOWeF3aLlhOaz1Je1SnmohmmlO-1F1hkRM_4MJtR5aECMxMz-MUW1nBCPmUrH0h_rrdCdDdlk8vTHki0ixK-gO73W2ZscOCZ6L2fZ2Oqz0_I840cnSCv55zpiOk9oGJL9TEsLAWYAIyQheaqZO3BkqImuBFmaLVTckvaZeONjHDQa01rxEjRQByir6oYSZPJy54XuRQJaPuCVNeOW8r0R9rKUQf9nl7tnVvhCsU3q1-UPrs8ZW_kaYXuYQJJMk392jX6XNm6czehIYM-O8Z5eGFdR3WW7IAWYEmqTCxrCRuuKU-EEcKOwksx8gBPgQ",
      "alg": "RS256"
    }
  ]
}
```

### Authorization Code Flow - Claims Result

`id_token` claims:

```json
{
  "nbf": 1658486864,
  "exp": 1658487164,
  "iss": "https://localhost:5003",
  "aud": "560dbc75-e44c-4b03-a10c-921197aae3a1",
  "iat": 1658486864,
  "at_hash": "zU7fDX3yGG9SOFCqbyGSUw",
  "sid": "AF3CC3F2D301427B38E50D5CDB52D105",
  "sub": "100",
  "auth_time": 1658486863,
  "idp": "local",
  "https://openactive.io/sellerName": "Acme Fitness Ltd",
  "https://openactive.io/sellerId": "https://localhost:5001/api/identifiers/sellers/1",
  "https://openactive.io/sellerUrl": "https://www.example.com",
  "https://openactive.io/sellerLogo": "https://placekitten.com/640/360",
  "amr": [
    "pwd"
  ]
}
```

### Refresh Token Request
POST https://localhost:5003/connect/token

* **authorization:** `"Basic NTYwZGJjNzUtZTQ0Yy00YjAzLWExMGMtOTIxMTk3YWFlM2ExOmkwT0FYc0ZYNDBEMGlSQ3JjOEpJeHk1YnppeUFlcFRZRFNxWmhKZHROU1o="`
* **accept:** `"application/json"`
* **content-type:** `"application/x-www-form-urlencoded"`
* **content-length:** `"103"`
* **accept-encoding:** `"gzip, deflate, br"`
* **host:** `"localhost:5003"`

```json
"grant_type=refresh_token&refresh_token=E2DD0C30E059AFF24DCAFF43BA543FC202C6742B6A437DDE52D4A47C415D096E"
```

---
Response status code: 200.
```json
{
  "id_token": "eyJhbGciOiJSUzI1NiIsImtpZCI6IkIwNEY3QjkxREUzQjk0NzhDNjE4MzNGQjI0QUE1Q0RCIiwidHlwIjoiSldUIn0.eyJuYmYiOjE2NTg0ODY4NjUsImV4cCI6MTY1ODQ4NzE2NSwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NTAwMyIsImF1ZCI6IjU2MGRiYzc1LWU0NGMtNGIwMy1hMTBjLTkyMTE5N2FhZTNhMSIsImlhdCI6MTY1ODQ4Njg2NSwiYXRfaGFzaCI6IjdReDJ3TkZiNG05M0l1Vkc1Xzg2Q3ciLCJzdWIiOiIxMDAiLCJhdXRoX3RpbWUiOjE2NTg0ODY4NjMsImlkcCI6ImxvY2FsIiwiaHR0cHM6Ly9vcGVuYWN0aXZlLmlvL3NlbGxlck5hbWUiOiJBY21lIEZpdG5lc3MgTHRkIiwiaHR0cHM6Ly9vcGVuYWN0aXZlLmlvL3NlbGxlcklkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NTAwMS9hcGkvaWRlbnRpZmllcnMvc2VsbGVycy8xIiwiaHR0cHM6Ly9vcGVuYWN0aXZlLmlvL3NlbGxlclVybCI6Imh0dHBzOi8vd3d3LmV4YW1wbGUuY29tIiwiaHR0cHM6Ly9vcGVuYWN0aXZlLmlvL3NlbGxlckxvZ28iOiJodHRwczovL3BsYWNla2l0dGVuLmNvbS82NDAvMzYwIiwiYW1yIjpbInB3ZCJdfQ.Qba6qtbEJfODjR3PuXypjhyoKB8cFGGfsnYm8ebVIuuC3leyLq954omISho5gRtZ4VsdgA4brQfJXKL6tsVBx03mStSeYKDY1WaMGMdRmcgAUXPdWhWddpcpA1eGQvHAZ16eKepl9K3xV58_CbHPVZMa-puO_Xpj9mUjzSop0Pq92xCSW0qEeAT_GTDbAvUZu6eBpWmjFEBtzQFC_AUCQkFOOeyWF5YUZBbogw4giAyZgtqEl68WuBFvPJH0y-vmyn-oPuZ6x5-pizupr-tCW3FyUxeg--rfwK7HjJfMIx1F7XdwqIKD-sZYCXFgp5bt4Z7S1ikhv3tNkQrDvOgAow",
  "access_token": "eyJhbGciOiJSUzI1NiIsImtpZCI6IkIwNEY3QjkxREUzQjk0NzhDNjE4MzNGQjI0QUE1Q0RCIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2NTg0ODY4NjQsImV4cCI6MTY1ODQ5MDQ2NCwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NTAwMyIsImF1ZCI6Im9wZW5ib29raW5nIiwiY2xpZW50X2lkIjoiNTYwZGJjNzUtZTQ0Yy00YjAzLWExMGMtOTIxMTk3YWFlM2ExIiwiaHR0cHM6Ly9vcGVuYWN0aXZlLmlvL2NsaWVudElkIjoiNTYwZGJjNzUtZTQ0Yy00YjAzLWExMGMtOTIxMTk3YWFlM2ExIiwic3ViIjoiMTAwIiwiYXV0aF90aW1lIjoxNjU4NDg2ODYzLCJpZHAiOiJsb2NhbCIsImh0dHBzOi8vb3BlbmFjdGl2ZS5pby9zZWxsZXJJZCI6Imh0dHBzOi8vbG9jYWxob3N0OjUwMDEvYXBpL2lkZW50aWZpZXJzL3NlbGxlcnMvMSIsImp0aSI6IjI2OTRFMUMwMkFEMUM2QTBDNTM5NjFDNTI0MkZFRTBEIiwiaWF0IjoxNjU4NDg2ODY0LCJzY29wZSI6WyJvcGVuaWQiLCJvcGVuYWN0aXZlLW9wZW5ib29raW5nIiwib3BlbmFjdGl2ZS1pZGVudGl0eSIsIm9mZmxpbmVfYWNjZXNzIl0sImFtciI6WyJwd2QiXX0.ZUbqTNPUHJxTu8roMTNvV2TWPSUnFnOIsXU46vc5TIUvsMkcBwtlOQY46J3jtrWKIJnT_PwpvyVZaEBhnFrk5MmuAt0_ZByh3e5lerm7hBBEVq9rAt_qZTdwvXHPZPiWJIQdLP1SE6Xv5LTJ_6rnT30Uj8VQ9dgzVBy6nvf_arTz0l9kwMDqa3so2Bvj-5DdatI3fsoczoFsDHj4gzJpmoUu3fIDNbOJeajc698uN9MRPvmpyO6TUJHBp3C9gaofKp6jCb_-urh8lakRy7jIgKMZ1ke4dr6rDJ3DmNKX_otKesLdlcT_uRkgNlpjVy_-bocorb-aZCo0jFm0rmdO8g",
  "expires_in": 3600,
  "token_type": "Bearer",
  "refresh_token": "CCEC46EAB1D32F0E53695ACFDDFA3B176296E66A0D7C5DD01D4C70F61E65B089",
  "scope": "openid openactive-openbooking openactive-identity offline_access"
}
```
### Specs
* ✅ should complete Discovery successfully
* ✅ should complete Authorization Code Flow successfully
* ✅ should include expected `https://openactive.io/sellerId` claim in `id_token`
* ✅ should return claims within `id_token` as defined in specification
* ✅ should complete token refresh successfully


