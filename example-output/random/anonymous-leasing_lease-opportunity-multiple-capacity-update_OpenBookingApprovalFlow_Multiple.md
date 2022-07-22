[< Return to Summary](summary.md) | File Generated: Fri Jul 22 2022 10:44:45 GMT+0000 (Coordinated Universal Time)

# anonymous-leasing >> lease-opportunity-multiple-capacity-update (OpenBookingApprovalFlow >> Multiple)

**Booking Flow:** OpenBookingApprovalFlow

**Opportunity Type:** Multiple

**Feature:** Leasing / Anonymous leasing, including leaseExpires (Implemented) 

**Test:**  Multiple anonymous leased spaces are unavailable for purchase by other users

For an opportunity with 2 spaces: Check the opportunity has 2 spaces in the feed. Run C1 to book one item (creating an anonymous lease). Check the opportunity has 1 space in the feed. Run C1 again for a new Order UUID for the same opportunity attempting to book 3 spaces, expecting OrderItems to be returned with 1 having no errors, 1 having an OpportunityCapacityIsReservedByLeaseError, and 1 having an OpportunityHasInsufficientCapacityError.

### Running only this test

```bash
npm start -- --runInBand test/features/leasing/anonymous-leasing/implemented/lease-opportunity-multiple-capacity-update-test.js
```

---

⚠️ 53 passed with 0 failures, 679 warnings and 178 suggestions 

---


