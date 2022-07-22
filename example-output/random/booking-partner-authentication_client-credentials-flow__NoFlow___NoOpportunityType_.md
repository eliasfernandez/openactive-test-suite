[< Return to Summary](summary.md) | File Generated: Fri Jul 22 2022 10:51:01 GMT+0000 (Coordinated Universal Time)

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

### Client Credentials Flow Request
POST https://localhost:5003/connect/token

* **authorization:** `"Basic NTYwZGJjNzUtZTQ0Yy00YjAzLWExMGMtOTIxMTk3YWFlM2ExOmkwT0FYc0ZYNDBEMGlSQ3JjOEpJeHk1YnppeUFlcFRZRFNxWmhKZHROU1o="`
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
  "access_token": "eyJhbGciOiJSUzI1NiIsImtpZCI6IkIwNEY3QjkxREUzQjk0NzhDNjE4MzNGQjI0QUE1Q0RCIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2NTg0ODcwNjEsImV4cCI6MTY1ODQ5MDY2MSwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NTAwMyIsImF1ZCI6Im9wZW5ib29raW5nIiwiY2xpZW50X2lkIjoiNTYwZGJjNzUtZTQ0Yy00YjAzLWExMGMtOTIxMTk3YWFlM2ExIiwiaHR0cHM6Ly9vcGVuYWN0aXZlLmlvL2NsaWVudElkIjoiNTYwZGJjNzUtZTQ0Yy00YjAzLWExMGMtOTIxMTk3YWFlM2ExIiwianRpIjoiQjM5NEYyNkVEQjY1NDI2MUI4RDgyRDg2RDAzQzcyNjUiLCJpYXQiOjE2NTg0ODcwNjEsInNjb3BlIjpbIm9wZW5hY3RpdmUtb3JkZXJzZmVlZCJdfQ.g8pi6_Ai6A5Uq8hTdUm71RkE4TOyScYdYSWt1AYu9mRyzeT28xbIOiW4B2N37T9PwetmFud2NzNrmeNp3DpvH2plexqximzzbr8rdGm-pxrsOsk5zfBIVIstm3I0WcdbE6O3X34ekvp2BN4Y1sU7Kx_-E4UxyRPN0pA-PZGtf7vY8ePjPKEcRMHTmuUmp78RYgwTVx8I_H8g9bN3wyvbqDRTN_HMhOdQ4E6g-6XnXXtiryb6PQuX5izOgEh8PCw5i8ohHYEH23kXFdYRL12Vy9WRnvJ8IjgxbMlX5nrMLMEG5GLjw29oqyYNXzdn1zQHuz8aX2Q4mdx6u2Mm2myGBg",
  "expires_in": 3600,
  "token_type": "Bearer",
  "scope": "openactive-ordersfeed"
}
```
### Specs
* ✅ should complete Discovery successfully
* ✅ should complete Client Credentials Flow successfully


