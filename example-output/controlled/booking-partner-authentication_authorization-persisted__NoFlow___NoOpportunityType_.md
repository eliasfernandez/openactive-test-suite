[< Return to Summary](summary.md) | File Generated: Fri Jul 22 2022 10:43:16 GMT+0000 (Coordinated Universal Time)

# booking-partner-authentication >> authorization-persisted

**Booking Flow:** 

**Opportunity Type:** 

**Feature:** Authentication / Booking Partner Authentication for Multiple Seller Systems (Implemented) 

**Test:**  Authorization persists when not requesting offline access

When authorisation is requested without offline access and a user has already given permission, consent must not be required.

### Running only this test

```bash
npm start -- --runInBand test/features/authentication/booking-partner-authentication/implemented/authorization-persisted-test.js
```

---

✅ 8 passed with 0 failures, 0 warnings and 0 suggestions 

---


## Open ID Connect Authentication

### Credentials


The test suite is using the credentials configured by `bookingPartnersForSpecificTests.authorizationPersisted.authentication.clientCredentials` for this test:
* **clientId**: `clientid_801`
* **clientSecret**: `secret`





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

### Authorization Code Flow (first attempt) - 1 Request
POST http://localhost:3000/browser-automation-for-auth

* **accept:** `"application/json, text/plain, */*"`
* **content-type:** `"application/json;charset=utf-8"`
* **content-length:** `349`
* **host:** `"localhost:3000"`

```json
{
  "headless": true,
  "offlineAccess": true,
  "username": "test1",
  "password": "test1",
  "authorizationUrl": "https://localhost:5003/connect/authorize?client_id=clientid_801&scope=openid%20openactive-identity&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcb&code_challenge=juJOakYwNu6H6vmBYCl7v0ETZzx7x5e8Se5I1DHnPio&code_challenge_method=S256"
}
```

---


#### Screenshot: Login page
```json
"https://localhost:5003/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dclientid_801%26scope%3Dopenid%2520openactive-identity%26response_type%3Dcode%26redirect_uri%3Dhttp%253A%252F%252Flocalhost%253A3000%252Fcb%26code_challenge%3DjuJOakYwNu6H6vmBYCl7v0ETZzx7x5e8Se5I1DHnPio%26code_challenge_method%3DS256"
```

![Screenshot: Login page](data:image/png;base64,[object Promise])


#### Screenshot: Authorization page
```json
"https://localhost:5003/consent?returnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dclientid_801%26scope%3Dopenid%2520openactive-identity%26response_type%3Dcode%26redirect_uri%3Dhttp%253A%252F%252Flocalhost%253A3000%252Fcb%26code_challenge%3DjuJOakYwNu6H6vmBYCl7v0ETZzx7x5e8Se5I1DHnPio%26code_challenge_method%3DS256"
```

![Screenshot: Authorization page](data:image/png;base64,[object Promise])


#### Callback URL
```json
"/cb?code=164FC41EA8AD2D2F6F736F8DA8F23DB2CC9D357210F16FC3A9F7CFD89F3C9046&scope=openid%20openactive-identity&session_state=Y5u7Slmkf99PPHDTOx9hTRc83xAsNEUoaDzHJXSbeW0.9319E1AC9892C86309FD5592323A4A3B"
```


### Authorization Code Flow (first attempt) - 2 Request
POST https://localhost:5003/connect/token

* **authorization:** `"Basic Y2xpZW50aWRfODAxOnNlY3JldA=="`
* **accept:** `"application/json"`
* **content-type:** `"application/x-www-form-urlencoded"`
* **content-length:** `"205"`
* **accept-encoding:** `"gzip, deflate, br"`
* **host:** `"localhost:5003"`

```json
"grant_type=authorization_code&code=164FC41EA8AD2D2F6F736F8DA8F23DB2CC9D357210F16FC3A9F7CFD89F3C9046&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcb&code_verifier=T7-PnCb2j_5Fr00RVe_E6ELAZO7laJfXf9UszMrzIZI"
```

