[< Return to Summary](summary.md) | File Generated: Fri Jul 22 2022 10:44:58 GMT+0000 (Coordinated Universal Time)

# dataset-site >> dataset-site-jsonld-valid

**Booking Flow:** 

**Opportunity Type:** 

**Feature:** Core / Dataset Site (Implemented) 

**Test:**  Dataset Site JSON-LD valid

Validates the JSON-LD within the dataset site, using the microservice as a caching proxy. If you make changes to the dataset site, you must restart the microservice.

### Running only this test

```bash
npm start -- --runInBand test/features/core/dataset-site/implemented/dataset-site-jsonld-valid-test.js
```

---

✅ 3 passed with 0 failures, 0 warnings and 0 suggestions 

---


## Get Dataset Site

### Dataset Site Cached Proxy Request
GET http://localhost:3000/dataset-site


---
Response status code: 200 OK. Responded in 55.880376ms.
```json
{
  "@context": [
    "https://schema.org/",
    "https://openactive.io/"
  ],
  "@type": "Dataset",
  "@id": "https://localhost:5001/openactive/",
  "name": "Example Sessions and Facilities",
  "description": "Near real-time availability and rich descriptions relating to the sessions and facilities available from Example",
  "accessService": {
    "@type": "WebAPI",
    "name": "Open Booking API",
    "description": "API that allows for seamless booking experiences to be created for sessions and facilities available from Example",
    "authenticationAuthority": "https://localhost:5003",
    "conformsTo": [
      "https://openactive.io/open-booking-api/EditorsDraft/"
    ],
    "documentation": "https://permalink.openactive.io/dataset-site/open-booking-api-documentation",
    "endpointDescription": "https://www.openactive.io/open-booking-api/EditorsDraft/swagger.json",
    "endpointUrl": "https://localhost:5001/api/openbooking",
    "landingPage": "https://example.com/api-landing-page",
    "termsOfService": "https://example.com/api-terms-page"
  },
  "backgroundImage": {
    "@type": "ImageObject",
    "url": "https://localhost:5001/images/placeholder-dataset-site-background.jpg"
  },
  "bookingService": {
    "@type": "BookingService",
    "name": "OpenActive Reference Implementation",
    "hasCredential": "https://certificates.reference-implementation.openactive.io/examples/all-features/controlled/",
    "softwareVersion": "1.0",
    "url": "https://tutorials.openactive.io/open-booking-sdk/"
  },
  "dateModified": "2022-07-22T10:27:26+00:00",
  "datePublished": "2019-01-14T00:00:00+00:00",
  "discussionUrl": "https://github.com/openactive/OpenActive.Server.NET/issues",
  "distribution": [
    {
      "@type": "DataDownload",
      "identifier": "ScheduledSession",
      "name": "ScheduledSession",
      "additionalType": "https://openactive.io/ScheduledSession",
      "contentUrl": "https://localhost:5001/feeds/scheduled-sessions",
      "encodingFormat": "application/vnd.openactive.rpde+json; version=1"
    },
    {
      "@type": "DataDownload",
      "identifier": "SessionSeries",
      "name": "SessionSeries",
      "additionalType": "https://openactive.io/SessionSeries",
      "contentUrl": "https://localhost:5001/feeds/session-series",
      "encodingFormat": "application/vnd.openactive.rpde+json; version=1"
    },
    {
      "@type": "DataDownload",
      "identifier": "FacilityUse",
      "name": "FacilityUse",
      "additionalType": "https://openactive.io/FacilityUse",
      "contentUrl": "https://localhost:5001/feeds/facility-uses",
      "encodingFormat": "application/vnd.openactive.rpde+json; version=1"
    },
    {
      "@type": "DataDownload",
      "identifier": "FacilityUseSlot",
      "name": "Slot for FacilityUse",
      "additionalType": "https://openactive.io/Slot",
      "contentUrl": "https://localhost:5001/feeds/facility-use-slots",
      "encodingFormat": "application/vnd.openactive.rpde+json; version=1"
    }
  ],
  "documentation": "https://developer.openactive.io/",
  "inLanguage": [
    "en-GB"
  ],
  "keywords": [
    "Sessions",
    "Facilities",
    "Activities",
    "Sports",
    "Physical Activity",
    "OpenActive"
  ],
  "license": "https://creativecommons.org/licenses/by/4.0/",
  "publisher": {
    "@type": "Organization",
    "name": "Example",
    "description": "The Reference Implementation provides an example of an full conformant implementation of the OpenActive specifications.",
    "email": "hello@example.com",
    "legalName": "Example",
    "logo": {
      "@type": "ImageObject",
      "url": "https://localhost:5001/images/placeholder-logo.png"
    },
    "url": "https://www.example.com/"
  },
  "schemaVersion": "https://openactive.io/modelling-opportunity-data/2.0/",
  "url": "https://localhost:5001/openactive/"
}
```
### Specs
* ✅ should contain JSON-LD representing the Dataset
* ✅ should include accessService.endpointUrl of the Open Booking API
* ✅ should include accessService.endpointUrl that does not end in a trailing "/"

## Get Dataset Site >> validation of Dataset Site
### Specs
* ✅ passes validation checks

### Validations


