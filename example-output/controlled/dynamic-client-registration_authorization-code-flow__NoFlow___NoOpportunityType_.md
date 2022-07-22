[< Return to Summary](summary.md) | File Generated: Fri Jul 22 2022 10:47:20 GMT+0000 (Coordinated Universal Time)

# dynamic-client-registration >> authorization-code-flow

**Booking Flow:** 

**Opportunity Type:** 

**Feature:** Authentication / Dynamic Client Registration for Multiple Seller Systems (Implemented) 

**Test:**  Authorization Code Flow

The Authorization Code Flow allows Sellers to authenticate with Booking Partners

### Running only this test

```bash
npm start -- --runInBand test/features/authentication/dynamic-client-registration/implemented/authorization-code-flow-test.js
```

---

✅ 7 passed with 0 failures, 0 warnings and 0 suggestions 

---


## Open ID Connect Authentication

### Credentials


The test suite is using Dynamic Client Registration to retrieve credentials as part of this test, using the following configuration within `bookingPartnersForSpecificTests.dynamicPrimary.authentication`:
* **initialAccessToken**: `dynamic-primary-745ddf2d13019ce8b69c`

Hence the `client_id` and `client_secret` can be found within the Dynamic Client Registration response below.

      

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

### Dynamic Client Registration Request
POST https://localhost:5003/connect/register

* **authorization:** `"Bearer dynamic-primary-745ddf2d13019ce8b69c"`
* **accept:** `"application/json"`
* **content-type:** `"application/json"`
* **content-length:** `"413"`
* **accept-encoding:** `"gzip, deflate, br"`
* **host:** `"localhost:5003"`

```json
{
  "redirect_uris": [
    "http://localhost:3000/cb"
  ],
  "grant_types": [
    "authorization_code",
    "refresh_token",
    "client_credentials"
  ],
  "client_name": "OpenActive Test Suite Client",
  "client_uri": "https://github.com/openactive/openactive-test-suite",
  "logo_uri": "https://via.placeholder.com/512x256.png?text=Logo",
  "scope": "openid profile openactive-openbooking openactive-ordersfeed oauth-dymamic-client-update openactive-identity"
}
```

---
Response status code: 201.
```json
{
  "client_id": "5eefb293-b902-4d09-bcca-78326cadffeb",
  "client_secret": "7EnXcr8NdbhCKjMa0QtnbVOvhzyV4doOYKiXp5MDylM",
  "client_name": "OpenActive Test Suite Client",
  "client_uri": "https://github.com/openactive/openactive-test-suite",
  "initiate_login_uri": null,
  "logo_uri": "https://via.placeholder.com/512x256.png?text=Logo",
  "grant_types": [
    "authorization_code",
    "refresh_token",
    "client_credentials"
  ],
  "redirect_uris": [
    "http://localhost:3000/cb"
  ],
  "scope": "openid profile openactive-openbooking openactive-ordersfeed oauth-dymamic-client-update openactive-identity"
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
  "authorizationUrl": "https://localhost:5003/connect/authorize?client_id=5eefb293-b902-4d09-bcca-78326cadffeb&scope=openid%20openactive-openbooking%20offline_access%20openactive-identity&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcb&code_challenge=q55WiWJR1GFK16xDncVW5na8lziC8dMGl8QhXrtQ-l8&code_challenge_method=S256"
}
```

---


#### Screenshot: Login page
```json
"https://localhost:5003/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3D5eefb293-b902-4d09-bcca-78326cadffeb%26scope%3Dopenid%2520openactive-openbooking%2520offline_access%2520openactive-identity%26response_type%3Dcode%26redirect_uri%3Dhttp%253A%252F%252Flocalhost%253A3000%252Fcb%26code_challenge%3Dq55WiWJR1GFK16xDncVW5na8lziC8dMGl8QhXrtQ-l8%26code_challenge_method%3DS256"
```

![Screenshot: Login page](data:image/png;base64,[object Promise])


#### Screenshot: Authorization page
```json
"https://localhost:5003/consent?returnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3D5eefb293-b902-4d09-bcca-78326cadffeb%26scope%3Dopenid%2520openactive-openbooking%2520offline_access%2520openactive-identity%26response_type%3Dcode%26redirect_uri%3Dhttp%253A%252F%252Flocalhost%253A3000%252Fcb%26code_challenge%3Dq55WiWJR1GFK16xDncVW5na8lziC8dMGl8QhXrtQ-l8%26code_challenge_method%3DS256"
```

![Screenshot: Authorization page](data:image/png;base64,[object Promise])


