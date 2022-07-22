[< Return to Summary](summary.md) | File Generated: Fri Jul 22 2022 10:37:52 GMT+0000 (Coordinated Universal Time)

# common-error-conditions >> incomplete-order-item-no-opportunity (OpenBookingSimpleFlow >> FacilityUseSlot)

**Booking Flow:** OpenBookingSimpleFlow

**Opportunity Type:** FacilityUseSlot

**Feature:** Core / Common error conditions (Implemented) 

**Test:**  Test for IncompleteOrderItemError with missing `orderedItem`

Test for IncompleteOrderItemError (at C1, C2 and B). If there is a missing `orderedItem` property on the OrderItem.

### Running only this test

```bash
npm start -- --runInBand test/features/core/common-error-conditions/implemented/incomplete-order-item-no-opportunity-test.js
```

---

⚠️ 13 passed with 0 failures, 16 warnings and 2 suggestions 

---


## Fetch Opportunities

### Local Microservice Test Interface for OrderItem 0 Request
POST http://localhost:3000/test-interface/datasets/uat-ci/opportunities

```json
{
  "@type": "Slot",
  "facilityUse": {
    "@type": "FacilityUse",
    "provider": {
      "@type": "Organization",
      "@id": "https://localhost:5001/api/identifiers/sellers/1"
    }
  },
  "@context": [
    "https://openactive.io/",
    "https://openactive.io/test-interface"
  ],
  "test:testOpportunityCriteria": "https://openactive.io/test-interface#TestOpportunityBookable",
  "test:testOpenBookingFlow": "https://openactive.io/test-interface#OpenBookingSimpleFlow",
  "test:testOpportunityDataShapeExpression": [
    {
      "@type": "test:TripleConstraint",
      "predicate": "https://openactive.io/remainingUses",
      "valueExpr": {
        "@type": "NumericNodeConstraint",
        "mininclusive": 2
      }
    },
    {
      "@type": "test:TripleConstraint",
      "predicate": "https://openactive.io/isOpenBookingAllowed",
      "valueExpr": {
        "@type": "test:BooleanNodeConstraint",
        "value": true
      }
    },
    {
      "@type": "test:TripleConstraint",
      "predicate": "https://schema.org/startDate",
      "valueExpr": {
        "@type": "test:DateRangeNodeConstraint",
        "minDate": "2022-07-22T12:27:31.494+00:00"
      }
    },
    {
      "@type": "test:TripleConstraint",
      "predicate": "https://schema.org/eventStatus",
      "valueExpr": {
        "@type": "test:OptionNodeConstraint",
        "datatype": "schema:EventStatusType",
        "blocklist": [
          "https://schema.org/EventCancelled",
          "https://schema.org/EventPostponed"
        ]
      }
    }
  ],
  "test:testOfferDataShapeExpression": [
    {
      "@type": "test:TripleConstraint",
      "predicate": "https://openactive.io/openBookingFlowRequirement",
      "valueExpr": {
        "@type": "test:ArrayConstraint",
        "datatype": "oa:OpenBookingFlowRequirement",
        "excludesAll": [
          "https://openactive.io/OpenBookingAttendeeDetails",
          "https://openactive.io/OpenBookingIntakeForm",
          "https://openactive.io/OpenBookingApproval"
        ]
      }
    },
    {
      "@type": "test:TripleConstraint",
      "predicate": "https://openactive.io/validFromBeforeStartDate",
      "valueExpr": {
        "@type": "test:DateRangeNodeConstraint",
        "maxDate": "2022-07-22T10:27:31.494+00:00",
        "allowNull": true
      }
    },
    {
      "@type": "test:TripleConstraint",
      "predicate": "https://openactive.io/openBookingInAdvance",
      "valueExpr": {
        "@type": "test:OptionNodeConstraint",
        "datatype": "oa:RequiredStatusType",
        "blocklist": [
          "https://openactive.io/Unavailable"
        ]
      }
    }
  ]
}
```

---
Response status code: 200 OK. Responded in 4.658374ms.
```json
{
  "@context": "https://openactive.io/",
  "@type": "Slot",
  "@id": "https://localhost:5001/api/identifiers/facility-uses/392/facility-use-slots/3917"
}
```

