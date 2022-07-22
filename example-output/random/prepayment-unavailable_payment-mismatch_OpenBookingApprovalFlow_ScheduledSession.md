[< Return to Summary](summary.md) | File Generated: Fri Jul 22 2022 10:49:33 GMT+0000 (Coordinated Universal Time)

# prepayment-unavailable >> payment-mismatch (OpenBookingApprovalFlow >> ScheduledSession)

**Booking Flow:** OpenBookingApprovalFlow

**Opportunity Type:** ScheduledSession

**Feature:** Payment / prepayment unavailable (Implemented) 

**Test:**  Expect a TotalPaymentDueMismatchError when the totalPaymentDue property does not match

Run B for a valid opportunity, with totalPaymentDue not matching the value returned by C2, expecting a TotalPaymentDueMismatchError to be returned (C1 and C2 ignored as they do not have totalPaymentDue)

### Running only this test

```bash
npm start -- --runInBand test/features/payment/prepayment-unavailable/implemented/payment-mismatch-test.js
```

---

⚠️ 13 passed with 0 failures, 98 warnings and 36 suggestions 

---


## Unnecessary payment property at B >> Fetch Opportunities

### Local Microservice Test Interface for OrderItem 0 Request
POST http://localhost:3000/test-interface/datasets/uat-ci/opportunities

```json
{
  "@type": "ScheduledSession",
  "superEvent": {
    "@type": "SessionSeries",
    "organizer": {
      "@type": "Organization",
      "@id": "https://localhost:5001/api/identifiers/sellers/1"
    }
  },
  "@context": [
    "https://openactive.io/",
    "https://openactive.io/test-interface"
  ],
  "test:testOpportunityCriteria": "https://openactive.io/test-interface#TestOpportunityBookableNonFreePrepaymentUnavailable",
  "test:testOpenBookingFlow": "https://openactive.io/test-interface#OpenBookingApprovalFlow",
  "test:testOpportunityDataShapeExpression": [],
  "test:testOfferDataShapeExpression": [
    {
      "@type": "test:TripleConstraint",
      "predicate": "https://openactive.io/openBookingFlowRequirement",
      "valueExpr": {
        "@type": "test:ArrayConstraint",
        "datatype": "oa:OpenBookingFlowRequirement",
        "includesAll": [
          "https://openactive.io/OpenBookingApproval"
        ]
      }
    }
  ]
}
```

---
Response status code: 200 OK. Responded in 18.550146ms.
```json
{
  "@context": "https://openactive.io/",
  "@type": "ScheduledSession",
  "@id": "https://localhost:5001/api/identifiers/scheduled-sessions/1242/events/12411"
}
```

### Opportunity Feed extract for OrderItem 0 Request
GET http://localhost:3000/opportunity/https%3A%2F%2Flocalhost%3A5001%2Fapi%2Fidentifiers%2Fscheduled-sessions%2F1242%2Fevents%2F12411?useCacheIfAvailable=true


---
Response status code: 200 OK. Responded in 14.41897ms.
```json
{
  "data": {
    "@context": [
      "https://openactive.io/",
      "https://openactive.io/ns-beta"
    ],
    "@type": "ScheduledSession",
    "@id": "https://localhost:5001/api/identifiers/scheduled-sessions/1242/events/12411",
    "startDate": "2022-07-27T00:15:11+00:00",
    "endDate": "2022-07-27T04:22:11+00:00",
    "superEvent": {
      "@type": "SessionSeries",
      "@id": "https://localhost:5001/api/identifiers/session-series/1242",
      "name": "Concrete Yoga",
      "activity": [
        {
          "@type": "Concept",
          "@id": "https://openactive.io/activity-list#c07d63a0-8eb9-4602-8bcc-23be6deb8f83",
          "inScheme": "https://openactive.io/activity-list",
          "prefLabel": "Jet Skiing"
        }
      ],
      "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
      "offers": [
        {
          "@type": "Offer",
          "@id": "https://localhost:5001/api/identifiers/session-series/1242#/offers/0",
          "allowCustomerCancellationFullRefund": false,
          "latestCancellationBeforeStartDate": "P1DT16H",
          "openBookingFlowRequirement": [
            "https://openactive.io/OpenBookingApproval"
          ],
          "openBookingPrepayment": "https://openactive.io/Unavailable",
          "price": 17,
          "priceCurrency": "GBP"
        }
      ],
      "organizer": {
        "@type": "Organization",
        "@id": "https://localhost:5001/api/identifiers/sellers/1",
        "name": "Acme Fitness Ltd",
        "isOpenBookingAllowed": true,
        "taxMode": "https://openactive.io/TaxGross",
        "termsOfService": [
          {
            "@type": "PrivacyPolicy",
            "name": "Privacy Policy",
            "requiresExplicitConsent": false,
            "url": "https://example.com/privacy.html"
          }
        ]
      },
      "url": "https://www.example.com/a-session-age",
      "beta:affiliatedLocation": {
        "@type": "Place",
        "name": "Fake Pond",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "GB",
          "addressLocality": "Another town",
          "addressRegion": "Oxfordshire",
          "postalCode": "OX1 1AA",
          "streetAddress": "1 Fake Park"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 0,
          "longitude": 0
        }
      }
    },
    "duration": "PT4H7M",
    "maximumAttendeeCapacity": 43,
    "remainingAttendeeCapacity": 43
  }
}
```
### Specs
* ✅ should return 200 on success for request relevant to OrderItem 0

## Unnecessary payment property at B >> Fetch Opportunities >> validation of Opportunity Feed extract for OrderItem 0
### Specs
* ✅ passes validation checks
* ✅ matches the criteria 'TestOpportunityBookableNonFreePrepaymentUnavailable' required for this test

