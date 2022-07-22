[< Return to Summary](summary.md) | File Generated: Fri Jul 22 2022 10:44:39 GMT+0000 (Coordinated Universal Time)

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
  "authorizationUrl": "https://localhost:5003/connect/authorize?client_id=clientid_801&scope=openid%20openactive-identity&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcb&code_challenge=HSg79CMQtPq0D0Ns3ZOsOi-XjdjfkFSbsTRM_gDjvmg&code_challenge_method=S256"
}
```

---


#### Screenshot: Login page
```json
"https://localhost:5003/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dclientid_801%26scope%3Dopenid%2520openactive-identity%26response_type%3Dcode%26redirect_uri%3Dhttp%253A%252F%252Flocalhost%253A3000%252Fcb%26code_challenge%3DHSg79CMQtPq0D0Ns3ZOsOi-XjdjfkFSbsTRM_gDjvmg%26code_challenge_method%3DS256"
```

![Screenshot: Login page](data:image/png;base64,[object Promise])


#### Screenshot: Authorization page
```json
"https://localhost:5003/consent?returnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dclientid_801%26scope%3Dopenid%2520openactive-identity%26response_type%3Dcode%26redirect_uri%3Dhttp%253A%252F%252Flocalhost%253A3000%252Fcb%26code_challenge%3DHSg79CMQtPq0D0Ns3ZOsOi-XjdjfkFSbsTRM_gDjvmg%26code_challenge_method%3DS256"
```

![Screenshot: Authorization page](data:image/png;base64,[object Promise])


#### Callback URL
```json
"/cb?code=A38A171C7B5037BAE66A88BDDF22D38CC7468BAE36B751F5641919A8461266CA&scope=openid%20openactive-identity&session_state=qlB8xTNnAgyaTzzJlLppW4W8fACcSAQkem1qqLA3zFk.7F899C17A1668E9558FEACD0D2A2E752"
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
"grant_type=authorization_code&code=A38A171C7B5037BAE66A88BDDF22D38CC7468BAE36B751F5641919A8461266CA&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcb&code_verifier=BTKyv9R6kqhroqaG3FyzKmZgCxWvC_J2QGA18L61rwI"
```

---
Response status code: 200.
```json
{
  "id_token": "eyJhbGciOiJSUzI1NiIsImtpZCI6IkIwNEY3QjkxREUzQjk0NzhDNjE4MzNGQjI0QUE1Q0RCIiwidHlwIjoiSldUIn0.eyJuYmYiOjE2NTg0ODY2ODIsImV4cCI6MTY1ODQ4Njk4MiwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NTAwMyIsImF1ZCI6ImNsaWVudGlkXzgwMSIsImlhdCI6MTY1ODQ4NjY4MiwiYXRfaGFzaCI6IlQ1bHRHMzRienh1NDJnbktxVzRwWVEiLCJzaWQiOiI5RTE4RDYzOUU5MUEzQ0Y4ODQ0QjE0N0Q3QkJENDlEQSIsInN1YiI6IjEwMCIsImF1dGhfdGltZSI6MTY1ODQ4NjY4MSwiaWRwIjoibG9jYWwiLCJodHRwczovL29wZW5hY3RpdmUuaW8vc2VsbGVyTmFtZSI6IkFjbWUgRml0bmVzcyBMdGQiLCJodHRwczovL29wZW5hY3RpdmUuaW8vc2VsbGVySWQiOiJodHRwczovL2xvY2FsaG9zdDo1MDAxL2FwaS9pZGVudGlmaWVycy9zZWxsZXJzLzEiLCJodHRwczovL29wZW5hY3RpdmUuaW8vc2VsbGVyVXJsIjoiaHR0cHM6Ly93d3cuZXhhbXBsZS5jb20iLCJodHRwczovL29wZW5hY3RpdmUuaW8vc2VsbGVyTG9nbyI6Imh0dHBzOi8vcGxhY2VraXR0ZW4uY29tLzY0MC8zNjAiLCJhbXIiOlsicHdkIl19.uj23qI4G7bWW4IjeSc8n40s-0eSiTbSR-y00Nmj6HVrOZbju3_bKJPT38ztoOdh-2Mhl7RsRX7sT5kJghVJNXPMvdmgptZybr8uztY16WvbqUxT4HLTtJj8QPlvEXsGH2KxMgG-OGsXUH5-l6yHVl2sJNwv2-XaNGM0z_efLc5akDqcR1Q6RmHQDoYjb2nJ9h4HUx_-p-8QdMZw1EofVSsVKm_Z8XC71_v7ItpZ7w4X0Nlj6qxyaGO1oxRZPxeC_SRK5kvwH6SgmU3SVc7VxvIxqFV2O05sbKcexNhrg8RAS5ZufFqQHdxX0KFoh5ItPOsxV2YIasBmbLzHJF4GyeA",
  "access_token": "eyJhbGciOiJSUzI1NiIsImtpZCI6IkIwNEY3QjkxREUzQjk0NzhDNjE4MzNGQjI0QUE1Q0RCIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2NTg0ODY2ODIsImV4cCI6MTY1ODQ5MDI4MiwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NTAwMyIsImNsaWVudF9pZCI6ImNsaWVudGlkXzgwMSIsImh0dHBzOi8vb3BlbmFjdGl2ZS5pby9jbGllbnRJZCI6ImNsaWVudGlkXzgwMSIsInN1YiI6IjEwMCIsImF1dGhfdGltZSI6MTY1ODQ4NjY4MSwiaWRwIjoibG9jYWwiLCJqdGkiOiJGMjBDRTM1NUMxMjMyM0U5REUxQUM0MjJCMzUxQUQ4NCIsInNpZCI6IjlFMThENjM5RTkxQTNDRjg4NDRCMTQ3RDdCQkQ0OURBIiwiaWF0IjoxNjU4NDg2NjgyLCJzY29wZSI6WyJvcGVuaWQiLCJvcGVuYWN0aXZlLWlkZW50aXR5Il0sImFtciI6WyJwd2QiXX0.BOtmYHeALi9TIz_czrGWMyqY6o91rT56M8yTUmITpnOszJXyQ3LfZPOO8elM1tbEAhG2IFkkuSwaqW_tLj9xuWD8k1jKZIG8_qO2Bb1ojSI0H9WvMQR4yRlJO5IMZ99Dp_SY8qLhnP9IhotrUG5sO1pQl7V0gkTQmrZJiyEAldNgC74FycBS4ZwB0_hn8PgP5Cnxc4M4qOHrPuSpUfNjMlU1rEkpq2P3jZg5KdXfbOYLr08v-GbQrFoXDxWrObGNNJ5jYEQzk6xVqgR_8mIoOU5-ig1qAqWjO0kpTVPFbbDOED-mmzjYtCUigegk8aCRSCPoul1HNs-CjY6_iXkpZA",
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
  "nbf": 1658486682,
  "exp": 1658486982,
  "iss": "https://localhost:5003",
  "aud": "clientid_801",
  "iat": 1658486682,
  "at_hash": "T5ltG34bzxu42gnKqW4pYQ",
  "sid": "9E18D639E91A3CF8844B147D7BBD49DA",
  "sub": "100",
  "auth_time": 1658486681,
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
  "authorizationUrl": "https://localhost:5003/connect/authorize?client_id=clientid_801&scope=openid%20openactive-identity&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcb&code_challenge=C6rNY0TdKqk8WIgWcMLHHLIWh6QoTJg74xqHgETWblw&code_challenge_method=S256"
}
```

---


#### Screenshot: Login page
```json
"https://localhost:5003/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dclientid_801%26scope%3Dopenid%2520openactive-identity%26response_type%3Dcode%26redirect_uri%3Dhttp%253A%252F%252Flocalhost%253A3000%252Fcb%26code_challenge%3DC6rNY0TdKqk8WIgWcMLHHLIWh6QoTJg74xqHgETWblw%26code_challenge_method%3DS256"
```

![Screenshot: Login page](data:image/png;base64,[object Promise])


#### Callback URL
```json
"/cb?code=043FDCFE67067C4D5E7AC1563A7DBED763DD5B5CB02E345C611E5B61034D7326&scope=openid%20openactive-identity&session_state=yDbJqhYPBZN1vuRWjncEjuWoVNrIcYsPlPJ8StA24hw.AB850AC3C5732F3CA5AE32223ED1D77B"
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
"grant_type=authorization_code&code=043FDCFE67067C4D5E7AC1563A7DBED763DD5B5CB02E345C611E5B61034D7326&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcb&code_verifier=Q01WIGrmjJ1uAiyqvP-xRIl_x1Vq5Vhhq4plAav1ha8"
```

---
Response status code: 200.
```json
{
  "id_token": "eyJhbGciOiJSUzI1NiIsImtpZCI6IkIwNEY3QjkxREUzQjk0NzhDNjE4MzNGQjI0QUE1Q0RCIiwidHlwIjoiSldUIn0.eyJuYmYiOjE2NTg0ODY2ODMsImV4cCI6MTY1ODQ4Njk4MywiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NTAwMyIsImF1ZCI6ImNsaWVudGlkXzgwMSIsImlhdCI6MTY1ODQ4NjY4MywiYXRfaGFzaCI6IktJWFh5ZkVfd0NaUzg1RzVOd1k0VFEiLCJzaWQiOiI1Njc5ODIzRDIyRTlDNzYyODY3NUFFODAxQTFEOUNEMyIsInN1YiI6IjEwMCIsImF1dGhfdGltZSI6MTY1ODQ4NjY4MywiaWRwIjoibG9jYWwiLCJodHRwczovL29wZW5hY3RpdmUuaW8vc2VsbGVyTmFtZSI6IkFjbWUgRml0bmVzcyBMdGQiLCJodHRwczovL29wZW5hY3RpdmUuaW8vc2VsbGVySWQiOiJodHRwczovL2xvY2FsaG9zdDo1MDAxL2FwaS9pZGVudGlmaWVycy9zZWxsZXJzLzEiLCJodHRwczovL29wZW5hY3RpdmUuaW8vc2VsbGVyVXJsIjoiaHR0cHM6Ly93d3cuZXhhbXBsZS5jb20iLCJodHRwczovL29wZW5hY3RpdmUuaW8vc2VsbGVyTG9nbyI6Imh0dHBzOi8vcGxhY2VraXR0ZW4uY29tLzY0MC8zNjAiLCJhbXIiOlsicHdkIl19.hMrTLAzpHyfdv-S42lpxw4nNHb2Uws0soLmeSaYWw3K9vMMiLRr2DirwEdWVyn4mKEyphoCw8npmljNvnkvtfYM2R8dnUbfaMflmQx3V5OawsrwHaOIjbG1Nbnw-fk1KMh5WjYayGLs5PAQSZ-P22BmSOPEajk2PXiyNq2bxO7ON3N_6qT1dfauVn-kxkvxp-vTl-YUcLW-FUptvElF7Q5LsgsUk_66gk35bFO8p14qtZ1_vcEexVudmOZjQhMg1VZMXQj23FD6DmWbAA6_6AZavqTRX02lnkBKHouWC8xqzrcqYpY0sFq0zPefaXn_wUqP-a5a_-7GrMdoRSJoh7A",
  "access_token": "eyJhbGciOiJSUzI1NiIsImtpZCI6IkIwNEY3QjkxREUzQjk0NzhDNjE4MzNGQjI0QUE1Q0RCIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2NTg0ODY2ODMsImV4cCI6MTY1ODQ5MDI4MywiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NTAwMyIsImNsaWVudF9pZCI6ImNsaWVudGlkXzgwMSIsImh0dHBzOi8vb3BlbmFjdGl2ZS5pby9jbGllbnRJZCI6ImNsaWVudGlkXzgwMSIsInN1YiI6IjEwMCIsImF1dGhfdGltZSI6MTY1ODQ4NjY4MywiaWRwIjoibG9jYWwiLCJqdGkiOiIzQTgyNTczMzk0MTc5RTg1MDRFRUZFQTM0NzNCNjRGQiIsInNpZCI6IjU2Nzk4MjNEMjJFOUM3NjI4Njc1QUU4MDFBMUQ5Q0QzIiwiaWF0IjoxNjU4NDg2NjgzLCJzY29wZSI6WyJvcGVuaWQiLCJvcGVuYWN0aXZlLWlkZW50aXR5Il0sImFtciI6WyJwd2QiXX0.wCl6NcRRvQoeULGmfRffSNd_iemUpmzwKj_EFTE-LGBlerE4F03pucgkry-BjwV87rG23aV3xT2GRb29p9pJjuaI2kNINAlS46JLECgPcj0Ludrfegm1zjvXcRbNwVGuUpPNcuIiGYDNHhusvO4dCqx6VG3qMavbDZyz_IhuIKVJEFokm3F0FseGfDxjwQ6wxxHH6wDfq2ZiReBGR69JCLbxNemYsQ8fHwrWOPkn1aDKRd9JddV60TKZHVZOHXDmb_k4YKvMOSNZ8oNijMX7f_uNy58SLodqFF0NVouIcpz41qX5vj3Fy9PxWllpkIOXvxE-XzmDQlhBhPkYuLkOLQ",
  "expires_in": 3600,
  "token_type": "Bearer",
  "scope": "openid openactive-identity"
}
```

### Authorization Code Flow (second attempt) - Claims Result

`id_token` claims:

```json
{
  "nbf": 1658486683,
  "exp": 1658486983,
  "iss": "https://localhost:5003",
  "aud": "clientid_801",
  "iat": 1658486683,
  "at_hash": "KIXXyfE_wCZS85G5NwY4TQ",
  "sid": "5679823D22E9C7628675AE801A1D9CD3",
  "sub": "100",
  "auth_time": 1658486683,
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


