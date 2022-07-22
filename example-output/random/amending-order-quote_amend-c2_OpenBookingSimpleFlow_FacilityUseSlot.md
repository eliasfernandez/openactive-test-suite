[< Return to Summary](summary.md) | File Generated: Fri Jul 22 2022 10:32:43 GMT+0000 (Coordinated Universal Time)

# amending-order-quote >> amend-c2 (OpenBookingSimpleFlow >> FacilityUseSlot)

**Booking Flow:** OpenBookingSimpleFlow

**Opportunity Type:** FacilityUseSlot

**Feature:** Core / Amending the OrderQuote before B (Implemented) 

**Test:**  Amend, at C2, an existing OrderQuote

Run C1,C2 with X opportunities, then - with the same Order UUID - run C2 with Y opportunities and different customer details, then runs B. The resulting Order should include confirmed bookings for only Y opportunities

### Running only this test

```bash
npm start -- --runInBand test/features/core/amending-order-quote/implemented/amend-c2-test.js
```

---

⚠️ 25 passed with 0 failures, 185 warnings and 22 suggestions 

---


## First Attempt - C1 -> C2 >> Fetch Opportunities

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
Response status code: 200 OK. Responded in 8.376274ms.
```json
{
  "@context": "https://openactive.io/",
  "@type": "Slot",
  "@id": "https://localhost:5001/api/identifiers/facility-uses/659/facility-use-slots/6589"
}
```

### Opportunity Feed extract for OrderItem 0 Request
GET http://localhost:3000/opportunity/https%3A%2F%2Flocalhost%3A5001%2Fapi%2Fidentifiers%2Ffacility-uses%2F659%2Ffacility-use-slots%2F6589?useCacheIfAvailable=true


---
Response status code: 200 OK. Responded in 7.70946ms.
```json
{
  "data": {
    "@context": [
      "https://openactive.io/"
    ],
    "@type": "Slot",
    "@id": "https://localhost:5001/api/identifiers/facility-uses/659/facility-use-slots/6589",
    "identifier": 6589,
    "duration": "PT1H37M",
    "facilityUse": {
      "@type": "FacilityUse",
      "@id": "https://localhost:5001/api/identifiers/facility-uses/659",
      "name": "Soft Jumping Hall",
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
    "maximumUses": 3,
    "offers": [
      {
        "@type": "Offer",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/659/facility-use-slots/6589#/offers/0",
        "allowCustomerCancellationFullRefund": true,
        "openBookingPrepayment": "https://openactive.io/Unavailable",
        "price": 0,
        "priceCurrency": "GBP",
        "validFromBeforeStartDate": "P14DT9H8M"
      }
    ],
    "remainingUses": 3,
    "startDate": "2022-07-26T11:03:12+00:00",
    "endDate": "2022-07-26T12:40:12+00:00"
  }
}
```
### Specs
* ✅ should return 200 on success for request relevant to OrderItem 0

## First Attempt - C1 -> C2 >> Fetch Opportunities >> validation of Opportunity Feed extract for OrderItem 0
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

## First Attempt - C1 -> C2 >> C1