### Validations
 * ⚠️ $.eventStatus: Recommended property `eventStatus` is missing from `ScheduledSession`.
 * ⚠️ $.leader: Recommended property `leader` is missing from `ScheduledSession`.
 * ⚠️ $.url: Recommended property `url` is missing from `ScheduledSession`.
 * ⚠️ $.superEvent.description: Recommended property `description` is missing from `SessionSeries`.
 * ⚠️ $.superEvent.image: Recommended property `image` is missing from `SessionSeries`.
 * ⚠️ $.superEvent.ageRange: Recommended property `ageRange` is missing from `SessionSeries`.
 * ⚠️ $.superEvent.genderRestriction: Recommended property `genderRestriction` is missing from `SessionSeries`.
 * ⚠️ $.superEvent.leader: Recommended property `leader` is missing from `SessionSeries`.
 * ⚠️ $.superEvent.level: Recommended property `level` is missing from `SessionSeries`.
 * ⚠️ $.superEvent.offers[0].name: Recommended property `name` is missing from `Offer`.
 * ⚠️ $.superEvent.offers[0].ageRestriction: Recommended property `ageRestriction` is missing from `Offer`.
 * ⚠️ $.superEvent.organizer.url: Recommended property `url` is missing from `Organization`.
 * ⚠️ $.superEvent.organizer.telephone: Recommended property `telephone` is missing from `Organization`.
 * ⚠️ $.superEvent.organizer.sameAs: Recommended property `sameAs` is missing from `Organization`.
 * ⚠️ $.superEvent["beta:affiliatedLocation"].id: Recommended property `@id` is missing from `Place`.
 * ⚠️ $.superEvent["beta:affiliatedLocation"].url: Recommended property `url` is missing from `Place`.
 * ⚠️ $.superEvent["beta:affiliatedLocation"].description: Recommended property `description` is missing from `Place`.
 * ⚠️ $.superEvent["beta:affiliatedLocation"].image: Recommended property `image` is missing from `Place`.
 * ⚠️ $.superEvent["beta:affiliatedLocation"].telephone: Recommended property `telephone` is missing from `Place`.
 * ⚠️ $.superEvent["beta:affiliatedLocation"].openingHoursSpecification: Recommended property `openingHoursSpecification` is missing from `Place`.
 * ⚠️ $.superEvent["beta:affiliatedLocation"].amenityFeature: Recommended property `amenityFeature` is missing from `Place`.
 * 📝 $.genderRestriction: Data consumers will assume that there is no gender restriction when no valid `genderRestriction` is supplied on a `ScheduledSession`.
 * 📝 $.ageRange: Data consumers will assume that the `ageRange` is 18+ when not specified.
 * 📝 $.eventStatus: Data consumers will assume the `eventStatus` is scheduled if not specified or invalid.
 * 📝 $.superEvent.genderRestriction: Data consumers will assume that there is no gender restriction when no valid `genderRestriction` is supplied on a `SessionSeries`.
 * 📝 $.superEvent.ageRange: Data consumers will assume that the `ageRange` is 18+ when not specified.
 * 📝 $.superEvent.eventStatus: Data consumers will assume the `eventStatus` is scheduled if not specified or invalid.
 * 📝 $.superEvent["beta:affiliatedLocation"].geo.latitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.superEvent["beta:affiliatedLocation"].geo.longitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.

## Unnecessary payment property at B >> C1

### C1 Request
PUT https://localhost:5001/api/openbooking/order-quote-templates/02f8d352-1e63-473f-9895-3a929d107ac4

* **Content-Type:** `"application/vnd.openactive.booking+json; version=1"`
* **Authorization:** `"Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkIwNEY3QjkxREUzQjk0NzhDNjE4MzNGQjI0QUE1Q0RCIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2NTg0ODU2NTYsImV4cCI6MTY1ODQ4OTI1NiwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NTAwMyIsImF1ZCI6Im9wZW5ib29raW5nIiwiY2xpZW50X2lkIjoiNTYwZGJjNzUtZTQ0Yy00YjAzLWExMGMtOTIxMTk3YWFlM2ExIiwiaHR0cHM6Ly9vcGVuYWN0aXZlLmlvL2NsaWVudElkIjoiNTYwZGJjNzUtZTQ0Yy00YjAzLWExMGMtOTIxMTk3YWFlM2ExIiwic3ViIjoiMTAwIiwiYXV0aF90aW1lIjoxNjU4NDg1NjU1LCJpZHAiOiJsb2NhbCIsImh0dHBzOi8vb3BlbmFjdGl2ZS5pby9zZWxsZXJJZCI6Imh0dHBzOi8vbG9jYWxob3N0OjUwMDEvYXBpL2lkZW50aWZpZXJzL3NlbGxlcnMvMSIsImp0aSI6IjkxQTNBNUUzMkU1NzZEODEyNkNGMjNCMDNFQkUzMUFBIiwic2lkIjoiMUFEM0IxMEQ5MDA4QkY0NzREMThFRTU2MzZEMDVBREYiLCJpYXQiOjE2NTg0ODU2NTYsInNjb3BlIjpbIm9wZW5pZCIsIm9wZW5hY3RpdmUtb3BlbmJvb2tpbmciLCJvcGVuYWN0aXZlLWlkZW50aXR5Iiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbInB3ZCJdfQ.a2EuRMF8HKqvnIK46S7jGAnFYJTLs5usIok3hM1GayeDD5bQGinKSWhljkFFzPUIey5JBLEDu-ncYu-gmWg85CyMyWM9tUvfXdyzUDelvQDh3aKsUQ82RB-flVXtzeTGkWKx57d03Cfzne_1lnhP0C9P6FWsUueTy_yw_4txHVgbA4y7FYcos624uxw0DUDYakjtSHoOQpXsWzzYUp20Ax_cxJC_zvpslDxQBFX3jTSXKDurUmkVGcFDiC-sRZLvRw9A5iAscUsSLbZBLF-oBQJOYFcXXeT2UsdJLx15MUh9_zKZ932UtV3XtWf8F47Dw8uSfvOl41VL7Q-zTfwKKg"`

```json
{
  "@context": "https://openactive.io/",
  "@type": "OrderQuote",
  "brokerRole": "https://openactive.io/AgentBroker",
  "broker": {
    "@type": "Organization",
    "name": "MyFitnessApp",
    "url": "https://myfitnessapp.example.com",
    "description": "A fitness app for all the community",
    "logo": {
      "@type": "ImageObject",
      "url": "http://data.myfitnessapp.org.uk/images/logo.png"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Alan Peacock Way",
      "addressLocality": "Village East",
      "addressRegion": "Middlesbrough",
      "postalCode": "TS4 3AE",
      "addressCountry": "GB"
    }
  },
  "seller": "https://localhost:5001/api/identifiers/sellers/1",
  "orderedItem": [
    {
      "@type": "OrderItem",
      "position": 0,
      "acceptedOffer": "https://localhost:5001/api/identifiers/session-series/1242#/offers/0",
      "orderedItem": "https://localhost:5001/api/identifiers/scheduled-sessions/1242/events/12411"
    }
  ],
  "payment": {
    "@type": "Payment",
    "name": "AcmeBroker Points",
    "accountId": "SN1593",
    "paymentProviderId": "STRIPE"
  }
}
```