### Opportunity Feed extract for OrderItem 0 Request
GET http://localhost:3000/opportunity/https%3A%2F%2Flocalhost%3A5001%2Fapi%2Fidentifiers%2Ffacility-uses%2F392%2Ffacility-use-slots%2F3917?useCacheIfAvailable=true


---
Response status code: 200 OK. Responded in 8.985343ms.
```json
{
  "data": {
    "@context": [
      "https://openactive.io/"
    ],
    "@type": "Slot",
    "@id": "https://localhost:5001/api/identifiers/facility-uses/392/facility-use-slots/3917",
    "identifier": 3917,
    "duration": "PT4H18M",
    "facilityUse": {
      "@type": "FacilityUse",
      "@id": "https://localhost:5001/api/identifiers/facility-uses/392",
      "name": "Concrete Sports Hall",
      "facilityType": [
        {
          "@type": "Concept",
          "@id": "https://openactive.io/facility-types#a1f82b7a-1258-4d9a-8dc5-bfc2ae961651",
          "inScheme": "https://openactive.io/facility-types",
          "prefLabel": "Squash Court"
        }
      ],
      "location": {
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
      },
      "provider": {
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
      "url": "https://www.example.com/a-session-age"
    },
    "maximumUses": 8,
    "offers": [
      {
        "@type": "Offer",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/392/facility-use-slots/3917#/offers/0",
        "allowCustomerCancellationFullRefund": true,
        "latestCancellationBeforeStartDate": "P1D",
        "price": 0,
        "priceCurrency": "GBP",
        "validFromBeforeStartDate": "P13DT18H25M"
      }
    ],
    "remainingUses": 8,
    "startDate": "2022-08-01T03:54:12+00:00",
    "endDate": "2022-08-01T08:12:12+00:00"
  }
}
```
### Specs
* ✅ should return 200 on success for request relevant to OrderItem 0

## Fetch Opportunities >> validation of Opportunity Feed extract for OrderItem 0
### Specs
* ✅ passes validation checks
* ✅ matches the criteria 'TestOpportunityBookable' required for this test

### Validations
 * ⚠️ $.facilityUse.description: Recommended property `description` is missing from `FacilityUse`.
 * ⚠️ $.facilityUse.image: Recommended property `image` is missing from `FacilityUse`.
 * ⚠️ $.facilityUse.hoursAvailable: Recommended property `hoursAvailable` is missing from `FacilityUse`.
 * ⚠️ $.facilityUse.offers: Recommended property `offers` is missing from `FacilityUse`.
 * ⚠️ $.facilityUse.location.id: Recommended property `@id` is missing from `Place`.
 * ⚠️ $.facilityUse.location.url: Recommended property `url` is missing from `Place`.
 * ⚠️ $.facilityUse.location.description: Recommended property `description` is missing from `Place`.
 * ⚠️ $.facilityUse.location.image: Recommended property `image` is missing from `Place`.
 * ⚠️ $.facilityUse.location.telephone: Recommended property `telephone` is missing from `Place`.
 * ⚠️ $.facilityUse.location.openingHoursSpecification: Recommended property `openingHoursSpecification` is missing from `Place`.
 * ⚠️ $.facilityUse.location.amenityFeature: Recommended property `amenityFeature` is missing from `Place`.
 * ⚠️ $.facilityUse.provider.url: Recommended property `url` is missing from `Organization`.
 * ⚠️ $.facilityUse.provider.telephone: Recommended property `telephone` is missing from `Organization`.
 * ⚠️ $.facilityUse.provider.sameAs: Recommended property `sameAs` is missing from `Organization`.
 * ⚠️ $.offers[0].name: Recommended property `name` is missing from `Offer`.
 * ⚠️ $.offers[0].ageRestriction: Recommended property `ageRestriction` is missing from `Offer`.
 * 📝 $.facilityUse.location.geo.latitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.facilityUse.location.geo.longitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.

## Assert Opportunity Capacity (after C1)