#### Callback URL
```json
"/cb?code=A49B5291D2B27BDF5EFE8C1D50A10E8D96D73F6D27FD16E3B580B203D6987644&scope=openid%20openactive-openbooking%20offline_access%20openactive-identity&session_state=DfP3Y8nAGOf4A3yReV1ajInmyPZXBtmLNUog1LQZobw.D4B1C7C74DD38802A2AFD0D68E029100"
```


### Authorization Code Flow - 2 Request
POST https://localhost:5003/connect/token

* **authorization:** `"Basic NWVlZmIyOTMtYjkwMi00ZDA5LWJjY2EtNzgzMjZjYWRmZmViOjdFblhjcjhOZGJoQ0tqTWEwUXRuYlZPdmh6eVY0ZG9PWUtpWHA1TUR5bE0="`
* **accept:** `"application/json"`
* **content-type:** `"application/x-www-form-urlencoded"`
* **content-length:** `"205"`
* **accept-encoding:** `"gzip, deflate, br"`
* **host:** `"localhost:5003"`

```json
"grant_type=authorization_code&code=A49B5291D2B27BDF5EFE8C1D50A10E8D96D73F6D27FD16E3B580B203D6987644&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcb&code_verifier=H3rjVI1DbLNZC1NSFMYpg_zPqpl_ALk2ccUPFdhQCWc"
```