---
Response status code: 200 OK. Responded in 342.580497ms.
```json
{
  "@context": "https://openactive.io/",
  "@type": "OrderQuote",
  "@id": "https://localhost:5001/api/openbooking/order-quotes/02f8d352-1e63-473f-9895-3a929d107ac4",
  "lease": {
    "@type": "Lease",
    "leaseExpires": "2022-07-22T10:54:56+00:00"
  },
  "orderRequiresApproval": true,
  "bookingService": {
    "@type": "BookingService",
    "name": "Acme booking system",
    "termsOfService": [
      {
        "@type": "PrivacyPolicy",
        "name": "Privacy Policy",
        "requiresExplicitConsent": false,
        "url": "https://example.com/privacy.html"
      }
    ],
    "url": "https://example.com"
  },
  "broker": {
    "@type": "Organization",
    "name": "MyFitnessApp",
    "url": "https://myfitnessapp.example.com"
  },
  "brokerRole": "https://openactive.io/AgentBroker",
  "orderedItem": [
    {
      "@type": "OrderItem",
      "acceptedOffer": {
        "@type": "Offer",
        "@id": "https://localhost:5001/api/identifiers/session-series/1242#/offers/0",
        "allowCustomerCancellationFullRefund": false,
        "latestCancellationBeforeStartDate": "P1DT16H",
        "openBookingPrepayment": "https://openactive.io/Unavailable",
        "price": 17,
        "priceCurrency": "GBP"
      },
      "orderedItem": {
        "@type": "ScheduledSession",
        "@id": "https://localhost:5001/api/identifiers/scheduled-sessions/1242/events/12411",
        "startDate": "2022-07-27T00:15:11+00:00",
        "endDate": "2022-07-27T04:22:11+00:00",
        "superEvent": {
          "@type": "SessionSeries",
          "@id": "https://localhost:5001/api/identifiers/session-series/1242",
          "name": "Concrete Yoga",
          "activity": [
            {
              "@type": "Concept",
              "@id": "https://openactive.io/activity-list#6bdea630-ad22-4e58-98a3-bca26ee3f1da",
              "inScheme": "https://openactive.io/activity-list",
              "prefLabel": "Rave Fitness"
            }
          ],
          "location": {
            "@type": "Place",
            "name": "Fake fitness studio",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 51.6201,
              "longitude": 0.302396
            }
          },
          "url": "https://example.com/events/1242"
        },
        "maximumAttendeeCapacity": 43,
        "remainingAttendeeCapacity": 43
      },
      "position": 0,
      "unitTaxSpecification": [
        {
          "@type": "TaxChargeSpecification",
          "name": "VAT at 20%",
          "price": 3.4,
          "priceCurrency": "GBP",
          "rate": 0.2
        }
      ]
    }
  ],
  "payment": {
    "@type": "Payment",
    "name": "AcmeBroker Points",
    "accountId": "SN1593",
    "paymentProviderId": "STRIPE"
  },
  "seller": {
    "@type": "Organization",
    "@id": "https://localhost:5001/api/identifiers/sellers/1",
    "name": "Acme Fitness Ltd",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "GB",
      "addressLocality": "Another town",
      "addressRegion": "Oxfordshire",
      "postalCode": "OX1 1AA",
      "streetAddress": "1 Hidden Gem"
    },
    "isOpenBookingAllowed": true,
    "legalName": "Acme Fitness Ltd",
    "taxMode": "https://openactive.io/TaxGross",
    "termsOfService": [
      {
        "@type": "PrivacyPolicy",
        "name": "Privacy Policy",
        "requiresExplicitConsent": false,
        "url": "https://example.com/privacy.html"
      }
    ]
  },
  "totalPaymentDue": {
    "@type": "PriceSpecification",
    "openBookingPrepayment": "https://openactive.io/Unavailable",
    "price": 17,
    "priceCurrency": "GBP"
  },
  "totalPaymentTax": [
    {
      "@type": "TaxChargeSpecification",
      "name": "VAT at 20%",
      "price": 3.4,
      "priceCurrency": "GBP",
      "rate": 0.2
    }
  ]
}
```
### Specs
* ✅ should return 200 on success
* ✅ Should have the same number of OrderItems as criteria
* ✅ OrderItem at position 0 - capacities should not have changed from their initial values after C1/C2 (regardless of leasing)

## Unnecessary payment property at B >> C1 >> validation of C1
### Specs
* ✅ passes validation checks

### Validations
 * ⚠️ $.orderedItem[0].acceptedOffer.name: Recommended property `name` is missing from `Offer`.
 * ⚠️ $.orderedItem[0].acceptedOffer.ageRestriction: Recommended property `ageRestriction` is missing from `Offer`.
 * ⚠️ $.orderedItem[0].orderedItem.eventStatus: Recommended property `eventStatus` is missing from `ScheduledSession`.
 * ⚠️ $.orderedItem[0].orderedItem.superEvent.ageRange: Recommended property `ageRange` is missing from `SessionSeries`.
 * ⚠️ $.orderedItem[0].orderedItem.superEvent.genderRestriction: Recommended property `genderRestriction` is missing from `SessionSeries`.
 * ⚠️ $.orderedItem[0].orderedItem.superEvent.eventStatus: Recommended property `eventStatus` is missing from `SessionSeries`.
 * ⚠️ $.orderedItem[0].orderedItem.superEvent.location.id: Recommended property `@id` is missing from `Place`.
 * ⚠️ $.orderedItem[0].orderedItem.superEvent.location.url: Recommended property `url` is missing from `Place`.
 * ⚠️ $.orderedItem[0].orderedItem.superEvent.location.description: Recommended property `description` is missing from `Place`.
 * ⚠️ $.orderedItem[0].orderedItem.superEvent.location.image: Recommended property `image` is missing from `Place`.
 * ⚠️ $.orderedItem[0].orderedItem.superEvent.location.telephone: Recommended property `telephone` is missing from `Place`.
 * ⚠️ $.orderedItem[0].orderedItem.superEvent.location.openingHoursSpecification: Recommended property `openingHoursSpecification` is missing from `Place`.
 * ⚠️ $.orderedItem[0].orderedItem.superEvent.location.amenityFeature: Recommended property `amenityFeature` is missing from `Place`.
 * ⚠️ $.seller.email: Recommended property `email` is missing from `Organization`.
 * ⚠️ $.seller.url: Recommended property `url` is missing from `Organization`.
 * ⚠️ $.seller.logo: Recommended property `logo` is missing from `Organization`.
 * ⚠️ $.seller.vatID: Recommended property `vatID` is missing from `Organization`.
 * 📝 $.orderedItem[0].orderedItem.genderRestriction: Data consumers will assume that there is no gender restriction when no valid `genderRestriction` is supplied on a `ScheduledSession`.
 * 📝 $.orderedItem[0].orderedItem.ageRange: Data consumers will assume that the `ageRange` is 18+ when not specified.
 * 📝 $.orderedItem[0].orderedItem.eventStatus: Data consumers will assume the `eventStatus` is scheduled if not specified or invalid.
 * 📝 $.orderedItem[0].orderedItem.superEvent.genderRestriction: Data consumers will assume that there is no gender restriction when no valid `genderRestriction` is supplied on a `SessionSeries`.
 * 📝 $.orderedItem[0].orderedItem.superEvent.ageRange: Data consumers will assume that the `ageRange` is 18+ when not specified.
 * 📝 $.orderedItem[0].orderedItem.superEvent.eventStatus: Data consumers will assume the `eventStatus` is scheduled if not specified or invalid.