### C1 Request
PUT https://localhost:5001/api/openbooking/order-quote-templates/ec3b86e1-fa7b-40d3-8ab0-cff51c193521

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
      "acceptedOffer": "https://localhost:5001/api/identifiers/facility-uses/392/facility-use-slots/3917#/offers/0"
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
Response status code: 409 Conflict. Responded in 35.357763ms.
```json
{
  "@context": "https://openactive.io/",
  "@type": "OrderQuote",
  "@id": "https://localhost:5001/api/openbooking/order-quotes/ec3b86e1-fa7b-40d3-8ab0-cff51c193521",
  "orderRequiresApproval": false,
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
      "acceptedOffer": "https://localhost:5001/api/identifiers/facility-uses/392/facility-use-slots/3917#/offers/0",
      "error": [
        {
          "@type": "IncompleteOrderItemError",
          "name": "There is a missing 'acceptedOffer' or 'orderedItem' property on the 'OrderItem'.",
          "statusCode": 409,
          "description": "orderedItem @id was not provided"
        }
      ],
      "position": 0
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
    "openBookingPrepayment": "https://openactive.io/Required",
    "price": 0
  }
}
```
### Specs
* ✅ should return 200 on success for request relevant to OrderItem 0
* ✅ should return HTTP 409
* ✅ Should have the same number of OrderItems as criteria
* ✅ OrderItem at position 0 - should include an IncompleteOrderItemError

## Assert Opportunity Capacity (after C2)

