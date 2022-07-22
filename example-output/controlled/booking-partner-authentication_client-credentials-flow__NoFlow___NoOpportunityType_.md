[< Return to Summary](summary.md) | File Generated: Fri Jul 22 2022 10:49:14 GMT+0000 (Coordinated Universal Time)

# booking-partner-authentication >> client-credentials-flow

**Booking Flow:** 

**Opportunity Type:** 

**Feature:** Authentication / Booking Partner Authentication for Multiple Seller Systems (Implemented) 

**Test:**  Client Credentials Flow and Access Orders Feed

...

### Running only this test

```bash
npm start -- --runInBand test/features/authentication/booking-partner-authentication/implemented/client-credentials-flow-test.js
```

---

✅ 2 passed with 0 failures, 0 warnings and 0 suggestions 

---


## Open ID Connect Authentication

### Credentials


The test suite is using the credentials below for this test:
* **clientId**: `62b4f72e-fbf9-4994-9d44-bd953099e134`
* **clientSecret**: `ei5AF8RN3DgUA5jkzH03KitZOtdKnDpzOax5zppK3jM`

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

### Client Credentials Flow Request
POST https://localhost:5003/connect/token

* **authorization:** `"Basic NjJiNGY3MmUtZmJmOS00OTk0LTlkNDQtYmQ5NTMwOTllMTM0OmVpNUFGOFJOM0RnVUE1amt6SDAzS2l0Wk90ZEtuRHB6T2F4NXpwcEszak0="`
* **accept:** `"application/json"`
* **content-type:** `"application/x-www-form-urlencoded"`
* **content-length:** `"57"`
* **accept-encoding:** `"gzip, deflate, br"`
* **host:** `"localhost:5003"`

```json
"grant_type=client_credentials&scope=openactive-ordersfeed"
```

---
Response status code: 200.
```json
{
  "access_token": "eyJhbGciOiJSUzI1NiIsImtpZCI6IkIwNEY3QjkxREUzQjk0NzhDNjE4MzNGQjI0QUE1Q0RCIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2NTg0ODY5NTQsImV4cCI6MTY1ODQ5MDU1NCwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NTAwMyIsImF1ZCI6Im9wZW5ib29raW5nIiwiY2xpZW50X2lkIjoiNjJiNGY3MmUtZmJmOS00OTk0LTlkNDQtYmQ5NTMwOTllMTM0IiwiaHR0cHM6Ly9vcGVuYWN0aXZlLmlvL2NsaWVudElkIjoiNjJiNGY3MmUtZmJmOS00OTk0LTlkNDQtYmQ5NTMwOTllMTM0IiwianRpIjoiMEU2RTVCRDVFNUU2MUVGM0QyNzQ4MURCQUQ5QjYwNzAiLCJpYXQiOjE2NTg0ODY5NTQsInNjb3BlIjpbIm9wZW5hY3RpdmUtb3JkZXJzZmVlZCJdfQ.bZmqAOp0kMEViNSZGCnah3CH3IKBGpaGItCsaDcGcu5kN5bc_rgAwuv-u8NjiV2asMUbBAmlMcWR4d2UpB3LWPF0o_DXXYN8Lchc4ENIRlMRoyQDC0-UsU8jEYXAACxxOPaHmbUES0wv-5V15cfDWpkQSbiuDZ5Xg5mzthvahR8E270bVbvhNU_C_ULcNYrsw0Xap0XLiW_CzLHyWyc7J8q0iGcBQH6qUOpPaU9cdFYwX6BnEjeA-Len-wcOd_MomA2QnT_55pesiHQhn0pDaV9S4wvuIb10dnlD709nuSFZ10bCHYiNAwt6UNwwmVMOHZ7zoKXg4KdmurJ8zwPcEg",
  "expires_in": 3600,
  "token_type": "Bearer",
  "scope": "openactive-ordersfeed"
}
```
### Specs
* ✅ should complete Discovery successfully
* ✅ should complete Client Credentials Flow successfully