## Unnecessary payment property at B >> Assert Opportunity Capacity (after C1)

### Opportunity Feed extract for OrderItem 0 Request
GET http://localhost:3000/opportunity/https%3A%2F%2Flocalhost%3A5001%2Fapi%2Fidentifiers%2Fscheduled-sessions%2F1242%2Fevents%2F12411?useCacheIfAvailable=true&expectedCapacity=42


---
Response status code: 200 OK. Responded in 901.788739ms.
```json
{
  "state": "updated",
  "id": "https://localhost:5001/api/identifiers/scheduled-sessions/1242/events/12411",
  "modified": 1658486999206,
  "data": {
    "@context": [
      "https://openactive.io/",
      "https://openactive.io/ns-beta"
    ],
    "@type": "ScheduledSession",
    "@id": "https://localhost:5001/api/identifiers/scheduled-sessions/1242/events/12411",
    "startDate": "2022-07-27T00:15:11+00:00",
    "endDate": "2022-07-27T04:22:11+00:00",
    "superEvent": {
      "@type": "SessionSeries",
      "@id": "https://localhost:5001/api/identifiers/session-series/1242",
      "name": "Concrete Yoga",
      "activity": [
        {
          "@type": "Concept",
          "@id": "https://openactive.io/activity-list#c07d63a0-8eb9-4602-8bcc-23be6deb8f83",
          "inScheme": "https://openactive.io/activity-list",
          "prefLabel": "Jet Skiing"
        }
      ],
      "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
      "offers": [
        {
          "@type": "Offer",
          "@id": "https://localhost:5001/api/identifiers/session-series/1242#/offers/0",
          "allowCustomerCancellationFullRefund": false,
          "latestCancellationBeforeStartDate": "P1DT16H",
          "openBookingFlowRequirement": [
            "https://openactive.io/OpenBookingApproval"
          ],
          "openBookingPrepayment": "https://openactive.io/Unavailable",
          "price": 17,
          "priceCurrency": "GBP"
        }
      ],
      "organizer": {
        "@type": "Organization",
        "@id": "https://localhost:5001/api/identifiers/sellers/1",
        "name": "Acme Fitness Ltd",
        "isOpenBookingAllowed": true,
        "taxMode": "https://openactive.io/TaxGross",
        "termsOfService": [
          {
            "@type": "PrivacyPolicy",
            "name": "Privacy Policy",
            "requiresExplicitConsent": false,
            "url": "https://example.com/privacy.html"
          }
        ]
      },
      "url": "https://www.example.com/a-session-age",
      "beta:affiliatedLocation": {
        "@type": "Place",
        "name": "Fake Pond",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "GB",
          "addressLocality": "Another town",
          "addressRegion": "Oxfordshire",
          "postalCode": "OX1 1AA",
          "streetAddress": "1 Fake Park"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 0,
          "longitude": 0
        }
      }
    },
    "duration": "PT4H7M",
    "maximumAttendeeCapacity": 43,
    "remainingAttendeeCapacity": 42
  }
}
```
### Specs
* ✅ should return 200 on success for request relevant to OrderItem 0
* ✅ should return `totalPaymentDue.openBookingPrepayment` '`https://openactive.io/Unavailable`'

## Unnecessary payment property at B >> Assert Opportunity Capacity (after C1) >> validation of Opportunity Feed extract for OrderItem 0
### Specs
* ✅ passes validation checks