---
Response status code: 200.
```json
{
  "id_token": "eyJhbGciOiJSUzI1NiIsImtpZCI6IkIwNEY3QjkxREUzQjk0NzhDNjE4MzNGQjI0QUE1Q0RCIiwidHlwIjoiSldUIn0.eyJuYmYiOjE2NTg0ODY4NDIsImV4cCI6MTY1ODQ4NzE0MiwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NTAwMyIsImF1ZCI6IjVlZWZiMjkzLWI5MDItNGQwOS1iY2NhLTc4MzI2Y2FkZmZlYiIsImlhdCI6MTY1ODQ4Njg0MiwiYXRfaGFzaCI6IlRTa2RmaXpDYl9IVk9EQi1oWVlqVWciLCJzaWQiOiIyMUY4QkEzRkE3RDA5N0NERUY3Q0FCRDM2MTExRTFBOCIsInN1YiI6IjEwMCIsImF1dGhfdGltZSI6MTY1ODQ4Njg0MiwiaWRwIjoibG9jYWwiLCJodHRwczovL29wZW5hY3RpdmUuaW8vc2VsbGVyTmFtZSI6IkFjbWUgRml0bmVzcyBMdGQiLCJodHRwczovL29wZW5hY3RpdmUuaW8vc2VsbGVySWQiOiJodHRwczovL2xvY2FsaG9zdDo1MDAxL2FwaS9pZGVudGlmaWVycy9zZWxsZXJzLzEiLCJodHRwczovL29wZW5hY3RpdmUuaW8vc2VsbGVyVXJsIjoiaHR0cHM6Ly93d3cuZXhhbXBsZS5jb20iLCJodHRwczovL29wZW5hY3RpdmUuaW8vc2VsbGVyTG9nbyI6Imh0dHBzOi8vcGxhY2VraXR0ZW4uY29tLzY0MC8zNjAiLCJhbXIiOlsicHdkIl19.SywBZaku-UwH2bDn_-0vbEa8xfvTzh1uaXlkbcVqknfIG9q6axC4l3DO7vv-QLlDygTLArqTcoOEGwH6nXQA7Svj992r88Esiilxh9OuJF-tVcLlhV-lCbeqRO8FlvasHVVvAwK3VAIdr_CfTK0YRq4EDI9wEpgEU0iOnw9oycDnAUA2vtbJsSDROY0xmQRA2iF-0ntXcoDXn0I1wpZsC489t-V9UGpWSWbYOWr_heCff6oB7aVK9zME9MJrF-gxMzqBcjutwL8IWtQw7IBiJk-1pWG7_F4YdEMLfy0LEtcODOhpgaH5nxEBmyq_pzlFS7uXk9_Uzndpe_pvPYL7vQ",
  "access_token": "eyJhbGciOiJSUzI1NiIsImtpZCI6IkIwNEY3QjkxREUzQjk0NzhDNjE4MzNGQjI0QUE1Q0RCIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2NTg0ODY4NDIsImV4cCI6MTY1ODQ5MDQ0MiwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NTAwMyIsImF1ZCI6Im9wZW5ib29raW5nIiwiY2xpZW50X2lkIjoiNWVlZmIyOTMtYjkwMi00ZDA5LWJjY2EtNzgzMjZjYWRmZmViIiwiaHR0cHM6Ly9vcGVuYWN0aXZlLmlvL2NsaWVudElkIjoiNWVlZmIyOTMtYjkwMi00ZDA5LWJjY2EtNzgzMjZjYWRmZmViIiwic3ViIjoiMTAwIiwiYXV0aF90aW1lIjoxNjU4NDg2ODQyLCJpZHAiOiJsb2NhbCIsImh0dHBzOi8vb3BlbmFjdGl2ZS5pby9zZWxsZXJJZCI6Imh0dHBzOi8vbG9jYWxob3N0OjUwMDEvYXBpL2lkZW50aWZpZXJzL3NlbGxlcnMvMSIsImp0aSI6IkQyMDhBRDBDMUYyMjgxNjM1NDIyNzJGOEZGMjUyRUQ5Iiwic2lkIjoiMjFGOEJBM0ZBN0QwOTdDREVGN0NBQkQzNjExMUUxQTgiLCJpYXQiOjE2NTg0ODY4NDIsInNjb3BlIjpbIm9wZW5pZCIsIm9wZW5hY3RpdmUtb3BlbmJvb2tpbmciLCJvcGVuYWN0aXZlLWlkZW50aXR5Iiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbInB3ZCJdfQ.o2_TxQrSjfIeoBlbhJI-Dfc-yygdN2HyaDlrAWB3gy8zDARAVIQmMTQ4UrrIvZI4-p5B8HRv2i4csIat5B3JEyijEdlLNTLtSNuIhUVzcBR3fz1HVhi4-FxP7sK7GBKNr27qMVCcUhmvbfx_a7rKW8yDIkuMWFT9fsR3SaU_EBXyH4hqY1Mvr2jrtlxlsaiEx7n7PvHnB30n1T8EhH50eLrJYJbvVqRUtA0jaZv30604jOtlofaIU-D6cmZ5w9IdO7EEGL3xmqxY5CyhsblAzlseK5Sts_V2IcI-4eV0bdsrXU19Rgy_z_Z52Ovk1M2fG0XTUC8dyt_e7oikhMC6Dg",
  "expires_in": 3600,
  "token_type": "Bearer",
  "refresh_token": "0F36FBBE0AF515EF7BB94073777503325F673CE9EF8D8810F6FA5153BEB94B09",
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
  "nbf": 1658486842,
  "exp": 1658487142,
  "iss": "https://localhost:5003",
  "aud": "5eefb293-b902-4d09-bcca-78326cadffeb",
  "iat": 1658486842,
  "at_hash": "TSkdfizCb_HVODB-hYYjUg",
  "sid": "21F8BA3FA7D097CDEF7CABD36111E1A8",
  "sub": "100",
  "auth_time": 1658486842,
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

* **authorization:** `"Basic NWVlZmIyOTMtYjkwMi00ZDA5LWJjY2EtNzgzMjZjYWRmZmViOjdFblhjcjhOZGJoQ0tqTWEwUXRuYlZPdmh6eVY0ZG9PWUtpWHA1TUR5bE0="`
* **accept:** `"application/json"`
* **content-type:** `"application/x-www-form-urlencoded"`
* **content-length:** `"103"`
* **accept-encoding:** `"gzip, deflate, br"`
* **host:** `"localhost:5003"`

```json
"grant_type=refresh_token&refresh_token=0F36FBBE0AF515EF7BB94073777503325F673CE9EF8D8810F6FA5153BEB94B09"
```

---
Response status code: 200.
```json
{
  "id_token": "eyJhbGciOiJSUzI1NiIsImtpZCI6IkIwNEY3QjkxREUzQjk0NzhDNjE4MzNGQjI0QUE1Q0RCIiwidHlwIjoiSldUIn0.eyJuYmYiOjE2NTg0ODY4NDIsImV4cCI6MTY1ODQ4NzE0MiwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NTAwMyIsImF1ZCI6IjVlZWZiMjkzLWI5MDItNGQwOS1iY2NhLTc4MzI2Y2FkZmZlYiIsImlhdCI6MTY1ODQ4Njg0MiwiYXRfaGFzaCI6Ilh2UG9XczRyVVU4d1ZsSHJWU0llMHciLCJzdWIiOiIxMDAiLCJhdXRoX3RpbWUiOjE2NTg0ODY4NDIsImlkcCI6ImxvY2FsIiwiaHR0cHM6Ly9vcGVuYWN0aXZlLmlvL3NlbGxlck5hbWUiOiJBY21lIEZpdG5lc3MgTHRkIiwiaHR0cHM6Ly9vcGVuYWN0aXZlLmlvL3NlbGxlcklkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NTAwMS9hcGkvaWRlbnRpZmllcnMvc2VsbGVycy8xIiwiaHR0cHM6Ly9vcGVuYWN0aXZlLmlvL3NlbGxlclVybCI6Imh0dHBzOi8vd3d3LmV4YW1wbGUuY29tIiwiaHR0cHM6Ly9vcGVuYWN0aXZlLmlvL3NlbGxlckxvZ28iOiJodHRwczovL3BsYWNla2l0dGVuLmNvbS82NDAvMzYwIiwiYW1yIjpbInB3ZCJdfQ.ohPzxMgEwiIFvMKg17mIHOJ5cgZuXyvYqrKiidrpWNtpUNgjjYzqiv6jQYS9AvuWMt9XUllFmVGOwo_fjLOEpiEHBzOZr0qSSL2oMOd9vShWoNcyS2kNk3-T0gqe9tmWb5mfa2tDmk0JgbopFB_MMC65hW27KaXuMBVdvQxBFiZbZkY55c7DXpJp954YiuwqxVT5BwCTBxlQokj_KlnmEoEqxG9Y-o9-JVCxqzHOk8ScAmpySTHnotiUeSAiUbHWv01bKRh2oLim3_AHFU4npo6hHZOO6MgnbgLTdhOsq5lzBNF2ees8L76SfinNIn58-aLR_ML7kxq1kFfA_vjkKg",
  "access_token": "eyJhbGciOiJSUzI1NiIsImtpZCI6IkIwNEY3QjkxREUzQjk0NzhDNjE4MzNGQjI0QUE1Q0RCIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2NTg0ODY4NDIsImV4cCI6MTY1ODQ5MDQ0MiwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NTAwMyIsImF1ZCI6Im9wZW5ib29raW5nIiwiY2xpZW50X2lkIjoiNWVlZmIyOTMtYjkwMi00ZDA5LWJjY2EtNzgzMjZjYWRmZmViIiwiaHR0cHM6Ly9vcGVuYWN0aXZlLmlvL2NsaWVudElkIjoiNWVlZmIyOTMtYjkwMi00ZDA5LWJjY2EtNzgzMjZjYWRmZmViIiwic3ViIjoiMTAwIiwiYXV0aF90aW1lIjoxNjU4NDg2ODQyLCJpZHAiOiJsb2NhbCIsImh0dHBzOi8vb3BlbmFjdGl2ZS5pby9zZWxsZXJJZCI6Imh0dHBzOi8vbG9jYWxob3N0OjUwMDEvYXBpL2lkZW50aWZpZXJzL3NlbGxlcnMvMSIsImp0aSI6IkE5RDk1RDE4QkNDNEZCOUI5QUEzODM3MzBDMzk3MjIyIiwiaWF0IjoxNjU4NDg2ODQyLCJzY29wZSI6WyJvcGVuaWQiLCJvcGVuYWN0aXZlLW9wZW5ib29raW5nIiwib3BlbmFjdGl2ZS1pZGVudGl0eSIsIm9mZmxpbmVfYWNjZXNzIl0sImFtciI6WyJwd2QiXX0.r0IIfDn7LIEsMzsCq8S3KCkbv1OCZ-u2cO4qEsiBdFL68vB2OOgRWDXlvY9O5fI0gBhBIE_pGkUBcJrAAsvAwc9ogZkOQt8mv8TTGRifWVWWQ7zvg79tauf9lYOJ4dbzxsIu5LboVY6_CN2g7V-iufFMb9J16fvV6CBixNShGs1tQn3MC48mlNHb5cFIVmHQKSXmBfVBMASl9xrgLzvV1i4IB17tbFbJFVL7s3vr30pYC5QzOwBrsBoQ92G2Ws-37hKBC501C61nZAfYACrsjO00sBy4wuk1edaPYn4SdHJA2bRbLwNOI9zWAbczKyFis68psS94IwoZtkbg4DNhEA",
  "expires_in": 3600,
  "token_type": "Bearer",
  "refresh_token": "DB015BDA0AA54A5BC59FD5A14EF84C4B64314465033621C5046D7A9D928A163F",
  "scope": "openid openactive-openbooking openactive-identity offline_access"
}
```
### Specs
* ✅ should complete Discovery successfully
* ✅ should complete Dynamic Client Registration successfully
* ✅ should complete Authorization Code Flow successfully
* ✅ should include expected `https://openactive.io/sellerId` claim in `id_token`
* ✅ should return claims within `id_token` as defined in specification
* ✅ should require a consent prompt for Authorization Code Flow
* ✅ should complete token refresh successfully


