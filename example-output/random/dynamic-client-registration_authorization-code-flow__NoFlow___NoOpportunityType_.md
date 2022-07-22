[< Return to Summary](summary.md) | File Generated: Fri Jul 22 2022 10:48:58 GMT+0000 (Coordinated Universal Time)

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
  "client_id": "edf1cbfa-0b29-4079-b99b-c7ab8fe33ec7",
  "client_secret": "rA8IqlJvbNY92CKujzjfbRU6c73rFcFUmwaXkzNW5qC",
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
  "authorizationUrl": "https://localhost:5003/connect/authorize?client_id=edf1cbfa-0b29-4079-b99b-c7ab8fe33ec7&scope=openid%20openactive-openbooking%20offline_access%20openactive-identity&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcb&code_challenge=D1tZYdcJbQrO8E913Hs1CFlh1z4VpW8gSGdg0ve9aQU&code_challenge_method=S256"
}
```

---


#### Screenshot: Login page
```json
"https://localhost:5003/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dedf1cbfa-0b29-4079-b99b-c7ab8fe33ec7%26scope%3Dopenid%2520openactive-openbooking%2520offline_access%2520openactive-identity%26response_type%3Dcode%26redirect_uri%3Dhttp%253A%252F%252Flocalhost%253A3000%252Fcb%26code_challenge%3DD1tZYdcJbQrO8E913Hs1CFlh1z4VpW8gSGdg0ve9aQU%26code_challenge_method%3DS256"
```

![Screenshot: Login page](data:image/png;base64,[object Promise])


#### Screenshot: Authorization page
```json
"https://localhost:5003/consent?returnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dedf1cbfa-0b29-4079-b99b-c7ab8fe33ec7%26scope%3Dopenid%2520openactive-openbooking%2520offline_access%2520openactive-identity%26response_type%3Dcode%26redirect_uri%3Dhttp%253A%252F%252Flocalhost%253A3000%252Fcb%26code_challenge%3DD1tZYdcJbQrO8E913Hs1CFlh1z4VpW8gSGdg0ve9aQU%26code_challenge_method%3DS256"
```

![Screenshot: Authorization page](data:image/png;base64,[object Promise])


#### Callback URL
```json
"/cb?code=C10FFD9B8BBA115D2847A5850F27C7E18431C8E441A7CF8E64DB565C7A37D5CD&scope=openid%20openactive-openbooking%20offline_access%20openactive-identity&session_state=2xz_Q0Hd2cXHzC2DKh6E3R2E6Ir1XOOhGj07HOSDIT4.EA95B900CAC7A56B1D6A3E965FA5F722"
```


### Authorization Code Flow - 2 Request
POST https://localhost:5003/connect/token

* **authorization:** `"Basic ZWRmMWNiZmEtMGIyOS00MDc5LWI5OWItYzdhYjhmZTMzZWM3OnJBOElxbEp2Yk5ZOTJDS3VqempmYlJVNmM3M3JGY0ZVbXdhWGt6Tlc1cUM="`
* **accept:** `"application/json"`
* **content-type:** `"application/x-www-form-urlencoded"`
* **content-length:** `"205"`
* **accept-encoding:** `"gzip, deflate, br"`
* **host:** `"localhost:5003"`

```json
"grant_type=authorization_code&code=C10FFD9B8BBA115D2847A5850F27C7E18431C8E441A7CF8E64DB565C7A37D5CD&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcb&code_verifier=1KBYXIidPlBvZWrnRaetXzCrGWnOZ2LXwXkkylEy9XU"
```

---
Response status code: 200.
```json
{
  "id_token": "eyJhbGciOiJSUzI1NiIsImtpZCI6IkIwNEY3QjkxREUzQjk0NzhDNjE4MzNGQjI0QUE1Q0RCIiwidHlwIjoiSldUIn0.eyJuYmYiOjE2NTg0ODY5NDEsImV4cCI6MTY1ODQ4NzI0MSwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NTAwMyIsImF1ZCI6ImVkZjFjYmZhLTBiMjktNDA3OS1iOTliLWM3YWI4ZmUzM2VjNyIsImlhdCI6MTY1ODQ4Njk0MSwiYXRfaGFzaCI6Ilp4eTRwU09XdjhYOHVnQy1tQUxMRlEiLCJzaWQiOiI2NzI0OUFFMUU4MjI4RUY3NkQ5RUI3NEU0MEE1Q0IwMSIsInN1YiI6IjEwMCIsImF1dGhfdGltZSI6MTY1ODQ4Njk0MCwiaWRwIjoibG9jYWwiLCJodHRwczovL29wZW5hY3RpdmUuaW8vc2VsbGVyTmFtZSI6IkFjbWUgRml0bmVzcyBMdGQiLCJodHRwczovL29wZW5hY3RpdmUuaW8vc2VsbGVySWQiOiJodHRwczovL2xvY2FsaG9zdDo1MDAxL2FwaS9pZGVudGlmaWVycy9zZWxsZXJzLzEiLCJodHRwczovL29wZW5hY3RpdmUuaW8vc2VsbGVyVXJsIjoiaHR0cHM6Ly93d3cuZXhhbXBsZS5jb20iLCJodHRwczovL29wZW5hY3RpdmUuaW8vc2VsbGVyTG9nbyI6Imh0dHBzOi8vcGxhY2VraXR0ZW4uY29tLzY0MC8zNjAiLCJhbXIiOlsicHdkIl19.mhA8GErw25SkYA1uW1AiZisXS4I2Nbp4QRDzpePPv51adAueV5wui_PYQX25uOtS1B6c30GoU3XtJrPgRhzZA2O8IcjMYK3EqkGnmpVKaP956g3Xyz4ix9jNcrpkPJW758m2jcot9UAuWki_2KmajOSUxTtplVS9ZsYAk6Q0hnyJ-31tm5UGvOD1CycdtpaAqCoilex0hT65sWhuF9wAUJN2lLHERm-jsyeZH8NiKRt834SL9egSSPeGMBJqRatsKKvybcmAQOOZcejiuYGZl-_U8Z6h6-Pc47WqN-rckz4ho8cJ3LpSQCxnkzbQmCNNDYtkl9VTBqh2cveLPWk2VQ",
  "access_token": "eyJhbGciOiJSUzI1NiIsImtpZCI6IkIwNEY3QjkxREUzQjk0NzhDNjE4MzNGQjI0QUE1Q0RCIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2NTg0ODY5NDEsImV4cCI6MTY1ODQ5MDU0MSwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NTAwMyIsImF1ZCI6Im9wZW5ib29raW5nIiwiY2xpZW50X2lkIjoiZWRmMWNiZmEtMGIyOS00MDc5LWI5OWItYzdhYjhmZTMzZWM3IiwiaHR0cHM6Ly9vcGVuYWN0aXZlLmlvL2NsaWVudElkIjoiZWRmMWNiZmEtMGIyOS00MDc5LWI5OWItYzdhYjhmZTMzZWM3Iiwic3ViIjoiMTAwIiwiYXV0aF90aW1lIjoxNjU4NDg2OTQwLCJpZHAiOiJsb2NhbCIsImh0dHBzOi8vb3BlbmFjdGl2ZS5pby9zZWxsZXJJZCI6Imh0dHBzOi8vbG9jYWxob3N0OjUwMDEvYXBpL2lkZW50aWZpZXJzL3NlbGxlcnMvMSIsImp0aSI6IjQ0MDJFODYwNUU5ODdENjU0MzIxOTUyNDFFREE5NjcxIiwic2lkIjoiNjcyNDlBRTFFODIyOEVGNzZEOUVCNzRFNDBBNUNCMDEiLCJpYXQiOjE2NTg0ODY5NDEsInNjb3BlIjpbIm9wZW5pZCIsIm9wZW5hY3RpdmUtb3BlbmJvb2tpbmciLCJvcGVuYWN0aXZlLWlkZW50aXR5Iiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbInB3ZCJdfQ.c7eyTt7Ca0GBe95ynGHGFxDp3a6pHJQnAD9tKGPKh3DGEi9eBlfiQ1aYpWo4OZuvofLyYb3XHpm3KncKZ8rw2Nij-KlSP-VhnWvUjdFCxuY0KyZC9St7hzB_6BTaUXsXcJZJvzIKo94n3lDt-kN9hQdX_Nxw7jCZMc1nQ79YBDhAYBQadtS7eqONvkNXPBKJJxJwfnYUvIgu1gekOhVyx4fPcMMWw1aNrF44724kfXAET9AY9ivFOE51gwQO79W84IcQiGag5xMYKk9gb7_DWO47KTlPm2I9FuxVzDJVRF7yPBj6-zkppBKvfdyDNy0XBYKAxis9sPkGd_iS_8Nkng",
  "expires_in": 3600,
  "token_type": "Bearer",
  "refresh_token": "DF1A5DB1318E5D29FB729E9E6B496078FB1399F83BD530AF609E7C90B5523B9E",
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
  "nbf": 1658486941,
  "exp": 1658487241,
  "iss": "https://localhost:5003",
  "aud": "edf1cbfa-0b29-4079-b99b-c7ab8fe33ec7",
  "iat": 1658486941,
  "at_hash": "Zxy4pSOWv8X8ugC-mALLFQ",
  "sid": "67249AE1E8228EF76D9EB74E40A5CB01",
  "sub": "100",
  "auth_time": 1658486940,
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

* **authorization:** `"Basic ZWRmMWNiZmEtMGIyOS00MDc5LWI5OWItYzdhYjhmZTMzZWM3OnJBOElxbEp2Yk5ZOTJDS3VqempmYlJVNmM3M3JGY0ZVbXdhWGt6Tlc1cUM="`
* **accept:** `"application/json"`
* **content-type:** `"application/x-www-form-urlencoded"`
* **content-length:** `"103"`
* **accept-encoding:** `"gzip, deflate, br"`
* **host:** `"localhost:5003"`

```json
"grant_type=refresh_token&refresh_token=DF1A5DB1318E5D29FB729E9E6B496078FB1399F83BD530AF609E7C90B5523B9E"
```

---
Response status code: 200.
```json
{
  "id_token": "eyJhbGciOiJSUzI1NiIsImtpZCI6IkIwNEY3QjkxREUzQjk0NzhDNjE4MzNGQjI0QUE1Q0RCIiwidHlwIjoiSldUIn0.eyJuYmYiOjE2NTg0ODY5NDEsImV4cCI6MTY1ODQ4NzI0MSwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NTAwMyIsImF1ZCI6ImVkZjFjYmZhLTBiMjktNDA3OS1iOTliLWM3YWI4ZmUzM2VjNyIsImlhdCI6MTY1ODQ4Njk0MSwiYXRfaGFzaCI6InBzQ05qSGlKMlFEMWRPUkVqYnFJakEiLCJzdWIiOiIxMDAiLCJhdXRoX3RpbWUiOjE2NTg0ODY5NDAsImlkcCI6ImxvY2FsIiwiaHR0cHM6Ly9vcGVuYWN0aXZlLmlvL3NlbGxlck5hbWUiOiJBY21lIEZpdG5lc3MgTHRkIiwiaHR0cHM6Ly9vcGVuYWN0aXZlLmlvL3NlbGxlcklkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NTAwMS9hcGkvaWRlbnRpZmllcnMvc2VsbGVycy8xIiwiaHR0cHM6Ly9vcGVuYWN0aXZlLmlvL3NlbGxlclVybCI6Imh0dHBzOi8vd3d3LmV4YW1wbGUuY29tIiwiaHR0cHM6Ly9vcGVuYWN0aXZlLmlvL3NlbGxlckxvZ28iOiJodHRwczovL3BsYWNla2l0dGVuLmNvbS82NDAvMzYwIiwiYW1yIjpbInB3ZCJdfQ.VWwXgGPWcR4Y6Q4fSfe5m_Oirs9dybQXsutiJsejjNjbkmWQ0sbWjx1EAsnKx7udoEviHe6CgnytIevYvGsIE0tYv4W3eUJOWINBhhYrnUL5pmpjyiaRA0a7Kkn50t5huI4-R3s6ItwOuvomqXpPBeNTbMIkyK07Xo3h76hrZ-t-ylxPrN4Lp0CxN52PnheNidG2f5bFU91x-QL9cH7d8sW9PmfbJSv8eO3-syMjjyQbq_G9sBnMwAssGiqjy2R_iydPYP9lGonIUCdiIazeP5C4948ZiCU7XG93hs_69jXw88Ci_ZQPRiqT5qbR7ReEAN6Qmw_sOGG_iRGSakhiMg",
  "access_token": "eyJhbGciOiJSUzI1NiIsImtpZCI6IkIwNEY3QjkxREUzQjk0NzhDNjE4MzNGQjI0QUE1Q0RCIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2NTg0ODY5NDEsImV4cCI6MTY1ODQ5MDU0MSwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NTAwMyIsImF1ZCI6Im9wZW5ib29raW5nIiwiY2xpZW50X2lkIjoiZWRmMWNiZmEtMGIyOS00MDc5LWI5OWItYzdhYjhmZTMzZWM3IiwiaHR0cHM6Ly9vcGVuYWN0aXZlLmlvL2NsaWVudElkIjoiZWRmMWNiZmEtMGIyOS00MDc5LWI5OWItYzdhYjhmZTMzZWM3Iiwic3ViIjoiMTAwIiwiYXV0aF90aW1lIjoxNjU4NDg2OTQwLCJpZHAiOiJsb2NhbCIsImh0dHBzOi8vb3BlbmFjdGl2ZS5pby9zZWxsZXJJZCI6Imh0dHBzOi8vbG9jYWxob3N0OjUwMDEvYXBpL2lkZW50aWZpZXJzL3NlbGxlcnMvMSIsImp0aSI6Ijk5QUMyMUFDQzREQzc0Qzg3RjRCNDFFNDdBOEI3RTA5IiwiaWF0IjoxNjU4NDg2OTQxLCJzY29wZSI6WyJvcGVuaWQiLCJvcGVuYWN0aXZlLW9wZW5ib29raW5nIiwib3BlbmFjdGl2ZS1pZGVudGl0eSIsIm9mZmxpbmVfYWNjZXNzIl0sImFtciI6WyJwd2QiXX0.b86NbEnrBR9uDAPhrOE1WEuvbwOi5atkTEEphfbaJ5x6rFHd6G6ZNpnk8jGdfa2OY5VlUGk5A3EKM2B5bSODOtHktw_S6eaUvip84YLedw16Nt2ohmjASem2k3dsWkA26zlLH_SYsWLgdJt_q4QE-t8e48KFVNEE0b_ZLv31GPvOjAMeyafYr9ovtxx-dri1w5LnhO6G-z9OHM3oavcH6hI8DdaSncEUcv5jbKNfiCKlg6GUxQ--rs0GYjGbjNVP29JSHg9xDIpr9-yJUIS8RSeyVT-z--o5gcPGbjJ_6LhYyeLibpAd9SMNoIijsshrHEeJpkiTmmbcFtZ-840BLg",
  "expires_in": 3600,
  "token_type": "Bearer",
  "refresh_token": "EC5DEF77F5CE1A1972875C161DCDF3C17AECC05D8E15B34C52DF82B390A1BF83",
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