### Validations
 * ⚠️ $.eventStatus: Recommended property `eventStatus` is missing from `ScheduledSession`.
 * ⚠️ $.leader: Recommended property `leader` is missing from `ScheduledSession`.
 * ⚠️ $.url: Recommended property `url` is missing from `ScheduledSession`.
 * ⚠️ $.superEvent.description: Recommended property `description` is missing from `SessionSeries`.
 * ⚠️ $.superEvent.image: Recommended property `image` is missing from `SessionSeries`.
 * ⚠️ $.superEvent.ageRange: Recommended property `ageRange` is missing from `SessionSeries`.
 * ⚠️ $.superEvent.genderRestriction: Recommended property `genderRestriction` is missing from `SessionSeries`.
 * ⚠️ $.superEvent.leader: Recommended property `leader` is missing from `SessionSeries`.
 * ⚠️ $.superEvent.level: Recommended property `level` is missing from `SessionSeries`.
 * ⚠️ $.superEvent.offers[0].name: Recommended property `name` is missing from `Offer`.
 * ⚠️ $.superEvent.offers[0].ageRestriction: Recommended property `ageRestriction` is missing from `Offer`.
 * ⚠️ $.superEvent.organizer.url: Recommended property `url` is missing from `Organization`.
 * ⚠️ $.superEvent.organizer.telephone: Recommended property `telephone` is missing from `Organization`.
 * ⚠️ $.superEvent.organizer.sameAs: Recommended property `sameAs` is missing from `Organization`.
 * ⚠️ $.superEvent["beta:affiliatedLocation"].id: Recommended property `@id` is missing from `Place`.
 * ⚠️ $.superEvent["beta:affiliatedLocation"].url: Recommended property `url` is missing from `Place`.
 * ⚠️ $.superEvent["beta:affiliatedLocation"].description: Recommended property `description` is missing from `Place`.
 * ⚠️ $.superEvent["beta:affiliatedLocation"].image: Recommended property `image` is missing from `Place`.
 * ⚠️ $.superEvent["beta:affiliatedLocation"].telephone: Recommended property `telephone` is missing from `Place`.
 * ⚠️ $.superEvent["beta:affiliatedLocation"].openingHoursSpecification: Recommended property `openingHoursSpecification` is missing from `Place`.
 * ⚠️ $.superEvent["beta:affiliatedLocation"].amenityFeature: Recommended property `amenityFeature` is missing from `Place`.
 * 📝 $.genderRestriction: Data consumers will assume that there is no gender restriction when no valid `genderRestriction` is supplied on a `ScheduledSession`.
 * 📝 $.ageRange: Data consumers will assume that the `ageRange` is 18+ when not specified.
 * 📝 $.eventStatus: Data consumers will assume the `eventStatus` is scheduled if not specified or invalid.
 * 📝 $.superEvent.genderRestriction: Data consumers will assume that there is no gender restriction when no valid `genderRestriction` is supplied on a `SessionSeries`.
 * 📝 $.superEvent.ageRange: Data consumers will assume that the `ageRange` is 18+ when not specified.
 * 📝 $.superEvent.eventStatus: Data consumers will assume the `eventStatus` is scheduled if not specified or invalid.
 * 📝 $.superEvent["beta:affiliatedLocation"].geo.latitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.superEvent["beta:affiliatedLocation"].geo.longitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.

## Unnecessary payment property at B >> C2

### C2 Request
PUT https://localhost:5001/api/openbooking/order-quotes/02f8d352-1e63-473f-9895-3a929d107ac4

* **Content-Type:** `"application/vnd.openactive.booking+json; version=1"`
* **Authorization:** `"Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkIwNEY3QjkxREUzQjk0NzhDNjE4MzNGQjI0QUE1Q0RCIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2NTg0ODU2NTYsImV4cCI6MTY1ODQ4OTI1NiwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NTAwMyIsImF1ZCI6Im9wZW5ib29raW5nIiwiY2xpZW50X2lkIjoiNTYwZGJjNzUtZTQ0Yy00YjAzLWExMGMtOTIxMTk3YWFlM2ExIiwiaHR0cHM6Ly9vcGVuYWN0aXZlLmlvL2NsaWVudElkIjoiNTYwZGJjNzUtZTQ0Yy00YjAzLWExMGMtOTIxMTk3YWFlM2ExIiwic3ViIjoiMTAwIiwiYXV0aF90aW1lIjoxNjU4NDg1NjU1LCJpZHAiOiJsb2NhbCIsImh0dHBzOi8vb3BlbmFjdGl2ZS5pby9zZWxsZXJJZCI6Imh0dHBzOi8vbG9jYWxob3N0OjUwMDEvYXBpL2lkZW50aWZpZXJzL3NlbGxlcnMvMSIsImp0aSI6IjkxQTNBNUUzMkU1NzZEODEyNkNGMjNCMDNFQkUzMUFBIiwic2lkIjoiMUFEM0IxMEQ5MDA4QkY0NzREMThFRTU2MzZEMDVBREYiLCJpYXQiOjE2NTg0ODU2NTYsInNjb3BlIjpbIm9wZW5pZCIsIm9wZW5hY3RpdmUtb3BlbmJvb2tpbmciLCJvcGVuYWN0aXZlLWlkZW50aXR5Iiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbInB3ZCJdfQ.a2EuRMF8HKqvnIK46S7jGAnFYJTLs5usIok3hM1GayeDD5bQGinKSWhljkFFzPUIey5JBLEDu-ncYu-gmWg85CyMyWM9tUvfXdyzUDelvQDh3aKsUQ82RB-flVXtzeTGkWKx57d03Cfzne_1lnhP0C9P6FWsUueTy_yw_4txHVgbA4y7FYcos624uxw0DUDYakjtSHoOQpXsWzzYUp20Ax_cxJC_zvpslDxQBFX3jTSXKDurUmkVGcFDiC-sRZLvRw9A5iAscUsSLbZBLF-oBQJOYFcXXeT2UsdJLx15MUh9_zKZ932UtV3XtWf8F47Dw8uSfvOl41VL7Q-zTfwKKg"`

```json
{
  "@context": "https://openactive.io/",
  "@type": "OrderQuote",
  "brokerRole": "https://openactive.io/AgentBroker",
  "broker": {
    "@type": "Organization",
    "name": "MyFitnessApp",
    "url": "https://myfitnessapp.example.com",
    "description": "A fitness app for all the community",
    "logo": {
      "@type": "ImageObject",
      "url": "http://data.myfitnessapp.org.uk/images/logo.png"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Alan Peacock Way",
      "addressLocality": "Village East",
      "addressRegion": "Middlesbrough",
      "postalCode": "TS4 3AE",
      "addressCountry": "GB"
    }
  },
  "seller": "https://localhost:5001/api/identifiers/sellers/1",
  "customer": {
    "@type": "Person",
    "email": "Jaron.Grimes@hotmail.com",
    "telephone": "927-634-9567 x72959",
    "givenName": "Pagac",
    "familyName": "Maye",
    "identifier": "4a3fdc4f-2af7-4fe6-bb2b-b211191b4256"
  },
  "orderedItem": [
    {
      "@type": "OrderItem",
      "position": 0,
      "acceptedOffer": "https://localhost:5001/api/identifiers/session-series/1242#/offers/0",
      "orderedItem": "https://localhost:5001/api/identifiers/scheduled-sessions/1242/events/12411"
    }
  ],
  "payment": {
    "@type": "Payment",
    "name": "AcmeBroker Points",
    "accountId": "SN1593",
    "paymentProviderId": "STRIPE"
  }
}
```