---
Response status code: 200.
```json
{
  "id_token": "eyJhbGciOiJSUzI1NiIsImtpZCI6IkIwNEY3QjkxREUzQjk0NzhDNjE4MzNGQjI0QUE1Q0RCIiwidHlwIjoiSldUIn0.eyJuYmYiOjE2NTg0ODY1OTgsImV4cCI6MTY1ODQ4Njg5OCwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NTAwMyIsImF1ZCI6ImNsaWVudGlkXzgwMSIsImlhdCI6MTY1ODQ4NjU5OCwiYXRfaGFzaCI6IlItTHNid3pLUDNaT0xtVVMwTHhHYmciLCJzaWQiOiI5NkRERjEyOUVGMjUxNjgzN0VEOEQxOTIxNDEzNDFGMiIsInN1YiI6IjEwMCIsImF1dGhfdGltZSI6MTY1ODQ4NjU5NywiaWRwIjoibG9jYWwiLCJodHRwczovL29wZW5hY3RpdmUuaW8vc2VsbGVyTmFtZSI6IkFjbWUgRml0bmVzcyBMdGQiLCJodHRwczovL29wZW5hY3RpdmUuaW8vc2VsbGVySWQiOiJodHRwczovL2xvY2FsaG9zdDo1MDAxL2FwaS9pZGVudGlmaWVycy9zZWxsZXJzLzEiLCJodHRwczovL29wZW5hY3RpdmUuaW8vc2VsbGVyVXJsIjoiaHR0cHM6Ly93d3cuZXhhbXBsZS5jb20iLCJodHRwczovL29wZW5hY3RpdmUuaW8vc2VsbGVyTG9nbyI6Imh0dHBzOi8vcGxhY2VraXR0ZW4uY29tLzY0MC8zNjAiLCJhbXIiOlsicHdkIl19.qSSPv7xilYN5P1rUrqPegArmoi2RHQcNnrhgjHxcxGYUV88Uhv664B3R8ld7kNH1GsFkYQcYw2GjfpbbLK59HcnZEOoGC_bSPsLMJKR5iKmtuNoqE-5-geMSmuo2Q_gHw79Sh-ETKb-2VSzlGu7y7YMMyxrNZtnHOaaCZsQrEaqXNG37l3wNbdU3rTIsgZX1Xx34URtDVtH6D0lHfvBq1VfLwKs6_phxf86fpiQoSu3MUH0ISfDk1effGQ5IPeAsArzqOkS_pIfr73-20DNAAonSt-7ouPPIB1j2pFNfjWwFGTtBZOz-69b-8SNbPpvFGIuhNvKXrfvxVOWtRknpXQ",
  "access_token": "eyJhbGciOiJSUzI1NiIsImtpZCI6IkIwNEY3QjkxREUzQjk0NzhDNjE4MzNGQjI0QUE1Q0RCIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2NTg0ODY1OTgsImV4cCI6MTY1ODQ5MDE5OCwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NTAwMyIsImNsaWVudF9pZCI6ImNsaWVudGlkXzgwMSIsImh0dHBzOi8vb3BlbmFjdGl2ZS5pby9jbGllbnRJZCI6ImNsaWVudGlkXzgwMSIsInN1YiI6IjEwMCIsImF1dGhfdGltZSI6MTY1ODQ4NjU5NywiaWRwIjoibG9jYWwiLCJqdGkiOiIzNDZGMjYxNzZDQjA3MjhDMjFCQjlCRjc0Q0U2RTRFNSIsInNpZCI6Ijk2RERGMTI5RUYyNTE2ODM3RUQ4RDE5MjE0MTM0MUYyIiwiaWF0IjoxNjU4NDg2NTk4LCJzY29wZSI6WyJvcGVuaWQiLCJvcGVuYWN0aXZlLWlkZW50aXR5Il0sImFtciI6WyJwd2QiXX0.sssGe-KCaN2HLd9GEzdtY8aUH8BbqOl_x_BWIoxtemNqBON9OpS5IKf2UsL6NvfvPs_5oVrENWyUPlHxwMRuSBsoPHcBAeQCfPm1xFqacP5stNLUqn67dewZJ6Sjr-ZkbtP7dvlBplpDqYfLkX8EpksVCTUJiQbUxVF_8i1a_8MCCWMXXoDICgiY9cTKXWGwIhyg_9VLYajjhOFnVeTqI_UMV56s7LxP97hiLob0iJRixtYzZfY_vmwWTOLi10MmXGsT5KlzqRQ_QjE_av8tuQWEcM4NDAc26KHP2LRDd3vmBzkNbt7Y77qxlGJBdZjWLckGZAC8K6DNMhosJgNqVA",
  "expires_in": 3600,
  "token_type": "Bearer",
  "scope": "openid openactive-identity"
}
```