### C2 Request
PUT https://localhost:5001/api/openbooking/order-quotes/ec3b86e1-fa7b-40d3-8ab0-cff51c193521

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
    "email": "Buddy.Lindgren@hotmail.com",
    "telephone": "664.959.7430 x89158",
    "givenName": "Abernathy",
    "familyName": "Dortha",
    "identifier": "47a03f45-c612-43a6-9e7b-3cbed55541be"
  },
  "orderedItem": [
    {
      "@type": "OrderItem",
      "position": 0,
      "acceptedOffer": "https://localhost:5001/api/identifiers/facility-uses/392/facility-use-slots/3917#/offers/0"
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
Response status code: 409 Conflict. Responded in 15.893553ms.
```json
{
  "@context": "https://openactive.io/",
  "@type": "OrderQuote",
  "@id": "https://localhost:5001/api/openbooking/order-quotes/ec3b86e1-fa7b-40d3-8ab0-cff51c193521",
  "orderRequiresApproval": false,
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
    "identifier": "47a03f45-c612-43a6-9e7b-3cbed55541be",
    "email": "Buddy.Lindgren@hotmail.com",
    "familyName": "Dortha",
    "givenName": "Abernathy",
    "telephone": "664.959.7430 x89158"
  },
  "orderedItem": [
    {
      "@type": "OrderItem",
      "acceptedOffer": "https://localhost:5001/api/identifiers/facility-uses/392/facility-use-slots/3917#/offers/0",
      "error": [
        {
          "@type": "IncompleteOrderItemError",
          "name": "There is a missing 'acceptedOffer' or 'orderedItem' property on the 'OrderItem'.",
          "statusCode": 409,
          "description": "orderedItem @id was not provided"
        }
      ],
      "position": 0
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
    "openBookingPrepayment": "https://openactive.io/Required",
    "price": 0
  }
}
```
### Specs
* ✅ should return 200 on success for request relevant to OrderItem 0
* ✅ should return HTTP 409
* ✅ Should have the same number of OrderItems as criteria
* ✅ OrderItem at position 0 - should include an IncompleteOrderItemError

## B

### B Request
PUT https://localhost:5001/api/openbooking/orders/ec3b86e1-fa7b-40d3-8ab0-cff51c193521

* **Content-Type:** `"application/vnd.openactive.booking+json; version=1"`
* **Authorization:** `"Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkIwNEY3QjkxREUzQjk0NzhDNjE4MzNGQjI0QUE1Q0RCIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2NTg0ODU2NTYsImV4cCI6MTY1ODQ4OTI1NiwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NTAwMyIsImF1ZCI6Im9wZW5ib29raW5nIiwiY2xpZW50X2lkIjoiNTYwZGJjNzUtZTQ0Yy00YjAzLWExMGMtOTIxMTk3YWFlM2ExIiwiaHR0cHM6Ly9vcGVuYWN0aXZlLmlvL2NsaWVudElkIjoiNTYwZGJjNzUtZTQ0Yy00YjAzLWExMGMtOTIxMTk3YWFlM2ExIiwic3ViIjoiMTAwIiwiYXV0aF90aW1lIjoxNjU4NDg1NjU1LCJpZHAiOiJsb2NhbCIsImh0dHBzOi8vb3BlbmFjdGl2ZS5pby9zZWxsZXJJZCI6Imh0dHBzOi8vbG9jYWxob3N0OjUwMDEvYXBpL2lkZW50aWZpZXJzL3NlbGxlcnMvMSIsImp0aSI6IjkxQTNBNUUzMkU1NzZEODEyNkNGMjNCMDNFQkUzMUFBIiwic2lkIjoiMUFEM0IxMEQ5MDA4QkY0NzREMThFRTU2MzZEMDVBREYiLCJpYXQiOjE2NTg0ODU2NTYsInNjb3BlIjpbIm9wZW5pZCIsIm9wZW5hY3RpdmUtb3BlbmJvb2tpbmciLCJvcGVuYWN0aXZlLWlkZW50aXR5Iiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbInB3ZCJdfQ.a2EuRMF8HKqvnIK46S7jGAnFYJTLs5usIok3hM1GayeDD5bQGinKSWhljkFFzPUIey5JBLEDu-ncYu-gmWg85CyMyWM9tUvfXdyzUDelvQDh3aKsUQ82RB-flVXtzeTGkWKx57d03Cfzne_1lnhP0C9P6FWsUueTy_yw_4txHVgbA4y7FYcos624uxw0DUDYakjtSHoOQpXsWzzYUp20Ax_cxJC_zvpslDxQBFX3jTSXKDurUmkVGcFDiC-sRZLvRw9A5iAscUsSLbZBLF-oBQJOYFcXXeT2UsdJLx15MUh9_zKZ932UtV3XtWf8F47Dw8uSfvOl41VL7Q-zTfwKKg"`

```json
{
  "@context": "https://openactive.io/",
  "@type": "Order",
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
    "email": "Buddy.Lindgren@hotmail.com",
    "telephone": "664.959.7430 x89158",
    "givenName": "Abernathy",
    "familyName": "Dortha",
    "identifier": "47a03f45-c612-43a6-9e7b-3cbed55541be"
  },
  "orderedItem": [
    {
      "@type": "OrderItem",
      "position": 0,
      "acceptedOffer": "https://localhost:5001/api/identifiers/facility-uses/392/facility-use-slots/3917#/offers/0"
    }
  ],
  "totalPaymentDue": {
    "@type": "PriceSpecification",
    "price": 0,
    "priceCurrency": "GBP"
  }
}
```

---
Response status code: 409 Conflict. Responded in 15.803551ms.
```json
{
  "@context": "https://openactive.io/",
  "@type": "Order",
  "@id": "https://localhost:5001/api/openbooking/orders/ec3b86e1-fa7b-40d3-8ab0-cff51c193521",
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
    "identifier": "47a03f45-c612-43a6-9e7b-3cbed55541be",
    "email": "Buddy.Lindgren@hotmail.com",
    "familyName": "Dortha",
    "givenName": "Abernathy",
    "telephone": "664.959.7430 x89158"
  },
  "orderedItem": [
    {
      "@type": "OrderItem",
      "acceptedOffer": "https://localhost:5001/api/identifiers/facility-uses/392/facility-use-slots/3917#/offers/0",
      "error": [
        {
          "@type": "IncompleteOrderItemError",
          "name": "There is a missing 'acceptedOffer' or 'orderedItem' property on the 'OrderItem'.",
          "statusCode": 409,
          "description": "orderedItem @id was not provided"
        }
      ],
      "position": 0
    }
  ],
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
    "openBookingPrepayment": "https://openactive.io/Required",
    "price": 0
  }
}
```
### Specs
* ✅ should return HTTP 409
* ✅ Should have the same number of OrderItems as criteria
* ✅ OrderItem at position 0 - should include an IncompleteOrderItemError