---
Response status code: 200 OK. Responded in 182.559009ms.
```json
{
  "@context": "https://openactive.io/",
  "@type": "OrderQuote",
  "@id": "https://localhost:5001/api/openbooking/order-quotes/02f8d352-1e63-473f-9895-3a929d107ac4",
  "lease": {
    "@type": "Lease",
    "leaseExpires": "2022-07-22T10:54:58+00:00"
  },
  "orderRequiresApproval": true,
  "bookingService": {
    "@type": "BookingService",
    "name": "Acme booking system",
    "termsOfService": [
      {
        "@type": "PrivacyPolicy",
        "name": "Privacy Policy",
        "requiresExplicitConsent": false,
        "url": "https://example.com/privacy.html"
      }
    ],
    "url": "https://example.com"
  },
  "broker": {
    "@type": "Organization",
    "name": "MyFitnessApp",
    "url": "https://myfitnessapp.example.com"
  },
  "brokerRole": "https://openactive.io/AgentBroker",
  "customer": {
    "@type": "Person",
    "identifier": "4a3fdc4f-2af7-4fe6-bb2b-b211191b4256",
    "email": "Jaron.Grimes@hotmail.com",
    "familyName": "Maye",
    "givenName": "Pagac",
    "telephone": "927-634-9567 x72959"
  },
  "orderedItem": [
    {
      "@type": "OrderItem",
      "acceptedOffer": {
        "@type": "Offer",
        "@id": "https://localhost:5001/api/identifiers/session-series/1242#/offers/0",
        "allowCustomerCancellationFullRefund": false,
        "latestCancellationBeforeStartDate": "P1DT16H",
        "openBookingPrepayment": "https://openactive.io/Unavailable",
        "price": 17,
        "priceCurrency": "GBP"
      },
      "orderedItem": {
        "@type": "ScheduledSession",
        "@id": "https://localhost:5001/api/identifiers/scheduled-sessions/1242/events/12411",
        "startDate": "2022-07-27T00:15:11+00:00",
        "endDate": "2022-07-27T04:22:11+00:00",
        "superEvent": {
          "@type": "SessionSeries",
          "@id": "https://localhost:5001/api/identifiers/session-series/1242",
          "name": "Concrete Yoga",
          "activity": [
            {
              "@type": "Concept",
              "@id": "https://openactive.io/activity-list#6bdea630-ad22-4e58-98a3-bca26ee3f1da",
              "inScheme": "https://openactive.io/activity-list",
              "prefLabel": "Rave Fitness"
            }
          ],
          "location": {
            "@type": "Place",
            "name": "Fake fitness studio",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 51.6201,
              "longitude": 0.302396
            }
          },
          "url": "https://example.com/events/1242"
        },
        "maximumAttendeeCapacity": 43,
        "remainingAttendeeCapacity": 43
      },
      "position": 0,
      "unitTaxSpecification": [
        {
          "@type": "TaxChargeSpecification",
          "name": "VAT at 20%",
          "price": 3.4,
          "priceCurrency": "GBP",
          "rate": 0.2
        }
      ]
    }
  ],
  "payment": {
    "@type": "Payment",
    "name": "AcmeBroker Points",
    "accountId": "SN1593",
    "paymentProviderId": "STRIPE"
  },
  "seller": {
    "@type": "Organization",
    "@id": "https://localhost:5001/api/identifiers/sellers/1",
    "name": "Acme Fitness Ltd",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "GB",
      "addressLocality": "Another town",
      "addressRegion": "Oxfordshire",
      "postalCode": "OX1 1AA",
      "streetAddress": "1 Hidden Gem"
    },
    "isOpenBookingAllowed": true,
    "legalName": "Acme Fitness Ltd",
    "taxMode": "https://openactive.io/TaxGross",
    "termsOfService": [
      {
        "@type": "PrivacyPolicy",
        "name": "Privacy Policy",
        "requiresExplicitConsent": false,
        "url": "https://example.com/privacy.html"
      }
    ]
  },
  "totalPaymentDue": {
    "@type": "PriceSpecification",
    "openBookingPrepayment": "https://openactive.io/Unavailable",
    "price": 17,
    "priceCurrency": "GBP"
  },
  "totalPaymentTax": [
    {
      "@type": "TaxChargeSpecification",
      "name": "VAT at 20%",
      "price": 3.4,
      "priceCurrency": "GBP",
      "rate": 0.2
    }
  ]
}
```
### Specs
* ✅ should return 200 on success
* ✅ Should have the same number of OrderItems as criteria
* ✅ OrderItem at position 0 - capacities should not have changed from their initial values after C1/C2 (regardless of leasing)

## Unnecessary payment property at B >> C2 >> validation of C2
### Specs
* ✅ passes validation checks

### Validations
 * ⚠️ $.orderedItem[0].acceptedOffer.name: Recommended property `name` is missing from `Offer`.
 * ⚠️ $.orderedItem[0].acceptedOffer.ageRestriction: Recommended property `ageRestriction` is missing from `Offer`.
 * ⚠️ $.orderedItem[0].orderedItem.eventStatus: Recommended property `eventStatus` is missing from `ScheduledSession`.
 * ⚠️ $.orderedItem[0].orderedItem.superEvent.ageRange: Recommended property `ageRange` is missing from `SessionSeries`.
 * ⚠️ $.orderedItem[0].orderedItem.superEvent.genderRestriction: Recommended property `genderRestriction` is missing from `SessionSeries`.
 * ⚠️ $.orderedItem[0].orderedItem.superEvent.eventStatus: Recommended property `eventStatus` is missing from `SessionSeries`.
 * ⚠️ $.orderedItem[0].orderedItem.superEvent.location.id: Recommended property `@id` is missing from `Place`.
 * ⚠️ $.orderedItem[0].orderedItem.superEvent.location.url: Recommended property `url` is missing from `Place`.
 * ⚠️ $.orderedItem[0].orderedItem.superEvent.location.description: Recommended property `description` is missing from `Place`.
 * ⚠️ $.orderedItem[0].orderedItem.superEvent.location.image: Recommended property `image` is missing from `Place`.
 * ⚠️ $.orderedItem[0].orderedItem.superEvent.location.telephone: Recommended property `telephone` is missing from `Place`.
 * ⚠️ $.orderedItem[0].orderedItem.superEvent.location.openingHoursSpecification: Recommended property `openingHoursSpecification` is missing from `Place`.
 * ⚠️ $.orderedItem[0].orderedItem.superEvent.location.amenityFeature: Recommended property `amenityFeature` is missing from `Place`.
 * ⚠️ $.seller.email: Recommended property `email` is missing from `Organization`.
 * ⚠️ $.seller.url: Recommended property `url` is missing from `Organization`.
 * ⚠️ $.seller.logo: Recommended property `logo` is missing from `Organization`.
 * ⚠️ $.seller.vatID: Recommended property `vatID` is missing from `Organization`.
 * 📝 $.orderedItem[0].orderedItem.genderRestriction: Data consumers will assume that there is no gender restriction when no valid `genderRestriction` is supplied on a `ScheduledSession`.
 * 📝 $.orderedItem[0].orderedItem.ageRange: Data consumers will assume that the `ageRange` is 18+ when not specified.
 * 📝 $.orderedItem[0].orderedItem.eventStatus: Data consumers will assume the `eventStatus` is scheduled if not specified or invalid.
 * 📝 $.orderedItem[0].orderedItem.superEvent.genderRestriction: Data consumers will assume that there is no gender restriction when no valid `genderRestriction` is supplied on a `SessionSeries`.
 * 📝 $.orderedItem[0].orderedItem.superEvent.ageRange: Data consumers will assume that the `ageRange` is 18+ when not specified.
 * 📝 $.orderedItem[0].orderedItem.superEvent.eventStatus: Data consumers will assume the `eventStatus` is scheduled if not specified or invalid.