### C1 Request
PUT https://localhost:5001/api/openbooking/order-quote-templates/4bf07223-9251-4899-86da-96ffaa7729de

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
      "acceptedOffer": "https://localhost:5001/api/identifiers/facility-uses/659/facility-use-slots/6589#/offers/0",
      "orderedItem": "https://localhost:5001/api/identifiers/facility-uses/659/facility-use-slots/6589"
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
Response status code: 200 OK. Responded in 98.558849ms.
```json
{
  "@context": "https://openactive.io/",
  "@type": "OrderQuote",
  "@id": "https://localhost:5001/api/openbooking/order-quotes/4bf07223-9251-4899-86da-96ffaa7729de",
  "lease": {
    "@type": "Lease",
    "leaseExpires": "2022-07-22T10:37:50+00:00"
  },
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
      "acceptedOffer": {
        "@type": "Offer",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/659/facility-use-slots/6589#/offers/0",
        "allowCustomerCancellationFullRefund": true,
        "openBookingPrepayment": "https://openactive.io/Unavailable",
        "price": 0,
        "priceCurrency": "GBP",
        "validFromBeforeStartDate": "P14DT9H8M"
      },
      "orderedItem": {
        "@type": "Slot",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/659/facility-use-slots/6589",
        "facilityUse": {
          "@type": "FacilityUse",
          "@id": "https://localhost:5001/api/identifiers/facility-uses/659",
          "name": "Soft Jumping Hall",
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
          "url": "https://example.com/events/659"
        },
        "maximumUses": 3,
        "remainingUses": 3,
        "startDate": "2022-07-26T11:03:12+00:00",
        "endDate": "2022-07-26T12:40:12+00:00"
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
* ✅ Should have the same number of OrderItems as criteria
* ✅ OrderItem at position 0 - capacities should not have changed from their initial values after C1/C2 (regardless of leasing)

## First Attempt - C1 -> C2 >> C1 >> validation of C1
### Specs
* ✅ passes validation checks

### Validations
 * ⚠️ $.orderedItem[0].acceptedOffer.name: Recommended property `name` is missing from `Offer`.
 * ⚠️ $.orderedItem[0].acceptedOffer.ageRestriction: Recommended property `ageRestriction` is missing from `Offer`.
 * ⚠️ $.orderedItem[0].orderedItem.duration: Recommended property `duration` is missing from `Slot`.
 * ⚠️ $.orderedItem[0].orderedItem.facilityUse.description: Recommended property `description` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[0].orderedItem.facilityUse.image: Recommended property `image` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[0].orderedItem.facilityUse.hoursAvailable: Recommended property `hoursAvailable` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[0].orderedItem.facilityUse.offers: Recommended property `offers` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[0].orderedItem.facilityUse.location.id: Recommended property `@id` is missing from `Place`.
 * ⚠️ $.orderedItem[0].orderedItem.facilityUse.location.url: Recommended property `url` is missing from `Place`.
 * ⚠️ $.orderedItem[0].orderedItem.facilityUse.location.description: Recommended property `description` is missing from `Place`.
 * ⚠️ $.orderedItem[0].orderedItem.facilityUse.location.image: Recommended property `image` is missing from `Place`.
 * ⚠️ $.orderedItem[0].orderedItem.facilityUse.location.telephone: Recommended property `telephone` is missing from `Place`.
 * ⚠️ $.orderedItem[0].orderedItem.facilityUse.location.openingHoursSpecification: Recommended property `openingHoursSpecification` is missing from `Place`.
 * ⚠️ $.orderedItem[0].orderedItem.facilityUse.location.amenityFeature: Recommended property `amenityFeature` is missing from `Place`.
 * ⚠️ $.seller.email: Recommended property `email` is missing from `Organization`.
 * ⚠️ $.seller.url: Recommended property `url` is missing from `Organization`.
 * ⚠️ $.seller.logo: Recommended property `logo` is missing from `Organization`.
 * ⚠️ $.seller.vatID: Recommended property `vatID` is missing from `Organization`.
 * 📝 $.orderedItem[0].orderedItem.facilityUse.location.geo.latitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[0].orderedItem.facilityUse.location.geo.longitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.

## First Attempt - C1 -> C2 >> Assert Opportunity Capacity (after C1)

### Opportunity Feed extract for OrderItem 0 Request
GET http://localhost:3000/opportunity/https%3A%2F%2Flocalhost%3A5001%2Fapi%2Fidentifiers%2Ffacility-uses%2F659%2Ffacility-use-slots%2F6589?useCacheIfAvailable=true&expectedCapacity=2


---
Response status code: 200 OK. Responded in 214.551959ms.
```json
{
  "state": "updated",
  "id": "https://localhost:5001/api/identifiers/facility-uses/659/facility-use-slots/6589",
  "modified": 1658485972088,
  "data": {
    "@context": [
      "https://openactive.io/"
    ],
    "@type": "Slot",
    "@id": "https://localhost:5001/api/identifiers/facility-uses/659/facility-use-slots/6589",
    "identifier": 6589,
    "duration": "PT1H37M",
    "facilityUse": {
      "@type": "FacilityUse",
      "@id": "https://localhost:5001/api/identifiers/facility-uses/659",
      "name": "Soft Jumping Hall",
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
    "maximumUses": 3,
    "offers": [
      {
        "@type": "Offer",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/659/facility-use-slots/6589#/offers/0",
        "allowCustomerCancellationFullRefund": true,
        "openBookingPrepayment": "https://openactive.io/Unavailable",
        "price": 0,
        "priceCurrency": "GBP",
        "validFromBeforeStartDate": "P14DT9H8M"
      }
    ],
    "remainingUses": 2,
    "startDate": "2022-07-26T11:03:12+00:00",
    "endDate": "2022-07-26T12:40:12+00:00"
  }
}
```
### Specs
* ✅ should return 200 on success for request relevant to OrderItem 0

## First Attempt - C1 -> C2 >> Assert Opportunity Capacity (after C1) >> validation of Opportunity Feed extract for OrderItem 0
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

## First Attempt - C1 -> C2 >> C2

### C2 Request
PUT https://localhost:5001/api/openbooking/order-quotes/4bf07223-9251-4899-86da-96ffaa7729de

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
    "email": "Reagan.Gorczany@yahoo.com",
    "telephone": "595-835-4142",
    "givenName": "Wuckert",
    "familyName": "Harry",
    "identifier": "0412ed0f-d9bd-4270-951e-37214551849e"
  },
  "orderedItem": [
    {
      "@type": "OrderItem",
      "position": 0,
      "acceptedOffer": "https://localhost:5001/api/identifiers/facility-uses/659/facility-use-slots/6589#/offers/0",
      "orderedItem": "https://localhost:5001/api/identifiers/facility-uses/659/facility-use-slots/6589"
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
Response status code: 200 OK. Responded in 68.369221ms.
```json
{
  "@context": "https://openactive.io/",
  "@type": "OrderQuote",
  "@id": "https://localhost:5001/api/openbooking/order-quotes/4bf07223-9251-4899-86da-96ffaa7729de",
  "lease": {
    "@type": "Lease",
    "leaseExpires": "2022-07-22T10:37:51+00:00"
  },
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
    "identifier": "0412ed0f-d9bd-4270-951e-37214551849e",
    "email": "Reagan.Gorczany@yahoo.com",
    "familyName": "Harry",
    "givenName": "Wuckert",
    "telephone": "595-835-4142"
  },
  "orderedItem": [
    {
      "@type": "OrderItem",
      "acceptedOffer": {
        "@type": "Offer",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/659/facility-use-slots/6589#/offers/0",
        "allowCustomerCancellationFullRefund": true,
        "openBookingPrepayment": "https://openactive.io/Unavailable",
        "price": 0,
        "priceCurrency": "GBP",
        "validFromBeforeStartDate": "P14DT9H8M"
      },
      "orderedItem": {
        "@type": "Slot",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/659/facility-use-slots/6589",
        "facilityUse": {
          "@type": "FacilityUse",
          "@id": "https://localhost:5001/api/identifiers/facility-uses/659",
          "name": "Soft Jumping Hall",
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
          "url": "https://example.com/events/659"
        },
        "maximumUses": 3,
        "remainingUses": 3,
        "startDate": "2022-07-26T11:03:12+00:00",
        "endDate": "2022-07-26T12:40:12+00:00"
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
* ✅ Should have the same number of OrderItems as criteria
* ✅ OrderItem at position 0 - capacities should not have changed from their initial values after C1/C2 (regardless of leasing)

## First Attempt - C1 -> C2 >> C2 >> validation of C2
### Specs
* ✅ passes validation checks

### Validations
 * ⚠️ $.orderedItem[0].acceptedOffer.name: Recommended property `name` is missing from `Offer`.
 * ⚠️ $.orderedItem[0].acceptedOffer.ageRestriction: Recommended property `ageRestriction` is missing from `Offer`.
 * ⚠️ $.orderedItem[0].orderedItem.duration: Recommended property `duration` is missing from `Slot`.
 * ⚠️ $.orderedItem[0].orderedItem.facilityUse.description: Recommended property `description` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[0].orderedItem.facilityUse.image: Recommended property `image` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[0].orderedItem.facilityUse.hoursAvailable: Recommended property `hoursAvailable` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[0].orderedItem.facilityUse.offers: Recommended property `offers` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[0].orderedItem.facilityUse.location.id: Recommended property `@id` is missing from `Place`.
 * ⚠️ $.orderedItem[0].orderedItem.facilityUse.location.url: Recommended property `url` is missing from `Place`.
 * ⚠️ $.orderedItem[0].orderedItem.facilityUse.location.description: Recommended property `description` is missing from `Place`.
 * ⚠️ $.orderedItem[0].orderedItem.facilityUse.location.image: Recommended property `image` is missing from `Place`.
 * ⚠️ $.orderedItem[0].orderedItem.facilityUse.location.telephone: Recommended property `telephone` is missing from `Place`.
 * ⚠️ $.orderedItem[0].orderedItem.facilityUse.location.openingHoursSpecification: Recommended property `openingHoursSpecification` is missing from `Place`.
 * ⚠️ $.orderedItem[0].orderedItem.facilityUse.location.amenityFeature: Recommended property `amenityFeature` is missing from `Place`.
 * ⚠️ $.seller.email: Recommended property `email` is missing from `Organization`.
 * ⚠️ $.seller.url: Recommended property `url` is missing from `Organization`.
 * ⚠️ $.seller.logo: Recommended property `logo` is missing from `Organization`.
 * ⚠️ $.seller.vatID: Recommended property `vatID` is missing from `Organization`.
 * 📝 $.orderedItem[0].orderedItem.facilityUse.location.geo.latitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[0].orderedItem.facilityUse.location.geo.longitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.

## First Attempt - C1 -> C2 >> Assert Opportunity Capacity (after C2)

### Opportunity Feed extract for OrderItem 0 Request
GET http://localhost:3000/opportunity/https%3A%2F%2Flocalhost%3A5001%2Fapi%2Fidentifiers%2Ffacility-uses%2F659%2Ffacility-use-slots%2F6589?useCacheIfAvailable=true&expectedCapacity=2


---
Response status code: 200 OK. Responded in 8.405275ms.
```json
{
  "data": {
    "@context": [
      "https://openactive.io/"
    ],
    "@type": "Slot",
    "@id": "https://localhost:5001/api/identifiers/facility-uses/659/facility-use-slots/6589",
    "identifier": 6589,
    "duration": "PT1H37M",
    "facilityUse": {
      "@type": "FacilityUse",
      "@id": "https://localhost:5001/api/identifiers/facility-uses/659",
      "name": "Soft Jumping Hall",
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
    "maximumUses": 3,
    "offers": [
      {
        "@type": "Offer",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/659/facility-use-slots/6589#/offers/0",
        "allowCustomerCancellationFullRefund": true,
        "openBookingPrepayment": "https://openactive.io/Unavailable",
        "price": 0,
        "priceCurrency": "GBP",
        "validFromBeforeStartDate": "P14DT9H8M"
      }
    ],
    "remainingUses": 2,
    "startDate": "2022-07-26T11:03:12+00:00",
    "endDate": "2022-07-26T12:40:12+00:00"
  }
}
```
### Specs
* ✅ should return 200 on success for request relevant to OrderItem 0

## First Attempt - C1 -> C2 >> Assert Opportunity Capacity (after C2) >> validation of Opportunity Feed extract for OrderItem 0
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

## Second Attempt - C2 -> B >> Fetch Opportunities

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
Response status code: 200 OK. Responded in 4.082985ms.
```json
{
  "@context": "https://openactive.io/",
  "@type": "Slot",
  "@id": "https://localhost:5001/api/identifiers/facility-uses/505/facility-use-slots/5047"
}
```

### Opportunity Feed extract for OrderItem 0 Request
GET http://localhost:3000/opportunity/https%3A%2F%2Flocalhost%3A5001%2Fapi%2Fidentifiers%2Ffacility-uses%2F505%2Ffacility-use-slots%2F5047?useCacheIfAvailable=true


---
Response status code: 200 OK. Responded in 8.479676ms.
```json
{
  "data": {
    "@context": [
      "https://openactive.io/"
    ],
    "@type": "Slot",
    "@id": "https://localhost:5001/api/identifiers/facility-uses/505/facility-use-slots/5047",
    "identifier": 5047,
    "duration": "PT6H",
    "facilityUse": {
      "@type": "FacilityUse",
      "@id": "https://localhost:5001/api/identifiers/facility-uses/505",
      "name": "Concrete Swimming Pool Hall",
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
    "maximumUses": 6,
    "offers": [
      {
        "@type": "Offer",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/505/facility-use-slots/5047#/offers/0",
        "allowCustomerCancellationFullRefund": false,
        "latestCancellationBeforeStartDate": "P1DT16H",
        "price": 19.53,
        "priceCurrency": "GBP",
        "validFromBeforeStartDate": "P14DT10H11M"
      }
    ],
    "remainingUses": 6,
    "startDate": "2022-07-26T02:01:12+00:00",
    "endDate": "2022-07-26T08:01:12+00:00"
  }
}
```
### Specs
* ✅ should return 200 on success for request relevant to OrderItem 0

## Second Attempt - C2 -> B >> Fetch Opportunities >> validation of Opportunity Feed extract for OrderItem 0
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

## Second Attempt - C2 -> B >> C2

### C2 Request
PUT https://localhost:5001/api/openbooking/order-quotes/4bf07223-9251-4899-86da-96ffaa7729de

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
    "email": "Sincere.Rippin97@hotmail.com",
    "telephone": "1-383-777-9143",
    "givenName": "Kling",
    "familyName": "Bud",
    "identifier": "778c34e2-548c-4bba-b99d-e2396704bdeb"
  },
  "orderedItem": [
    {
      "@type": "OrderItem",
      "position": 0,
      "acceptedOffer": "https://localhost:5001/api/identifiers/facility-uses/505/facility-use-slots/5047#/offers/0",
      "orderedItem": "https://localhost:5001/api/identifiers/facility-uses/505/facility-use-slots/5047"
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
Response status code: 200 OK. Responded in 211.886903ms.
```json
{
  "@context": "https://openactive.io/",
  "@type": "OrderQuote",
  "@id": "https://localhost:5001/api/openbooking/order-quotes/4bf07223-9251-4899-86da-96ffaa7729de",
  "lease": {
    "@type": "Lease",
    "leaseExpires": "2022-07-22T10:37:51+00:00"
  },
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
    "identifier": "778c34e2-548c-4bba-b99d-e2396704bdeb",
    "email": "Sincere.Rippin97@hotmail.com",
    "familyName": "Bud",
    "givenName": "Kling",
    "telephone": "1-383-777-9143"
  },
  "orderedItem": [
    {
      "@type": "OrderItem",
      "acceptedOffer": {
        "@type": "Offer",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/505/facility-use-slots/5047#/offers/0",
        "allowCustomerCancellationFullRefund": false,
        "latestCancellationBeforeStartDate": "P1DT16H",
        "price": 19.53,
        "priceCurrency": "GBP",
        "validFromBeforeStartDate": "P14DT10H11M"
      },
      "orderedItem": {
        "@type": "Slot",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/505/facility-use-slots/5047",
        "facilityUse": {
          "@type": "FacilityUse",
          "@id": "https://localhost:5001/api/identifiers/facility-uses/505",
          "name": "Concrete Swimming Pool Hall",
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
          "url": "https://example.com/events/505"
        },
        "maximumUses": 6,
        "remainingUses": 6,
        "startDate": "2022-07-26T02:01:12+00:00",
        "endDate": "2022-07-26T08:01:12+00:00"
      },
      "position": 0,
      "unitTaxSpecification": [
        {
          "@type": "TaxChargeSpecification",
          "name": "VAT at 20%",
          "price": 3.906,
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
    "openBookingPrepayment": "https://openactive.io/Required",
    "price": 19.53,
    "priceCurrency": "GBP"
  },
  "totalPaymentTax": [
    {
      "@type": "TaxChargeSpecification",
      "name": "VAT at 20%",
      "price": 3.906,
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

## Second Attempt - C2 -> B >> C2 >> validation of C2
### Specs
* ✅ passes validation checks

### Validations
 * ⚠️ $.orderedItem[0].acceptedOffer.name: Recommended property `name` is missing from `Offer`.
 * ⚠️ $.orderedItem[0].acceptedOffer.ageRestriction: Recommended property `ageRestriction` is missing from `Offer`.
 * ⚠️ $.orderedItem[0].orderedItem.duration: Recommended property `duration` is missing from `Slot`.
 * ⚠️ $.orderedItem[0].orderedItem.facilityUse.description: Recommended property `description` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[0].orderedItem.facilityUse.image: Recommended property `image` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[0].orderedItem.facilityUse.hoursAvailable: Recommended property `hoursAvailable` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[0].orderedItem.facilityUse.offers: Recommended property `offers` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[0].orderedItem.facilityUse.location.id: Recommended property `@id` is missing from `Place`.
 * ⚠️ $.orderedItem[0].orderedItem.facilityUse.location.url: Recommended property `url` is missing from `Place`.
 * ⚠️ $.orderedItem[0].orderedItem.facilityUse.location.description: Recommended property `description` is missing from `Place`.
 * ⚠️ $.orderedItem[0].orderedItem.facilityUse.location.image: Recommended property `image` is missing from `Place`.
 * ⚠️ $.orderedItem[0].orderedItem.facilityUse.location.telephone: Recommended property `telephone` is missing from `Place`.
 * ⚠️ $.orderedItem[0].orderedItem.facilityUse.location.openingHoursSpecification: Recommended property `openingHoursSpecification` is missing from `Place`.
 * ⚠️ $.orderedItem[0].orderedItem.facilityUse.location.amenityFeature: Recommended property `amenityFeature` is missing from `Place`.
 * ⚠️ $.seller.email: Recommended property `email` is missing from `Organization`.
 * ⚠️ $.seller.url: Recommended property `url` is missing from `Organization`.
 * ⚠️ $.seller.logo: Recommended property `logo` is missing from `Organization`.
 * ⚠️ $.seller.vatID: Recommended property `vatID` is missing from `Organization`.
 * 📝 $.orderedItem[0].orderedItem.facilityUse.location.geo.latitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[0].orderedItem.facilityUse.location.geo.longitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.

## Second Attempt - C2 -> B >> Assert Opportunity Capacity (after C2)

### Opportunity Feed extract for OrderItem 0 Request
GET http://localhost:3000/opportunity/https%3A%2F%2Flocalhost%3A5001%2Fapi%2Fidentifiers%2Ffacility-uses%2F505%2Ffacility-use-slots%2F5047?useCacheIfAvailable=true&expectedCapacity=5


---
Response status code: 200 OK. Responded in 814.901134ms.
```json
{
  "state": "updated",
  "id": "https://localhost:5001/api/identifiers/facility-uses/505/facility-use-slots/5047",
  "modified": 1658485973559,
  "data": {
    "@context": [
      "https://openactive.io/"
    ],
    "@type": "Slot",
    "@id": "https://localhost:5001/api/identifiers/facility-uses/505/facility-use-slots/5047",
    "identifier": 5047,
    "duration": "PT6H",
    "facilityUse": {
      "@type": "FacilityUse",
      "@id": "https://localhost:5001/api/identifiers/facility-uses/505",
      "name": "Concrete Swimming Pool Hall",
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
    "maximumUses": 6,
    "offers": [
      {
        "@type": "Offer",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/505/facility-use-slots/5047#/offers/0",
        "allowCustomerCancellationFullRefund": false,
        "latestCancellationBeforeStartDate": "P1DT16H",
        "price": 19.53,
        "priceCurrency": "GBP",
        "validFromBeforeStartDate": "P14DT10H11M"
      }
    ],
    "remainingUses": 5,
    "startDate": "2022-07-26T02:01:12+00:00",
    "endDate": "2022-07-26T08:01:12+00:00"
  }
}
```
### Specs
* ✅ should return 200 on success for request relevant to OrderItem 0
* ✅ Should have the same number of OrderItems as criteria
* ✅ OrderItem at position 0 - ID should match the one specified in the open data feed
* ✅ should include expected email address

## Second Attempt - C2 -> B >> Assert Opportunity Capacity (after C2) >> validation of Opportunity Feed extract for OrderItem 0
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

## Second Attempt - C2 -> B >> B

### B Request
PUT https://localhost:5001/api/openbooking/orders/4bf07223-9251-4899-86da-96ffaa7729de

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
    "email": "Sincere.Rippin97@hotmail.com",
    "telephone": "1-383-777-9143",
    "givenName": "Kling",
    "familyName": "Bud",
    "identifier": "778c34e2-548c-4bba-b99d-e2396704bdeb"
  },
  "orderedItem": [
    {
      "@type": "OrderItem",
      "position": 0,
      "acceptedOffer": "https://localhost:5001/api/identifiers/facility-uses/505/facility-use-slots/5047#/offers/0",
      "orderedItem": "https://localhost:5001/api/identifiers/facility-uses/505/facility-use-slots/5047"
    }
  ],
  "totalPaymentDue": {
    "@type": "PriceSpecification",
    "price": 19.53,
    "priceCurrency": "GBP"
  },
  "payment": {
    "@type": "Payment",
    "identifier": "6VKnKAJ58",
    "name": "AcmeBroker Points",
    "accountId": "SN1593",
    "paymentProviderId": "STRIPE"
  }
}
```

---
Response status code: 201 Created. Responded in 74.173441ms.
```json
{
  "@context": [
    "https://openactive.io/",
    "https://openactive.io/ns-beta"
  ],
  "@type": "Order",
  "@id": "https://localhost:5001/api/openbooking/orders/4bf07223-9251-4899-86da-96ffaa7729de",
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
    "identifier": "778c34e2-548c-4bba-b99d-e2396704bdeb",
    "email": "Sincere.Rippin97@hotmail.com",
    "familyName": "Bud",
    "givenName": "Kling",
    "telephone": "1-383-777-9143"
  },
  "orderedItem": [
    {
      "@type": "OrderItem",
      "@id": "https://localhost:5001/api/openbooking/orders/4bf07223-9251-4899-86da-96ffaa7729de#/orderedItems/21",
      "acceptedOffer": {
        "@type": "Offer",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/505/facility-use-slots/5047#/offers/0",
        "allowCustomerCancellationFullRefund": false,
        "latestCancellationBeforeStartDate": "P1DT16H",
        "price": 19.53,
        "priceCurrency": "GBP",
        "validFromBeforeStartDate": "P14DT10H11M"
      },
      "accessCode": [
        {
          "@type": "PropertyValue",
          "name": "Pin Code",
          "description": "933915",
          "value": "defaultValue"
        }
      ],
      "accessPass": [
        {
          "@type": "ImageObject",
          "url": "https://via.placeholder.com/25x25/cccccc/9c9c9c.png"
        },
        {
          "@type": "Barcode",
          "text": "6297295565",
          "url": "https://via.placeholder.com/25x25/cccccc/9c9c9c.png",
          "beta:codeType": "code128"
        }
      ],
      "orderedItem": {
        "@type": "Slot",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/505/facility-use-slots/5047",
        "facilityUse": {
          "@type": "FacilityUse",
          "@id": "https://localhost:5001/api/identifiers/facility-uses/505",
          "name": "Concrete Swimming Pool Hall",
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
          "url": "https://example.com/events/505"
        },
        "maximumUses": 6,
        "remainingUses": 6,
        "startDate": "2022-07-26T02:01:12+00:00",
        "endDate": "2022-07-26T08:01:12+00:00"
      },
      "orderItemStatus": "https://openactive.io/OrderItemConfirmed",
      "position": 0,
      "unitTaxSpecification": [
        {
          "@type": "TaxChargeSpecification",
          "name": "VAT at 20%",
          "price": 3.906,
          "priceCurrency": "GBP",
          "rate": 0.2
        }
      ]
    }
  ],
  "payment": {
    "@type": "Payment",
    "identifier": "6VKnKAJ58",
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
    "price": 19.53,
    "priceCurrency": "GBP"
  },
  "totalPaymentTax": [
    {
      "@type": "TaxChargeSpecification",
      "name": "VAT at 20%",
      "price": 3.906,
      "priceCurrency": "GBP",
      "rate": 0.2
    }
  ]
}
```
### Specs
* ✅ should return 201 on success

## Second Attempt - C2 -> B >> B >> validation of B
### Specs
* ✅ passes validation checks

### Validations
 * ⚠️ $.orderedItem[0].accessChannel: Recommended property `accessChannel` is missing from `OrderItem`.
 * ⚠️ $.orderedItem[0].acceptedOffer.name: Recommended property `name` is missing from `Offer`.
 * ⚠️ $.orderedItem[0].acceptedOffer.ageRestriction: Recommended property `ageRestriction` is missing from `Offer`.
 * ⚠️ $.orderedItem[0].orderedItem.duration: Recommended property `duration` is missing from `Slot`.
 * ⚠️ $.orderedItem[0].orderedItem.facilityUse.description: Recommended property `description` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[0].orderedItem.facilityUse.image: Recommended property `image` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[0].orderedItem.facilityUse.hoursAvailable: Recommended property `hoursAvailable` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[0].orderedItem.facilityUse.offers: Recommended property `offers` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[0].orderedItem.facilityUse.location.id: Recommended property `@id` is missing from `Place`.
 * ⚠️ $.orderedItem[0].orderedItem.facilityUse.location.url: Recommended property `url` is missing from `Place`.
 * ⚠️ $.orderedItem[0].orderedItem.facilityUse.location.description: Recommended property `description` is missing from `Place`.
 * ⚠️ $.orderedItem[0].orderedItem.facilityUse.location.image: Recommended property `image` is missing from `Place`.
 * ⚠️ $.orderedItem[0].orderedItem.facilityUse.location.telephone: Recommended property `telephone` is missing from `Place`.
 * ⚠️ $.orderedItem[0].orderedItem.facilityUse.location.openingHoursSpecification: Recommended property `openingHoursSpecification` is missing from `Place`.
 * ⚠️ $.orderedItem[0].orderedItem.facilityUse.location.amenityFeature: Recommended property `amenityFeature` is missing from `Place`.
 * ⚠️ $.seller.email: Recommended property `email` is missing from `Organization`.
 * ⚠️ $.seller.url: Recommended property `url` is missing from `Organization`.
 * ⚠️ $.seller.logo: Recommended property `logo` is missing from `Organization`.
 * ⚠️ $.seller.vatID: Recommended property `vatID` is missing from `Organization`.
 * 📝 $.orderedItem[0].orderedItem.facilityUse.location.geo.latitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[0].orderedItem.facilityUse.location.geo.longitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.

## Second Attempt - C2 -> B >> Assert Opportunity Capacity (after B)

### Opportunity Feed extract for OrderItem 0 Request
GET http://localhost:3000/opportunity/https%3A%2F%2Flocalhost%3A5001%2Fapi%2Fidentifiers%2Ffacility-uses%2F505%2Ffacility-use-slots%2F5047?useCacheIfAvailable=true&expectedCapacity=5


---
Response status code: 200 OK. Responded in 11.062329ms.
```json
{
  "data": {
    "@context": [
      "https://openactive.io/"
    ],
    "@type": "Slot",
    "@id": "https://localhost:5001/api/identifiers/facility-uses/505/facility-use-slots/5047",
    "identifier": 5047,
    "duration": "PT6H",
    "facilityUse": {
      "@type": "FacilityUse",
      "@id": "https://localhost:5001/api/identifiers/facility-uses/505",
      "name": "Concrete Swimming Pool Hall",
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
    "maximumUses": 6,
    "offers": [
      {
        "@type": "Offer",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/505/facility-use-slots/5047#/offers/0",
        "allowCustomerCancellationFullRefund": false,
        "latestCancellationBeforeStartDate": "P1DT16H",
        "price": 19.53,
        "priceCurrency": "GBP",
        "validFromBeforeStartDate": "P14DT10H11M"
      }
    ],
    "remainingUses": 5,
    "startDate": "2022-07-26T02:01:12+00:00",
    "endDate": "2022-07-26T08:01:12+00:00"
  }
}
```
### Specs
* ✅ should return 200 on success for request relevant to OrderItem 0
* ✅ Should have the same number of OrderItems as criteria
* ✅ OrderItem at position 0 - ID should match the one specified in the open data feed
* ✅ should include expected email address

## Second Attempt - C2 -> B >> Assert Opportunity Capacity (after B) >> validation of Opportunity Feed extract for OrderItem 0
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

## After Second Attempt, should restore capacity for Opportunities from First Attempt >> Assert Opportunity Capacity (after Second Attempt - B)
### Specs
* ✅ should return 200 on success for request relevant to OrderItem 0

## After Second Attempt, should restore capacity for Opportunities from First Attempt >> Assert Opportunity Capacity (after Second Attempt - B) >> validation of Opportunity Feed extract for OrderItem 0
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