### Authorization Code Flow (first attempt) - 3 Request
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

### Authorization Code Flow (first attempt) - Claims Result

`id_token` claims:

```json
{
  "nbf": 1658486598,
  "exp": 1658486898,
  "iss": "https://localhost:5003",
  "aud": "clientid_801",
  "iat": 1658486598,
  "at_hash": "R-LsbwzKP3ZOLmUS0LxGbg",
  "sid": "96DDF129EF2516837ED8D192141341F2",
  "sub": "100",
  "auth_time": 1658486597,
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

### Authorization Code Flow (second attempt) - 1 Request
POST http://localhost:3000/browser-automation-for-auth

* **accept:** `"application/json, text/plain, */*"`
* **content-type:** `"application/json;charset=utf-8"`
* **content-length:** `349`
* **host:** `"localhost:3000"`

```json
{
  "headless": true,
  "offlineAccess": true,
  "username": "test1",
  "password": "test1",
  "authorizationUrl": "https://localhost:5003/connect/authorize?client_id=clientid_801&scope=openid%20openactive-identity&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcb&code_challenge=brWYlKw3z_RphKf0Pt78hR4nnM1oMRqFQys3OYO-sNU&code_challenge_method=S256"
}
```

---


#### Screenshot: Login page
```json
"https://localhost:5003/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dclientid_801%26scope%3Dopenid%2520openactive-identity%26response_type%3Dcode%26redirect_uri%3Dhttp%253A%252F%252Flocalhost%253A3000%252Fcb%26code_challenge%3DbrWYlKw3z_RphKf0Pt78hR4nnM1oMRqFQys3OYO-sNU%26code_challenge_method%3DS256"
```

![Screenshot: Login page](data:image/png;base64,[object Promise])


#### Callback URL
```json
"/cb?code=53F0B7DC8B4C2131E4CDDB82497F80D7F80086FACD7202A814506826B9D40452&scope=openid%20openactive-identity&session_state=WuyJPoDvGcRsJFer1CENP-P-Jiy86RtBI0E0CZPTsTY.9AC12B3323AA81BA0E589ADF2444033A"
```


### Authorization Code Flow (second attempt) - 2 Request
POST https://localhost:5003/connect/token

* **authorization:** `"Basic Y2xpZW50aWRfODAxOnNlY3JldA=="`
* **accept:** `"application/json"`
* **content-type:** `"application/x-www-form-urlencoded"`
* **content-length:** `"205"`
* **accept-encoding:** `"gzip, deflate, br"`
* **host:** `"localhost:5003"`

```json
"grant_type=authorization_code&code=53F0B7DC8B4C2131E4CDDB82497F80D7F80086FACD7202A814506826B9D40452&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcb&code_verifier=vSkJBGa5ha9LiN0Ueb4O0c8DTWZqP1Vy53F-dhFV4hQ"
```

---
Response status code: 200.
```json
{
  "id_token": "eyJhbGciOiJSUzI1NiIsImtpZCI6IkIwNEY3QjkxREUzQjk0NzhDNjE4MzNGQjI0QUE1Q0RCIiwidHlwIjoiSldUIn0.eyJuYmYiOjE2NTg0ODY1OTksImV4cCI6MTY1ODQ4Njg5OSwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NTAwMyIsImF1ZCI6ImNsaWVudGlkXzgwMSIsImlhdCI6MTY1ODQ4NjU5OSwiYXRfaGFzaCI6ImlsVVR5YVNkQUc5cEF6SmIzSmxGSWciLCJzaWQiOiI5NkFDREM3NEYyMTJCNzY1RjI3OTMxN0ZCNTMyOEVFMSIsInN1YiI6IjEwMCIsImF1dGhfdGltZSI6MTY1ODQ4NjU5OSwiaWRwIjoibG9jYWwiLCJodHRwczovL29wZW5hY3RpdmUuaW8vc2VsbGVyTmFtZSI6IkFjbWUgRml0bmVzcyBMdGQiLCJodHRwczovL29wZW5hY3RpdmUuaW8vc2VsbGVySWQiOiJodHRwczovL2xvY2FsaG9zdDo1MDAxL2FwaS9pZGVudGlmaWVycy9zZWxsZXJzLzEiLCJodHRwczovL29wZW5hY3RpdmUuaW8vc2VsbGVyVXJsIjoiaHR0cHM6Ly93d3cuZXhhbXBsZS5jb20iLCJodHRwczovL29wZW5hY3RpdmUuaW8vc2VsbGVyTG9nbyI6Imh0dHBzOi8vcGxhY2VraXR0ZW4uY29tLzY0MC8zNjAiLCJhbXIiOlsicHdkIl19.rXYkrxbEQEDcfVKc4LMVUBUdbJmN9EW4OUIewNFA4tf5bKNqm5qx1d0HXmo7tEEE7Ww0pXVi_r0QmDXsSZym4smWo-3S_gQYLQZozScJEmpuQwiH2pOHjV5VeXdKpO_Vnfms3omjFF5gej-w3cqM_DpexvrIy2w76eJaDtMTfNTRtMVmOCr3goP4UOQgP6R4MnAyRzV1Ts7ssUFNxU1lens9vCkbCU83pXDtdoY9HOaHOP3Nn-WI4EJkHA8kwaSB7VPkZYM2PrZa_MD0FOM3487nOEG4W9aT2h6MrxtXz9XCpw1lKiGOyu3f02P8PeMsgcH_r27GkIv3t01eaQyGnQ",
  "access_token": "eyJhbGciOiJSUzI1NiIsImtpZCI6IkIwNEY3QjkxREUzQjk0NzhDNjE4MzNGQjI0QUE1Q0RCIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2NTg0ODY1OTksImV4cCI6MTY1ODQ5MDE5OSwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NTAwMyIsImNsaWVudF9pZCI6ImNsaWVudGlkXzgwMSIsImh0dHBzOi8vb3BlbmFjdGl2ZS5pby9jbGllbnRJZCI6ImNsaWVudGlkXzgwMSIsInN1YiI6IjEwMCIsImF1dGhfdGltZSI6MTY1ODQ4NjU5OSwiaWRwIjoibG9jYWwiLCJqdGkiOiJFQjFBMDlCOTRBOTM4NDE5QjNCNDdCQzM2QTcxRDJERSIsInNpZCI6Ijk2QUNEQzc0RjIxMkI3NjVGMjc5MzE3RkI1MzI4RUUxIiwiaWF0IjoxNjU4NDg2NTk5LCJzY29wZSI6WyJvcGVuaWQiLCJvcGVuYWN0aXZlLWlkZW50aXR5Il0sImFtciI6WyJwd2QiXX0.FhITxo8I3h5DzxXNXngft8jwWF-bjPEbl9E87kMGF0hzlDiwLbPQ2qUnaXSP5dbnHoJXzLgKDZLOw4Ee-YxSo8cqU4lQaSGTYrREOdTQgov2pY9YYhoMKETYXOf8qRnBjAbeMtJEWgLHBnRJEpifQvjj90HY2OLo12njjjfJU-s5tyBWIco6-boHzN2dHSgr8RHOBt93yw1znVTw-jty8sQ510woawxnCvJON3Yp10mOdTcGz55HwrerLP3mdkQCYFX0QFgfWZdyV8QW33Jer-yiNNsm2xD9_nulKX--cunmZeASaPN2pcnvEuwsH5z9Lgi4uruKTryxsrgzpCKZFg",
  "expires_in": 3600,
  "token_type": "Bearer",
  "scope": "openid openactive-identity"
}
```

### Authorization Code Flow (second attempt) - Claims Result

`id_token` claims:

```json
{
  "nbf": 1658486599,
  "exp": 1658486899,
  "iss": "https://localhost:5003",
  "aud": "clientid_801",
  "iat": 1658486599,
  "at_hash": "ilUTyaSdAG9pAzJb3JlFIg",
  "sid": "96ACDC74F212B765F279317FB5328EE1",
  "sub": "100",
  "auth_time": 1658486599,
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
### Specs
* ✅ should complete Discovery successfully
* ✅ should complete Authorization Code Flow successfully
* ✅ should include expected `https://openactive.io/sellerId` claim in `id_token`
* ✅ should return claims within `id_token` as defined in specification
* ✅ should complete Authorization Code Flow successfully
* ✅ should include expected `https://openactive.io/sellerId` claim in `id_token`
* ✅ should return claims within `id_token` as defined in specification
* ✅ should not require a consent prompt for Authorization Code Flow (second attempt)