## Unnecessary payment property at B >> Assert Opportunity Capacity (after C2)

### Opportunity Feed extract for OrderItem 0 Request
GET http://localhost:3000/opportunity/https%3A%2F%2Flocalhost%3A5001%2Fapi%2Fidentifiers%2Fscheduled-sessions%2F1242%2Fevents%2F12411?useCacheIfAvailable=true&expectedCapacity=42


---
Response status code: 200 OK. Responded in 5.574404ms.
```json
{
  "data": {
    "@context": [
      "https://openactive.io/",
      "https://openactive.io/ns-beta"
    ],
    "@type": "ScheduledSession",
    "@id": "https://localhost:5001/api/identifiers/scheduled-sessions/1242/events/12411",
    "startDate": "2022-07-27T00:15:11+00:00",
    "endDate": "2022-07-27T04:22:11+00:00",
    "superEvent": {
      "@type": "SessionSeries",
      "@id": "https://localhost:5001/api/identifiers/session-series/1242",
      "name": "Concrete Yoga",
      "activity": [
        {
          "@type": "Concept",
          "@id": "https://openactive.io/activity-list#c07d63a0-8eb9-4602-8bcc-23be6deb8f83",
          "inScheme": "https://openactive.io/activity-list",
          "prefLabel": "Jet Skiing"
        }
      ],
      "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
      "offers": [
        {
          "@type": "Offer",
          "@id": "https://localhost:5001/api/identifiers/session-series/1242#/offers/0",
          "allowCustomerCancellationFullRefund": false,
          "latestCancellationBeforeStartDate": "P1DT16H",
          "openBookingFlowRequirement": [
            "https://openactive.io/OpenBookingApproval"
          ],
          "openBookingPrepayment": "https://openactive.io/Unavailable",
          "price": 17,
          "priceCurrency": "GBP"
        }
      ],
      "organizer": {
        "@type": "Organization",
        "@id": "https://localhost:5001/api/identifiers/sellers/1",
        "name": "Acme Fitness Ltd",
        "isOpenBookingAllowed": true,
        "taxMode": "https://openactive.io/TaxGross",
        "termsOfService": [
          {
            "@type": "PrivacyPolicy",
            "name": "Privacy Policy",
            "requiresExplicitConsent": false,
            "url": "https://example.com/privacy.html"
          }
        ]
      },
      "url": "https://www.example.com/a-session-age",
      "beta:affiliatedLocation": {
        "@type": "Place",
        "name": "Fake Pond",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "GB",
          "addressLocality": "Another town",
          "addressRegion": "Oxfordshire",
          "postalCode": "OX1 1AA",
          "streetAddress": "1 Fake Park"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 0,
          "longitude": 0
        }
      }
    },
    "duration": "PT4H7M",
    "maximumAttendeeCapacity": 43,
    "remainingAttendeeCapacity": 42
  }
}
```
### Specs
* ✅ should return 200 on success for request relevant to OrderItem 0
* ✅ should return `totalPaymentDue.openBookingPrepayment` '`https://openactive.io/Unavailable`'

## Unnecessary payment property at B >> Assert Opportunity Capacity (after C2) >> validation of Opportunity Feed extract for OrderItem 0
### Specs
* ✅ passes validation checks

### Validations
 * ⚠️ $.eventStatus: Recommended property `eventStatus` is missing from `ScheduledSession`.
 * ⚠️ $.leader: Recommended property `leader` is missing from `ScheduledSession`.
 * ⚠️ $.url: Recommended property `url` is missing from `ScheduledSession`.
 * ⚠️ $.superEvent.description: Recommended property `description` is missing from `SessionSeries`.
 * ⚠️ $.superEvent.image: Recommended property `image` is missing from `SessionSeries`.
 * ⚠️ $.superEvent.ageRange: Recommended property `ageRange` is missing from `SessionSeries`.
 * ⚠️ $.superEvent.genderRestriction: Recommended property `genderRestriction` is missing from `SessionSeries`.
 * ⚠️ $.superEvent.leader: Recommended property `leader` is missing from `SessionSeries`.
 * ⚠️ $.superEvent.level: Recommended property `level` is missing from `SessionSeries`.
 * ⚠️ $.superEvent.offers[0].name: Recommended property `name` is missing from `Offer`.
 * ⚠️ $.superEvent.offers[0].ageRestriction: Recommended property `ageRestriction` is missing from `Offer`.
 * ⚠️ $.superEvent.organizer.url: Recommended property `url` is missing from `Organization`.
 * ⚠️ $.superEvent.organizer.telephone: Recommended property `telephone` is missing from `Organization`.
 * ⚠️ $.superEvent.organizer.sameAs: Recommended property `sameAs` is missing from `Organization`.
 * ⚠️ $.superEvent["beta:affiliatedLocation"].id: Recommended property `@id` is missing from `Place`.
 * ⚠️ $.superEvent["beta:affiliatedLocation"].url: Recommended property `url` is missing from `Place`.
 * ⚠️ $.superEvent["beta:affiliatedLocation"].description: Recommended property `description` is missing from `Place`.
 * ⚠️ $.superEvent["beta:affiliatedLocation"].image: Recommended property `image` is missing from `Place`.
 * ⚠️ $.superEvent["beta:affiliatedLocation"].telephone: Recommended property `telephone` is missing from `Place`.
 * ⚠️ $.superEvent["beta:affiliatedLocation"].openingHoursSpecification: Recommended property `openingHoursSpecification` is missing from `Place`.
 * ⚠️ $.superEvent["beta:affiliatedLocation"].amenityFeature: Recommended property `amenityFeature` is missing from `Place`.
 * 📝 $.genderRestriction: Data consumers will assume that there is no gender restriction when no valid `genderRestriction` is supplied on a `ScheduledSession`.
 * 📝 $.ageRange: Data consumers will assume that the `ageRange` is 18+ when not specified.
 * 📝 $.eventStatus: Data consumers will assume the `eventStatus` is scheduled if not specified or invalid.
 * 📝 $.superEvent.genderRestriction: Data consumers will assume that there is no gender restriction when no valid `genderRestriction` is supplied on a `SessionSeries`.
 * 📝 $.superEvent.ageRange: Data consumers will assume that the `ageRange` is 18+ when not specified.
 * 📝 $.superEvent.eventStatus: Data consumers will assume the `eventStatus` is scheduled if not specified or invalid.
 * 📝 $.superEvent["beta:affiliatedLocation"].geo.latitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.superEvent["beta:affiliatedLocation"].geo.longitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.