## Fetch Opportunities

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
  "test:testOpportunityCriteria": "https://openactive.io/test-interface#TestOpportunityBookableFiveSpaces",
  "test:testOpenBookingFlow": "https://openactive.io/test-interface#OpenBookingApprovalFlow",
  "test:testOpportunityDataShapeExpression": [
    {
      "@type": "test:TripleConstraint",
      "predicate": "https://schema.org/remainingAttendeeCapacity",
      "valueExpr": {
        "@type": "NumericNodeConstraint",
        "mininclusive": 2,
        "maxinclusive": 5
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
        "includesAll": [
          "https://openactive.io/OpenBookingApproval"
        ],
        "excludesAll": [
          "https://openactive.io/OpenBookingAttendeeDetails",
          "https://openactive.io/OpenBookingIntakeForm"
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
Response status code: 200 OK. Responded in 27.346806ms.
```json
{
  "@context": "https://openactive.io/",
  "@type": "ScheduledSession",
  "@id": "https://localhost:5001/api/identifiers/scheduled-sessions/1147/events/11469"
}
```

### Local Microservice Test Interface for OrderItem 1 Request
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
  "test:testOpportunityCriteria": "https://openactive.io/test-interface#TestOpportunityBookableFiveSpaces",
  "test:testOpenBookingFlow": "https://openactive.io/test-interface#OpenBookingApprovalFlow",
  "test:testOpportunityDataShapeExpression": [
    {
      "@type": "test:TripleConstraint",
      "predicate": "https://openactive.io/remainingUses",
      "valueExpr": {
        "@type": "NumericNodeConstraint",
        "mininclusive": 2,
        "maxinclusive": 5
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
        "includesAll": [
          "https://openactive.io/OpenBookingApproval"
        ],
        "excludesAll": [
          "https://openactive.io/OpenBookingAttendeeDetails",
          "https://openactive.io/OpenBookingIntakeForm"
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
Response status code: 200 OK. Responded in 25.736764ms.
```json
{
  "@context": "https://openactive.io/",
  "@type": "Slot",
  "@id": "https://localhost:5001/api/identifiers/facility-uses/1508/facility-use-slots/15072"
}
```

### Opportunity Feed extract for OrderItem 0 Request
GET http://localhost:3000/opportunity/https%3A%2F%2Flocalhost%3A5001%2Fapi%2Fidentifiers%2Fscheduled-sessions%2F1147%2Fevents%2F11469?useCacheIfAvailable=true


---
Response status code: 200 OK. Responded in 20.966442ms.
```json
{
  "data": {
    "@context": [
      "https://openactive.io/"
    ],
    "@type": "ScheduledSession",
    "@id": "https://localhost:5001/api/identifiers/scheduled-sessions/1147/events/11469",
    "startDate": "2022-07-29T03:40:11+00:00",
    "endDate": "2022-07-29T09:13:11+00:00",
    "superEvent": {
      "@type": "SessionSeries",
      "@id": "https://localhost:5001/api/identifiers/session-series/1147",
      "name": "Concrete Yoga",
      "activity": [
        {
          "@type": "Concept",
          "@id": "https://openactive.io/activity-list#c07d63a0-8eb9-4602-8bcc-23be6deb8f83",
          "inScheme": "https://openactive.io/activity-list",
          "prefLabel": "Jet Skiing"
        }
      ],
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
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
      "offers": [
        {
          "@type": "Offer",
          "@id": "https://localhost:5001/api/identifiers/session-series/1147#/offers/0",
          "allowCustomerCancellationFullRefund": true,
          "latestCancellationBeforeStartDate": "P1D",
          "openBookingFlowRequirement": [
            "https://openactive.io/OpenBookingApproval"
          ],
          "price": 0,
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
      "url": "https://www.example.com/a-session-age"
    },
    "duration": "PT5H33M",
    "maximumAttendeeCapacity": 5,
    "remainingAttendeeCapacity": 5
  }
}
```

### Opportunity Feed extract for OrderItem 1 Request
GET http://localhost:3000/opportunity/https%3A%2F%2Flocalhost%3A5001%2Fapi%2Fidentifiers%2Ffacility-uses%2F1508%2Ffacility-use-slots%2F15072?useCacheIfAvailable=true


---
Response status code: 200 OK. Responded in 20.074318ms.
```json
{
  "data": {
    "@context": [
      "https://openactive.io/"
    ],
    "@type": "Slot",
    "@id": "https://localhost:5001/api/identifiers/facility-uses/1508/facility-use-slots/15072",
    "identifier": 15072,
    "duration": "PT1H46M",
    "facilityUse": {
      "@type": "FacilityUse",
      "@id": "https://localhost:5001/api/identifiers/facility-uses/1508",
      "name": "Concrete Running Hall",
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
    "maximumUses": 5,
    "offers": [
      {
        "@type": "Offer",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/1508/facility-use-slots/15072#/offers/0",
        "allowCustomerCancellationFullRefund": false,
        "latestCancellationBeforeStartDate": "P1D",
        "openBookingFlowRequirement": [
          "https://openactive.io/OpenBookingApproval",
          "https://openactive.io/OpenBookingNegotiation"
        ],
        "openBookingPrepayment": "https://openactive.io/Unavailable",
        "price": 0,
        "priceCurrency": "GBP",
        "validFromBeforeStartDate": "P11DT10H5M"
      }
    ],
    "remainingUses": 5,
    "startDate": "2022-07-27T04:49:12+00:00",
    "endDate": "2022-07-27T06:35:12+00:00"
  }
}
```
### Specs
* ✅ should return 200 on success for request relevant to OrderItem 0
* ✅ should return 200 on success for request relevant to OrderItem 1

## Fetch Opportunities >> validation of Opportunity Feed extract for OrderItem 0
### Specs
* ✅ passes validation checks
* ✅ matches the criteria 'TestOpportunityBookableFiveSpaces' required for this test

### Validations
 * ⚠️ $.eventStatus: Recommended property `eventStatus` is missing from `ScheduledSession`.
 * ⚠️ $.leader: Recommended property `leader` is missing from `ScheduledSession`.
 * ⚠️ $.url: Recommended property `url` is missing from `ScheduledSession`.
 * ⚠️ $.isAccessibleForFree: Where a `ScheduledSession` has at least one `Offer` with `price` set to `0`, it should also have a property named `isAccessibleForFree` set to `true`.
 * ⚠️ $.superEvent.description: Recommended property `description` is missing from `SessionSeries`.
 * ⚠️ $.superEvent.image: Recommended property `image` is missing from `SessionSeries`.
 * ⚠️ $.superEvent.ageRange: Recommended property `ageRange` is missing from `SessionSeries`.
 * ⚠️ $.superEvent.genderRestriction: Recommended property `genderRestriction` is missing from `SessionSeries`.
 * ⚠️ $.superEvent.leader: Recommended property `leader` is missing from `SessionSeries`.
 * ⚠️ $.superEvent.level: Recommended property `level` is missing from `SessionSeries`.
 * ⚠️ $.superEvent.isAccessibleForFree: Where a `SessionSeries` has at least one `Offer` with `price` set to `0`, it should also have a property named `isAccessibleForFree` set to `true`.
 * ⚠️ $.superEvent.location.id: Recommended property `@id` is missing from `Place`.
 * ⚠️ $.superEvent.location.url: Recommended property `url` is missing from `Place`.
 * ⚠️ $.superEvent.location.description: Recommended property `description` is missing from `Place`.
 * ⚠️ $.superEvent.location.image: Recommended property `image` is missing from `Place`.
 * ⚠️ $.superEvent.location.telephone: Recommended property `telephone` is missing from `Place`.
 * ⚠️ $.superEvent.location.openingHoursSpecification: Recommended property `openingHoursSpecification` is missing from `Place`.
 * ⚠️ $.superEvent.location.amenityFeature: Recommended property `amenityFeature` is missing from `Place`.
 * ⚠️ $.superEvent.offers[0].name: Recommended property `name` is missing from `Offer`.
 * ⚠️ $.superEvent.offers[0].ageRestriction: Recommended property `ageRestriction` is missing from `Offer`.
 * ⚠️ $.superEvent.organizer.url: Recommended property `url` is missing from `Organization`.
 * ⚠️ $.superEvent.organizer.telephone: Recommended property `telephone` is missing from `Organization`.
 * ⚠️ $.superEvent.organizer.sameAs: Recommended property `sameAs` is missing from `Organization`.
 * 📝 $.genderRestriction: Data consumers will assume that there is no gender restriction when no valid `genderRestriction` is supplied on a `ScheduledSession`.
 * 📝 $.ageRange: Data consumers will assume that the `ageRange` is 18+ when not specified.
 * 📝 $.eventStatus: Data consumers will assume the `eventStatus` is scheduled if not specified or invalid.
 * 📝 $.superEvent.genderRestriction: Data consumers will assume that there is no gender restriction when no valid `genderRestriction` is supplied on a `SessionSeries`.
 * 📝 $.superEvent.ageRange: Data consumers will assume that the `ageRange` is 18+ when not specified.
 * 📝 $.superEvent.eventStatus: Data consumers will assume the `eventStatus` is scheduled if not specified or invalid.
 * 📝 $.superEvent.location.geo.latitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.superEvent.location.geo.longitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.

## Fetch Opportunities >> validation of Opportunity Feed extract for OrderItem 1
### Specs
* ✅ passes validation checks
* ✅ matches the criteria 'TestOpportunityBookableFiveSpaces' required for this test

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

## Lease 3 item(s) (success) >> C1

### C1 Request
PUT https://localhost:5001/api/openbooking/order-quote-templates/008be461-1275-497b-a12c-7085774367c6

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
      "acceptedOffer": "https://localhost:5001/api/identifiers/session-series/1147#/offers/0",
      "orderedItem": "https://localhost:5001/api/identifiers/scheduled-sessions/1147/events/11469"
    },
    {
      "@type": "OrderItem",
      "position": 1,
      "acceptedOffer": "https://localhost:5001/api/identifiers/session-series/1147#/offers/0",
      "orderedItem": "https://localhost:5001/api/identifiers/scheduled-sessions/1147/events/11469"
    },
    {
      "@type": "OrderItem",
      "position": 2,
      "acceptedOffer": "https://localhost:5001/api/identifiers/session-series/1147#/offers/0",
      "orderedItem": "https://localhost:5001/api/identifiers/scheduled-sessions/1147/events/11469"
    },
    {
      "@type": "OrderItem",
      "position": 3,
      "acceptedOffer": "https://localhost:5001/api/identifiers/facility-uses/1508/facility-use-slots/15072#/offers/0",
      "orderedItem": "https://localhost:5001/api/identifiers/facility-uses/1508/facility-use-slots/15072"
    },
    {
      "@type": "OrderItem",
      "position": 4,
      "acceptedOffer": "https://localhost:5001/api/identifiers/facility-uses/1508/facility-use-slots/15072#/offers/0",
      "orderedItem": "https://localhost:5001/api/identifiers/facility-uses/1508/facility-use-slots/15072"
    },
    {
      "@type": "OrderItem",
      "position": 5,
      "acceptedOffer": "https://localhost:5001/api/identifiers/facility-uses/1508/facility-use-slots/15072#/offers/0",
      "orderedItem": "https://localhost:5001/api/identifiers/facility-uses/1508/facility-use-slots/15072"
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
Response status code: 200 OK. Responded in 244.764418ms.
```json
{
  "@context": "https://openactive.io/",
  "@type": "OrderQuote",
  "@id": "https://localhost:5001/api/openbooking/order-quotes/008be461-1275-497b-a12c-7085774367c6",
  "lease": {
    "@type": "Lease",
    "leaseExpires": "2022-07-22T10:50:18+00:00"
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
        "@id": "https://localhost:5001/api/identifiers/session-series/1147#/offers/0",
        "allowCustomerCancellationFullRefund": true,
        "latestCancellationBeforeStartDate": "P1D",
        "price": 0,
        "priceCurrency": "GBP"
      },
      "orderedItem": {
        "@type": "ScheduledSession",
        "@id": "https://localhost:5001/api/identifiers/scheduled-sessions/1147/events/11469",
        "startDate": "2022-07-29T03:40:11+00:00",
        "endDate": "2022-07-29T09:13:11+00:00",
        "superEvent": {
          "@type": "SessionSeries",
          "@id": "https://localhost:5001/api/identifiers/session-series/1147",
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
          "url": "https://example.com/events/1147"
        },
        "maximumAttendeeCapacity": 5,
        "remainingAttendeeCapacity": 5
      },
      "position": 0,
      "unitTaxSpecification": [
        {
          "@type": "TaxChargeSpecification",
          "name": "VAT at 20%",
          "price": 0,
          "priceCurrency": "GBP",
          "rate": 0.2
        }
      ]
    },
    {
      "@type": "OrderItem",
      "acceptedOffer": {
        "@type": "Offer",
        "@id": "https://localhost:5001/api/identifiers/session-series/1147#/offers/0",
        "allowCustomerCancellationFullRefund": true,
        "latestCancellationBeforeStartDate": "P1D",
        "price": 0,
        "priceCurrency": "GBP"
      },
      "orderedItem": {
        "@type": "ScheduledSession",
        "@id": "https://localhost:5001/api/identifiers/scheduled-sessions/1147/events/11469",
        "startDate": "2022-07-29T03:40:11+00:00",
        "endDate": "2022-07-29T09:13:11+00:00",
        "superEvent": {
          "@type": "SessionSeries",
          "@id": "https://localhost:5001/api/identifiers/session-series/1147",
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
          "url": "https://example.com/events/1147"
        },
        "maximumAttendeeCapacity": 5,
        "remainingAttendeeCapacity": 5
      },
      "position": 1,
      "unitTaxSpecification": [
        {
          "@type": "TaxChargeSpecification",
          "name": "VAT at 20%",
          "price": 0,
          "priceCurrency": "GBP",
          "rate": 0.2
        }
      ]
    },
    {
      "@type": "OrderItem",
      "acceptedOffer": {
        "@type": "Offer",
        "@id": "https://localhost:5001/api/identifiers/session-series/1147#/offers/0",
        "allowCustomerCancellationFullRefund": true,
        "latestCancellationBeforeStartDate": "P1D",
        "price": 0,
        "priceCurrency": "GBP"
      },
      "orderedItem": {
        "@type": "ScheduledSession",
        "@id": "https://localhost:5001/api/identifiers/scheduled-sessions/1147/events/11469",
        "startDate": "2022-07-29T03:40:11+00:00",
        "endDate": "2022-07-29T09:13:11+00:00",
        "superEvent": {
          "@type": "SessionSeries",
          "@id": "https://localhost:5001/api/identifiers/session-series/1147",
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
          "url": "https://example.com/events/1147"
        },
        "maximumAttendeeCapacity": 5,
        "remainingAttendeeCapacity": 5
      },
      "position": 2,
      "unitTaxSpecification": [
        {
          "@type": "TaxChargeSpecification",
          "name": "VAT at 20%",
          "price": 0,
          "priceCurrency": "GBP",
          "rate": 0.2
        }
      ]
    },
    {
      "@type": "OrderItem",
      "acceptedOffer": {
        "@type": "Offer",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/1508/facility-use-slots/15072#/offers/0",
        "allowCustomerCancellationFullRefund": false,
        "latestCancellationBeforeStartDate": "P1D",
        "openBookingPrepayment": "https://openactive.io/Unavailable",
        "price": 0,
        "priceCurrency": "GBP",
        "validFromBeforeStartDate": "P11DT10H5M"
      },
      "orderedItem": {
        "@type": "Slot",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/1508/facility-use-slots/15072",
        "facilityUse": {
          "@type": "FacilityUse",
          "@id": "https://localhost:5001/api/identifiers/facility-uses/1508",
          "name": "Concrete Running Hall",
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
            "name": "Fake fitness studio",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 0,
              "longitude": 0
            }
          },
          "url": "https://example.com/events/1508"
        },
        "maximumUses": 5,
        "remainingUses": 5,
        "startDate": "2022-07-27T04:49:12+00:00",
        "endDate": "2022-07-27T06:35:12+00:00"
      },
      "position": 3,
      "unitTaxSpecification": [
        {
          "@type": "TaxChargeSpecification",
          "name": "VAT at 20%",
          "price": 0,
          "priceCurrency": "GBP",
          "rate": 0.2
        }
      ]
    },
    {
      "@type": "OrderItem",
      "acceptedOffer": {
        "@type": "Offer",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/1508/facility-use-slots/15072#/offers/0",
        "allowCustomerCancellationFullRefund": false,
        "latestCancellationBeforeStartDate": "P1D",
        "openBookingPrepayment": "https://openactive.io/Unavailable",
        "price": 0,
        "priceCurrency": "GBP",
        "validFromBeforeStartDate": "P11DT10H5M"
      },
      "orderedItem": {
        "@type": "Slot",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/1508/facility-use-slots/15072",
        "facilityUse": {
          "@type": "FacilityUse",
          "@id": "https://localhost:5001/api/identifiers/facility-uses/1508",
          "name": "Concrete Running Hall",
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
            "name": "Fake fitness studio",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 0,
              "longitude": 0
            }
          },
          "url": "https://example.com/events/1508"
        },
        "maximumUses": 5,
        "remainingUses": 5,
        "startDate": "2022-07-27T04:49:12+00:00",
        "endDate": "2022-07-27T06:35:12+00:00"
      },
      "position": 4,
      "unitTaxSpecification": [
        {
          "@type": "TaxChargeSpecification",
          "name": "VAT at 20%",
          "price": 0,
          "priceCurrency": "GBP",
          "rate": 0.2
        }
      ]
    },
    {
      "@type": "OrderItem",
      "acceptedOffer": {
        "@type": "Offer",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/1508/facility-use-slots/15072#/offers/0",
        "allowCustomerCancellationFullRefund": false,
        "latestCancellationBeforeStartDate": "P1D",
        "openBookingPrepayment": "https://openactive.io/Unavailable",
        "price": 0,
        "priceCurrency": "GBP",
        "validFromBeforeStartDate": "P11DT10H5M"
      },
      "orderedItem": {
        "@type": "Slot",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/1508/facility-use-slots/15072",
        "facilityUse": {
          "@type": "FacilityUse",
          "@id": "https://localhost:5001/api/identifiers/facility-uses/1508",
          "name": "Concrete Running Hall",
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
            "name": "Fake fitness studio",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 0,
              "longitude": 0
            }
          },
          "url": "https://example.com/events/1508"
        },
        "maximumUses": 5,
        "remainingUses": 5,
        "startDate": "2022-07-27T04:49:12+00:00",
        "endDate": "2022-07-27T06:35:12+00:00"
      },
      "position": 5,
      "unitTaxSpecification": [
        {
          "@type": "TaxChargeSpecification",
          "name": "VAT at 20%",
          "price": 0,
          "priceCurrency": "GBP",
          "rate": 0.2
        }
      ]
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
    "openBookingPrepayment": "https://openactive.io/Unavailable",
    "price": 0,
    "priceCurrency": "GBP"
  },
  "totalPaymentTax": [
    {
      "@type": "TaxChargeSpecification",
      "name": "VAT at 20%",
      "price": 0,
      "priceCurrency": "GBP",
      "rate": 0.2
    }
  ]
}
```
### Specs
* ✅ should return 200 on success

## Lease 3 item(s) (success) >> C1 >> validation of C1
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
 * ⚠️ $.orderedItem[1].acceptedOffer.name: Recommended property `name` is missing from `Offer`.
 * ⚠️ $.orderedItem[1].acceptedOffer.ageRestriction: Recommended property `ageRestriction` is missing from `Offer`.
 * ⚠️ $.orderedItem[1].orderedItem.eventStatus: Recommended property `eventStatus` is missing from `ScheduledSession`.
 * ⚠️ $.orderedItem[1].orderedItem.superEvent.ageRange: Recommended property `ageRange` is missing from `SessionSeries`.
 * ⚠️ $.orderedItem[1].orderedItem.superEvent.genderRestriction: Recommended property `genderRestriction` is missing from `SessionSeries`.
 * ⚠️ $.orderedItem[1].orderedItem.superEvent.eventStatus: Recommended property `eventStatus` is missing from `SessionSeries`.
 * ⚠️ $.orderedItem[1].orderedItem.superEvent.location.id: Recommended property `@id` is missing from `Place`.
 * ⚠️ $.orderedItem[1].orderedItem.superEvent.location.url: Recommended property `url` is missing from `Place`.
 * ⚠️ $.orderedItem[1].orderedItem.superEvent.location.description: Recommended property `description` is missing from `Place`.
 * ⚠️ $.orderedItem[1].orderedItem.superEvent.location.image: Recommended property `image` is missing from `Place`.
 * ⚠️ $.orderedItem[1].orderedItem.superEvent.location.telephone: Recommended property `telephone` is missing from `Place`.
 * ⚠️ $.orderedItem[1].orderedItem.superEvent.location.openingHoursSpecification: Recommended property `openingHoursSpecification` is missing from `Place`.
 * ⚠️ $.orderedItem[1].orderedItem.superEvent.location.amenityFeature: Recommended property `amenityFeature` is missing from `Place`.
 * ⚠️ $.orderedItem[2].acceptedOffer.name: Recommended property `name` is missing from `Offer`.
 * ⚠️ $.orderedItem[2].acceptedOffer.ageRestriction: Recommended property `ageRestriction` is missing from `Offer`.
 * ⚠️ $.orderedItem[2].orderedItem.eventStatus: Recommended property `eventStatus` is missing from `ScheduledSession`.
 * ⚠️ $.orderedItem[2].orderedItem.superEvent.ageRange: Recommended property `ageRange` is missing from `SessionSeries`.
 * ⚠️ $.orderedItem[2].orderedItem.superEvent.genderRestriction: Recommended property `genderRestriction` is missing from `SessionSeries`.
 * ⚠️ $.orderedItem[2].orderedItem.superEvent.eventStatus: Recommended property `eventStatus` is missing from `SessionSeries`.
 * ⚠️ $.orderedItem[2].orderedItem.superEvent.location.id: Recommended property `@id` is missing from `Place`.
 * ⚠️ $.orderedItem[2].orderedItem.superEvent.location.url: Recommended property `url` is missing from `Place`.
 * ⚠️ $.orderedItem[2].orderedItem.superEvent.location.description: Recommended property `description` is missing from `Place`.
 * ⚠️ $.orderedItem[2].orderedItem.superEvent.location.image: Recommended property `image` is missing from `Place`.
 * ⚠️ $.orderedItem[2].orderedItem.superEvent.location.telephone: Recommended property `telephone` is missing from `Place`.
 * ⚠️ $.orderedItem[2].orderedItem.superEvent.location.openingHoursSpecification: Recommended property `openingHoursSpecification` is missing from `Place`.
 * ⚠️ $.orderedItem[2].orderedItem.superEvent.location.amenityFeature: Recommended property `amenityFeature` is missing from `Place`.
 * ⚠️ $.orderedItem[3].acceptedOffer.name: Recommended property `name` is missing from `Offer`.
 * ⚠️ $.orderedItem[3].acceptedOffer.ageRestriction: Recommended property `ageRestriction` is missing from `Offer`.
 * ⚠️ $.orderedItem[3].orderedItem.duration: Recommended property `duration` is missing from `Slot`.
 * ⚠️ $.orderedItem[3].orderedItem.facilityUse.description: Recommended property `description` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[3].orderedItem.facilityUse.image: Recommended property `image` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[3].orderedItem.facilityUse.hoursAvailable: Recommended property `hoursAvailable` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[3].orderedItem.facilityUse.offers: Recommended property `offers` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[3].orderedItem.facilityUse.location.id: Recommended property `@id` is missing from `Place`.
 * ⚠️ $.orderedItem[3].orderedItem.facilityUse.location.url: Recommended property `url` is missing from `Place`.
 * ⚠️ $.orderedItem[3].orderedItem.facilityUse.location.description: Recommended property `description` is missing from `Place`.
 * ⚠️ $.orderedItem[3].orderedItem.facilityUse.location.image: Recommended property `image` is missing from `Place`.
 * ⚠️ $.orderedItem[3].orderedItem.facilityUse.location.telephone: Recommended property `telephone` is missing from `Place`.
 * ⚠️ $.orderedItem[3].orderedItem.facilityUse.location.openingHoursSpecification: Recommended property `openingHoursSpecification` is missing from `Place`.
 * ⚠️ $.orderedItem[3].orderedItem.facilityUse.location.amenityFeature: Recommended property `amenityFeature` is missing from `Place`.
 * ⚠️ $.orderedItem[4].acceptedOffer.name: Recommended property `name` is missing from `Offer`.
 * ⚠️ $.orderedItem[4].acceptedOffer.ageRestriction: Recommended property `ageRestriction` is missing from `Offer`.
 * ⚠️ $.orderedItem[4].orderedItem.duration: Recommended property `duration` is missing from `Slot`.
 * ⚠️ $.orderedItem[4].orderedItem.facilityUse.description: Recommended property `description` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[4].orderedItem.facilityUse.image: Recommended property `image` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[4].orderedItem.facilityUse.hoursAvailable: Recommended property `hoursAvailable` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[4].orderedItem.facilityUse.offers: Recommended property `offers` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[4].orderedItem.facilityUse.location.id: Recommended property `@id` is missing from `Place`.
 * ⚠️ $.orderedItem[4].orderedItem.facilityUse.location.url: Recommended property `url` is missing from `Place`.
 * ⚠️ $.orderedItem[4].orderedItem.facilityUse.location.description: Recommended property `description` is missing from `Place`.
 * ⚠️ $.orderedItem[4].orderedItem.facilityUse.location.image: Recommended property `image` is missing from `Place`.
 * ⚠️ $.orderedItem[4].orderedItem.facilityUse.location.telephone: Recommended property `telephone` is missing from `Place`.
 * ⚠️ $.orderedItem[4].orderedItem.facilityUse.location.openingHoursSpecification: Recommended property `openingHoursSpecification` is missing from `Place`.
 * ⚠️ $.orderedItem[4].orderedItem.facilityUse.location.amenityFeature: Recommended property `amenityFeature` is missing from `Place`.
 * ⚠️ $.orderedItem[5].acceptedOffer.name: Recommended property `name` is missing from `Offer`.
 * ⚠️ $.orderedItem[5].acceptedOffer.ageRestriction: Recommended property `ageRestriction` is missing from `Offer`.
 * ⚠️ $.orderedItem[5].orderedItem.duration: Recommended property `duration` is missing from `Slot`.
 * ⚠️ $.orderedItem[5].orderedItem.facilityUse.description: Recommended property `description` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[5].orderedItem.facilityUse.image: Recommended property `image` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[5].orderedItem.facilityUse.hoursAvailable: Recommended property `hoursAvailable` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[5].orderedItem.facilityUse.offers: Recommended property `offers` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[5].orderedItem.facilityUse.location.id: Recommended property `@id` is missing from `Place`.
 * ⚠️ $.orderedItem[5].orderedItem.facilityUse.location.url: Recommended property `url` is missing from `Place`.
 * ⚠️ $.orderedItem[5].orderedItem.facilityUse.location.description: Recommended property `description` is missing from `Place`.
 * ⚠️ $.orderedItem[5].orderedItem.facilityUse.location.image: Recommended property `image` is missing from `Place`.
 * ⚠️ $.orderedItem[5].orderedItem.facilityUse.location.telephone: Recommended property `telephone` is missing from `Place`.
 * ⚠️ $.orderedItem[5].orderedItem.facilityUse.location.openingHoursSpecification: Recommended property `openingHoursSpecification` is missing from `Place`.
 * ⚠️ $.orderedItem[5].orderedItem.facilityUse.location.amenityFeature: Recommended property `amenityFeature` is missing from `Place`.
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
 * 📝 $.orderedItem[1].orderedItem.genderRestriction: Data consumers will assume that there is no gender restriction when no valid `genderRestriction` is supplied on a `ScheduledSession`.
 * 📝 $.orderedItem[1].orderedItem.ageRange: Data consumers will assume that the `ageRange` is 18+ when not specified.
 * 📝 $.orderedItem[1].orderedItem.eventStatus: Data consumers will assume the `eventStatus` is scheduled if not specified or invalid.
 * 📝 $.orderedItem[1].orderedItem.superEvent.genderRestriction: Data consumers will assume that there is no gender restriction when no valid `genderRestriction` is supplied on a `SessionSeries`.
 * 📝 $.orderedItem[1].orderedItem.superEvent.ageRange: Data consumers will assume that the `ageRange` is 18+ when not specified.
 * 📝 $.orderedItem[1].orderedItem.superEvent.eventStatus: Data consumers will assume the `eventStatus` is scheduled if not specified or invalid.
 * 📝 $.orderedItem[2].orderedItem.genderRestriction: Data consumers will assume that there is no gender restriction when no valid `genderRestriction` is supplied on a `ScheduledSession`.
 * 📝 $.orderedItem[2].orderedItem.ageRange: Data consumers will assume that the `ageRange` is 18+ when not specified.
 * 📝 $.orderedItem[2].orderedItem.eventStatus: Data consumers will assume the `eventStatus` is scheduled if not specified or invalid.
 * 📝 $.orderedItem[2].orderedItem.superEvent.genderRestriction: Data consumers will assume that there is no gender restriction when no valid `genderRestriction` is supplied on a `SessionSeries`.
 * 📝 $.orderedItem[2].orderedItem.superEvent.ageRange: Data consumers will assume that the `ageRange` is 18+ when not specified.
 * 📝 $.orderedItem[2].orderedItem.superEvent.eventStatus: Data consumers will assume the `eventStatus` is scheduled if not specified or invalid.
 * 📝 $.orderedItem[3].orderedItem.facilityUse.location.geo.latitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[3].orderedItem.facilityUse.location.geo.longitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[4].orderedItem.facilityUse.location.geo.latitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[4].orderedItem.facilityUse.location.geo.longitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[5].orderedItem.facilityUse.location.geo.latitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[5].orderedItem.facilityUse.location.geo.longitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.

## Lease 3 item(s) (success) >> Assert Opportunity Capacity (after C1)

### Opportunity Feed extract for OrderItem 0 Request
GET http://localhost:3000/opportunity/https%3A%2F%2Flocalhost%3A5001%2Fapi%2Fidentifiers%2Fscheduled-sessions%2F1147%2Fevents%2F11469?useCacheIfAvailable=true&expectedCapacity=2


---
Response status code: 200 OK. Responded in 187.035628ms.
```json
{
  "state": "updated",
  "id": "https://localhost:5001/api/identifiers/scheduled-sessions/1147/events/11469",
  "modified": 1658486720075,
  "data": {
    "@context": [
      "https://openactive.io/"
    ],
    "@type": "ScheduledSession",
    "@id": "https://localhost:5001/api/identifiers/scheduled-sessions/1147/events/11469",
    "startDate": "2022-07-29T03:40:11+00:00",
    "endDate": "2022-07-29T09:13:11+00:00",
    "superEvent": {
      "@type": "SessionSeries",
      "@id": "https://localhost:5001/api/identifiers/session-series/1147",
      "name": "Concrete Yoga",
      "activity": [
        {
          "@type": "Concept",
          "@id": "https://openactive.io/activity-list#c07d63a0-8eb9-4602-8bcc-23be6deb8f83",
          "inScheme": "https://openactive.io/activity-list",
          "prefLabel": "Jet Skiing"
        }
      ],
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
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
      "offers": [
        {
          "@type": "Offer",
          "@id": "https://localhost:5001/api/identifiers/session-series/1147#/offers/0",
          "allowCustomerCancellationFullRefund": true,
          "latestCancellationBeforeStartDate": "P1D",
          "openBookingFlowRequirement": [
            "https://openactive.io/OpenBookingApproval"
          ],
          "price": 0,
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
      "url": "https://www.example.com/a-session-age"
    },
    "duration": "PT5H33M",
    "maximumAttendeeCapacity": 5,
    "remainingAttendeeCapacity": 2
  }
}
```

### Opportunity Feed extract for OrderItem 1 Request
GET http://localhost:3000/opportunity/https%3A%2F%2Flocalhost%3A5001%2Fapi%2Fidentifiers%2Ffacility-uses%2F1508%2Ffacility-use-slots%2F15072?useCacheIfAvailable=true&expectedCapacity=2


---
Response status code: 200 OK. Responded in 291.171216ms.
```json
{
  "state": "updated",
  "id": "https://localhost:5001/api/identifiers/facility-uses/1508/facility-use-slots/15072",
  "modified": 1658486720171,
  "data": {
    "@context": [
      "https://openactive.io/"
    ],
    "@type": "Slot",
    "@id": "https://localhost:5001/api/identifiers/facility-uses/1508/facility-use-slots/15072",
    "identifier": 15072,
    "duration": "PT1H46M",
    "facilityUse": {
      "@type": "FacilityUse",
      "@id": "https://localhost:5001/api/identifiers/facility-uses/1508",
      "name": "Concrete Running Hall",
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
    "maximumUses": 5,
    "offers": [
      {
        "@type": "Offer",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/1508/facility-use-slots/15072#/offers/0",
        "allowCustomerCancellationFullRefund": false,
        "latestCancellationBeforeStartDate": "P1D",
        "openBookingFlowRequirement": [
          "https://openactive.io/OpenBookingApproval",
          "https://openactive.io/OpenBookingNegotiation"
        ],
        "openBookingPrepayment": "https://openactive.io/Unavailable",
        "price": 0,
        "priceCurrency": "GBP",
        "validFromBeforeStartDate": "P11DT10H5M"
      }
    ],
    "remainingUses": 2,
    "startDate": "2022-07-27T04:49:12+00:00",
    "endDate": "2022-07-27T06:35:12+00:00"
  }
}
```
### Specs
* ✅ should return 200 on success for request relevant to OrderItem 0
* ✅ should return 200 on success for request relevant to OrderItem 1
* ✅ Should have the same number of OrderItems as criteria
* ✅ OrderItem at position 0 - should decrement remaining slots
* ✅ OrderItem at position 1 - should decrement remaining slots
* ✅ OrderItem at position 2 - should decrement remaining slots
* ✅ OrderItem at position 3 - should decrement remaining slots
* ✅ OrderItem at position 4 - should decrement remaining slots
* ✅ OrderItem at position 5 - should decrement remaining slots

## Lease 3 item(s) (success) >> Assert Opportunity Capacity (after C1) >> validation of Opportunity Feed extract for OrderItem 0
### Specs
* ✅ passes validation checks

### Validations
 * ⚠️ $.eventStatus: Recommended property `eventStatus` is missing from `ScheduledSession`.
 * ⚠️ $.leader: Recommended property `leader` is missing from `ScheduledSession`.
 * ⚠️ $.url: Recommended property `url` is missing from `ScheduledSession`.
 * ⚠️ $.isAccessibleForFree: Where a `ScheduledSession` has at least one `Offer` with `price` set to `0`, it should also have a property named `isAccessibleForFree` set to `true`.
 * ⚠️ $.superEvent.description: Recommended property `description` is missing from `SessionSeries`.
 * ⚠️ $.superEvent.image: Recommended property `image` is missing from `SessionSeries`.
 * ⚠️ $.superEvent.ageRange: Recommended property `ageRange` is missing from `SessionSeries`.
 * ⚠️ $.superEvent.genderRestriction: Recommended property `genderRestriction` is missing from `SessionSeries`.
 * ⚠️ $.superEvent.leader: Recommended property `leader` is missing from `SessionSeries`.
 * ⚠️ $.superEvent.level: Recommended property `level` is missing from `SessionSeries`.
 * ⚠️ $.superEvent.isAccessibleForFree: Where a `SessionSeries` has at least one `Offer` with `price` set to `0`, it should also have a property named `isAccessibleForFree` set to `true`.
 * ⚠️ $.superEvent.location.id: Recommended property `@id` is missing from `Place`.
 * ⚠️ $.superEvent.location.url: Recommended property `url` is missing from `Place`.
 * ⚠️ $.superEvent.location.description: Recommended property `description` is missing from `Place`.
 * ⚠️ $.superEvent.location.image: Recommended property `image` is missing from `Place`.
 * ⚠️ $.superEvent.location.telephone: Recommended property `telephone` is missing from `Place`.
 * ⚠️ $.superEvent.location.openingHoursSpecification: Recommended property `openingHoursSpecification` is missing from `Place`.
 * ⚠️ $.superEvent.location.amenityFeature: Recommended property `amenityFeature` is missing from `Place`.
 * ⚠️ $.superEvent.offers[0].name: Recommended property `name` is missing from `Offer`.
 * ⚠️ $.superEvent.offers[0].ageRestriction: Recommended property `ageRestriction` is missing from `Offer`.
 * ⚠️ $.superEvent.organizer.url: Recommended property `url` is missing from `Organization`.
 * ⚠️ $.superEvent.organizer.telephone: Recommended property `telephone` is missing from `Organization`.
 * ⚠️ $.superEvent.organizer.sameAs: Recommended property `sameAs` is missing from `Organization`.
 * 📝 $.genderRestriction: Data consumers will assume that there is no gender restriction when no valid `genderRestriction` is supplied on a `ScheduledSession`.
 * 📝 $.ageRange: Data consumers will assume that the `ageRange` is 18+ when not specified.
 * 📝 $.eventStatus: Data consumers will assume the `eventStatus` is scheduled if not specified or invalid.
 * 📝 $.superEvent.genderRestriction: Data consumers will assume that there is no gender restriction when no valid `genderRestriction` is supplied on a `SessionSeries`.
 * 📝 $.superEvent.ageRange: Data consumers will assume that the `ageRange` is 18+ when not specified.
 * 📝 $.superEvent.eventStatus: Data consumers will assume the `eventStatus` is scheduled if not specified or invalid.
 * 📝 $.superEvent.location.geo.latitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.superEvent.location.geo.longitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.

## Lease 3 item(s) (success) >> Assert Opportunity Capacity (after C1) >> validation of Opportunity Feed extract for OrderItem 1
### Specs
* ✅ passes validation checks

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

## Lease 10 item(s) (fail) >> C1

### C1 Request
PUT https://localhost:5001/api/openbooking/order-quote-templates/2aef2ac4-7ced-49ec-800e-0d6258f1a3d4

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
      "acceptedOffer": "https://localhost:5001/api/identifiers/session-series/1147#/offers/0",
      "orderedItem": "https://localhost:5001/api/identifiers/scheduled-sessions/1147/events/11469"
    },
    {
      "@type": "OrderItem",
      "position": 1,
      "acceptedOffer": "https://localhost:5001/api/identifiers/session-series/1147#/offers/0",
      "orderedItem": "https://localhost:5001/api/identifiers/scheduled-sessions/1147/events/11469"
    },
    {
      "@type": "OrderItem",
      "position": 2,
      "acceptedOffer": "https://localhost:5001/api/identifiers/session-series/1147#/offers/0",
      "orderedItem": "https://localhost:5001/api/identifiers/scheduled-sessions/1147/events/11469"
    },
    {
      "@type": "OrderItem",
      "position": 3,
      "acceptedOffer": "https://localhost:5001/api/identifiers/session-series/1147#/offers/0",
      "orderedItem": "https://localhost:5001/api/identifiers/scheduled-sessions/1147/events/11469"
    },
    {
      "@type": "OrderItem",
      "position": 4,
      "acceptedOffer": "https://localhost:5001/api/identifiers/session-series/1147#/offers/0",
      "orderedItem": "https://localhost:5001/api/identifiers/scheduled-sessions/1147/events/11469"
    },
    {
      "@type": "OrderItem",
      "position": 5,
      "acceptedOffer": "https://localhost:5001/api/identifiers/session-series/1147#/offers/0",
      "orderedItem": "https://localhost:5001/api/identifiers/scheduled-sessions/1147/events/11469"
    },
    {
      "@type": "OrderItem",
      "position": 6,
      "acceptedOffer": "https://localhost:5001/api/identifiers/session-series/1147#/offers/0",
      "orderedItem": "https://localhost:5001/api/identifiers/scheduled-sessions/1147/events/11469"
    },
    {
      "@type": "OrderItem",
      "position": 7,
      "acceptedOffer": "https://localhost:5001/api/identifiers/session-series/1147#/offers/0",
      "orderedItem": "https://localhost:5001/api/identifiers/scheduled-sessions/1147/events/11469"
    },
    {
      "@type": "OrderItem",
      "position": 8,
      "acceptedOffer": "https://localhost:5001/api/identifiers/session-series/1147#/offers/0",
      "orderedItem": "https://localhost:5001/api/identifiers/scheduled-sessions/1147/events/11469"
    },
    {
      "@type": "OrderItem",
      "position": 9,
      "acceptedOffer": "https://localhost:5001/api/identifiers/session-series/1147#/offers/0",
      "orderedItem": "https://localhost:5001/api/identifiers/scheduled-sessions/1147/events/11469"
    },
    {
      "@type": "OrderItem",
      "position": 10,
      "acceptedOffer": "https://localhost:5001/api/identifiers/facility-uses/1508/facility-use-slots/15072#/offers/0",
      "orderedItem": "https://localhost:5001/api/identifiers/facility-uses/1508/facility-use-slots/15072"
    },
    {
      "@type": "OrderItem",
      "position": 11,
      "acceptedOffer": "https://localhost:5001/api/identifiers/facility-uses/1508/facility-use-slots/15072#/offers/0",
      "orderedItem": "https://localhost:5001/api/identifiers/facility-uses/1508/facility-use-slots/15072"
    },
    {
      "@type": "OrderItem",
      "position": 12,
      "acceptedOffer": "https://localhost:5001/api/identifiers/facility-uses/1508/facility-use-slots/15072#/offers/0",
      "orderedItem": "https://localhost:5001/api/identifiers/facility-uses/1508/facility-use-slots/15072"
    },
    {
      "@type": "OrderItem",
      "position": 13,
      "acceptedOffer": "https://localhost:5001/api/identifiers/facility-uses/1508/facility-use-slots/15072#/offers/0",
      "orderedItem": "https://localhost:5001/api/identifiers/facility-uses/1508/facility-use-slots/15072"
    },
    {
      "@type": "OrderItem",
      "position": 14,
      "acceptedOffer": "https://localhost:5001/api/identifiers/facility-uses/1508/facility-use-slots/15072#/offers/0",
      "orderedItem": "https://localhost:5001/api/identifiers/facility-uses/1508/facility-use-slots/15072"
    },
    {
      "@type": "OrderItem",
      "position": 15,
      "acceptedOffer": "https://localhost:5001/api/identifiers/facility-uses/1508/facility-use-slots/15072#/offers/0",
      "orderedItem": "https://localhost:5001/api/identifiers/facility-uses/1508/facility-use-slots/15072"
    },
    {
      "@type": "OrderItem",
      "position": 16,
      "acceptedOffer": "https://localhost:5001/api/identifiers/facility-uses/1508/facility-use-slots/15072#/offers/0",
      "orderedItem": "https://localhost:5001/api/identifiers/facility-uses/1508/facility-use-slots/15072"
    },
    {
      "@type": "OrderItem",
      "position": 17,
      "acceptedOffer": "https://localhost:5001/api/identifiers/facility-uses/1508/facility-use-slots/15072#/offers/0",
      "orderedItem": "https://localhost:5001/api/identifiers/facility-uses/1508/facility-use-slots/15072"
    },
    {
      "@type": "OrderItem",
      "position": 18,
      "acceptedOffer": "https://localhost:5001/api/identifiers/facility-uses/1508/facility-use-slots/15072#/offers/0",
      "orderedItem": "https://localhost:5001/api/identifiers/facility-uses/1508/facility-use-slots/15072"
    },
    {
      "@type": "OrderItem",
      "position": 19,
      "acceptedOffer": "https://localhost:5001/api/identifiers/facility-uses/1508/facility-use-slots/15072#/offers/0",
      "orderedItem": "https://localhost:5001/api/identifiers/facility-uses/1508/facility-use-slots/15072"
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
Response status code: 409 Conflict. Responded in 393.022245ms.
```json
{
  "@context": "https://openactive.io/",
  "@type": "OrderQuote",
  "@id": "https://localhost:5001/api/openbooking/order-quotes/2aef2ac4-7ced-49ec-800e-0d6258f1a3d4",
  "lease": {
    "@type": "Lease",
    "leaseExpires": "2022-07-22T10:50:19+00:00"
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
        "@id": "https://localhost:5001/api/identifiers/session-series/1147#/offers/0",
        "allowCustomerCancellationFullRefund": true,
        "latestCancellationBeforeStartDate": "P1D",
        "price": 0,
        "priceCurrency": "GBP"
      },
      "orderedItem": {
        "@type": "ScheduledSession",
        "@id": "https://localhost:5001/api/identifiers/scheduled-sessions/1147/events/11469",
        "startDate": "2022-07-29T03:40:11+00:00",
        "endDate": "2022-07-29T09:13:11+00:00",
        "superEvent": {
          "@type": "SessionSeries",
          "@id": "https://localhost:5001/api/identifiers/session-series/1147",
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
          "url": "https://example.com/events/1147"
        },
        "maximumAttendeeCapacity": 5,
        "remainingAttendeeCapacity": 2
      },
      "position": 0,
      "unitTaxSpecification": [
        {
          "@type": "TaxChargeSpecification",
          "name": "VAT at 20%",
          "price": 0,
          "priceCurrency": "GBP",
          "rate": 0.2
        }
      ]
    },
    {
      "@type": "OrderItem",
      "acceptedOffer": {
        "@type": "Offer",
        "@id": "https://localhost:5001/api/identifiers/session-series/1147#/offers/0",
        "allowCustomerCancellationFullRefund": true,
        "latestCancellationBeforeStartDate": "P1D",
        "price": 0,
        "priceCurrency": "GBP"
      },
      "orderedItem": {
        "@type": "ScheduledSession",
        "@id": "https://localhost:5001/api/identifiers/scheduled-sessions/1147/events/11469",
        "startDate": "2022-07-29T03:40:11+00:00",
        "endDate": "2022-07-29T09:13:11+00:00",
        "superEvent": {
          "@type": "SessionSeries",
          "@id": "https://localhost:5001/api/identifiers/session-series/1147",
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
          "url": "https://example.com/events/1147"
        },
        "maximumAttendeeCapacity": 5,
        "remainingAttendeeCapacity": 2
      },
      "position": 1,
      "unitTaxSpecification": [
        {
          "@type": "TaxChargeSpecification",
          "name": "VAT at 20%",
          "price": 0,
          "priceCurrency": "GBP",
          "rate": 0.2
        }
      ]
    },
    {
      "@type": "OrderItem",
      "acceptedOffer": {
        "@type": "Offer",
        "@id": "https://localhost:5001/api/identifiers/session-series/1147#/offers/0",
        "allowCustomerCancellationFullRefund": true,
        "latestCancellationBeforeStartDate": "P1D",
        "price": 0,
        "priceCurrency": "GBP"
      },
      "error": [
        {
          "@type": "OpportunityCapacityIsReservedByLeaseError",
          "name": "The available capacity required to book a specific Opportunity is reserved by a lease held by another Customer.",
          "statusCode": 409
        }
      ],
      "orderedItem": {
        "@type": "ScheduledSession",
        "@id": "https://localhost:5001/api/identifiers/scheduled-sessions/1147/events/11469",
        "startDate": "2022-07-29T03:40:11+00:00",
        "endDate": "2022-07-29T09:13:11+00:00",
        "superEvent": {
          "@type": "SessionSeries",
          "@id": "https://localhost:5001/api/identifiers/session-series/1147",
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
          "url": "https://example.com/events/1147"
        },
        "maximumAttendeeCapacity": 5,
        "remainingAttendeeCapacity": 2
      },
      "position": 2,
      "unitTaxSpecification": [
        {
          "@type": "TaxChargeSpecification",
          "name": "VAT at 20%",
          "price": 0,
          "priceCurrency": "GBP",
          "rate": 0.2
        }
      ]
    },
    {
      "@type": "OrderItem",
      "acceptedOffer": {
        "@type": "Offer",
        "@id": "https://localhost:5001/api/identifiers/session-series/1147#/offers/0",
        "allowCustomerCancellationFullRefund": true,
        "latestCancellationBeforeStartDate": "P1D",
        "price": 0,
        "priceCurrency": "GBP"
      },
      "error": [
        {
          "@type": "OpportunityCapacityIsReservedByLeaseError",
          "name": "The available capacity required to book a specific Opportunity is reserved by a lease held by another Customer.",
          "statusCode": 409
        }
      ],
      "orderedItem": {
        "@type": "ScheduledSession",
        "@id": "https://localhost:5001/api/identifiers/scheduled-sessions/1147/events/11469",
        "startDate": "2022-07-29T03:40:11+00:00",
        "endDate": "2022-07-29T09:13:11+00:00",
        "superEvent": {
          "@type": "SessionSeries",
          "@id": "https://localhost:5001/api/identifiers/session-series/1147",
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
          "url": "https://example.com/events/1147"
        },
        "maximumAttendeeCapacity": 5,
        "remainingAttendeeCapacity": 2
      },
      "position": 3,
      "unitTaxSpecification": [
        {
          "@type": "TaxChargeSpecification",
          "name": "VAT at 20%",
          "price": 0,
          "priceCurrency": "GBP",
          "rate": 0.2
        }
      ]
    },
    {
      "@type": "OrderItem",
      "acceptedOffer": {
        "@type": "Offer",
        "@id": "https://localhost:5001/api/identifiers/session-series/1147#/offers/0",
        "allowCustomerCancellationFullRefund": true,
        "latestCancellationBeforeStartDate": "P1D",
        "price": 0,
        "priceCurrency": "GBP"
      },
      "error": [
        {
          "@type": "OpportunityCapacityIsReservedByLeaseError",
          "name": "The available capacity required to book a specific Opportunity is reserved by a lease held by another Customer.",
          "statusCode": 409
        }
      ],
      "orderedItem": {
        "@type": "ScheduledSession",
        "@id": "https://localhost:5001/api/identifiers/scheduled-sessions/1147/events/11469",
        "startDate": "2022-07-29T03:40:11+00:00",
        "endDate": "2022-07-29T09:13:11+00:00",
        "superEvent": {
          "@type": "SessionSeries",
          "@id": "https://localhost:5001/api/identifiers/session-series/1147",
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
          "url": "https://example.com/events/1147"
        },
        "maximumAttendeeCapacity": 5,
        "remainingAttendeeCapacity": 2
      },
      "position": 4,
      "unitTaxSpecification": [
        {
          "@type": "TaxChargeSpecification",
          "name": "VAT at 20%",
          "price": 0,
          "priceCurrency": "GBP",
          "rate": 0.2
        }
      ]
    },
    {
      "@type": "OrderItem",
      "acceptedOffer": {
        "@type": "Offer",
        "@id": "https://localhost:5001/api/identifiers/session-series/1147#/offers/0",
        "allowCustomerCancellationFullRefund": true,
        "latestCancellationBeforeStartDate": "P1D",
        "price": 0,
        "priceCurrency": "GBP"
      },
      "error": [
        {
          "@type": "OpportunityHasInsufficientCapacityError",
          "name": "There are not enough available spaces in the Opportunity contained in the 'orderedItem' property of the 'OrderItem' to fulfil the number of repeated 'OrderItem's.",
          "statusCode": 409
        }
      ],
      "orderedItem": {
        "@type": "ScheduledSession",
        "@id": "https://localhost:5001/api/identifiers/scheduled-sessions/1147/events/11469",
        "startDate": "2022-07-29T03:40:11+00:00",
        "endDate": "2022-07-29T09:13:11+00:00",
        "superEvent": {
          "@type": "SessionSeries",
          "@id": "https://localhost:5001/api/identifiers/session-series/1147",
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
          "url": "https://example.com/events/1147"
        },
        "maximumAttendeeCapacity": 5,
        "remainingAttendeeCapacity": 2
      },
      "position": 5,
      "unitTaxSpecification": [
        {
          "@type": "TaxChargeSpecification",
          "name": "VAT at 20%",
          "price": 0,
          "priceCurrency": "GBP",
          "rate": 0.2
        }
      ]
    },
    {
      "@type": "OrderItem",
      "acceptedOffer": {
        "@type": "Offer",
        "@id": "https://localhost:5001/api/identifiers/session-series/1147#/offers/0",
        "allowCustomerCancellationFullRefund": true,
        "latestCancellationBeforeStartDate": "P1D",
        "price": 0,
        "priceCurrency": "GBP"
      },
      "error": [
        {
          "@type": "OpportunityHasInsufficientCapacityError",
          "name": "There are not enough available spaces in the Opportunity contained in the 'orderedItem' property of the 'OrderItem' to fulfil the number of repeated 'OrderItem's.",
          "statusCode": 409
        }
      ],
      "orderedItem": {
        "@type": "ScheduledSession",
        "@id": "https://localhost:5001/api/identifiers/scheduled-sessions/1147/events/11469",
        "startDate": "2022-07-29T03:40:11+00:00",
        "endDate": "2022-07-29T09:13:11+00:00",
        "superEvent": {
          "@type": "SessionSeries",
          "@id": "https://localhost:5001/api/identifiers/session-series/1147",
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
          "url": "https://example.com/events/1147"
        },
        "maximumAttendeeCapacity": 5,
        "remainingAttendeeCapacity": 2
      },
      "position": 6,
      "unitTaxSpecification": [
        {
          "@type": "TaxChargeSpecification",
          "name": "VAT at 20%",
          "price": 0,
          "priceCurrency": "GBP",
          "rate": 0.2
        }
      ]
    },
    {
      "@type": "OrderItem",
      "acceptedOffer": {
        "@type": "Offer",
        "@id": "https://localhost:5001/api/identifiers/session-series/1147#/offers/0",
        "allowCustomerCancellationFullRefund": true,
        "latestCancellationBeforeStartDate": "P1D",
        "price": 0,
        "priceCurrency": "GBP"
      },
      "error": [
        {
          "@type": "OpportunityHasInsufficientCapacityError",
          "name": "There are not enough available spaces in the Opportunity contained in the 'orderedItem' property of the 'OrderItem' to fulfil the number of repeated 'OrderItem's.",
          "statusCode": 409
        }
      ],
      "orderedItem": {
        "@type": "ScheduledSession",
        "@id": "https://localhost:5001/api/identifiers/scheduled-sessions/1147/events/11469",
        "startDate": "2022-07-29T03:40:11+00:00",
        "endDate": "2022-07-29T09:13:11+00:00",
        "superEvent": {
          "@type": "SessionSeries",
          "@id": "https://localhost:5001/api/identifiers/session-series/1147",
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
          "url": "https://example.com/events/1147"
        },
        "maximumAttendeeCapacity": 5,
        "remainingAttendeeCapacity": 2
      },
      "position": 7,
      "unitTaxSpecification": [
        {
          "@type": "TaxChargeSpecification",
          "name": "VAT at 20%",
          "price": 0,
          "priceCurrency": "GBP",
          "rate": 0.2
        }
      ]
    },
    {
      "@type": "OrderItem",
      "acceptedOffer": {
        "@type": "Offer",
        "@id": "https://localhost:5001/api/identifiers/session-series/1147#/offers/0",
        "allowCustomerCancellationFullRefund": true,
        "latestCancellationBeforeStartDate": "P1D",
        "price": 0,
        "priceCurrency": "GBP"
      },
      "error": [
        {
          "@type": "OpportunityHasInsufficientCapacityError",
          "name": "There are not enough available spaces in the Opportunity contained in the 'orderedItem' property of the 'OrderItem' to fulfil the number of repeated 'OrderItem's.",
          "statusCode": 409
        }
      ],
      "orderedItem": {
        "@type": "ScheduledSession",
        "@id": "https://localhost:5001/api/identifiers/scheduled-sessions/1147/events/11469",
        "startDate": "2022-07-29T03:40:11+00:00",
        "endDate": "2022-07-29T09:13:11+00:00",
        "superEvent": {
          "@type": "SessionSeries",
          "@id": "https://localhost:5001/api/identifiers/session-series/1147",
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
          "url": "https://example.com/events/1147"
        },
        "maximumAttendeeCapacity": 5,
        "remainingAttendeeCapacity": 2
      },
      "position": 8,
      "unitTaxSpecification": [
        {
          "@type": "TaxChargeSpecification",
          "name": "VAT at 20%",
          "price": 0,
          "priceCurrency": "GBP",
          "rate": 0.2
        }
      ]
    },
    {
      "@type": "OrderItem",
      "acceptedOffer": {
        "@type": "Offer",
        "@id": "https://localhost:5001/api/identifiers/session-series/1147#/offers/0",
        "allowCustomerCancellationFullRefund": true,
        "latestCancellationBeforeStartDate": "P1D",
        "price": 0,
        "priceCurrency": "GBP"
      },
      "error": [
        {
          "@type": "OpportunityHasInsufficientCapacityError",
          "name": "There are not enough available spaces in the Opportunity contained in the 'orderedItem' property of the 'OrderItem' to fulfil the number of repeated 'OrderItem's.",
          "statusCode": 409
        }
      ],
      "orderedItem": {
        "@type": "ScheduledSession",
        "@id": "https://localhost:5001/api/identifiers/scheduled-sessions/1147/events/11469",
        "startDate": "2022-07-29T03:40:11+00:00",
        "endDate": "2022-07-29T09:13:11+00:00",
        "superEvent": {
          "@type": "SessionSeries",
          "@id": "https://localhost:5001/api/identifiers/session-series/1147",
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
          "url": "https://example.com/events/1147"
        },
        "maximumAttendeeCapacity": 5,
        "remainingAttendeeCapacity": 2
      },
      "position": 9,
      "unitTaxSpecification": [
        {
          "@type": "TaxChargeSpecification",
          "name": "VAT at 20%",
          "price": 0,
          "priceCurrency": "GBP",
          "rate": 0.2
        }
      ]
    },
    {
      "@type": "OrderItem",
      "acceptedOffer": {
        "@type": "Offer",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/1508/facility-use-slots/15072#/offers/0",
        "allowCustomerCancellationFullRefund": false,
        "latestCancellationBeforeStartDate": "P1D",
        "openBookingPrepayment": "https://openactive.io/Unavailable",
        "price": 0,
        "priceCurrency": "GBP",
        "validFromBeforeStartDate": "P11DT10H5M"
      },
      "orderedItem": {
        "@type": "Slot",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/1508/facility-use-slots/15072",
        "facilityUse": {
          "@type": "FacilityUse",
          "@id": "https://localhost:5001/api/identifiers/facility-uses/1508",
          "name": "Concrete Running Hall",
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
            "name": "Fake fitness studio",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 0,
              "longitude": 0
            }
          },
          "url": "https://example.com/events/1508"
        },
        "maximumUses": 5,
        "remainingUses": 2,
        "startDate": "2022-07-27T04:49:12+00:00",
        "endDate": "2022-07-27T06:35:12+00:00"
      },
      "position": 10,
      "unitTaxSpecification": [
        {
          "@type": "TaxChargeSpecification",
          "name": "VAT at 20%",
          "price": 0,
          "priceCurrency": "GBP",
          "rate": 0.2
        }
      ]
    },
    {
      "@type": "OrderItem",
      "acceptedOffer": {
        "@type": "Offer",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/1508/facility-use-slots/15072#/offers/0",
        "allowCustomerCancellationFullRefund": false,
        "latestCancellationBeforeStartDate": "P1D",
        "openBookingPrepayment": "https://openactive.io/Unavailable",
        "price": 0,
        "priceCurrency": "GBP",
        "validFromBeforeStartDate": "P11DT10H5M"
      },
      "orderedItem": {
        "@type": "Slot",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/1508/facility-use-slots/15072",
        "facilityUse": {
          "@type": "FacilityUse",
          "@id": "https://localhost:5001/api/identifiers/facility-uses/1508",
          "name": "Concrete Running Hall",
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
            "name": "Fake fitness studio",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 0,
              "longitude": 0
            }
          },
          "url": "https://example.com/events/1508"
        },
        "maximumUses": 5,
        "remainingUses": 2,
        "startDate": "2022-07-27T04:49:12+00:00",
        "endDate": "2022-07-27T06:35:12+00:00"
      },
      "position": 11,
      "unitTaxSpecification": [
        {
          "@type": "TaxChargeSpecification",
          "name": "VAT at 20%",
          "price": 0,
          "priceCurrency": "GBP",
          "rate": 0.2
        }
      ]
    },
    {
      "@type": "OrderItem",
      "acceptedOffer": {
        "@type": "Offer",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/1508/facility-use-slots/15072#/offers/0",
        "allowCustomerCancellationFullRefund": false,
        "latestCancellationBeforeStartDate": "P1D",
        "openBookingPrepayment": "https://openactive.io/Unavailable",
        "price": 0,
        "priceCurrency": "GBP",
        "validFromBeforeStartDate": "P11DT10H5M"
      },
      "error": [
        {
          "@type": "OpportunityCapacityIsReservedByLeaseError",
          "name": "The available capacity required to book a specific Opportunity is reserved by a lease held by another Customer.",
          "statusCode": 409
        }
      ],
      "orderedItem": {
        "@type": "Slot",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/1508/facility-use-slots/15072",
        "facilityUse": {
          "@type": "FacilityUse",
          "@id": "https://localhost:5001/api/identifiers/facility-uses/1508",
          "name": "Concrete Running Hall",
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
            "name": "Fake fitness studio",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 0,
              "longitude": 0
            }
          },
          "url": "https://example.com/events/1508"
        },
        "maximumUses": 5,
        "remainingUses": 2,
        "startDate": "2022-07-27T04:49:12+00:00",
        "endDate": "2022-07-27T06:35:12+00:00"
      },
      "position": 12,
      "unitTaxSpecification": [
        {
          "@type": "TaxChargeSpecification",
          "name": "VAT at 20%",
          "price": 0,
          "priceCurrency": "GBP",
          "rate": 0.2
        }
      ]
    },
    {
      "@type": "OrderItem",
      "acceptedOffer": {
        "@type": "Offer",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/1508/facility-use-slots/15072#/offers/0",
        "allowCustomerCancellationFullRefund": false,
        "latestCancellationBeforeStartDate": "P1D",
        "openBookingPrepayment": "https://openactive.io/Unavailable",
        "price": 0,
        "priceCurrency": "GBP",
        "validFromBeforeStartDate": "P11DT10H5M"
      },
      "error": [
        {
          "@type": "OpportunityCapacityIsReservedByLeaseError",
          "name": "The available capacity required to book a specific Opportunity is reserved by a lease held by another Customer.",
          "statusCode": 409
        }
      ],
      "orderedItem": {
        "@type": "Slot",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/1508/facility-use-slots/15072",
        "facilityUse": {
          "@type": "FacilityUse",
          "@id": "https://localhost:5001/api/identifiers/facility-uses/1508",
          "name": "Concrete Running Hall",
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
            "name": "Fake fitness studio",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 0,
              "longitude": 0
            }
          },
          "url": "https://example.com/events/1508"
        },
        "maximumUses": 5,
        "remainingUses": 2,
        "startDate": "2022-07-27T04:49:12+00:00",
        "endDate": "2022-07-27T06:35:12+00:00"
      },
      "position": 13,
      "unitTaxSpecification": [
        {
          "@type": "TaxChargeSpecification",
          "name": "VAT at 20%",
          "price": 0,
          "priceCurrency": "GBP",
          "rate": 0.2
        }
      ]
    },
    {
      "@type": "OrderItem",
      "acceptedOffer": {
        "@type": "Offer",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/1508/facility-use-slots/15072#/offers/0",
        "allowCustomerCancellationFullRefund": false,
        "latestCancellationBeforeStartDate": "P1D",
        "openBookingPrepayment": "https://openactive.io/Unavailable",
        "price": 0,
        "priceCurrency": "GBP",
        "validFromBeforeStartDate": "P11DT10H5M"
      },
      "error": [
        {
          "@type": "OpportunityCapacityIsReservedByLeaseError",
          "name": "The available capacity required to book a specific Opportunity is reserved by a lease held by another Customer.",
          "statusCode": 409
        }
      ],
      "orderedItem": {
        "@type": "Slot",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/1508/facility-use-slots/15072",
        "facilityUse": {
          "@type": "FacilityUse",
          "@id": "https://localhost:5001/api/identifiers/facility-uses/1508",
          "name": "Concrete Running Hall",
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
            "name": "Fake fitness studio",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 0,
              "longitude": 0
            }
          },
          "url": "https://example.com/events/1508"
        },
        "maximumUses": 5,
        "remainingUses": 2,
        "startDate": "2022-07-27T04:49:12+00:00",
        "endDate": "2022-07-27T06:35:12+00:00"
      },
      "position": 14,
      "unitTaxSpecification": [
        {
          "@type": "TaxChargeSpecification",
          "name": "VAT at 20%",
          "price": 0,
          "priceCurrency": "GBP",
          "rate": 0.2
        }
      ]
    },
    {
      "@type": "OrderItem",
      "acceptedOffer": {
        "@type": "Offer",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/1508/facility-use-slots/15072#/offers/0",
        "allowCustomerCancellationFullRefund": false,
        "latestCancellationBeforeStartDate": "P1D",
        "openBookingPrepayment": "https://openactive.io/Unavailable",
        "price": 0,
        "priceCurrency": "GBP",
        "validFromBeforeStartDate": "P11DT10H5M"
      },
      "error": [
        {
          "@type": "OpportunityHasInsufficientCapacityError",
          "name": "There are not enough available spaces in the Opportunity contained in the 'orderedItem' property of the 'OrderItem' to fulfil the number of repeated 'OrderItem's.",
          "statusCode": 409
        }
      ],
      "orderedItem": {
        "@type": "Slot",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/1508/facility-use-slots/15072",
        "facilityUse": {
          "@type": "FacilityUse",
          "@id": "https://localhost:5001/api/identifiers/facility-uses/1508",
          "name": "Concrete Running Hall",
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
            "name": "Fake fitness studio",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 0,
              "longitude": 0
            }
          },
          "url": "https://example.com/events/1508"
        },
        "maximumUses": 5,
        "remainingUses": 2,
        "startDate": "2022-07-27T04:49:12+00:00",
        "endDate": "2022-07-27T06:35:12+00:00"
      },
      "position": 15,
      "unitTaxSpecification": [
        {
          "@type": "TaxChargeSpecification",
          "name": "VAT at 20%",
          "price": 0,
          "priceCurrency": "GBP",
          "rate": 0.2
        }
      ]
    },
    {
      "@type": "OrderItem",
      "acceptedOffer": {
        "@type": "Offer",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/1508/facility-use-slots/15072#/offers/0",
        "allowCustomerCancellationFullRefund": false,
        "latestCancellationBeforeStartDate": "P1D",
        "openBookingPrepayment": "https://openactive.io/Unavailable",
        "price": 0,
        "priceCurrency": "GBP",
        "validFromBeforeStartDate": "P11DT10H5M"
      },
      "error": [
        {
          "@type": "OpportunityHasInsufficientCapacityError",
          "name": "There are not enough available spaces in the Opportunity contained in the 'orderedItem' property of the 'OrderItem' to fulfil the number of repeated 'OrderItem's.",
          "statusCode": 409
        }
      ],
      "orderedItem": {
        "@type": "Slot",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/1508/facility-use-slots/15072",
        "facilityUse": {
          "@type": "FacilityUse",
          "@id": "https://localhost:5001/api/identifiers/facility-uses/1508",
          "name": "Concrete Running Hall",
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
            "name": "Fake fitness studio",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 0,
              "longitude": 0
            }
          },
          "url": "https://example.com/events/1508"
        },
        "maximumUses": 5,
        "remainingUses": 2,
        "startDate": "2022-07-27T04:49:12+00:00",
        "endDate": "2022-07-27T06:35:12+00:00"
      },
      "position": 16,
      "unitTaxSpecification": [
        {
          "@type": "TaxChargeSpecification",
          "name": "VAT at 20%",
          "price": 0,
          "priceCurrency": "GBP",
          "rate": 0.2
        }
      ]
    },
    {
      "@type": "OrderItem",
      "acceptedOffer": {
        "@type": "Offer",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/1508/facility-use-slots/15072#/offers/0",
        "allowCustomerCancellationFullRefund": false,
        "latestCancellationBeforeStartDate": "P1D",
        "openBookingPrepayment": "https://openactive.io/Unavailable",
        "price": 0,
        "priceCurrency": "GBP",
        "validFromBeforeStartDate": "P11DT10H5M"
      },
      "error": [
        {
          "@type": "OpportunityHasInsufficientCapacityError",
          "name": "There are not enough available spaces in the Opportunity contained in the 'orderedItem' property of the 'OrderItem' to fulfil the number of repeated 'OrderItem's.",
          "statusCode": 409
        }
      ],
      "orderedItem": {
        "@type": "Slot",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/1508/facility-use-slots/15072",
        "facilityUse": {
          "@type": "FacilityUse",
          "@id": "https://localhost:5001/api/identifiers/facility-uses/1508",
          "name": "Concrete Running Hall",
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
            "name": "Fake fitness studio",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 0,
              "longitude": 0
            }
          },
          "url": "https://example.com/events/1508"
        },
        "maximumUses": 5,
        "remainingUses": 2,
        "startDate": "2022-07-27T04:49:12+00:00",
        "endDate": "2022-07-27T06:35:12+00:00"
      },
      "position": 17,
      "unitTaxSpecification": [
        {
          "@type": "TaxChargeSpecification",
          "name": "VAT at 20%",
          "price": 0,
          "priceCurrency": "GBP",
          "rate": 0.2
        }
      ]
    },
    {
      "@type": "OrderItem",
      "acceptedOffer": {
        "@type": "Offer",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/1508/facility-use-slots/15072#/offers/0",
        "allowCustomerCancellationFullRefund": false,
        "latestCancellationBeforeStartDate": "P1D",
        "openBookingPrepayment": "https://openactive.io/Unavailable",
        "price": 0,
        "priceCurrency": "GBP",
        "validFromBeforeStartDate": "P11DT10H5M"
      },
      "error": [
        {
          "@type": "OpportunityHasInsufficientCapacityError",
          "name": "There are not enough available spaces in the Opportunity contained in the 'orderedItem' property of the 'OrderItem' to fulfil the number of repeated 'OrderItem's.",
          "statusCode": 409
        }
      ],
      "orderedItem": {
        "@type": "Slot",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/1508/facility-use-slots/15072",
        "facilityUse": {
          "@type": "FacilityUse",
          "@id": "https://localhost:5001/api/identifiers/facility-uses/1508",
          "name": "Concrete Running Hall",
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
            "name": "Fake fitness studio",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 0,
              "longitude": 0
            }
          },
          "url": "https://example.com/events/1508"
        },
        "maximumUses": 5,
        "remainingUses": 2,
        "startDate": "2022-07-27T04:49:12+00:00",
        "endDate": "2022-07-27T06:35:12+00:00"
      },
      "position": 18,
      "unitTaxSpecification": [
        {
          "@type": "TaxChargeSpecification",
          "name": "VAT at 20%",
          "price": 0,
          "priceCurrency": "GBP",
          "rate": 0.2
        }
      ]
    },
    {
      "@type": "OrderItem",
      "acceptedOffer": {
        "@type": "Offer",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/1508/facility-use-slots/15072#/offers/0",
        "allowCustomerCancellationFullRefund": false,
        "latestCancellationBeforeStartDate": "P1D",
        "openBookingPrepayment": "https://openactive.io/Unavailable",
        "price": 0,
        "priceCurrency": "GBP",
        "validFromBeforeStartDate": "P11DT10H5M"
      },
      "error": [
        {
          "@type": "OpportunityHasInsufficientCapacityError",
          "name": "There are not enough available spaces in the Opportunity contained in the 'orderedItem' property of the 'OrderItem' to fulfil the number of repeated 'OrderItem's.",
          "statusCode": 409
        }
      ],
      "orderedItem": {
        "@type": "Slot",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/1508/facility-use-slots/15072",
        "facilityUse": {
          "@type": "FacilityUse",
          "@id": "https://localhost:5001/api/identifiers/facility-uses/1508",
          "name": "Concrete Running Hall",
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
            "name": "Fake fitness studio",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 0,
              "longitude": 0
            }
          },
          "url": "https://example.com/events/1508"
        },
        "maximumUses": 5,
        "remainingUses": 2,
        "startDate": "2022-07-27T04:49:12+00:00",
        "endDate": "2022-07-27T06:35:12+00:00"
      },
      "position": 19,
      "unitTaxSpecification": [
        {
          "@type": "TaxChargeSpecification",
          "name": "VAT at 20%",
          "price": 0,
          "priceCurrency": "GBP",
          "rate": 0.2
        }
      ]
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
    "openBookingPrepayment": "https://openactive.io/Unavailable",
    "price": 0,
    "priceCurrency": "GBP"
  },
  "totalPaymentTax": [
    {
      "@type": "TaxChargeSpecification",
      "name": "VAT at 20%",
      "price": 0,
      "priceCurrency": "GBP",
      "rate": 0.2
    }
  ]
}
```

## Lease 10 item(s) (fail) >> C1 >> validation of C1
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
 * ⚠️ $.orderedItem[1].acceptedOffer.name: Recommended property `name` is missing from `Offer`.
 * ⚠️ $.orderedItem[1].acceptedOffer.ageRestriction: Recommended property `ageRestriction` is missing from `Offer`.
 * ⚠️ $.orderedItem[1].orderedItem.eventStatus: Recommended property `eventStatus` is missing from `ScheduledSession`.
 * ⚠️ $.orderedItem[1].orderedItem.superEvent.ageRange: Recommended property `ageRange` is missing from `SessionSeries`.
 * ⚠️ $.orderedItem[1].orderedItem.superEvent.genderRestriction: Recommended property `genderRestriction` is missing from `SessionSeries`.
 * ⚠️ $.orderedItem[1].orderedItem.superEvent.eventStatus: Recommended property `eventStatus` is missing from `SessionSeries`.
 * ⚠️ $.orderedItem[1].orderedItem.superEvent.location.id: Recommended property `@id` is missing from `Place`.
 * ⚠️ $.orderedItem[1].orderedItem.superEvent.location.url: Recommended property `url` is missing from `Place`.
 * ⚠️ $.orderedItem[1].orderedItem.superEvent.location.description: Recommended property `description` is missing from `Place`.
 * ⚠️ $.orderedItem[1].orderedItem.superEvent.location.image: Recommended property `image` is missing from `Place`.
 * ⚠️ $.orderedItem[1].orderedItem.superEvent.location.telephone: Recommended property `telephone` is missing from `Place`.
 * ⚠️ $.orderedItem[1].orderedItem.superEvent.location.openingHoursSpecification: Recommended property `openingHoursSpecification` is missing from `Place`.
 * ⚠️ $.orderedItem[1].orderedItem.superEvent.location.amenityFeature: Recommended property `amenityFeature` is missing from `Place`.
 * ⚠️ $.orderedItem[2].acceptedOffer.name: Recommended property `name` is missing from `Offer`.
 * ⚠️ $.orderedItem[2].acceptedOffer.ageRestriction: Recommended property `ageRestriction` is missing from `Offer`.
 * ⚠️ $.orderedItem[2].error[0].description: Recommended property `description` is missing from `OpportunityCapacityIsReservedByLeaseError`.
 * ⚠️ $.orderedItem[2].error[0].instance: Recommended property `instance` is missing from `OpportunityCapacityIsReservedByLeaseError`.
 * ⚠️ $.orderedItem[2].orderedItem.eventStatus: Recommended property `eventStatus` is missing from `ScheduledSession`.
 * ⚠️ $.orderedItem[2].orderedItem.superEvent.ageRange: Recommended property `ageRange` is missing from `SessionSeries`.
 * ⚠️ $.orderedItem[2].orderedItem.superEvent.genderRestriction: Recommended property `genderRestriction` is missing from `SessionSeries`.
 * ⚠️ $.orderedItem[2].orderedItem.superEvent.eventStatus: Recommended property `eventStatus` is missing from `SessionSeries`.
 * ⚠️ $.orderedItem[2].orderedItem.superEvent.location.id: Recommended property `@id` is missing from `Place`.
 * ⚠️ $.orderedItem[2].orderedItem.superEvent.location.url: Recommended property `url` is missing from `Place`.
 * ⚠️ $.orderedItem[2].orderedItem.superEvent.location.description: Recommended property `description` is missing from `Place`.
 * ⚠️ $.orderedItem[2].orderedItem.superEvent.location.image: Recommended property `image` is missing from `Place`.
 * ⚠️ $.orderedItem[2].orderedItem.superEvent.location.telephone: Recommended property `telephone` is missing from `Place`.
 * ⚠️ $.orderedItem[2].orderedItem.superEvent.location.openingHoursSpecification: Recommended property `openingHoursSpecification` is missing from `Place`.
 * ⚠️ $.orderedItem[2].orderedItem.superEvent.location.amenityFeature: Recommended property `amenityFeature` is missing from `Place`.
 * ⚠️ $.orderedItem[3].acceptedOffer.name: Recommended property `name` is missing from `Offer`.
 * ⚠️ $.orderedItem[3].acceptedOffer.ageRestriction: Recommended property `ageRestriction` is missing from `Offer`.
 * ⚠️ $.orderedItem[3].error[0].description: Recommended property `description` is missing from `OpportunityCapacityIsReservedByLeaseError`.
 * ⚠️ $.orderedItem[3].error[0].instance: Recommended property `instance` is missing from `OpportunityCapacityIsReservedByLeaseError`.
 * ⚠️ $.orderedItem[3].orderedItem.eventStatus: Recommended property `eventStatus` is missing from `ScheduledSession`.
 * ⚠️ $.orderedItem[3].orderedItem.superEvent.ageRange: Recommended property `ageRange` is missing from `SessionSeries`.
 * ⚠️ $.orderedItem[3].orderedItem.superEvent.genderRestriction: Recommended property `genderRestriction` is missing from `SessionSeries`.
 * ⚠️ $.orderedItem[3].orderedItem.superEvent.eventStatus: Recommended property `eventStatus` is missing from `SessionSeries`.
 * ⚠️ $.orderedItem[3].orderedItem.superEvent.location.id: Recommended property `@id` is missing from `Place`.
 * ⚠️ $.orderedItem[3].orderedItem.superEvent.location.url: Recommended property `url` is missing from `Place`.
 * ⚠️ $.orderedItem[3].orderedItem.superEvent.location.description: Recommended property `description` is missing from `Place`.
 * ⚠️ $.orderedItem[3].orderedItem.superEvent.location.image: Recommended property `image` is missing from `Place`.
 * ⚠️ $.orderedItem[3].orderedItem.superEvent.location.telephone: Recommended property `telephone` is missing from `Place`.
 * ⚠️ $.orderedItem[3].orderedItem.superEvent.location.openingHoursSpecification: Recommended property `openingHoursSpecification` is missing from `Place`.
 * ⚠️ $.orderedItem[3].orderedItem.superEvent.location.amenityFeature: Recommended property `amenityFeature` is missing from `Place`.
 * ⚠️ $.orderedItem[4].acceptedOffer.name: Recommended property `name` is missing from `Offer`.
 * ⚠️ $.orderedItem[4].acceptedOffer.ageRestriction: Recommended property `ageRestriction` is missing from `Offer`.
 * ⚠️ $.orderedItem[4].error[0].description: Recommended property `description` is missing from `OpportunityCapacityIsReservedByLeaseError`.
 * ⚠️ $.orderedItem[4].error[0].instance: Recommended property `instance` is missing from `OpportunityCapacityIsReservedByLeaseError`.
 * ⚠️ $.orderedItem[4].orderedItem.eventStatus: Recommended property `eventStatus` is missing from `ScheduledSession`.
 * ⚠️ $.orderedItem[4].orderedItem.superEvent.ageRange: Recommended property `ageRange` is missing from `SessionSeries`.
 * ⚠️ $.orderedItem[4].orderedItem.superEvent.genderRestriction: Recommended property `genderRestriction` is missing from `SessionSeries`.
 * ⚠️ $.orderedItem[4].orderedItem.superEvent.eventStatus: Recommended property `eventStatus` is missing from `SessionSeries`.
 * ⚠️ $.orderedItem[4].orderedItem.superEvent.location.id: Recommended property `@id` is missing from `Place`.
 * ⚠️ $.orderedItem[4].orderedItem.superEvent.location.url: Recommended property `url` is missing from `Place`.
 * ⚠️ $.orderedItem[4].orderedItem.superEvent.location.description: Recommended property `description` is missing from `Place`.
 * ⚠️ $.orderedItem[4].orderedItem.superEvent.location.image: Recommended property `image` is missing from `Place`.
 * ⚠️ $.orderedItem[4].orderedItem.superEvent.location.telephone: Recommended property `telephone` is missing from `Place`.
 * ⚠️ $.orderedItem[4].orderedItem.superEvent.location.openingHoursSpecification: Recommended property `openingHoursSpecification` is missing from `Place`.
 * ⚠️ $.orderedItem[4].orderedItem.superEvent.location.amenityFeature: Recommended property `amenityFeature` is missing from `Place`.
 * ⚠️ $.orderedItem[5].acceptedOffer.name: Recommended property `name` is missing from `Offer`.
 * ⚠️ $.orderedItem[5].acceptedOffer.ageRestriction: Recommended property `ageRestriction` is missing from `Offer`.
 * ⚠️ $.orderedItem[5].error[0].description: Recommended property `description` is missing from `OpportunityHasInsufficientCapacityError`.
 * ⚠️ $.orderedItem[5].error[0].instance: Recommended property `instance` is missing from `OpportunityHasInsufficientCapacityError`.
 * ⚠️ $.orderedItem[5].orderedItem.eventStatus: Recommended property `eventStatus` is missing from `ScheduledSession`.
 * ⚠️ $.orderedItem[5].orderedItem.superEvent.ageRange: Recommended property `ageRange` is missing from `SessionSeries`.
 * ⚠️ $.orderedItem[5].orderedItem.superEvent.genderRestriction: Recommended property `genderRestriction` is missing from `SessionSeries`.
 * ⚠️ $.orderedItem[5].orderedItem.superEvent.eventStatus: Recommended property `eventStatus` is missing from `SessionSeries`.
 * ⚠️ $.orderedItem[5].orderedItem.superEvent.location.id: Recommended property `@id` is missing from `Place`.
 * ⚠️ $.orderedItem[5].orderedItem.superEvent.location.url: Recommended property `url` is missing from `Place`.
 * ⚠️ $.orderedItem[5].orderedItem.superEvent.location.description: Recommended property `description` is missing from `Place`.
 * ⚠️ $.orderedItem[5].orderedItem.superEvent.location.image: Recommended property `image` is missing from `Place`.
 * ⚠️ $.orderedItem[5].orderedItem.superEvent.location.telephone: Recommended property `telephone` is missing from `Place`.
 * ⚠️ $.orderedItem[5].orderedItem.superEvent.location.openingHoursSpecification: Recommended property `openingHoursSpecification` is missing from `Place`.
 * ⚠️ $.orderedItem[5].orderedItem.superEvent.location.amenityFeature: Recommended property `amenityFeature` is missing from `Place`.
 * ⚠️ $.orderedItem[6].acceptedOffer.name: Recommended property `name` is missing from `Offer`.
 * ⚠️ $.orderedItem[6].acceptedOffer.ageRestriction: Recommended property `ageRestriction` is missing from `Offer`.
 * ⚠️ $.orderedItem[6].error[0].description: Recommended property `description` is missing from `OpportunityHasInsufficientCapacityError`.
 * ⚠️ $.orderedItem[6].error[0].instance: Recommended property `instance` is missing from `OpportunityHasInsufficientCapacityError`.
 * ⚠️ $.orderedItem[6].orderedItem.eventStatus: Recommended property `eventStatus` is missing from `ScheduledSession`.
 * ⚠️ $.orderedItem[6].orderedItem.superEvent.ageRange: Recommended property `ageRange` is missing from `SessionSeries`.
 * ⚠️ $.orderedItem[6].orderedItem.superEvent.genderRestriction: Recommended property `genderRestriction` is missing from `SessionSeries`.
 * ⚠️ $.orderedItem[6].orderedItem.superEvent.eventStatus: Recommended property `eventStatus` is missing from `SessionSeries`.
 * ⚠️ $.orderedItem[6].orderedItem.superEvent.location.id: Recommended property `@id` is missing from `Place`.
 * ⚠️ $.orderedItem[6].orderedItem.superEvent.location.url: Recommended property `url` is missing from `Place`.
 * ⚠️ $.orderedItem[6].orderedItem.superEvent.location.description: Recommended property `description` is missing from `Place`.
 * ⚠️ $.orderedItem[6].orderedItem.superEvent.location.image: Recommended property `image` is missing from `Place`.
 * ⚠️ $.orderedItem[6].orderedItem.superEvent.location.telephone: Recommended property `telephone` is missing from `Place`.
 * ⚠️ $.orderedItem[6].orderedItem.superEvent.location.openingHoursSpecification: Recommended property `openingHoursSpecification` is missing from `Place`.
 * ⚠️ $.orderedItem[6].orderedItem.superEvent.location.amenityFeature: Recommended property `amenityFeature` is missing from `Place`.
 * ⚠️ $.orderedItem[7].acceptedOffer.name: Recommended property `name` is missing from `Offer`.
 * ⚠️ $.orderedItem[7].acceptedOffer.ageRestriction: Recommended property `ageRestriction` is missing from `Offer`.
 * ⚠️ $.orderedItem[7].error[0].description: Recommended property `description` is missing from `OpportunityHasInsufficientCapacityError`.
 * ⚠️ $.orderedItem[7].error[0].instance: Recommended property `instance` is missing from `OpportunityHasInsufficientCapacityError`.
 * ⚠️ $.orderedItem[7].orderedItem.eventStatus: Recommended property `eventStatus` is missing from `ScheduledSession`.
 * ⚠️ $.orderedItem[7].orderedItem.superEvent.ageRange: Recommended property `ageRange` is missing from `SessionSeries`.
 * ⚠️ $.orderedItem[7].orderedItem.superEvent.genderRestriction: Recommended property `genderRestriction` is missing from `SessionSeries`.
 * ⚠️ $.orderedItem[7].orderedItem.superEvent.eventStatus: Recommended property `eventStatus` is missing from `SessionSeries`.
 * ⚠️ $.orderedItem[7].orderedItem.superEvent.location.id: Recommended property `@id` is missing from `Place`.
 * ⚠️ $.orderedItem[7].orderedItem.superEvent.location.url: Recommended property `url` is missing from `Place`.
 * ⚠️ $.orderedItem[7].orderedItem.superEvent.location.description: Recommended property `description` is missing from `Place`.
 * ⚠️ $.orderedItem[7].orderedItem.superEvent.location.image: Recommended property `image` is missing from `Place`.
 * ⚠️ $.orderedItem[7].orderedItem.superEvent.location.telephone: Recommended property `telephone` is missing from `Place`.
 * ⚠️ $.orderedItem[7].orderedItem.superEvent.location.openingHoursSpecification: Recommended property `openingHoursSpecification` is missing from `Place`.
 * ⚠️ $.orderedItem[7].orderedItem.superEvent.location.amenityFeature: Recommended property `amenityFeature` is missing from `Place`.
 * ⚠️ $.orderedItem[8].acceptedOffer.name: Recommended property `name` is missing from `Offer`.
 * ⚠️ $.orderedItem[8].acceptedOffer.ageRestriction: Recommended property `ageRestriction` is missing from `Offer`.
 * ⚠️ $.orderedItem[8].error[0].description: Recommended property `description` is missing from `OpportunityHasInsufficientCapacityError`.
 * ⚠️ $.orderedItem[8].error[0].instance: Recommended property `instance` is missing from `OpportunityHasInsufficientCapacityError`.
 * ⚠️ $.orderedItem[8].orderedItem.eventStatus: Recommended property `eventStatus` is missing from `ScheduledSession`.
 * ⚠️ $.orderedItem[8].orderedItem.superEvent.ageRange: Recommended property `ageRange` is missing from `SessionSeries`.
 * ⚠️ $.orderedItem[8].orderedItem.superEvent.genderRestriction: Recommended property `genderRestriction` is missing from `SessionSeries`.
 * ⚠️ $.orderedItem[8].orderedItem.superEvent.eventStatus: Recommended property `eventStatus` is missing from `SessionSeries`.
 * ⚠️ $.orderedItem[8].orderedItem.superEvent.location.id: Recommended property `@id` is missing from `Place`.
 * ⚠️ $.orderedItem[8].orderedItem.superEvent.location.url: Recommended property `url` is missing from `Place`.
 * ⚠️ $.orderedItem[8].orderedItem.superEvent.location.description: Recommended property `description` is missing from `Place`.
 * ⚠️ $.orderedItem[8].orderedItem.superEvent.location.image: Recommended property `image` is missing from `Place`.
 * ⚠️ $.orderedItem[8].orderedItem.superEvent.location.telephone: Recommended property `telephone` is missing from `Place`.
 * ⚠️ $.orderedItem[8].orderedItem.superEvent.location.openingHoursSpecification: Recommended property `openingHoursSpecification` is missing from `Place`.
 * ⚠️ $.orderedItem[8].orderedItem.superEvent.location.amenityFeature: Recommended property `amenityFeature` is missing from `Place`.
 * ⚠️ $.orderedItem[9].acceptedOffer.name: Recommended property `name` is missing from `Offer`.
 * ⚠️ $.orderedItem[9].acceptedOffer.ageRestriction: Recommended property `ageRestriction` is missing from `Offer`.
 * ⚠️ $.orderedItem[9].error[0].description: Recommended property `description` is missing from `OpportunityHasInsufficientCapacityError`.
 * ⚠️ $.orderedItem[9].error[0].instance: Recommended property `instance` is missing from `OpportunityHasInsufficientCapacityError`.
 * ⚠️ $.orderedItem[9].orderedItem.eventStatus: Recommended property `eventStatus` is missing from `ScheduledSession`.
 * ⚠️ $.orderedItem[9].orderedItem.superEvent.ageRange: Recommended property `ageRange` is missing from `SessionSeries`.
 * ⚠️ $.orderedItem[9].orderedItem.superEvent.genderRestriction: Recommended property `genderRestriction` is missing from `SessionSeries`.
 * ⚠️ $.orderedItem[9].orderedItem.superEvent.eventStatus: Recommended property `eventStatus` is missing from `SessionSeries`.
 * ⚠️ $.orderedItem[9].orderedItem.superEvent.location.id: Recommended property `@id` is missing from `Place`.
 * ⚠️ $.orderedItem[9].orderedItem.superEvent.location.url: Recommended property `url` is missing from `Place`.
 * ⚠️ $.orderedItem[9].orderedItem.superEvent.location.description: Recommended property `description` is missing from `Place`.
 * ⚠️ $.orderedItem[9].orderedItem.superEvent.location.image: Recommended property `image` is missing from `Place`.
 * ⚠️ $.orderedItem[9].orderedItem.superEvent.location.telephone: Recommended property `telephone` is missing from `Place`.
 * ⚠️ $.orderedItem[9].orderedItem.superEvent.location.openingHoursSpecification: Recommended property `openingHoursSpecification` is missing from `Place`.
 * ⚠️ $.orderedItem[9].orderedItem.superEvent.location.amenityFeature: Recommended property `amenityFeature` is missing from `Place`.
 * ⚠️ $.orderedItem[10].acceptedOffer.name: Recommended property `name` is missing from `Offer`.
 * ⚠️ $.orderedItem[10].acceptedOffer.ageRestriction: Recommended property `ageRestriction` is missing from `Offer`.
 * ⚠️ $.orderedItem[10].orderedItem.duration: Recommended property `duration` is missing from `Slot`.
 * ⚠️ $.orderedItem[10].orderedItem.facilityUse.description: Recommended property `description` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[10].orderedItem.facilityUse.image: Recommended property `image` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[10].orderedItem.facilityUse.hoursAvailable: Recommended property `hoursAvailable` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[10].orderedItem.facilityUse.offers: Recommended property `offers` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[10].orderedItem.facilityUse.location.id: Recommended property `@id` is missing from `Place`.
 * ⚠️ $.orderedItem[10].orderedItem.facilityUse.location.url: Recommended property `url` is missing from `Place`.
 * ⚠️ $.orderedItem[10].orderedItem.facilityUse.location.description: Recommended property `description` is missing from `Place`.
 * ⚠️ $.orderedItem[10].orderedItem.facilityUse.location.image: Recommended property `image` is missing from `Place`.
 * ⚠️ $.orderedItem[10].orderedItem.facilityUse.location.telephone: Recommended property `telephone` is missing from `Place`.
 * ⚠️ $.orderedItem[10].orderedItem.facilityUse.location.openingHoursSpecification: Recommended property `openingHoursSpecification` is missing from `Place`.
 * ⚠️ $.orderedItem[10].orderedItem.facilityUse.location.amenityFeature: Recommended property `amenityFeature` is missing from `Place`.
 * ⚠️ $.orderedItem[11].acceptedOffer.name: Recommended property `name` is missing from `Offer`.
 * ⚠️ $.orderedItem[11].acceptedOffer.ageRestriction: Recommended property `ageRestriction` is missing from `Offer`.
 * ⚠️ $.orderedItem[11].orderedItem.duration: Recommended property `duration` is missing from `Slot`.
 * ⚠️ $.orderedItem[11].orderedItem.facilityUse.description: Recommended property `description` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[11].orderedItem.facilityUse.image: Recommended property `image` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[11].orderedItem.facilityUse.hoursAvailable: Recommended property `hoursAvailable` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[11].orderedItem.facilityUse.offers: Recommended property `offers` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[11].orderedItem.facilityUse.location.id: Recommended property `@id` is missing from `Place`.
 * ⚠️ $.orderedItem[11].orderedItem.facilityUse.location.url: Recommended property `url` is missing from `Place`.
 * ⚠️ $.orderedItem[11].orderedItem.facilityUse.location.description: Recommended property `description` is missing from `Place`.
 * ⚠️ $.orderedItem[11].orderedItem.facilityUse.location.image: Recommended property `image` is missing from `Place`.
 * ⚠️ $.orderedItem[11].orderedItem.facilityUse.location.telephone: Recommended property `telephone` is missing from `Place`.
 * ⚠️ $.orderedItem[11].orderedItem.facilityUse.location.openingHoursSpecification: Recommended property `openingHoursSpecification` is missing from `Place`.
 * ⚠️ $.orderedItem[11].orderedItem.facilityUse.location.amenityFeature: Recommended property `amenityFeature` is missing from `Place`.
 * ⚠️ $.orderedItem[12].acceptedOffer.name: Recommended property `name` is missing from `Offer`.
 * ⚠️ $.orderedItem[12].acceptedOffer.ageRestriction: Recommended property `ageRestriction` is missing from `Offer`.
 * ⚠️ $.orderedItem[12].error[0].description: Recommended property `description` is missing from `OpportunityCapacityIsReservedByLeaseError`.
 * ⚠️ $.orderedItem[12].error[0].instance: Recommended property `instance` is missing from `OpportunityCapacityIsReservedByLeaseError`.
 * ⚠️ $.orderedItem[12].orderedItem.duration: Recommended property `duration` is missing from `Slot`.
 * ⚠️ $.orderedItem[12].orderedItem.facilityUse.description: Recommended property `description` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[12].orderedItem.facilityUse.image: Recommended property `image` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[12].orderedItem.facilityUse.hoursAvailable: Recommended property `hoursAvailable` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[12].orderedItem.facilityUse.offers: Recommended property `offers` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[12].orderedItem.facilityUse.location.id: Recommended property `@id` is missing from `Place`.
 * ⚠️ $.orderedItem[12].orderedItem.facilityUse.location.url: Recommended property `url` is missing from `Place`.
 * ⚠️ $.orderedItem[12].orderedItem.facilityUse.location.description: Recommended property `description` is missing from `Place`.
 * ⚠️ $.orderedItem[12].orderedItem.facilityUse.location.image: Recommended property `image` is missing from `Place`.
 * ⚠️ $.orderedItem[12].orderedItem.facilityUse.location.telephone: Recommended property `telephone` is missing from `Place`.
 * ⚠️ $.orderedItem[12].orderedItem.facilityUse.location.openingHoursSpecification: Recommended property `openingHoursSpecification` is missing from `Place`.
 * ⚠️ $.orderedItem[12].orderedItem.facilityUse.location.amenityFeature: Recommended property `amenityFeature` is missing from `Place`.
 * ⚠️ $.orderedItem[13].acceptedOffer.name: Recommended property `name` is missing from `Offer`.
 * ⚠️ $.orderedItem[13].acceptedOffer.ageRestriction: Recommended property `ageRestriction` is missing from `Offer`.
 * ⚠️ $.orderedItem[13].error[0].description: Recommended property `description` is missing from `OpportunityCapacityIsReservedByLeaseError`.
 * ⚠️ $.orderedItem[13].error[0].instance: Recommended property `instance` is missing from `OpportunityCapacityIsReservedByLeaseError`.
 * ⚠️ $.orderedItem[13].orderedItem.duration: Recommended property `duration` is missing from `Slot`.
 * ⚠️ $.orderedItem[13].orderedItem.facilityUse.description: Recommended property `description` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[13].orderedItem.facilityUse.image: Recommended property `image` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[13].orderedItem.facilityUse.hoursAvailable: Recommended property `hoursAvailable` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[13].orderedItem.facilityUse.offers: Recommended property `offers` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[13].orderedItem.facilityUse.location.id: Recommended property `@id` is missing from `Place`.
 * ⚠️ $.orderedItem[13].orderedItem.facilityUse.location.url: Recommended property `url` is missing from `Place`.
 * ⚠️ $.orderedItem[13].orderedItem.facilityUse.location.description: Recommended property `description` is missing from `Place`.
 * ⚠️ $.orderedItem[13].orderedItem.facilityUse.location.image: Recommended property `image` is missing from `Place`.
 * ⚠️ $.orderedItem[13].orderedItem.facilityUse.location.telephone: Recommended property `telephone` is missing from `Place`.
 * ⚠️ $.orderedItem[13].orderedItem.facilityUse.location.openingHoursSpecification: Recommended property `openingHoursSpecification` is missing from `Place`.
 * ⚠️ $.orderedItem[13].orderedItem.facilityUse.location.amenityFeature: Recommended property `amenityFeature` is missing from `Place`.
 * ⚠️ $.orderedItem[14].acceptedOffer.name: Recommended property `name` is missing from `Offer`.
 * ⚠️ $.orderedItem[14].acceptedOffer.ageRestriction: Recommended property `ageRestriction` is missing from `Offer`.
 * ⚠️ $.orderedItem[14].error[0].description: Recommended property `description` is missing from `OpportunityCapacityIsReservedByLeaseError`.
 * ⚠️ $.orderedItem[14].error[0].instance: Recommended property `instance` is missing from `OpportunityCapacityIsReservedByLeaseError`.
 * ⚠️ $.orderedItem[14].orderedItem.duration: Recommended property `duration` is missing from `Slot`.
 * ⚠️ $.orderedItem[14].orderedItem.facilityUse.description: Recommended property `description` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[14].orderedItem.facilityUse.image: Recommended property `image` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[14].orderedItem.facilityUse.hoursAvailable: Recommended property `hoursAvailable` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[14].orderedItem.facilityUse.offers: Recommended property `offers` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[14].orderedItem.facilityUse.location.id: Recommended property `@id` is missing from `Place`.
 * ⚠️ $.orderedItem[14].orderedItem.facilityUse.location.url: Recommended property `url` is missing from `Place`.
 * ⚠️ $.orderedItem[14].orderedItem.facilityUse.location.description: Recommended property `description` is missing from `Place`.
 * ⚠️ $.orderedItem[14].orderedItem.facilityUse.location.image: Recommended property `image` is missing from `Place`.
 * ⚠️ $.orderedItem[14].orderedItem.facilityUse.location.telephone: Recommended property `telephone` is missing from `Place`.
 * ⚠️ $.orderedItem[14].orderedItem.facilityUse.location.openingHoursSpecification: Recommended property `openingHoursSpecification` is missing from `Place`.
 * ⚠️ $.orderedItem[14].orderedItem.facilityUse.location.amenityFeature: Recommended property `amenityFeature` is missing from `Place`.
 * ⚠️ $.orderedItem[15].acceptedOffer.name: Recommended property `name` is missing from `Offer`.
 * ⚠️ $.orderedItem[15].acceptedOffer.ageRestriction: Recommended property `ageRestriction` is missing from `Offer`.
 * ⚠️ $.orderedItem[15].error[0].description: Recommended property `description` is missing from `OpportunityHasInsufficientCapacityError`.
 * ⚠️ $.orderedItem[15].error[0].instance: Recommended property `instance` is missing from `OpportunityHasInsufficientCapacityError`.
 * ⚠️ $.orderedItem[15].orderedItem.duration: Recommended property `duration` is missing from `Slot`.
 * ⚠️ $.orderedItem[15].orderedItem.facilityUse.description: Recommended property `description` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[15].orderedItem.facilityUse.image: Recommended property `image` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[15].orderedItem.facilityUse.hoursAvailable: Recommended property `hoursAvailable` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[15].orderedItem.facilityUse.offers: Recommended property `offers` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[15].orderedItem.facilityUse.location.id: Recommended property `@id` is missing from `Place`.
 * ⚠️ $.orderedItem[15].orderedItem.facilityUse.location.url: Recommended property `url` is missing from `Place`.
 * ⚠️ $.orderedItem[15].orderedItem.facilityUse.location.description: Recommended property `description` is missing from `Place`.
 * ⚠️ $.orderedItem[15].orderedItem.facilityUse.location.image: Recommended property `image` is missing from `Place`.
 * ⚠️ $.orderedItem[15].orderedItem.facilityUse.location.telephone: Recommended property `telephone` is missing from `Place`.
 * ⚠️ $.orderedItem[15].orderedItem.facilityUse.location.openingHoursSpecification: Recommended property `openingHoursSpecification` is missing from `Place`.
 * ⚠️ $.orderedItem[15].orderedItem.facilityUse.location.amenityFeature: Recommended property `amenityFeature` is missing from `Place`.
 * ⚠️ $.orderedItem[16].acceptedOffer.name: Recommended property `name` is missing from `Offer`.
 * ⚠️ $.orderedItem[16].acceptedOffer.ageRestriction: Recommended property `ageRestriction` is missing from `Offer`.
 * ⚠️ $.orderedItem[16].error[0].description: Recommended property `description` is missing from `OpportunityHasInsufficientCapacityError`.
 * ⚠️ $.orderedItem[16].error[0].instance: Recommended property `instance` is missing from `OpportunityHasInsufficientCapacityError`.
 * ⚠️ $.orderedItem[16].orderedItem.duration: Recommended property `duration` is missing from `Slot`.
 * ⚠️ $.orderedItem[16].orderedItem.facilityUse.description: Recommended property `description` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[16].orderedItem.facilityUse.image: Recommended property `image` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[16].orderedItem.facilityUse.hoursAvailable: Recommended property `hoursAvailable` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[16].orderedItem.facilityUse.offers: Recommended property `offers` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[16].orderedItem.facilityUse.location.id: Recommended property `@id` is missing from `Place`.
 * ⚠️ $.orderedItem[16].orderedItem.facilityUse.location.url: Recommended property `url` is missing from `Place`.
 * ⚠️ $.orderedItem[16].orderedItem.facilityUse.location.description: Recommended property `description` is missing from `Place`.
 * ⚠️ $.orderedItem[16].orderedItem.facilityUse.location.image: Recommended property `image` is missing from `Place`.
 * ⚠️ $.orderedItem[16].orderedItem.facilityUse.location.telephone: Recommended property `telephone` is missing from `Place`.
 * ⚠️ $.orderedItem[16].orderedItem.facilityUse.location.openingHoursSpecification: Recommended property `openingHoursSpecification` is missing from `Place`.
 * ⚠️ $.orderedItem[16].orderedItem.facilityUse.location.amenityFeature: Recommended property `amenityFeature` is missing from `Place`.
 * ⚠️ $.orderedItem[17].acceptedOffer.name: Recommended property `name` is missing from `Offer`.
 * ⚠️ $.orderedItem[17].acceptedOffer.ageRestriction: Recommended property `ageRestriction` is missing from `Offer`.
 * ⚠️ $.orderedItem[17].error[0].description: Recommended property `description` is missing from `OpportunityHasInsufficientCapacityError`.
 * ⚠️ $.orderedItem[17].error[0].instance: Recommended property `instance` is missing from `OpportunityHasInsufficientCapacityError`.
 * ⚠️ $.orderedItem[17].orderedItem.duration: Recommended property `duration` is missing from `Slot`.
 * ⚠️ $.orderedItem[17].orderedItem.facilityUse.description: Recommended property `description` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[17].orderedItem.facilityUse.image: Recommended property `image` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[17].orderedItem.facilityUse.hoursAvailable: Recommended property `hoursAvailable` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[17].orderedItem.facilityUse.offers: Recommended property `offers` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[17].orderedItem.facilityUse.location.id: Recommended property `@id` is missing from `Place`.
 * ⚠️ $.orderedItem[17].orderedItem.facilityUse.location.url: Recommended property `url` is missing from `Place`.
 * ⚠️ $.orderedItem[17].orderedItem.facilityUse.location.description: Recommended property `description` is missing from `Place`.
 * ⚠️ $.orderedItem[17].orderedItem.facilityUse.location.image: Recommended property `image` is missing from `Place`.
 * ⚠️ $.orderedItem[17].orderedItem.facilityUse.location.telephone: Recommended property `telephone` is missing from `Place`.
 * ⚠️ $.orderedItem[17].orderedItem.facilityUse.location.openingHoursSpecification: Recommended property `openingHoursSpecification` is missing from `Place`.
 * ⚠️ $.orderedItem[17].orderedItem.facilityUse.location.amenityFeature: Recommended property `amenityFeature` is missing from `Place`.
 * ⚠️ $.orderedItem[18].acceptedOffer.name: Recommended property `name` is missing from `Offer`.
 * ⚠️ $.orderedItem[18].acceptedOffer.ageRestriction: Recommended property `ageRestriction` is missing from `Offer`.
 * ⚠️ $.orderedItem[18].error[0].description: Recommended property `description` is missing from `OpportunityHasInsufficientCapacityError`.
 * ⚠️ $.orderedItem[18].error[0].instance: Recommended property `instance` is missing from `OpportunityHasInsufficientCapacityError`.
 * ⚠️ $.orderedItem[18].orderedItem.duration: Recommended property `duration` is missing from `Slot`.
 * ⚠️ $.orderedItem[18].orderedItem.facilityUse.description: Recommended property `description` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[18].orderedItem.facilityUse.image: Recommended property `image` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[18].orderedItem.facilityUse.hoursAvailable: Recommended property `hoursAvailable` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[18].orderedItem.facilityUse.offers: Recommended property `offers` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[18].orderedItem.facilityUse.location.id: Recommended property `@id` is missing from `Place`.
 * ⚠️ $.orderedItem[18].orderedItem.facilityUse.location.url: Recommended property `url` is missing from `Place`.
 * ⚠️ $.orderedItem[18].orderedItem.facilityUse.location.description: Recommended property `description` is missing from `Place`.
 * ⚠️ $.orderedItem[18].orderedItem.facilityUse.location.image: Recommended property `image` is missing from `Place`.
 * ⚠️ $.orderedItem[18].orderedItem.facilityUse.location.telephone: Recommended property `telephone` is missing from `Place`.
 * ⚠️ $.orderedItem[18].orderedItem.facilityUse.location.openingHoursSpecification: Recommended property `openingHoursSpecification` is missing from `Place`.
 * ⚠️ $.orderedItem[18].orderedItem.facilityUse.location.amenityFeature: Recommended property `amenityFeature` is missing from `Place`.
 * ⚠️ $.orderedItem[19].acceptedOffer.name: Recommended property `name` is missing from `Offer`.
 * ⚠️ $.orderedItem[19].acceptedOffer.ageRestriction: Recommended property `ageRestriction` is missing from `Offer`.
 * ⚠️ $.orderedItem[19].error[0].description: Recommended property `description` is missing from `OpportunityHasInsufficientCapacityError`.
 * ⚠️ $.orderedItem[19].error[0].instance: Recommended property `instance` is missing from `OpportunityHasInsufficientCapacityError`.
 * ⚠️ $.orderedItem[19].orderedItem.duration: Recommended property `duration` is missing from `Slot`.
 * ⚠️ $.orderedItem[19].orderedItem.facilityUse.description: Recommended property `description` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[19].orderedItem.facilityUse.image: Recommended property `image` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[19].orderedItem.facilityUse.hoursAvailable: Recommended property `hoursAvailable` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[19].orderedItem.facilityUse.offers: Recommended property `offers` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[19].orderedItem.facilityUse.location.id: Recommended property `@id` is missing from `Place`.
 * ⚠️ $.orderedItem[19].orderedItem.facilityUse.location.url: Recommended property `url` is missing from `Place`.
 * ⚠️ $.orderedItem[19].orderedItem.facilityUse.location.description: Recommended property `description` is missing from `Place`.
 * ⚠️ $.orderedItem[19].orderedItem.facilityUse.location.image: Recommended property `image` is missing from `Place`.
 * ⚠️ $.orderedItem[19].orderedItem.facilityUse.location.telephone: Recommended property `telephone` is missing from `Place`.
 * ⚠️ $.orderedItem[19].orderedItem.facilityUse.location.openingHoursSpecification: Recommended property `openingHoursSpecification` is missing from `Place`.
 * ⚠️ $.orderedItem[19].orderedItem.facilityUse.location.amenityFeature: Recommended property `amenityFeature` is missing from `Place`.
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
 * 📝 $.orderedItem[1].orderedItem.genderRestriction: Data consumers will assume that there is no gender restriction when no valid `genderRestriction` is supplied on a `ScheduledSession`.
 * 📝 $.orderedItem[1].orderedItem.ageRange: Data consumers will assume that the `ageRange` is 18+ when not specified.
 * 📝 $.orderedItem[1].orderedItem.eventStatus: Data consumers will assume the `eventStatus` is scheduled if not specified or invalid.
 * 📝 $.orderedItem[1].orderedItem.superEvent.genderRestriction: Data consumers will assume that there is no gender restriction when no valid `genderRestriction` is supplied on a `SessionSeries`.
 * 📝 $.orderedItem[1].orderedItem.superEvent.ageRange: Data consumers will assume that the `ageRange` is 18+ when not specified.
 * 📝 $.orderedItem[1].orderedItem.superEvent.eventStatus: Data consumers will assume the `eventStatus` is scheduled if not specified or invalid.
 * 📝 $.orderedItem[2].orderedItem.genderRestriction: Data consumers will assume that there is no gender restriction when no valid `genderRestriction` is supplied on a `ScheduledSession`.
 * 📝 $.orderedItem[2].orderedItem.ageRange: Data consumers will assume that the `ageRange` is 18+ when not specified.
 * 📝 $.orderedItem[2].orderedItem.eventStatus: Data consumers will assume the `eventStatus` is scheduled if not specified or invalid.
 * 📝 $.orderedItem[2].orderedItem.superEvent.genderRestriction: Data consumers will assume that there is no gender restriction when no valid `genderRestriction` is supplied on a `SessionSeries`.
 * 📝 $.orderedItem[2].orderedItem.superEvent.ageRange: Data consumers will assume that the `ageRange` is 18+ when not specified.
 * 📝 $.orderedItem[2].orderedItem.superEvent.eventStatus: Data consumers will assume the `eventStatus` is scheduled if not specified or invalid.
 * 📝 $.orderedItem[3].orderedItem.genderRestriction: Data consumers will assume that there is no gender restriction when no valid `genderRestriction` is supplied on a `ScheduledSession`.
 * 📝 $.orderedItem[3].orderedItem.ageRange: Data consumers will assume that the `ageRange` is 18+ when not specified.
 * 📝 $.orderedItem[3].orderedItem.eventStatus: Data consumers will assume the `eventStatus` is scheduled if not specified or invalid.
 * 📝 $.orderedItem[3].orderedItem.superEvent.genderRestriction: Data consumers will assume that there is no gender restriction when no valid `genderRestriction` is supplied on a `SessionSeries`.
 * 📝 $.orderedItem[3].orderedItem.superEvent.ageRange: Data consumers will assume that the `ageRange` is 18+ when not specified.
 * 📝 $.orderedItem[3].orderedItem.superEvent.eventStatus: Data consumers will assume the `eventStatus` is scheduled if not specified or invalid.
 * 📝 $.orderedItem[4].orderedItem.genderRestriction: Data consumers will assume that there is no gender restriction when no valid `genderRestriction` is supplied on a `ScheduledSession`.
 * 📝 $.orderedItem[4].orderedItem.ageRange: Data consumers will assume that the `ageRange` is 18+ when not specified.
 * 📝 $.orderedItem[4].orderedItem.eventStatus: Data consumers will assume the `eventStatus` is scheduled if not specified or invalid.
 * 📝 $.orderedItem[4].orderedItem.superEvent.genderRestriction: Data consumers will assume that there is no gender restriction when no valid `genderRestriction` is supplied on a `SessionSeries`.
 * 📝 $.orderedItem[4].orderedItem.superEvent.ageRange: Data consumers will assume that the `ageRange` is 18+ when not specified.
 * 📝 $.orderedItem[4].orderedItem.superEvent.eventStatus: Data consumers will assume the `eventStatus` is scheduled if not specified or invalid.
 * 📝 $.orderedItem[5].orderedItem.genderRestriction: Data consumers will assume that there is no gender restriction when no valid `genderRestriction` is supplied on a `ScheduledSession`.
 * 📝 $.orderedItem[5].orderedItem.ageRange: Data consumers will assume that the `ageRange` is 18+ when not specified.
 * 📝 $.orderedItem[5].orderedItem.eventStatus: Data consumers will assume the `eventStatus` is scheduled if not specified or invalid.
 * 📝 $.orderedItem[5].orderedItem.superEvent.genderRestriction: Data consumers will assume that there is no gender restriction when no valid `genderRestriction` is supplied on a `SessionSeries`.
 * 📝 $.orderedItem[5].orderedItem.superEvent.ageRange: Data consumers will assume that the `ageRange` is 18+ when not specified.
 * 📝 $.orderedItem[5].orderedItem.superEvent.eventStatus: Data consumers will assume the `eventStatus` is scheduled if not specified or invalid.
 * 📝 $.orderedItem[6].orderedItem.genderRestriction: Data consumers will assume that there is no gender restriction when no valid `genderRestriction` is supplied on a `ScheduledSession`.
 * 📝 $.orderedItem[6].orderedItem.ageRange: Data consumers will assume that the `ageRange` is 18+ when not specified.
 * 📝 $.orderedItem[6].orderedItem.eventStatus: Data consumers will assume the `eventStatus` is scheduled if not specified or invalid.
 * 📝 $.orderedItem[6].orderedItem.superEvent.genderRestriction: Data consumers will assume that there is no gender restriction when no valid `genderRestriction` is supplied on a `SessionSeries`.
 * 📝 $.orderedItem[6].orderedItem.superEvent.ageRange: Data consumers will assume that the `ageRange` is 18+ when not specified.
 * 📝 $.orderedItem[6].orderedItem.superEvent.eventStatus: Data consumers will assume the `eventStatus` is scheduled if not specified or invalid.
 * 📝 $.orderedItem[7].orderedItem.genderRestriction: Data consumers will assume that there is no gender restriction when no valid `genderRestriction` is supplied on a `ScheduledSession`.
 * 📝 $.orderedItem[7].orderedItem.ageRange: Data consumers will assume that the `ageRange` is 18+ when not specified.
 * 📝 $.orderedItem[7].orderedItem.eventStatus: Data consumers will assume the `eventStatus` is scheduled if not specified or invalid.
 * 📝 $.orderedItem[7].orderedItem.superEvent.genderRestriction: Data consumers will assume that there is no gender restriction when no valid `genderRestriction` is supplied on a `SessionSeries`.
 * 📝 $.orderedItem[7].orderedItem.superEvent.ageRange: Data consumers will assume that the `ageRange` is 18+ when not specified.
 * 📝 $.orderedItem[7].orderedItem.superEvent.eventStatus: Data consumers will assume the `eventStatus` is scheduled if not specified or invalid.
 * 📝 $.orderedItem[8].orderedItem.genderRestriction: Data consumers will assume that there is no gender restriction when no valid `genderRestriction` is supplied on a `ScheduledSession`.
 * 📝 $.orderedItem[8].orderedItem.ageRange: Data consumers will assume that the `ageRange` is 18+ when not specified.
 * 📝 $.orderedItem[8].orderedItem.eventStatus: Data consumers will assume the `eventStatus` is scheduled if not specified or invalid.
 * 📝 $.orderedItem[8].orderedItem.superEvent.genderRestriction: Data consumers will assume that there is no gender restriction when no valid `genderRestriction` is supplied on a `SessionSeries`.
 * 📝 $.orderedItem[8].orderedItem.superEvent.ageRange: Data consumers will assume that the `ageRange` is 18+ when not specified.
 * 📝 $.orderedItem[8].orderedItem.superEvent.eventStatus: Data consumers will assume the `eventStatus` is scheduled if not specified or invalid.
 * 📝 $.orderedItem[9].orderedItem.genderRestriction: Data consumers will assume that there is no gender restriction when no valid `genderRestriction` is supplied on a `ScheduledSession`.
 * 📝 $.orderedItem[9].orderedItem.ageRange: Data consumers will assume that the `ageRange` is 18+ when not specified.
 * 📝 $.orderedItem[9].orderedItem.eventStatus: Data consumers will assume the `eventStatus` is scheduled if not specified or invalid.
 * 📝 $.orderedItem[9].orderedItem.superEvent.genderRestriction: Data consumers will assume that there is no gender restriction when no valid `genderRestriction` is supplied on a `SessionSeries`.
 * 📝 $.orderedItem[9].orderedItem.superEvent.ageRange: Data consumers will assume that the `ageRange` is 18+ when not specified.
 * 📝 $.orderedItem[9].orderedItem.superEvent.eventStatus: Data consumers will assume the `eventStatus` is scheduled if not specified or invalid.
 * 📝 $.orderedItem[10].orderedItem.facilityUse.location.geo.latitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[10].orderedItem.facilityUse.location.geo.longitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[11].orderedItem.facilityUse.location.geo.latitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[11].orderedItem.facilityUse.location.geo.longitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[12].orderedItem.facilityUse.location.geo.latitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[12].orderedItem.facilityUse.location.geo.longitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[13].orderedItem.facilityUse.location.geo.latitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[13].orderedItem.facilityUse.location.geo.longitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[14].orderedItem.facilityUse.location.geo.latitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[14].orderedItem.facilityUse.location.geo.longitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[15].orderedItem.facilityUse.location.geo.latitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[15].orderedItem.facilityUse.location.geo.longitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[16].orderedItem.facilityUse.location.geo.latitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[16].orderedItem.facilityUse.location.geo.longitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[17].orderedItem.facilityUse.location.geo.latitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[17].orderedItem.facilityUse.location.geo.longitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[18].orderedItem.facilityUse.location.geo.latitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[18].orderedItem.facilityUse.location.geo.longitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[19].orderedItem.facilityUse.location.geo.latitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[19].orderedItem.facilityUse.location.geo.longitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.

## Lease 10 item(s) (fail) >> Assert Opportunity Capacity (after C1)

### Opportunity Feed extract for OrderItem 0 Request
GET http://localhost:3000/opportunity/https%3A%2F%2Flocalhost%3A5001%2Fapi%2Fidentifiers%2Fscheduled-sessions%2F1147%2Fevents%2F11469?useCacheIfAvailable=true&expectedCapacity=2


---
Response status code: 200 OK. Responded in 38.679098ms.
```json
{
  "data": {
    "@context": [
      "https://openactive.io/"
    ],
    "@type": "ScheduledSession",
    "@id": "https://localhost:5001/api/identifiers/scheduled-sessions/1147/events/11469",
    "startDate": "2022-07-29T03:40:11+00:00",
    "endDate": "2022-07-29T09:13:11+00:00",
    "superEvent": {
      "@type": "SessionSeries",
      "@id": "https://localhost:5001/api/identifiers/session-series/1147",
      "name": "Concrete Yoga",
      "activity": [
        {
          "@type": "Concept",
          "@id": "https://openactive.io/activity-list#c07d63a0-8eb9-4602-8bcc-23be6deb8f83",
          "inScheme": "https://openactive.io/activity-list",
          "prefLabel": "Jet Skiing"
        }
      ],
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
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
      "offers": [
        {
          "@type": "Offer",
          "@id": "https://localhost:5001/api/identifiers/session-series/1147#/offers/0",
          "allowCustomerCancellationFullRefund": true,
          "latestCancellationBeforeStartDate": "P1D",
          "openBookingFlowRequirement": [
            "https://openactive.io/OpenBookingApproval"
          ],
          "price": 0,
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
      "url": "https://www.example.com/a-session-age"
    },
    "duration": "PT5H33M",
    "maximumAttendeeCapacity": 5,
    "remainingAttendeeCapacity": 2
  }
}
```

### Opportunity Feed extract for OrderItem 1 Request
GET http://localhost:3000/opportunity/https%3A%2F%2Flocalhost%3A5001%2Fapi%2Fidentifiers%2Ffacility-uses%2F1508%2Ffacility-use-slots%2F15072?useCacheIfAvailable=true&expectedCapacity=2


---
Response status code: 200 OK. Responded in 37.491367ms.
```json
{
  "data": {
    "@context": [
      "https://openactive.io/"
    ],
    "@type": "Slot",
    "@id": "https://localhost:5001/api/identifiers/facility-uses/1508/facility-use-slots/15072",
    "identifier": 15072,
    "duration": "PT1H46M",
    "facilityUse": {
      "@type": "FacilityUse",
      "@id": "https://localhost:5001/api/identifiers/facility-uses/1508",
      "name": "Concrete Running Hall",
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
    "maximumUses": 5,
    "offers": [
      {
        "@type": "Offer",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/1508/facility-use-slots/15072#/offers/0",
        "allowCustomerCancellationFullRefund": false,
        "latestCancellationBeforeStartDate": "P1D",
        "openBookingFlowRequirement": [
          "https://openactive.io/OpenBookingApproval",
          "https://openactive.io/OpenBookingNegotiation"
        ],
        "openBookingPrepayment": "https://openactive.io/Unavailable",
        "price": 0,
        "priceCurrency": "GBP",
        "validFromBeforeStartDate": "P11DT10H5M"
      }
    ],
    "remainingUses": 2,
    "startDate": "2022-07-27T04:49:12+00:00",
    "endDate": "2022-07-27T06:35:12+00:00"
  }
}
```
### Specs
* ✅ should return 200 on success for request relevant to OrderItem 0
* ✅ should return 200 on success for request relevant to OrderItem 1
* ✅ Should have the same number of OrderItems as criteria
* ✅ OrderItem at position 0 - should decrement remaining slots
* ✅ OrderItem at position 1 - should decrement remaining slots
* ✅ OrderItem at position 2 - should decrement remaining slots
* ✅ OrderItem at position 3 - should decrement remaining slots
* ✅ OrderItem at position 4 - should decrement remaining slots
* ✅ OrderItem at position 5 - should decrement remaining slots
* ✅ OrderItem at position 6 - should decrement remaining slots
* ✅ OrderItem at position 7 - should decrement remaining slots
* ✅ OrderItem at position 8 - should decrement remaining slots
* ✅ OrderItem at position 9 - should decrement remaining slots
* ✅ OrderItem at position 10 - should decrement remaining slots
* ✅ OrderItem at position 11 - should decrement remaining slots
* ✅ OrderItem at position 12 - should decrement remaining slots
* ✅ OrderItem at position 13 - should decrement remaining slots
* ✅ OrderItem at position 14 - should decrement remaining slots
* ✅ OrderItem at position 15 - should decrement remaining slots
* ✅ OrderItem at position 16 - should decrement remaining slots
* ✅ OrderItem at position 17 - should decrement remaining slots
* ✅ OrderItem at position 18 - should decrement remaining slots
* ✅ OrderItem at position 19 - should decrement remaining slots
* ✅ should return HTTP 409
* ✅ should include correct numbers of OpportunityCapacityIsReservedByLeaseError and OpportunityHasInsufficientCapacityError in the OrderItems

## Lease 10 item(s) (fail) >> Assert Opportunity Capacity (after C1) >> validation of Opportunity Feed extract for OrderItem 0
### Specs
* ✅ passes validation checks

### Validations
 * ⚠️ $.eventStatus: Recommended property `eventStatus` is missing from `ScheduledSession`.
 * ⚠️ $.leader: Recommended property `leader` is missing from `ScheduledSession`.
 * ⚠️ $.url: Recommended property `url` is missing from `ScheduledSession`.
 * ⚠️ $.isAccessibleForFree: Where a `ScheduledSession` has at least one `Offer` with `price` set to `0`, it should also have a property named `isAccessibleForFree` set to `true`.
 * ⚠️ $.superEvent.description: Recommended property `description` is missing from `SessionSeries`.
 * ⚠️ $.superEvent.image: Recommended property `image` is missing from `SessionSeries`.
 * ⚠️ $.superEvent.ageRange: Recommended property `ageRange` is missing from `SessionSeries`.
 * ⚠️ $.superEvent.genderRestriction: Recommended property `genderRestriction` is missing from `SessionSeries`.
 * ⚠️ $.superEvent.leader: Recommended property `leader` is missing from `SessionSeries`.
 * ⚠️ $.superEvent.level: Recommended property `level` is missing from `SessionSeries`.
 * ⚠️ $.superEvent.isAccessibleForFree: Where a `SessionSeries` has at least one `Offer` with `price` set to `0`, it should also have a property named `isAccessibleForFree` set to `true`.
 * ⚠️ $.superEvent.location.id: Recommended property `@id` is missing from `Place`.
 * ⚠️ $.superEvent.location.url: Recommended property `url` is missing from `Place`.
 * ⚠️ $.superEvent.location.description: Recommended property `description` is missing from `Place`.
 * ⚠️ $.superEvent.location.image: Recommended property `image` is missing from `Place`.
 * ⚠️ $.superEvent.location.telephone: Recommended property `telephone` is missing from `Place`.
 * ⚠️ $.superEvent.location.openingHoursSpecification: Recommended property `openingHoursSpecification` is missing from `Place`.
 * ⚠️ $.superEvent.location.amenityFeature: Recommended property `amenityFeature` is missing from `Place`.
 * ⚠️ $.superEvent.offers[0].name: Recommended property `name` is missing from `Offer`.
 * ⚠️ $.superEvent.offers[0].ageRestriction: Recommended property `ageRestriction` is missing from `Offer`.
 * ⚠️ $.superEvent.organizer.url: Recommended property `url` is missing from `Organization`.
 * ⚠️ $.superEvent.organizer.telephone: Recommended property `telephone` is missing from `Organization`.
 * ⚠️ $.superEvent.organizer.sameAs: Recommended property `sameAs` is missing from `Organization`.
 * 📝 $.genderRestriction: Data consumers will assume that there is no gender restriction when no valid `genderRestriction` is supplied on a `ScheduledSession`.
 * 📝 $.ageRange: Data consumers will assume that the `ageRange` is 18+ when not specified.
 * 📝 $.eventStatus: Data consumers will assume the `eventStatus` is scheduled if not specified or invalid.
 * 📝 $.superEvent.genderRestriction: Data consumers will assume that there is no gender restriction when no valid `genderRestriction` is supplied on a `SessionSeries`.
 * 📝 $.superEvent.ageRange: Data consumers will assume that the `ageRange` is 18+ when not specified.
 * 📝 $.superEvent.eventStatus: Data consumers will assume the `eventStatus` is scheduled if not specified or invalid.
 * 📝 $.superEvent.location.geo.latitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.superEvent.location.geo.longitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.

## Lease 10 item(s) (fail) >> Assert Opportunity Capacity (after C1) >> validation of Opportunity Feed extract for OrderItem 1
### Specs
* ✅ passes validation checks

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

## Lease 2 item(s) (success) >> C1

### C1 Request
PUT https://localhost:5001/api/openbooking/order-quote-templates/0931fa74-9903-4448-b38e-061e220d5fd6

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
      "acceptedOffer": "https://localhost:5001/api/identifiers/session-series/1147#/offers/0",
      "orderedItem": "https://localhost:5001/api/identifiers/scheduled-sessions/1147/events/11469"
    },
    {
      "@type": "OrderItem",
      "position": 1,
      "acceptedOffer": "https://localhost:5001/api/identifiers/session-series/1147#/offers/0",
      "orderedItem": "https://localhost:5001/api/identifiers/scheduled-sessions/1147/events/11469"
    },
    {
      "@type": "OrderItem",
      "position": 2,
      "acceptedOffer": "https://localhost:5001/api/identifiers/facility-uses/1508/facility-use-slots/15072#/offers/0",
      "orderedItem": "https://localhost:5001/api/identifiers/facility-uses/1508/facility-use-slots/15072"
    },
    {
      "@type": "OrderItem",
      "position": 3,
      "acceptedOffer": "https://localhost:5001/api/identifiers/facility-uses/1508/facility-use-slots/15072#/offers/0",
      "orderedItem": "https://localhost:5001/api/identifiers/facility-uses/1508/facility-use-slots/15072"
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
Response status code: 200 OK. Responded in 512.341825ms.
```json
{
  "@context": "https://openactive.io/",
  "@type": "OrderQuote",
  "@id": "https://localhost:5001/api/openbooking/order-quotes/0931fa74-9903-4448-b38e-061e220d5fd6",
  "lease": {
    "@type": "Lease",
    "leaseExpires": "2022-07-22T10:50:21+00:00"
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
        "@id": "https://localhost:5001/api/identifiers/session-series/1147#/offers/0",
        "allowCustomerCancellationFullRefund": true,
        "latestCancellationBeforeStartDate": "P1D",
        "price": 0,
        "priceCurrency": "GBP"
      },
      "orderedItem": {
        "@type": "ScheduledSession",
        "@id": "https://localhost:5001/api/identifiers/scheduled-sessions/1147/events/11469",
        "startDate": "2022-07-29T03:40:11+00:00",
        "endDate": "2022-07-29T09:13:11+00:00",
        "superEvent": {
          "@type": "SessionSeries",
          "@id": "https://localhost:5001/api/identifiers/session-series/1147",
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
          "url": "https://example.com/events/1147"
        },
        "maximumAttendeeCapacity": 5,
        "remainingAttendeeCapacity": 2
      },
      "position": 0,
      "unitTaxSpecification": [
        {
          "@type": "TaxChargeSpecification",
          "name": "VAT at 20%",
          "price": 0,
          "priceCurrency": "GBP",
          "rate": 0.2
        }
      ]
    },
    {
      "@type": "OrderItem",
      "acceptedOffer": {
        "@type": "Offer",
        "@id": "https://localhost:5001/api/identifiers/session-series/1147#/offers/0",
        "allowCustomerCancellationFullRefund": true,
        "latestCancellationBeforeStartDate": "P1D",
        "price": 0,
        "priceCurrency": "GBP"
      },
      "orderedItem": {
        "@type": "ScheduledSession",
        "@id": "https://localhost:5001/api/identifiers/scheduled-sessions/1147/events/11469",
        "startDate": "2022-07-29T03:40:11+00:00",
        "endDate": "2022-07-29T09:13:11+00:00",
        "superEvent": {
          "@type": "SessionSeries",
          "@id": "https://localhost:5001/api/identifiers/session-series/1147",
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
          "url": "https://example.com/events/1147"
        },
        "maximumAttendeeCapacity": 5,
        "remainingAttendeeCapacity": 2
      },
      "position": 1,
      "unitTaxSpecification": [
        {
          "@type": "TaxChargeSpecification",
          "name": "VAT at 20%",
          "price": 0,
          "priceCurrency": "GBP",
          "rate": 0.2
        }
      ]
    },
    {
      "@type": "OrderItem",
      "acceptedOffer": {
        "@type": "Offer",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/1508/facility-use-slots/15072#/offers/0",
        "allowCustomerCancellationFullRefund": false,
        "latestCancellationBeforeStartDate": "P1D",
        "openBookingPrepayment": "https://openactive.io/Unavailable",
        "price": 0,
        "priceCurrency": "GBP",
        "validFromBeforeStartDate": "P11DT10H5M"
      },
      "orderedItem": {
        "@type": "Slot",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/1508/facility-use-slots/15072",
        "facilityUse": {
          "@type": "FacilityUse",
          "@id": "https://localhost:5001/api/identifiers/facility-uses/1508",
          "name": "Concrete Running Hall",
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
            "name": "Fake fitness studio",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 0,
              "longitude": 0
            }
          },
          "url": "https://example.com/events/1508"
        },
        "maximumUses": 5,
        "remainingUses": 2,
        "startDate": "2022-07-27T04:49:12+00:00",
        "endDate": "2022-07-27T06:35:12+00:00"
      },
      "position": 2,
      "unitTaxSpecification": [
        {
          "@type": "TaxChargeSpecification",
          "name": "VAT at 20%",
          "price": 0,
          "priceCurrency": "GBP",
          "rate": 0.2
        }
      ]
    },
    {
      "@type": "OrderItem",
      "acceptedOffer": {
        "@type": "Offer",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/1508/facility-use-slots/15072#/offers/0",
        "allowCustomerCancellationFullRefund": false,
        "latestCancellationBeforeStartDate": "P1D",
        "openBookingPrepayment": "https://openactive.io/Unavailable",
        "price": 0,
        "priceCurrency": "GBP",
        "validFromBeforeStartDate": "P11DT10H5M"
      },
      "orderedItem": {
        "@type": "Slot",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/1508/facility-use-slots/15072",
        "facilityUse": {
          "@type": "FacilityUse",
          "@id": "https://localhost:5001/api/identifiers/facility-uses/1508",
          "name": "Concrete Running Hall",
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
            "name": "Fake fitness studio",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 0,
              "longitude": 0
            }
          },
          "url": "https://example.com/events/1508"
        },
        "maximumUses": 5,
        "remainingUses": 2,
        "startDate": "2022-07-27T04:49:12+00:00",
        "endDate": "2022-07-27T06:35:12+00:00"
      },
      "position": 3,
      "unitTaxSpecification": [
        {
          "@type": "TaxChargeSpecification",
          "name": "VAT at 20%",
          "price": 0,
          "priceCurrency": "GBP",
          "rate": 0.2
        }
      ]
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
    "openBookingPrepayment": "https://openactive.io/Unavailable",
    "price": 0,
    "priceCurrency": "GBP"
  },
  "totalPaymentTax": [
    {
      "@type": "TaxChargeSpecification",
      "name": "VAT at 20%",
      "price": 0,
      "priceCurrency": "GBP",
      "rate": 0.2
    }
  ]
}
```
### Specs
* ✅ should return 200 on success

## Lease 2 item(s) (success) >> C1 >> validation of C1
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
 * ⚠️ $.orderedItem[1].acceptedOffer.name: Recommended property `name` is missing from `Offer`.
 * ⚠️ $.orderedItem[1].acceptedOffer.ageRestriction: Recommended property `ageRestriction` is missing from `Offer`.
 * ⚠️ $.orderedItem[1].orderedItem.eventStatus: Recommended property `eventStatus` is missing from `ScheduledSession`.
 * ⚠️ $.orderedItem[1].orderedItem.superEvent.ageRange: Recommended property `ageRange` is missing from `SessionSeries`.
 * ⚠️ $.orderedItem[1].orderedItem.superEvent.genderRestriction: Recommended property `genderRestriction` is missing from `SessionSeries`.
 * ⚠️ $.orderedItem[1].orderedItem.superEvent.eventStatus: Recommended property `eventStatus` is missing from `SessionSeries`.
 * ⚠️ $.orderedItem[1].orderedItem.superEvent.location.id: Recommended property `@id` is missing from `Place`.
 * ⚠️ $.orderedItem[1].orderedItem.superEvent.location.url: Recommended property `url` is missing from `Place`.
 * ⚠️ $.orderedItem[1].orderedItem.superEvent.location.description: Recommended property `description` is missing from `Place`.
 * ⚠️ $.orderedItem[1].orderedItem.superEvent.location.image: Recommended property `image` is missing from `Place`.
 * ⚠️ $.orderedItem[1].orderedItem.superEvent.location.telephone: Recommended property `telephone` is missing from `Place`.
 * ⚠️ $.orderedItem[1].orderedItem.superEvent.location.openingHoursSpecification: Recommended property `openingHoursSpecification` is missing from `Place`.
 * ⚠️ $.orderedItem[1].orderedItem.superEvent.location.amenityFeature: Recommended property `amenityFeature` is missing from `Place`.
 * ⚠️ $.orderedItem[2].acceptedOffer.name: Recommended property `name` is missing from `Offer`.
 * ⚠️ $.orderedItem[2].acceptedOffer.ageRestriction: Recommended property `ageRestriction` is missing from `Offer`.
 * ⚠️ $.orderedItem[2].orderedItem.duration: Recommended property `duration` is missing from `Slot`.
 * ⚠️ $.orderedItem[2].orderedItem.facilityUse.description: Recommended property `description` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[2].orderedItem.facilityUse.image: Recommended property `image` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[2].orderedItem.facilityUse.hoursAvailable: Recommended property `hoursAvailable` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[2].orderedItem.facilityUse.offers: Recommended property `offers` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[2].orderedItem.facilityUse.location.id: Recommended property `@id` is missing from `Place`.
 * ⚠️ $.orderedItem[2].orderedItem.facilityUse.location.url: Recommended property `url` is missing from `Place`.
 * ⚠️ $.orderedItem[2].orderedItem.facilityUse.location.description: Recommended property `description` is missing from `Place`.
 * ⚠️ $.orderedItem[2].orderedItem.facilityUse.location.image: Recommended property `image` is missing from `Place`.
 * ⚠️ $.orderedItem[2].orderedItem.facilityUse.location.telephone: Recommended property `telephone` is missing from `Place`.
 * ⚠️ $.orderedItem[2].orderedItem.facilityUse.location.openingHoursSpecification: Recommended property `openingHoursSpecification` is missing from `Place`.
 * ⚠️ $.orderedItem[2].orderedItem.facilityUse.location.amenityFeature: Recommended property `amenityFeature` is missing from `Place`.
 * ⚠️ $.orderedItem[3].acceptedOffer.name: Recommended property `name` is missing from `Offer`.
 * ⚠️ $.orderedItem[3].acceptedOffer.ageRestriction: Recommended property `ageRestriction` is missing from `Offer`.
 * ⚠️ $.orderedItem[3].orderedItem.duration: Recommended property `duration` is missing from `Slot`.
 * ⚠️ $.orderedItem[3].orderedItem.facilityUse.description: Recommended property `description` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[3].orderedItem.facilityUse.image: Recommended property `image` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[3].orderedItem.facilityUse.hoursAvailable: Recommended property `hoursAvailable` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[3].orderedItem.facilityUse.offers: Recommended property `offers` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[3].orderedItem.facilityUse.location.id: Recommended property `@id` is missing from `Place`.
 * ⚠️ $.orderedItem[3].orderedItem.facilityUse.location.url: Recommended property `url` is missing from `Place`.
 * ⚠️ $.orderedItem[3].orderedItem.facilityUse.location.description: Recommended property `description` is missing from `Place`.
 * ⚠️ $.orderedItem[3].orderedItem.facilityUse.location.image: Recommended property `image` is missing from `Place`.
 * ⚠️ $.orderedItem[3].orderedItem.facilityUse.location.telephone: Recommended property `telephone` is missing from `Place`.
 * ⚠️ $.orderedItem[3].orderedItem.facilityUse.location.openingHoursSpecification: Recommended property `openingHoursSpecification` is missing from `Place`.
 * ⚠️ $.orderedItem[3].orderedItem.facilityUse.location.amenityFeature: Recommended property `amenityFeature` is missing from `Place`.
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
 * 📝 $.orderedItem[1].orderedItem.genderRestriction: Data consumers will assume that there is no gender restriction when no valid `genderRestriction` is supplied on a `ScheduledSession`.
 * 📝 $.orderedItem[1].orderedItem.ageRange: Data consumers will assume that the `ageRange` is 18+ when not specified.
 * 📝 $.orderedItem[1].orderedItem.eventStatus: Data consumers will assume the `eventStatus` is scheduled if not specified or invalid.
 * 📝 $.orderedItem[1].orderedItem.superEvent.genderRestriction: Data consumers will assume that there is no gender restriction when no valid `genderRestriction` is supplied on a `SessionSeries`.
 * 📝 $.orderedItem[1].orderedItem.superEvent.ageRange: Data consumers will assume that the `ageRange` is 18+ when not specified.
 * 📝 $.orderedItem[1].orderedItem.superEvent.eventStatus: Data consumers will assume the `eventStatus` is scheduled if not specified or invalid.
 * 📝 $.orderedItem[2].orderedItem.facilityUse.location.geo.latitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[2].orderedItem.facilityUse.location.geo.longitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[3].orderedItem.facilityUse.location.geo.latitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[3].orderedItem.facilityUse.location.geo.longitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.

## Lease 2 item(s) (success) >> Assert Opportunity Capacity (after C1)

### Opportunity Feed extract for OrderItem 0 Request
GET http://localhost:3000/opportunity/https%3A%2F%2Flocalhost%3A5001%2Fapi%2Fidentifiers%2Fscheduled-sessions%2F1147%2Fevents%2F11469?useCacheIfAvailable=true&expectedCapacity=0


---
Response status code: 200 OK. Responded in 194.860529ms.
```json
{
  "state": "updated",
  "id": "https://localhost:5001/api/identifiers/scheduled-sessions/1147/events/11469",
  "modified": 1658486723611,
  "data": {
    "@context": [
      "https://openactive.io/"
    ],
    "@type": "ScheduledSession",
    "@id": "https://localhost:5001/api/identifiers/scheduled-sessions/1147/events/11469",
    "startDate": "2022-07-29T03:40:11+00:00",
    "endDate": "2022-07-29T09:13:11+00:00",
    "superEvent": {
      "@type": "SessionSeries",
      "@id": "https://localhost:5001/api/identifiers/session-series/1147",
      "name": "Concrete Yoga",
      "activity": [
        {
          "@type": "Concept",
          "@id": "https://openactive.io/activity-list#c07d63a0-8eb9-4602-8bcc-23be6deb8f83",
          "inScheme": "https://openactive.io/activity-list",
          "prefLabel": "Jet Skiing"
        }
      ],
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
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
      "offers": [
        {
          "@type": "Offer",
          "@id": "https://localhost:5001/api/identifiers/session-series/1147#/offers/0",
          "allowCustomerCancellationFullRefund": true,
          "latestCancellationBeforeStartDate": "P1D",
          "openBookingFlowRequirement": [
            "https://openactive.io/OpenBookingApproval"
          ],
          "price": 0,
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
      "url": "https://www.example.com/a-session-age"
    },
    "duration": "PT5H33M",
    "maximumAttendeeCapacity": 5,
    "remainingAttendeeCapacity": 0
  }
}
```

### Opportunity Feed extract for OrderItem 1 Request
GET http://localhost:3000/opportunity/https%3A%2F%2Flocalhost%3A5001%2Fapi%2Fidentifiers%2Ffacility-uses%2F1508%2Ffacility-use-slots%2F15072?useCacheIfAvailable=true&expectedCapacity=0


---
Response status code: 200 OK. Responded in 1159.040221ms.
```json
{
  "state": "updated",
  "id": "https://localhost:5001/api/identifiers/facility-uses/1508/facility-use-slots/15072",
  "modified": 1658486724574,
  "data": {
    "@context": [
      "https://openactive.io/"
    ],
    "@type": "Slot",
    "@id": "https://localhost:5001/api/identifiers/facility-uses/1508/facility-use-slots/15072",
    "identifier": 15072,
    "duration": "PT1H46M",
    "facilityUse": {
      "@type": "FacilityUse",
      "@id": "https://localhost:5001/api/identifiers/facility-uses/1508",
      "name": "Concrete Running Hall",
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
    "maximumUses": 5,
    "offers": [
      {
        "@type": "Offer",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/1508/facility-use-slots/15072#/offers/0",
        "allowCustomerCancellationFullRefund": false,
        "latestCancellationBeforeStartDate": "P1D",
        "openBookingFlowRequirement": [
          "https://openactive.io/OpenBookingApproval",
          "https://openactive.io/OpenBookingNegotiation"
        ],
        "openBookingPrepayment": "https://openactive.io/Unavailable",
        "price": 0,
        "priceCurrency": "GBP",
        "validFromBeforeStartDate": "P11DT10H5M"
      }
    ],
    "remainingUses": 0,
    "startDate": "2022-07-27T04:49:12+00:00",
    "endDate": "2022-07-27T06:35:12+00:00"
  }
}
```
### Specs
* ✅ should return 200 on success for request relevant to OrderItem 0
* ✅ should return 200 on success for request relevant to OrderItem 1
* ✅ Should have the same number of OrderItems as criteria
* ✅ OrderItem at position 0 - should decrement remaining slots
* ✅ OrderItem at position 1 - should decrement remaining slots
* ✅ OrderItem at position 2 - should decrement remaining slots
* ✅ OrderItem at position 3 - should decrement remaining slots

## Lease 2 item(s) (success) >> Assert Opportunity Capacity (after C1) >> validation of Opportunity Feed extract for OrderItem 0
### Specs
* ✅ passes validation checks

### Validations
 * ⚠️ $.eventStatus: Recommended property `eventStatus` is missing from `ScheduledSession`.
 * ⚠️ $.leader: Recommended property `leader` is missing from `ScheduledSession`.
 * ⚠️ $.url: Recommended property `url` is missing from `ScheduledSession`.
 * ⚠️ $.isAccessibleForFree: Where a `ScheduledSession` has at least one `Offer` with `price` set to `0`, it should also have a property named `isAccessibleForFree` set to `true`.
 * ⚠️ $.superEvent.description: Recommended property `description` is missing from `SessionSeries`.
 * ⚠️ $.superEvent.image: Recommended property `image` is missing from `SessionSeries`.
 * ⚠️ $.superEvent.ageRange: Recommended property `ageRange` is missing from `SessionSeries`.
 * ⚠️ $.superEvent.genderRestriction: Recommended property `genderRestriction` is missing from `SessionSeries`.
 * ⚠️ $.superEvent.leader: Recommended property `leader` is missing from `SessionSeries`.
 * ⚠️ $.superEvent.level: Recommended property `level` is missing from `SessionSeries`.
 * ⚠️ $.superEvent.isAccessibleForFree: Where a `SessionSeries` has at least one `Offer` with `price` set to `0`, it should also have a property named `isAccessibleForFree` set to `true`.
 * ⚠️ $.superEvent.location.id: Recommended property `@id` is missing from `Place`.
 * ⚠️ $.superEvent.location.url: Recommended property `url` is missing from `Place`.
 * ⚠️ $.superEvent.location.description: Recommended property `description` is missing from `Place`.
 * ⚠️ $.superEvent.location.image: Recommended property `image` is missing from `Place`.
 * ⚠️ $.superEvent.location.telephone: Recommended property `telephone` is missing from `Place`.
 * ⚠️ $.superEvent.location.openingHoursSpecification: Recommended property `openingHoursSpecification` is missing from `Place`.
 * ⚠️ $.superEvent.location.amenityFeature: Recommended property `amenityFeature` is missing from `Place`.
 * ⚠️ $.superEvent.offers[0].name: Recommended property `name` is missing from `Offer`.
 * ⚠️ $.superEvent.offers[0].ageRestriction: Recommended property `ageRestriction` is missing from `Offer`.
 * ⚠️ $.superEvent.organizer.url: Recommended property `url` is missing from `Organization`.
 * ⚠️ $.superEvent.organizer.telephone: Recommended property `telephone` is missing from `Organization`.
 * ⚠️ $.superEvent.organizer.sameAs: Recommended property `sameAs` is missing from `Organization`.
 * 📝 $.genderRestriction: Data consumers will assume that there is no gender restriction when no valid `genderRestriction` is supplied on a `ScheduledSession`.
 * 📝 $.ageRange: Data consumers will assume that the `ageRange` is 18+ when not specified.
 * 📝 $.eventStatus: Data consumers will assume the `eventStatus` is scheduled if not specified or invalid.
 * 📝 $.superEvent.genderRestriction: Data consumers will assume that there is no gender restriction when no valid `genderRestriction` is supplied on a `SessionSeries`.
 * 📝 $.superEvent.ageRange: Data consumers will assume that the `ageRange` is 18+ when not specified.
 * 📝 $.superEvent.eventStatus: Data consumers will assume the `eventStatus` is scheduled if not specified or invalid.
 * 📝 $.superEvent.location.geo.latitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.superEvent.location.geo.longitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.

## Lease 2 item(s) (success) >> Assert Opportunity Capacity (after C1) >> validation of Opportunity Feed extract for OrderItem 1
### Specs
* ✅ passes validation checks

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

## Lease 1 item(s) (fail) >> C1

### C1 Request
PUT https://localhost:5001/api/openbooking/order-quote-templates/fecbe12c-748c-411e-b46f-9647a45c7be1

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
      "acceptedOffer": "https://localhost:5001/api/identifiers/session-series/1147#/offers/0",
      "orderedItem": "https://localhost:5001/api/identifiers/scheduled-sessions/1147/events/11469"
    },
    {
      "@type": "OrderItem",
      "position": 1,
      "acceptedOffer": "https://localhost:5001/api/identifiers/facility-uses/1508/facility-use-slots/15072#/offers/0",
      "orderedItem": "https://localhost:5001/api/identifiers/facility-uses/1508/facility-use-slots/15072"
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
Response status code: 409 Conflict. Responded in 543.304058ms.
```json
{
  "@context": "https://openactive.io/",
  "@type": "OrderQuote",
  "@id": "https://localhost:5001/api/openbooking/order-quotes/fecbe12c-748c-411e-b46f-9647a45c7be1",
  "lease": {
    "@type": "Lease",
    "leaseExpires": "2022-07-22T10:50:24+00:00"
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
        "@id": "https://localhost:5001/api/identifiers/session-series/1147#/offers/0",
        "allowCustomerCancellationFullRefund": true,
        "latestCancellationBeforeStartDate": "P1D",
        "price": 0,
        "priceCurrency": "GBP"
      },
      "error": [
        {
          "@type": "OpportunityCapacityIsReservedByLeaseError",
          "name": "The available capacity required to book a specific Opportunity is reserved by a lease held by another Customer.",
          "statusCode": 409
        }
      ],
      "orderedItem": {
        "@type": "ScheduledSession",
        "@id": "https://localhost:5001/api/identifiers/scheduled-sessions/1147/events/11469",
        "startDate": "2022-07-29T03:40:11+00:00",
        "endDate": "2022-07-29T09:13:11+00:00",
        "superEvent": {
          "@type": "SessionSeries",
          "@id": "https://localhost:5001/api/identifiers/session-series/1147",
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
          "url": "https://example.com/events/1147"
        },
        "maximumAttendeeCapacity": 5,
        "remainingAttendeeCapacity": 0
      },
      "position": 0,
      "unitTaxSpecification": [
        {
          "@type": "TaxChargeSpecification",
          "name": "VAT at 20%",
          "price": 0,
          "priceCurrency": "GBP",
          "rate": 0.2
        }
      ]
    },
    {
      "@type": "OrderItem",
      "acceptedOffer": {
        "@type": "Offer",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/1508/facility-use-slots/15072#/offers/0",
        "allowCustomerCancellationFullRefund": false,
        "latestCancellationBeforeStartDate": "P1D",
        "openBookingPrepayment": "https://openactive.io/Unavailable",
        "price": 0,
        "priceCurrency": "GBP",
        "validFromBeforeStartDate": "P11DT10H5M"
      },
      "error": [
        {
          "@type": "OpportunityCapacityIsReservedByLeaseError",
          "name": "The available capacity required to book a specific Opportunity is reserved by a lease held by another Customer.",
          "statusCode": 409
        }
      ],
      "orderedItem": {
        "@type": "Slot",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/1508/facility-use-slots/15072",
        "facilityUse": {
          "@type": "FacilityUse",
          "@id": "https://localhost:5001/api/identifiers/facility-uses/1508",
          "name": "Concrete Running Hall",
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
            "name": "Fake fitness studio",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 0,
              "longitude": 0
            }
          },
          "url": "https://example.com/events/1508"
        },
        "maximumUses": 5,
        "remainingUses": 0,
        "startDate": "2022-07-27T04:49:12+00:00",
        "endDate": "2022-07-27T06:35:12+00:00"
      },
      "position": 1,
      "unitTaxSpecification": [
        {
          "@type": "TaxChargeSpecification",
          "name": "VAT at 20%",
          "price": 0,
          "priceCurrency": "GBP",
          "rate": 0.2
        }
      ]
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
    "openBookingPrepayment": "https://openactive.io/Unavailable",
    "price": 0
  }
}
```

## Lease 1 item(s) (fail) >> C1 >> validation of C1
### Specs
* ✅ passes validation checks

### Validations
 * ⚠️ $.orderedItem[0].acceptedOffer.name: Recommended property `name` is missing from `Offer`.
 * ⚠️ $.orderedItem[0].acceptedOffer.ageRestriction: Recommended property `ageRestriction` is missing from `Offer`.
 * ⚠️ $.orderedItem[0].error[0].description: Recommended property `description` is missing from `OpportunityCapacityIsReservedByLeaseError`.
 * ⚠️ $.orderedItem[0].error[0].instance: Recommended property `instance` is missing from `OpportunityCapacityIsReservedByLeaseError`.
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
 * ⚠️ $.orderedItem[1].acceptedOffer.name: Recommended property `name` is missing from `Offer`.
 * ⚠️ $.orderedItem[1].acceptedOffer.ageRestriction: Recommended property `ageRestriction` is missing from `Offer`.
 * ⚠️ $.orderedItem[1].error[0].description: Recommended property `description` is missing from `OpportunityCapacityIsReservedByLeaseError`.
 * ⚠️ $.orderedItem[1].error[0].instance: Recommended property `instance` is missing from `OpportunityCapacityIsReservedByLeaseError`.
 * ⚠️ $.orderedItem[1].orderedItem.duration: Recommended property `duration` is missing from `Slot`.
 * ⚠️ $.orderedItem[1].orderedItem.facilityUse.description: Recommended property `description` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[1].orderedItem.facilityUse.image: Recommended property `image` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[1].orderedItem.facilityUse.hoursAvailable: Recommended property `hoursAvailable` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[1].orderedItem.facilityUse.offers: Recommended property `offers` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[1].orderedItem.facilityUse.location.id: Recommended property `@id` is missing from `Place`.
 * ⚠️ $.orderedItem[1].orderedItem.facilityUse.location.url: Recommended property `url` is missing from `Place`.
 * ⚠️ $.orderedItem[1].orderedItem.facilityUse.location.description: Recommended property `description` is missing from `Place`.
 * ⚠️ $.orderedItem[1].orderedItem.facilityUse.location.image: Recommended property `image` is missing from `Place`.
 * ⚠️ $.orderedItem[1].orderedItem.facilityUse.location.telephone: Recommended property `telephone` is missing from `Place`.
 * ⚠️ $.orderedItem[1].orderedItem.facilityUse.location.openingHoursSpecification: Recommended property `openingHoursSpecification` is missing from `Place`.
 * ⚠️ $.orderedItem[1].orderedItem.facilityUse.location.amenityFeature: Recommended property `amenityFeature` is missing from `Place`.
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
 * 📝 $.orderedItem[1].orderedItem.facilityUse.location.geo.latitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[1].orderedItem.facilityUse.location.geo.longitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.

## Lease 1 item(s) (fail) >> Assert Opportunity Capacity (after C1)

### Opportunity Feed extract for OrderItem 0 Request
GET http://localhost:3000/opportunity/https%3A%2F%2Flocalhost%3A5001%2Fapi%2Fidentifiers%2Fscheduled-sessions%2F1147%2Fevents%2F11469?useCacheIfAvailable=true&expectedCapacity=0


---
Response status code: 200 OK. Responded in 16.64203ms.
```json
{
  "data": {
    "@context": [
      "https://openactive.io/"
    ],
    "@type": "ScheduledSession",
    "@id": "https://localhost:5001/api/identifiers/scheduled-sessions/1147/events/11469",
    "startDate": "2022-07-29T03:40:11+00:00",
    "endDate": "2022-07-29T09:13:11+00:00",
    "superEvent": {
      "@type": "SessionSeries",
      "@id": "https://localhost:5001/api/identifiers/session-series/1147",
      "name": "Concrete Yoga",
      "activity": [
        {
          "@type": "Concept",
          "@id": "https://openactive.io/activity-list#c07d63a0-8eb9-4602-8bcc-23be6deb8f83",
          "inScheme": "https://openactive.io/activity-list",
          "prefLabel": "Jet Skiing"
        }
      ],
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
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
      "offers": [
        {
          "@type": "Offer",
          "@id": "https://localhost:5001/api/identifiers/session-series/1147#/offers/0",
          "allowCustomerCancellationFullRefund": true,
          "latestCancellationBeforeStartDate": "P1D",
          "openBookingFlowRequirement": [
            "https://openactive.io/OpenBookingApproval"
          ],
          "price": 0,
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
      "url": "https://www.example.com/a-session-age"
    },
    "duration": "PT5H33M",
    "maximumAttendeeCapacity": 5,
    "remainingAttendeeCapacity": 0
  }
}
```

### Opportunity Feed extract for OrderItem 1 Request
GET http://localhost:3000/opportunity/https%3A%2F%2Flocalhost%3A5001%2Fapi%2Fidentifiers%2Ffacility-uses%2F1508%2Ffacility-use-slots%2F15072?useCacheIfAvailable=true&expectedCapacity=0


---
Response status code: 200 OK. Responded in 15.481706ms.
```json
{
  "data": {
    "@context": [
      "https://openactive.io/"
    ],
    "@type": "Slot",
    "@id": "https://localhost:5001/api/identifiers/facility-uses/1508/facility-use-slots/15072",
    "identifier": 15072,
    "duration": "PT1H46M",
    "facilityUse": {
      "@type": "FacilityUse",
      "@id": "https://localhost:5001/api/identifiers/facility-uses/1508",
      "name": "Concrete Running Hall",
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
    "maximumUses": 5,
    "offers": [
      {
        "@type": "Offer",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/1508/facility-use-slots/15072#/offers/0",
        "allowCustomerCancellationFullRefund": false,
        "latestCancellationBeforeStartDate": "P1D",
        "openBookingFlowRequirement": [
          "https://openactive.io/OpenBookingApproval",
          "https://openactive.io/OpenBookingNegotiation"
        ],
        "openBookingPrepayment": "https://openactive.io/Unavailable",
        "price": 0,
        "priceCurrency": "GBP",
        "validFromBeforeStartDate": "P11DT10H5M"
      }
    ],
    "remainingUses": 0,
    "startDate": "2022-07-27T04:49:12+00:00",
    "endDate": "2022-07-27T06:35:12+00:00"
  }
}
```
### Specs
* ✅ should return 200 on success for request relevant to OrderItem 0
* ✅ should return 200 on success for request relevant to OrderItem 1
* ✅ Should have the same number of OrderItems as criteria
* ✅ OrderItem at position 0 - should decrement remaining slots
* ✅ OrderItem at position 1 - should decrement remaining slots
* ✅ should return HTTP 409

## Lease 1 item(s) (fail) >> Assert Opportunity Capacity (after C1) >> validation of Opportunity Feed extract for OrderItem 0
### Specs
* ✅ passes validation checks

### Validations
 * ⚠️ $.eventStatus: Recommended property `eventStatus` is missing from `ScheduledSession`.
 * ⚠️ $.leader: Recommended property `leader` is missing from `ScheduledSession`.
 * ⚠️ $.url: Recommended property `url` is missing from `ScheduledSession`.
 * ⚠️ $.isAccessibleForFree: Where a `ScheduledSession` has at least one `Offer` with `price` set to `0`, it should also have a property named `isAccessibleForFree` set to `true`.
 * ⚠️ $.superEvent.description: Recommended property `description` is missing from `SessionSeries`.
 * ⚠️ $.superEvent.image: Recommended property `image` is missing from `SessionSeries`.
 * ⚠️ $.superEvent.ageRange: Recommended property `ageRange` is missing from `SessionSeries`.
 * ⚠️ $.superEvent.genderRestriction: Recommended property `genderRestriction` is missing from `SessionSeries`.
 * ⚠️ $.superEvent.leader: Recommended property `leader` is missing from `SessionSeries`.
 * ⚠️ $.superEvent.level: Recommended property `level` is missing from `SessionSeries`.
 * ⚠️ $.superEvent.isAccessibleForFree: Where a `SessionSeries` has at least one `Offer` with `price` set to `0`, it should also have a property named `isAccessibleForFree` set to `true`.
 * ⚠️ $.superEvent.location.id: Recommended property `@id` is missing from `Place`.
 * ⚠️ $.superEvent.location.url: Recommended property `url` is missing from `Place`.
 * ⚠️ $.superEvent.location.description: Recommended property `description` is missing from `Place`.
 * ⚠️ $.superEvent.location.image: Recommended property `image` is missing from `Place`.
 * ⚠️ $.superEvent.location.telephone: Recommended property `telephone` is missing from `Place`.
 * ⚠️ $.superEvent.location.openingHoursSpecification: Recommended property `openingHoursSpecification` is missing from `Place`.
 * ⚠️ $.superEvent.location.amenityFeature: Recommended property `amenityFeature` is missing from `Place`.
 * ⚠️ $.superEvent.offers[0].name: Recommended property `name` is missing from `Offer`.
 * ⚠️ $.superEvent.offers[0].ageRestriction: Recommended property `ageRestriction` is missing from `Offer`.
 * ⚠️ $.superEvent.organizer.url: Recommended property `url` is missing from `Organization`.
 * ⚠️ $.superEvent.organizer.telephone: Recommended property `telephone` is missing from `Organization`.
 * ⚠️ $.superEvent.organizer.sameAs: Recommended property `sameAs` is missing from `Organization`.
 * 📝 $.genderRestriction: Data consumers will assume that there is no gender restriction when no valid `genderRestriction` is supplied on a `ScheduledSession`.
 * 📝 $.ageRange: Data consumers will assume that the `ageRange` is 18+ when not specified.
 * 📝 $.eventStatus: Data consumers will assume the `eventStatus` is scheduled if not specified or invalid.
 * 📝 $.superEvent.genderRestriction: Data consumers will assume that there is no gender restriction when no valid `genderRestriction` is supplied on a `SessionSeries`.
 * 📝 $.superEvent.ageRange: Data consumers will assume that the `ageRange` is 18+ when not specified.
 * 📝 $.superEvent.eventStatus: Data consumers will assume the `eventStatus` is scheduled if not specified or invalid.
 * 📝 $.superEvent.location.geo.latitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.superEvent.location.geo.longitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.

## Lease 1 item(s) (fail) >> Assert Opportunity Capacity (after C1) >> validation of Opportunity Feed extract for OrderItem 1
### Specs
* ✅ passes validation checks

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