## Unnecessary payment property at B >> P

### P Request
PUT https://localhost:5001/api/openbooking/order-proposals/02f8d352-1e63-473f-9895-3a929d107ac4

* **Content-Type:** `"application/vnd.openactive.booking+json; version=1"`
* **Authorization:** `"Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkIwNEY3QjkxREUzQjk0NzhDNjE4MzNGQjI0QUE1Q0RCIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2NTg0ODU2NTYsImV4cCI6MTY1ODQ4OTI1NiwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NTAwMyIsImF1ZCI6Im9wZW5ib29raW5nIiwiY2xpZW50X2lkIjoiNTYwZGJjNzUtZTQ0Yy00YjAzLWExMGMtOTIxMTk3YWFlM2ExIiwiaHR0cHM6Ly9vcGVuYWN0aXZlLmlvL2NsaWVudElkIjoiNTYwZGJjNzUtZTQ0Yy00YjAzLWExMGMtOTIxMTk3YWFlM2ExIiwic3ViIjoiMTAwIiwiYXV0aF90aW1lIjoxNjU4NDg1NjU1LCJpZHAiOiJsb2NhbCIsImh0dHBzOi8vb3BlbmFjdGl2ZS5pby9zZWxsZXJJZCI6Imh0dHBzOi8vbG9jYWxob3N0OjUwMDEvYXBpL2lkZW50aWZpZXJzL3NlbGxlcnMvMSIsImp0aSI6IjkxQTNBNUUzMkU1NzZEODEyNkNGMjNCMDNFQkUzMUFBIiwic2lkIjoiMUFEM0IxMEQ5MDA4QkY0NzREMThFRTU2MzZEMDVBREYiLCJpYXQiOjE2NTg0ODU2NTYsInNjb3BlIjpbIm9wZW5pZCIsIm9wZW5hY3RpdmUtb3BlbmJvb2tpbmciLCJvcGVuYWN0aXZlLWlkZW50aXR5Iiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbInB3ZCJdfQ.a2EuRMF8HKqvnIK46S7jGAnFYJTLs5usIok3hM1GayeDD5bQGinKSWhljkFFzPUIey5JBLEDu-ncYu-gmWg85CyMyWM9tUvfXdyzUDelvQDh3aKsUQ82RB-flVXtzeTGkWKx57d03Cfzne_1lnhP0C9P6FWsUueTy_yw_4txHVgbA4y7FYcos624uxw0DUDYakjtSHoOQpXsWzzYUp20Ax_cxJC_zvpslDxQBFX3jTSXKDurUmkVGcFDiC-sRZLvRw9A5iAscUsSLbZBLF-oBQJOYFcXXeT2UsdJLx15MUh9_zKZ932UtV3XtWf8F47Dw8uSfvOl41VL7Q-zTfwKKg"`

```json
{
  "@context": "https://openactive.io/",
  "@type": "OrderProposal",
  "brokerRole": "https://openactive.io/AgentBroker",
  "broker": {
    "@type": "Organization",
    "name": "MyFitnessApp",
    "url": "https://myfitnessapp.example.com",
    "description": "A fitness app for all the community",
    "logo": {
      "@type": "ImageObject",
      "url": "http://data.myfitnessapp.org.uk/images/logo.png"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Alan Peacock Way",
      "addressLocality": "Village East",
      "addressRegion": "Middlesbrough",
      "postalCode": "TS4 3AE",
      "addressCountry": "GB"
    }
  },
  "seller": "https://localhost:5001/api/identifiers/sellers/1",
  "customer": {
    "@type": "Person",
    "email": "Jaron.Grimes@hotmail.com",
    "telephone": "927-634-9567 x72959",
    "givenName": "Pagac",
    "familyName": "Maye",
    "identifier": "4a3fdc4f-2af7-4fe6-bb2b-b211191b4256"
  },
  "orderedItem": [
    {
      "@type": "OrderItem",
      "position": 0,
      "acceptedOffer": "https://localhost:5001/api/identifiers/session-series/1242#/offers/0",
      "orderedItem": "https://localhost:5001/api/identifiers/scheduled-sessions/1242/events/12411"
    }
  ],
  "totalPaymentDue": {
    "@type": "PriceSpecification",
    "price": 18,
    "priceCurrency": "GBP"
  }
}
```

---
Response status code: 400 Bad Request. Responded in 310.955807ms.
```json
{
  "@context": "https://openactive.io/",
  "@type": "TotalPaymentDueMismatchError",
  "name": "The 'totalPaymentDue' property of the submitted 'Order' or 'OrderProposal' does not match the value calculated for that 'Order' or 'OrderProposal' by the Booking System.",
  "statusCode": 400,
  "description": "totalPaymentDue price in the request (18) does not match expected value (17)"
}
```
### Specs
* ✅ should return a response containing `"@type": "TotalPaymentDueMismatchError"` with status code `400`

## Unnecessary payment property at B >> P >> validation of P
### Specs
* ✅ passes validation checks

### Validations
 * ⚠️ $.instance: Recommended property `instance` is missing from `TotalPaymentDueMismatchError`.


