[< Return to Summary](summary.md) | File Generated: Fri Jul 22 2022 10:45:14 GMT+0000 (Coordinated Universal Time)

# named-leasing >> lease-opportunity-multiple-capacity-update (OpenBookingSimpleFlow >> FacilityUseSlot)

**Booking Flow:** OpenBookingSimpleFlow

**Opportunity Type:** FacilityUseSlot

**Feature:** Leasing / Named leasing, including leaseExpires (Implemented) 

**Test:**  Multiple named leased spaces are unavailable for purchase by other users

For an opportunity with 2 spaces: Check the opportunity has 2 spaces in the feed. Run C1 and C2 to book one item (creating an named lease) - during this run call C2 twice, and check that both times there are still 2 remaining spaces from this UUID's perspective. Check the opportunity has 1 space in the feed. Run C1 and C2 again for a new Order UUID for the same opportunity attempting to book 3 spaces, expecting OrderItems to be returned with 1 having no errors, 1 having an OpportunityCapacityIsReservedByLeaseError, and 1 having an OpportunityHasInsufficientCapacityError.

### Running only this test

```bash
npm start -- --runInBand test/features/leasing/named-leasing/implemented/lease-opportunity-multiple-capacity-update-test.js
```

---

⚠️ 38 passed with 0 failures, 642 warnings and 80 suggestions 

---


## Fetch Opportunities

### Booking System Test Interface for OrderItem 0 Request
POST https://localhost:5001/api/openbooking/test-interface/datasets/uat-ci/opportunities

* **Content-Type:** `"application/vnd.openactive.booking+json; version=1"`
* **Authorization:** `"Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkIwNEY3QjkxREUzQjk0NzhDNjE4MzNGQjI0QUE1Q0RCIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2NTg0ODU2NTAsImV4cCI6MTY1ODQ4OTI1MCwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NTAwMyIsImF1ZCI6Im9wZW5ib29raW5nIiwiY2xpZW50X2lkIjoiNjJiNGY3MmUtZmJmOS00OTk0LTlkNDQtYmQ5NTMwOTllMTM0IiwiaHR0cHM6Ly9vcGVuYWN0aXZlLmlvL2NsaWVudElkIjoiNjJiNGY3MmUtZmJmOS00OTk0LTlkNDQtYmQ5NTMwOTllMTM0Iiwic3ViIjoiMTAwIiwiYXV0aF90aW1lIjoxNjU4NDg1NjQ5LCJpZHAiOiJsb2NhbCIsImh0dHBzOi8vb3BlbmFjdGl2ZS5pby9zZWxsZXJJZCI6Imh0dHBzOi8vbG9jYWxob3N0OjUwMDEvYXBpL2lkZW50aWZpZXJzL3NlbGxlcnMvMSIsImp0aSI6IkZFNjE5OTM5Q0M2MUVFRTFDQTFDRUIyNzczMTYyMjg5Iiwic2lkIjoiMEI1RjVGRDEzODJGNTY2REE2NzI2RUM1RjBENjRFQ0QiLCJpYXQiOjE2NTg0ODU2NTAsInNjb3BlIjpbIm9wZW5pZCIsIm9wZW5hY3RpdmUtb3BlbmJvb2tpbmciLCJvcGVuYWN0aXZlLWlkZW50aXR5Iiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbInB3ZCJdfQ.o-QctzkQMggVF6J8EIsjxJ43llGhs2jSEGiCfZxoPJjg0Coj1XkqaKd5Bltzc2D21dEBtbq-c5sKreCqebPhxuDlg_pDikudK9_wCosxWyOPIBS3OX6HFWM-J-Ofpxgkk5thfLTkLlDW8N6f3jtsTIRGm9dZvKsGypmwxnDdRhGKwxSDhnabWbPtFCABWC6DxK5mgb6V5SX3W3QxbI181T1tQioKui-N8j1FSgIpXrE3qy2ShkI-QbxwmMBCYhqcTbhLi41SUSx6gKgtl54lc_JEx-kSBlgsQmOrRKMDDrEecM9JQMNAliL2mJeIClUfC8k_SUKbJ8VvbNBbMjVSCw"`

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
  "test:testOpenBookingFlow": "https://openactive.io/test-interface#OpenBookingSimpleFlow",
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
        "minDate": "2022-07-22T12:27:25.573+00:00"
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
        "maxDate": "2022-07-22T10:27:25.573+00:00",
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
Response status code: 200 OK. Responded in 35.227124ms.
```json
{
  "@context": "https://openactive.io/",
  "@type": "Slot",
  "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445"
}
```

### Opportunity Feed extract for OrderItem 0 Request
GET http://localhost:3000/opportunity/https%3A%2F%2Flocalhost%3A5001%2Fapi%2Fidentifiers%2Ffacility-uses%2F2445%2Ffacility-use-slots%2F20445?useCacheIfAvailable=true


---
Response status code: 200 OK. Responded in 1577.848111ms.
```json
{
  "state": "updated",
  "id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445",
  "modified": 1658486727609,
  "data": {
    "@context": [
      "https://openactive.io/"
    ],
    "@type": "Slot",
    "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445",
    "identifier": 20445,
    "duration": "PT1H",
    "facilityUse": {
      "@type": "FacilityUse",
      "@id": "https://localhost:5001/api/identifiers/facility-uses/2445",
      "name": "[OPEN BOOKING API TEST INTERFACE] Bookable Free Facility Five Spaces",
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
          "latitude": 0.1,
          "longitude": 0.1
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
        "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445#/offers/0",
        "allowCustomerCancellationFullRefund": true,
        "price": 14.99,
        "priceCurrency": "GBP"
      }
    ],
    "remainingUses": 5,
    "startDate": "2022-07-23T10:45:25+00:00",
    "endDate": "2022-07-23T11:45:25+00:00"
  }
}
```
### Specs
* ✅ should return 200 on success for request relevant to OrderItem 0

## Fetch Opportunities >> validation of Opportunity Feed extract for OrderItem 0
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
PUT https://localhost:5001/api/openbooking/order-quote-templates/d48e8f7a-429f-4fa3-a2bb-281f4060708b

* **Content-Type:** `"application/vnd.openactive.booking+json; version=1"`
* **Authorization:** `"Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkIwNEY3QjkxREUzQjk0NzhDNjE4MzNGQjI0QUE1Q0RCIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2NTg0ODU2NTAsImV4cCI6MTY1ODQ4OTI1MCwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NTAwMyIsImF1ZCI6Im9wZW5ib29raW5nIiwiY2xpZW50X2lkIjoiNjJiNGY3MmUtZmJmOS00OTk0LTlkNDQtYmQ5NTMwOTllMTM0IiwiaHR0cHM6Ly9vcGVuYWN0aXZlLmlvL2NsaWVudElkIjoiNjJiNGY3MmUtZmJmOS00OTk0LTlkNDQtYmQ5NTMwOTllMTM0Iiwic3ViIjoiMTAwIiwiYXV0aF90aW1lIjoxNjU4NDg1NjQ5LCJpZHAiOiJsb2NhbCIsImh0dHBzOi8vb3BlbmFjdGl2ZS5pby9zZWxsZXJJZCI6Imh0dHBzOi8vbG9jYWxob3N0OjUwMDEvYXBpL2lkZW50aWZpZXJzL3NlbGxlcnMvMSIsImp0aSI6IkZFNjE5OTM5Q0M2MUVFRTFDQTFDRUIyNzczMTYyMjg5Iiwic2lkIjoiMEI1RjVGRDEzODJGNTY2REE2NzI2RUM1RjBENjRFQ0QiLCJpYXQiOjE2NTg0ODU2NTAsInNjb3BlIjpbIm9wZW5pZCIsIm9wZW5hY3RpdmUtb3BlbmJvb2tpbmciLCJvcGVuYWN0aXZlLWlkZW50aXR5Iiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbInB3ZCJdfQ.o-QctzkQMggVF6J8EIsjxJ43llGhs2jSEGiCfZxoPJjg0Coj1XkqaKd5Bltzc2D21dEBtbq-c5sKreCqebPhxuDlg_pDikudK9_wCosxWyOPIBS3OX6HFWM-J-Ofpxgkk5thfLTkLlDW8N6f3jtsTIRGm9dZvKsGypmwxnDdRhGKwxSDhnabWbPtFCABWC6DxK5mgb6V5SX3W3QxbI181T1tQioKui-N8j1FSgIpXrE3qy2ShkI-QbxwmMBCYhqcTbhLi41SUSx6gKgtl54lc_JEx-kSBlgsQmOrRKMDDrEecM9JQMNAliL2mJeIClUfC8k_SUKbJ8VvbNBbMjVSCw"`

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
      "acceptedOffer": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445#/offers/0",
      "orderedItem": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445"
    },
    {
      "@type": "OrderItem",
      "position": 1,
      "acceptedOffer": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445#/offers/0",
      "orderedItem": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445"
    },
    {
      "@type": "OrderItem",
      "position": 2,
      "acceptedOffer": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445#/offers/0",
      "orderedItem": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445"
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
Response status code: 200 OK. Responded in 225.510574ms.
```json
{
  "@context": "https://openactive.io/",
  "@type": "OrderQuote",
  "@id": "https://localhost:5001/api/openbooking/order-quotes/d48e8f7a-429f-4fa3-a2bb-281f4060708b",
  "lease": {
    "@type": "Lease",
    "leaseExpires": "2022-07-22T10:50:26+00:00"
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
        "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445#/offers/0",
        "allowCustomerCancellationFullRefund": true,
        "price": 14.99,
        "priceCurrency": "GBP"
      },
      "orderedItem": {
        "@type": "Slot",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445",
        "facilityUse": {
          "@type": "FacilityUse",
          "@id": "https://localhost:5001/api/identifiers/facility-uses/2445",
          "name": "[OPEN BOOKING API TEST INTERFACE] Bookable Free Facility Five Spaces",
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
              "latitude": 0.1,
              "longitude": 0.1
            }
          },
          "url": "https://example.com/events/2445"
        },
        "maximumUses": 5,
        "remainingUses": 5,
        "startDate": "2022-07-23T10:45:25+00:00",
        "endDate": "2022-07-23T11:45:25+00:00"
      },
      "position": 0,
      "unitTaxSpecification": [
        {
          "@type": "TaxChargeSpecification",
          "name": "VAT at 20%",
          "price": 2.998,
          "priceCurrency": "GBP",
          "rate": 0.2
        }
      ]
    },
    {
      "@type": "OrderItem",
      "acceptedOffer": {
        "@type": "Offer",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445#/offers/0",
        "allowCustomerCancellationFullRefund": true,
        "price": 14.99,
        "priceCurrency": "GBP"
      },
      "orderedItem": {
        "@type": "Slot",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445",
        "facilityUse": {
          "@type": "FacilityUse",
          "@id": "https://localhost:5001/api/identifiers/facility-uses/2445",
          "name": "[OPEN BOOKING API TEST INTERFACE] Bookable Free Facility Five Spaces",
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
              "latitude": 0.1,
              "longitude": 0.1
            }
          },
          "url": "https://example.com/events/2445"
        },
        "maximumUses": 5,
        "remainingUses": 5,
        "startDate": "2022-07-23T10:45:25+00:00",
        "endDate": "2022-07-23T11:45:25+00:00"
      },
      "position": 1,
      "unitTaxSpecification": [
        {
          "@type": "TaxChargeSpecification",
          "name": "VAT at 20%",
          "price": 2.998,
          "priceCurrency": "GBP",
          "rate": 0.2
        }
      ]
    },
    {
      "@type": "OrderItem",
      "acceptedOffer": {
        "@type": "Offer",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445#/offers/0",
        "allowCustomerCancellationFullRefund": true,
        "price": 14.99,
        "priceCurrency": "GBP"
      },
      "orderedItem": {
        "@type": "Slot",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445",
        "facilityUse": {
          "@type": "FacilityUse",
          "@id": "https://localhost:5001/api/identifiers/facility-uses/2445",
          "name": "[OPEN BOOKING API TEST INTERFACE] Bookable Free Facility Five Spaces",
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
              "latitude": 0.1,
              "longitude": 0.1
            }
          },
          "url": "https://example.com/events/2445"
        },
        "maximumUses": 5,
        "remainingUses": 5,
        "startDate": "2022-07-23T10:45:25+00:00",
        "endDate": "2022-07-23T11:45:25+00:00"
      },
      "position": 2,
      "unitTaxSpecification": [
        {
          "@type": "TaxChargeSpecification",
          "name": "VAT at 20%",
          "price": 2.998,
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
    "price": 44.97,
    "priceCurrency": "GBP"
  },
  "totalPaymentTax": [
    {
      "@type": "TaxChargeSpecification",
      "name": "VAT at 20%",
      "price": 8.994,
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
 * ⚠️ $.orderedItem[1].acceptedOffer.name: Recommended property `name` is missing from `Offer`.
 * ⚠️ $.orderedItem[1].acceptedOffer.ageRestriction: Recommended property `ageRestriction` is missing from `Offer`.
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
 * ⚠️ $.seller.email: Recommended property `email` is missing from `Organization`.
 * ⚠️ $.seller.url: Recommended property `url` is missing from `Organization`.
 * ⚠️ $.seller.logo: Recommended property `logo` is missing from `Organization`.
 * ⚠️ $.seller.vatID: Recommended property `vatID` is missing from `Organization`.
 * 📝 $.orderedItem[0].orderedItem.facilityUse.location.geo.latitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[0].orderedItem.facilityUse.location.geo.longitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[1].orderedItem.facilityUse.location.geo.latitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[1].orderedItem.facilityUse.location.geo.longitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[2].orderedItem.facilityUse.location.geo.latitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[2].orderedItem.facilityUse.location.geo.longitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.

## Lease 3 item(s) (success) >> C2

### C2 Request
PUT https://localhost:5001/api/openbooking/order-quotes/d48e8f7a-429f-4fa3-a2bb-281f4060708b

* **Content-Type:** `"application/vnd.openactive.booking+json; version=1"`
* **Authorization:** `"Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkIwNEY3QjkxREUzQjk0NzhDNjE4MzNGQjI0QUE1Q0RCIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2NTg0ODU2NTAsImV4cCI6MTY1ODQ4OTI1MCwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NTAwMyIsImF1ZCI6Im9wZW5ib29raW5nIiwiY2xpZW50X2lkIjoiNjJiNGY3MmUtZmJmOS00OTk0LTlkNDQtYmQ5NTMwOTllMTM0IiwiaHR0cHM6Ly9vcGVuYWN0aXZlLmlvL2NsaWVudElkIjoiNjJiNGY3MmUtZmJmOS00OTk0LTlkNDQtYmQ5NTMwOTllMTM0Iiwic3ViIjoiMTAwIiwiYXV0aF90aW1lIjoxNjU4NDg1NjQ5LCJpZHAiOiJsb2NhbCIsImh0dHBzOi8vb3BlbmFjdGl2ZS5pby9zZWxsZXJJZCI6Imh0dHBzOi8vbG9jYWxob3N0OjUwMDEvYXBpL2lkZW50aWZpZXJzL3NlbGxlcnMvMSIsImp0aSI6IkZFNjE5OTM5Q0M2MUVFRTFDQTFDRUIyNzczMTYyMjg5Iiwic2lkIjoiMEI1RjVGRDEzODJGNTY2REE2NzI2RUM1RjBENjRFQ0QiLCJpYXQiOjE2NTg0ODU2NTAsInNjb3BlIjpbIm9wZW5pZCIsIm9wZW5hY3RpdmUtb3BlbmJvb2tpbmciLCJvcGVuYWN0aXZlLWlkZW50aXR5Iiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbInB3ZCJdfQ.o-QctzkQMggVF6J8EIsjxJ43llGhs2jSEGiCfZxoPJjg0Coj1XkqaKd5Bltzc2D21dEBtbq-c5sKreCqebPhxuDlg_pDikudK9_wCosxWyOPIBS3OX6HFWM-J-Ofpxgkk5thfLTkLlDW8N6f3jtsTIRGm9dZvKsGypmwxnDdRhGKwxSDhnabWbPtFCABWC6DxK5mgb6V5SX3W3QxbI181T1tQioKui-N8j1FSgIpXrE3qy2ShkI-QbxwmMBCYhqcTbhLi41SUSx6gKgtl54lc_JEx-kSBlgsQmOrRKMDDrEecM9JQMNAliL2mJeIClUfC8k_SUKbJ8VvbNBbMjVSCw"`

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
    "email": "Griffin_Gerlach@gmail.com",
    "telephone": "566-700-7224 x7524",
    "givenName": "Greenholt",
    "familyName": "Delphine",
    "identifier": "4020bb67-198b-4b31-a15f-8f1e56539a65"
  },
  "orderedItem": [
    {
      "@type": "OrderItem",
      "position": 0,
      "acceptedOffer": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445#/offers/0",
      "orderedItem": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445"
    },
    {
      "@type": "OrderItem",
      "position": 1,
      "acceptedOffer": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445#/offers/0",
      "orderedItem": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445"
    },
    {
      "@type": "OrderItem",
      "position": 2,
      "acceptedOffer": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445#/offers/0",
      "orderedItem": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445"
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
Response status code: 200 OK. Responded in 265.332703ms.
```json
{
  "@context": "https://openactive.io/",
  "@type": "OrderQuote",
  "@id": "https://localhost:5001/api/openbooking/order-quotes/d48e8f7a-429f-4fa3-a2bb-281f4060708b",
  "lease": {
    "@type": "Lease",
    "leaseExpires": "2022-07-22T10:50:27+00:00"
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
    "identifier": "4020bb67-198b-4b31-a15f-8f1e56539a65",
    "email": "Griffin_Gerlach@gmail.com",
    "familyName": "Delphine",
    "givenName": "Greenholt",
    "telephone": "566-700-7224 x7524"
  },
  "orderedItem": [
    {
      "@type": "OrderItem",
      "acceptedOffer": {
        "@type": "Offer",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445#/offers/0",
        "allowCustomerCancellationFullRefund": true,
        "price": 14.99,
        "priceCurrency": "GBP"
      },
      "orderedItem": {
        "@type": "Slot",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445",
        "facilityUse": {
          "@type": "FacilityUse",
          "@id": "https://localhost:5001/api/identifiers/facility-uses/2445",
          "name": "[OPEN BOOKING API TEST INTERFACE] Bookable Free Facility Five Spaces",
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
              "latitude": 0.1,
              "longitude": 0.1
            }
          },
          "url": "https://example.com/events/2445"
        },
        "maximumUses": 5,
        "remainingUses": 5,
        "startDate": "2022-07-23T10:45:25+00:00",
        "endDate": "2022-07-23T11:45:25+00:00"
      },
      "position": 0,
      "unitTaxSpecification": [
        {
          "@type": "TaxChargeSpecification",
          "name": "VAT at 20%",
          "price": 2.998,
          "priceCurrency": "GBP",
          "rate": 0.2
        }
      ]
    },
    {
      "@type": "OrderItem",
      "acceptedOffer": {
        "@type": "Offer",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445#/offers/0",
        "allowCustomerCancellationFullRefund": true,
        "price": 14.99,
        "priceCurrency": "GBP"
      },
      "orderedItem": {
        "@type": "Slot",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445",
        "facilityUse": {
          "@type": "FacilityUse",
          "@id": "https://localhost:5001/api/identifiers/facility-uses/2445",
          "name": "[OPEN BOOKING API TEST INTERFACE] Bookable Free Facility Five Spaces",
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
              "latitude": 0.1,
              "longitude": 0.1
            }
          },
          "url": "https://example.com/events/2445"
        },
        "maximumUses": 5,
        "remainingUses": 5,
        "startDate": "2022-07-23T10:45:25+00:00",
        "endDate": "2022-07-23T11:45:25+00:00"
      },
      "position": 1,
      "unitTaxSpecification": [
        {
          "@type": "TaxChargeSpecification",
          "name": "VAT at 20%",
          "price": 2.998,
          "priceCurrency": "GBP",
          "rate": 0.2
        }
      ]
    },
    {
      "@type": "OrderItem",
      "acceptedOffer": {
        "@type": "Offer",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445#/offers/0",
        "allowCustomerCancellationFullRefund": true,
        "price": 14.99,
        "priceCurrency": "GBP"
      },
      "orderedItem": {
        "@type": "Slot",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445",
        "facilityUse": {
          "@type": "FacilityUse",
          "@id": "https://localhost:5001/api/identifiers/facility-uses/2445",
          "name": "[OPEN BOOKING API TEST INTERFACE] Bookable Free Facility Five Spaces",
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
              "latitude": 0.1,
              "longitude": 0.1
            }
          },
          "url": "https://example.com/events/2445"
        },
        "maximumUses": 5,
        "remainingUses": 5,
        "startDate": "2022-07-23T10:45:25+00:00",
        "endDate": "2022-07-23T11:45:25+00:00"
      },
      "position": 2,
      "unitTaxSpecification": [
        {
          "@type": "TaxChargeSpecification",
          "name": "VAT at 20%",
          "price": 2.998,
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
    "price": 44.97,
    "priceCurrency": "GBP"
  },
  "totalPaymentTax": [
    {
      "@type": "TaxChargeSpecification",
      "name": "VAT at 20%",
      "price": 8.994,
      "priceCurrency": "GBP",
      "rate": 0.2
    }
  ]
}
```
### Specs
* ✅ should return 200 on success

## Lease 3 item(s) (success) >> C2 >> validation of C2
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
 * ⚠️ $.orderedItem[1].acceptedOffer.name: Recommended property `name` is missing from `Offer`.
 * ⚠️ $.orderedItem[1].acceptedOffer.ageRestriction: Recommended property `ageRestriction` is missing from `Offer`.
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
 * ⚠️ $.seller.email: Recommended property `email` is missing from `Organization`.
 * ⚠️ $.seller.url: Recommended property `url` is missing from `Organization`.
 * ⚠️ $.seller.logo: Recommended property `logo` is missing from `Organization`.
 * ⚠️ $.seller.vatID: Recommended property `vatID` is missing from `Organization`.
 * 📝 $.orderedItem[0].orderedItem.facilityUse.location.geo.latitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[0].orderedItem.facilityUse.location.geo.longitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[1].orderedItem.facilityUse.location.geo.latitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[1].orderedItem.facilityUse.location.geo.longitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[2].orderedItem.facilityUse.location.geo.latitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[2].orderedItem.facilityUse.location.geo.longitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.

## Lease 3 item(s) (success) >> Assert Opportunity Capacity (after C2)

### Opportunity Feed extract for OrderItem 0 Request
GET http://localhost:3000/opportunity/https%3A%2F%2Flocalhost%3A5001%2Fapi%2Fidentifiers%2Ffacility-uses%2F2445%2Ffacility-use-slots%2F20445?useCacheIfAvailable=true&expectedCapacity=2


---
Response status code: 200 OK. Responded in 239.532036ms.
```json
{
  "state": "updated",
  "id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445",
  "modified": 1658486729016,
  "data": {
    "@context": [
      "https://openactive.io/"
    ],
    "@type": "Slot",
    "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445",
    "identifier": 20445,
    "duration": "PT1H",
    "facilityUse": {
      "@type": "FacilityUse",
      "@id": "https://localhost:5001/api/identifiers/facility-uses/2445",
      "name": "[OPEN BOOKING API TEST INTERFACE] Bookable Free Facility Five Spaces",
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
          "latitude": 0.1,
          "longitude": 0.1
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
        "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445#/offers/0",
        "allowCustomerCancellationFullRefund": true,
        "price": 14.99,
        "priceCurrency": "GBP"
      }
    ],
    "remainingUses": 2,
    "startDate": "2022-07-23T10:45:25+00:00",
    "endDate": "2022-07-23T11:45:25+00:00"
  }
}
```
### Specs
* ✅ should return 200 on success for request relevant to OrderItem 0
* ✅ Should have the same number of OrderItems as criteria
* ✅ OrderItem at position 0 - should decrement remaining slots
* ✅ OrderItem at position 1 - should decrement remaining slots
* ✅ OrderItem at position 2 - should decrement remaining slots

## Lease 3 item(s) (success) >> Assert Opportunity Capacity (after C2) >> validation of Opportunity Feed extract for OrderItem 0
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

## Lease 3 item(s) (success) >> Same C2 Again (test idempotency) >> C2

### C2 Request
PUT https://localhost:5001/api/openbooking/order-quotes/d48e8f7a-429f-4fa3-a2bb-281f4060708b

* **Content-Type:** `"application/vnd.openactive.booking+json; version=1"`
* **Authorization:** `"Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkIwNEY3QjkxREUzQjk0NzhDNjE4MzNGQjI0QUE1Q0RCIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2NTg0ODU2NTAsImV4cCI6MTY1ODQ4OTI1MCwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NTAwMyIsImF1ZCI6Im9wZW5ib29raW5nIiwiY2xpZW50X2lkIjoiNjJiNGY3MmUtZmJmOS00OTk0LTlkNDQtYmQ5NTMwOTllMTM0IiwiaHR0cHM6Ly9vcGVuYWN0aXZlLmlvL2NsaWVudElkIjoiNjJiNGY3MmUtZmJmOS00OTk0LTlkNDQtYmQ5NTMwOTllMTM0Iiwic3ViIjoiMTAwIiwiYXV0aF90aW1lIjoxNjU4NDg1NjQ5LCJpZHAiOiJsb2NhbCIsImh0dHBzOi8vb3BlbmFjdGl2ZS5pby9zZWxsZXJJZCI6Imh0dHBzOi8vbG9jYWxob3N0OjUwMDEvYXBpL2lkZW50aWZpZXJzL3NlbGxlcnMvMSIsImp0aSI6IkZFNjE5OTM5Q0M2MUVFRTFDQTFDRUIyNzczMTYyMjg5Iiwic2lkIjoiMEI1RjVGRDEzODJGNTY2REE2NzI2RUM1RjBENjRFQ0QiLCJpYXQiOjE2NTg0ODU2NTAsInNjb3BlIjpbIm9wZW5pZCIsIm9wZW5hY3RpdmUtb3BlbmJvb2tpbmciLCJvcGVuYWN0aXZlLWlkZW50aXR5Iiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbInB3ZCJdfQ.o-QctzkQMggVF6J8EIsjxJ43llGhs2jSEGiCfZxoPJjg0Coj1XkqaKd5Bltzc2D21dEBtbq-c5sKreCqebPhxuDlg_pDikudK9_wCosxWyOPIBS3OX6HFWM-J-Ofpxgkk5thfLTkLlDW8N6f3jtsTIRGm9dZvKsGypmwxnDdRhGKwxSDhnabWbPtFCABWC6DxK5mgb6V5SX3W3QxbI181T1tQioKui-N8j1FSgIpXrE3qy2ShkI-QbxwmMBCYhqcTbhLi41SUSx6gKgtl54lc_JEx-kSBlgsQmOrRKMDDrEecM9JQMNAliL2mJeIClUfC8k_SUKbJ8VvbNBbMjVSCw"`

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
    "email": "Griffin_Gerlach@gmail.com",
    "telephone": "566-700-7224 x7524",
    "givenName": "Greenholt",
    "familyName": "Delphine",
    "identifier": "4020bb67-198b-4b31-a15f-8f1e56539a65"
  },
  "orderedItem": [
    {
      "@type": "OrderItem",
      "position": 0,
      "acceptedOffer": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445#/offers/0",
      "orderedItem": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445"
    },
    {
      "@type": "OrderItem",
      "position": 1,
      "acceptedOffer": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445#/offers/0",
      "orderedItem": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445"
    },
    {
      "@type": "OrderItem",
      "position": 2,
      "acceptedOffer": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445#/offers/0",
      "orderedItem": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445"
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
Response status code: 200 OK. Responded in 325.026597ms.
```json
{
  "@context": "https://openactive.io/",
  "@type": "OrderQuote",
  "@id": "https://localhost:5001/api/openbooking/order-quotes/d48e8f7a-429f-4fa3-a2bb-281f4060708b",
  "lease": {
    "@type": "Lease",
    "leaseExpires": "2022-07-22T10:50:28+00:00"
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
    "identifier": "4020bb67-198b-4b31-a15f-8f1e56539a65",
    "email": "Griffin_Gerlach@gmail.com",
    "familyName": "Delphine",
    "givenName": "Greenholt",
    "telephone": "566-700-7224 x7524"
  },
  "orderedItem": [
    {
      "@type": "OrderItem",
      "acceptedOffer": {
        "@type": "Offer",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445#/offers/0",
        "allowCustomerCancellationFullRefund": true,
        "price": 14.99,
        "priceCurrency": "GBP"
      },
      "orderedItem": {
        "@type": "Slot",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445",
        "facilityUse": {
          "@type": "FacilityUse",
          "@id": "https://localhost:5001/api/identifiers/facility-uses/2445",
          "name": "[OPEN BOOKING API TEST INTERFACE] Bookable Free Facility Five Spaces",
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
              "latitude": 0.1,
              "longitude": 0.1
            }
          },
          "url": "https://example.com/events/2445"
        },
        "maximumUses": 5,
        "remainingUses": 5,
        "startDate": "2022-07-23T10:45:25+00:00",
        "endDate": "2022-07-23T11:45:25+00:00"
      },
      "position": 0,
      "unitTaxSpecification": [
        {
          "@type": "TaxChargeSpecification",
          "name": "VAT at 20%",
          "price": 2.998,
          "priceCurrency": "GBP",
          "rate": 0.2
        }
      ]
    },
    {
      "@type": "OrderItem",
      "acceptedOffer": {
        "@type": "Offer",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445#/offers/0",
        "allowCustomerCancellationFullRefund": true,
        "price": 14.99,
        "priceCurrency": "GBP"
      },
      "orderedItem": {
        "@type": "Slot",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445",
        "facilityUse": {
          "@type": "FacilityUse",
          "@id": "https://localhost:5001/api/identifiers/facility-uses/2445",
          "name": "[OPEN BOOKING API TEST INTERFACE] Bookable Free Facility Five Spaces",
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
              "latitude": 0.1,
              "longitude": 0.1
            }
          },
          "url": "https://example.com/events/2445"
        },
        "maximumUses": 5,
        "remainingUses": 5,
        "startDate": "2022-07-23T10:45:25+00:00",
        "endDate": "2022-07-23T11:45:25+00:00"
      },
      "position": 1,
      "unitTaxSpecification": [
        {
          "@type": "TaxChargeSpecification",
          "name": "VAT at 20%",
          "price": 2.998,
          "priceCurrency": "GBP",
          "rate": 0.2
        }
      ]
    },
    {
      "@type": "OrderItem",
      "acceptedOffer": {
        "@type": "Offer",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445#/offers/0",
        "allowCustomerCancellationFullRefund": true,
        "price": 14.99,
        "priceCurrency": "GBP"
      },
      "orderedItem": {
        "@type": "Slot",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445",
        "facilityUse": {
          "@type": "FacilityUse",
          "@id": "https://localhost:5001/api/identifiers/facility-uses/2445",
          "name": "[OPEN BOOKING API TEST INTERFACE] Bookable Free Facility Five Spaces",
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
              "latitude": 0.1,
              "longitude": 0.1
            }
          },
          "url": "https://example.com/events/2445"
        },
        "maximumUses": 5,
        "remainingUses": 5,
        "startDate": "2022-07-23T10:45:25+00:00",
        "endDate": "2022-07-23T11:45:25+00:00"
      },
      "position": 2,
      "unitTaxSpecification": [
        {
          "@type": "TaxChargeSpecification",
          "name": "VAT at 20%",
          "price": 2.998,
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
    "price": 44.97,
    "priceCurrency": "GBP"
  },
  "totalPaymentTax": [
    {
      "@type": "TaxChargeSpecification",
      "name": "VAT at 20%",
      "price": 8.994,
      "priceCurrency": "GBP",
      "rate": 0.2
    }
  ]
}
```
### Specs
* ✅ should return 200 on success
* ✅ Should have the same number of OrderItems as criteria
* ✅ OrderItem at position 0 - should decrement remaining slots
* ✅ OrderItem at position 1 - should decrement remaining slots
* ✅ OrderItem at position 2 - should decrement remaining slots

## Lease 3 item(s) (success) >> Same C2 Again (test idempotency) >> C2 >> validation of C2
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
 * ⚠️ $.orderedItem[1].acceptedOffer.name: Recommended property `name` is missing from `Offer`.
 * ⚠️ $.orderedItem[1].acceptedOffer.ageRestriction: Recommended property `ageRestriction` is missing from `Offer`.
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
 * ⚠️ $.seller.email: Recommended property `email` is missing from `Organization`.
 * ⚠️ $.seller.url: Recommended property `url` is missing from `Organization`.
 * ⚠️ $.seller.logo: Recommended property `logo` is missing from `Organization`.
 * ⚠️ $.seller.vatID: Recommended property `vatID` is missing from `Organization`.
 * 📝 $.orderedItem[0].orderedItem.facilityUse.location.geo.latitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[0].orderedItem.facilityUse.location.geo.longitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[1].orderedItem.facilityUse.location.geo.latitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[1].orderedItem.facilityUse.location.geo.longitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[2].orderedItem.facilityUse.location.geo.latitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[2].orderedItem.facilityUse.location.geo.longitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.

## Lease 10 item(s) (fail) >> C1

### C1 Request
PUT https://localhost:5001/api/openbooking/order-quote-templates/656c7f29-fa8a-41dd-99ae-d18c44cde065

* **Content-Type:** `"application/vnd.openactive.booking+json; version=1"`
* **Authorization:** `"Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkIwNEY3QjkxREUzQjk0NzhDNjE4MzNGQjI0QUE1Q0RCIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2NTg0ODU2NTAsImV4cCI6MTY1ODQ4OTI1MCwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NTAwMyIsImF1ZCI6Im9wZW5ib29raW5nIiwiY2xpZW50X2lkIjoiNjJiNGY3MmUtZmJmOS00OTk0LTlkNDQtYmQ5NTMwOTllMTM0IiwiaHR0cHM6Ly9vcGVuYWN0aXZlLmlvL2NsaWVudElkIjoiNjJiNGY3MmUtZmJmOS00OTk0LTlkNDQtYmQ5NTMwOTllMTM0Iiwic3ViIjoiMTAwIiwiYXV0aF90aW1lIjoxNjU4NDg1NjQ5LCJpZHAiOiJsb2NhbCIsImh0dHBzOi8vb3BlbmFjdGl2ZS5pby9zZWxsZXJJZCI6Imh0dHBzOi8vbG9jYWxob3N0OjUwMDEvYXBpL2lkZW50aWZpZXJzL3NlbGxlcnMvMSIsImp0aSI6IkZFNjE5OTM5Q0M2MUVFRTFDQTFDRUIyNzczMTYyMjg5Iiwic2lkIjoiMEI1RjVGRDEzODJGNTY2REE2NzI2RUM1RjBENjRFQ0QiLCJpYXQiOjE2NTg0ODU2NTAsInNjb3BlIjpbIm9wZW5pZCIsIm9wZW5hY3RpdmUtb3BlbmJvb2tpbmciLCJvcGVuYWN0aXZlLWlkZW50aXR5Iiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbInB3ZCJdfQ.o-QctzkQMggVF6J8EIsjxJ43llGhs2jSEGiCfZxoPJjg0Coj1XkqaKd5Bltzc2D21dEBtbq-c5sKreCqebPhxuDlg_pDikudK9_wCosxWyOPIBS3OX6HFWM-J-Ofpxgkk5thfLTkLlDW8N6f3jtsTIRGm9dZvKsGypmwxnDdRhGKwxSDhnabWbPtFCABWC6DxK5mgb6V5SX3W3QxbI181T1tQioKui-N8j1FSgIpXrE3qy2ShkI-QbxwmMBCYhqcTbhLi41SUSx6gKgtl54lc_JEx-kSBlgsQmOrRKMDDrEecM9JQMNAliL2mJeIClUfC8k_SUKbJ8VvbNBbMjVSCw"`

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
      "acceptedOffer": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445#/offers/0",
      "orderedItem": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445"
    },
    {
      "@type": "OrderItem",
      "position": 1,
      "acceptedOffer": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445#/offers/0",
      "orderedItem": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445"
    },
    {
      "@type": "OrderItem",
      "position": 2,
      "acceptedOffer": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445#/offers/0",
      "orderedItem": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445"
    },
    {
      "@type": "OrderItem",
      "position": 3,
      "acceptedOffer": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445#/offers/0",
      "orderedItem": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445"
    },
    {
      "@type": "OrderItem",
      "position": 4,
      "acceptedOffer": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445#/offers/0",
      "orderedItem": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445"
    },
    {
      "@type": "OrderItem",
      "position": 5,
      "acceptedOffer": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445#/offers/0",
      "orderedItem": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445"
    },
    {
      "@type": "OrderItem",
      "position": 6,
      "acceptedOffer": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445#/offers/0",
      "orderedItem": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445"
    },
    {
      "@type": "OrderItem",
      "position": 7,
      "acceptedOffer": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445#/offers/0",
      "orderedItem": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445"
    },
    {
      "@type": "OrderItem",
      "position": 8,
      "acceptedOffer": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445#/offers/0",
      "orderedItem": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445"
    },
    {
      "@type": "OrderItem",
      "position": 9,
      "acceptedOffer": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445#/offers/0",
      "orderedItem": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445"
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
Response status code: 409 Conflict. Responded in 412.76428ms.
```json
{
  "@context": "https://openactive.io/",
  "@type": "OrderQuote",
  "@id": "https://localhost:5001/api/openbooking/order-quotes/656c7f29-fa8a-41dd-99ae-d18c44cde065",
  "lease": {
    "@type": "Lease",
    "leaseExpires": "2022-07-22T10:50:29+00:00"
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
        "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445#/offers/0",
        "allowCustomerCancellationFullRefund": true,
        "price": 14.99,
        "priceCurrency": "GBP"
      },
      "orderedItem": {
        "@type": "Slot",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445",
        "facilityUse": {
          "@type": "FacilityUse",
          "@id": "https://localhost:5001/api/identifiers/facility-uses/2445",
          "name": "[OPEN BOOKING API TEST INTERFACE] Bookable Free Facility Five Spaces",
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
              "latitude": 0.1,
              "longitude": 0.1
            }
          },
          "url": "https://example.com/events/2445"
        },
        "maximumUses": 5,
        "remainingUses": 2,
        "startDate": "2022-07-23T10:45:25+00:00",
        "endDate": "2022-07-23T11:45:25+00:00"
      },
      "position": 0,
      "unitTaxSpecification": [
        {
          "@type": "TaxChargeSpecification",
          "name": "VAT at 20%",
          "price": 2.998,
          "priceCurrency": "GBP",
          "rate": 0.2
        }
      ]
    },
    {
      "@type": "OrderItem",
      "acceptedOffer": {
        "@type": "Offer",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445#/offers/0",
        "allowCustomerCancellationFullRefund": true,
        "price": 14.99,
        "priceCurrency": "GBP"
      },
      "orderedItem": {
        "@type": "Slot",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445",
        "facilityUse": {
          "@type": "FacilityUse",
          "@id": "https://localhost:5001/api/identifiers/facility-uses/2445",
          "name": "[OPEN BOOKING API TEST INTERFACE] Bookable Free Facility Five Spaces",
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
              "latitude": 0.1,
              "longitude": 0.1
            }
          },
          "url": "https://example.com/events/2445"
        },
        "maximumUses": 5,
        "remainingUses": 2,
        "startDate": "2022-07-23T10:45:25+00:00",
        "endDate": "2022-07-23T11:45:25+00:00"
      },
      "position": 1,
      "unitTaxSpecification": [
        {
          "@type": "TaxChargeSpecification",
          "name": "VAT at 20%",
          "price": 2.998,
          "priceCurrency": "GBP",
          "rate": 0.2
        }
      ]
    },
    {
      "@type": "OrderItem",
      "acceptedOffer": {
        "@type": "Offer",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445#/offers/0",
        "allowCustomerCancellationFullRefund": true,
        "price": 14.99,
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
        "@type": "Slot",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445",
        "facilityUse": {
          "@type": "FacilityUse",
          "@id": "https://localhost:5001/api/identifiers/facility-uses/2445",
          "name": "[OPEN BOOKING API TEST INTERFACE] Bookable Free Facility Five Spaces",
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
              "latitude": 0.1,
              "longitude": 0.1
            }
          },
          "url": "https://example.com/events/2445"
        },
        "maximumUses": 5,
        "remainingUses": 2,
        "startDate": "2022-07-23T10:45:25+00:00",
        "endDate": "2022-07-23T11:45:25+00:00"
      },
      "position": 2,
      "unitTaxSpecification": [
        {
          "@type": "TaxChargeSpecification",
          "name": "VAT at 20%",
          "price": 2.998,
          "priceCurrency": "GBP",
          "rate": 0.2
        }
      ]
    },
    {
      "@type": "OrderItem",
      "acceptedOffer": {
        "@type": "Offer",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445#/offers/0",
        "allowCustomerCancellationFullRefund": true,
        "price": 14.99,
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
        "@type": "Slot",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445",
        "facilityUse": {
          "@type": "FacilityUse",
          "@id": "https://localhost:5001/api/identifiers/facility-uses/2445",
          "name": "[OPEN BOOKING API TEST INTERFACE] Bookable Free Facility Five Spaces",
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
              "latitude": 0.1,
              "longitude": 0.1
            }
          },
          "url": "https://example.com/events/2445"
        },
        "maximumUses": 5,
        "remainingUses": 2,
        "startDate": "2022-07-23T10:45:25+00:00",
        "endDate": "2022-07-23T11:45:25+00:00"
      },
      "position": 3,
      "unitTaxSpecification": [
        {
          "@type": "TaxChargeSpecification",
          "name": "VAT at 20%",
          "price": 2.998,
          "priceCurrency": "GBP",
          "rate": 0.2
        }
      ]
    },
    {
      "@type": "OrderItem",
      "acceptedOffer": {
        "@type": "Offer",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445#/offers/0",
        "allowCustomerCancellationFullRefund": true,
        "price": 14.99,
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
        "@type": "Slot",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445",
        "facilityUse": {
          "@type": "FacilityUse",
          "@id": "https://localhost:5001/api/identifiers/facility-uses/2445",
          "name": "[OPEN BOOKING API TEST INTERFACE] Bookable Free Facility Five Spaces",
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
              "latitude": 0.1,
              "longitude": 0.1
            }
          },
          "url": "https://example.com/events/2445"
        },
        "maximumUses": 5,
        "remainingUses": 2,
        "startDate": "2022-07-23T10:45:25+00:00",
        "endDate": "2022-07-23T11:45:25+00:00"
      },
      "position": 4,
      "unitTaxSpecification": [
        {
          "@type": "TaxChargeSpecification",
          "name": "VAT at 20%",
          "price": 2.998,
          "priceCurrency": "GBP",
          "rate": 0.2
        }
      ]
    },
    {
      "@type": "OrderItem",
      "acceptedOffer": {
        "@type": "Offer",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445#/offers/0",
        "allowCustomerCancellationFullRefund": true,
        "price": 14.99,
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
        "@type": "Slot",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445",
        "facilityUse": {
          "@type": "FacilityUse",
          "@id": "https://localhost:5001/api/identifiers/facility-uses/2445",
          "name": "[OPEN BOOKING API TEST INTERFACE] Bookable Free Facility Five Spaces",
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
              "latitude": 0.1,
              "longitude": 0.1
            }
          },
          "url": "https://example.com/events/2445"
        },
        "maximumUses": 5,
        "remainingUses": 2,
        "startDate": "2022-07-23T10:45:25+00:00",
        "endDate": "2022-07-23T11:45:25+00:00"
      },
      "position": 5,
      "unitTaxSpecification": [
        {
          "@type": "TaxChargeSpecification",
          "name": "VAT at 20%",
          "price": 2.998,
          "priceCurrency": "GBP",
          "rate": 0.2
        }
      ]
    },
    {
      "@type": "OrderItem",
      "acceptedOffer": {
        "@type": "Offer",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445#/offers/0",
        "allowCustomerCancellationFullRefund": true,
        "price": 14.99,
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
        "@type": "Slot",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445",
        "facilityUse": {
          "@type": "FacilityUse",
          "@id": "https://localhost:5001/api/identifiers/facility-uses/2445",
          "name": "[OPEN BOOKING API TEST INTERFACE] Bookable Free Facility Five Spaces",
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
              "latitude": 0.1,
              "longitude": 0.1
            }
          },
          "url": "https://example.com/events/2445"
        },
        "maximumUses": 5,
        "remainingUses": 2,
        "startDate": "2022-07-23T10:45:25+00:00",
        "endDate": "2022-07-23T11:45:25+00:00"
      },
      "position": 6,
      "unitTaxSpecification": [
        {
          "@type": "TaxChargeSpecification",
          "name": "VAT at 20%",
          "price": 2.998,
          "priceCurrency": "GBP",
          "rate": 0.2
        }
      ]
    },
    {
      "@type": "OrderItem",
      "acceptedOffer": {
        "@type": "Offer",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445#/offers/0",
        "allowCustomerCancellationFullRefund": true,
        "price": 14.99,
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
        "@type": "Slot",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445",
        "facilityUse": {
          "@type": "FacilityUse",
          "@id": "https://localhost:5001/api/identifiers/facility-uses/2445",
          "name": "[OPEN BOOKING API TEST INTERFACE] Bookable Free Facility Five Spaces",
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
              "latitude": 0.1,
              "longitude": 0.1
            }
          },
          "url": "https://example.com/events/2445"
        },
        "maximumUses": 5,
        "remainingUses": 2,
        "startDate": "2022-07-23T10:45:25+00:00",
        "endDate": "2022-07-23T11:45:25+00:00"
      },
      "position": 7,
      "unitTaxSpecification": [
        {
          "@type": "TaxChargeSpecification",
          "name": "VAT at 20%",
          "price": 2.998,
          "priceCurrency": "GBP",
          "rate": 0.2
        }
      ]
    },
    {
      "@type": "OrderItem",
      "acceptedOffer": {
        "@type": "Offer",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445#/offers/0",
        "allowCustomerCancellationFullRefund": true,
        "price": 14.99,
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
        "@type": "Slot",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445",
        "facilityUse": {
          "@type": "FacilityUse",
          "@id": "https://localhost:5001/api/identifiers/facility-uses/2445",
          "name": "[OPEN BOOKING API TEST INTERFACE] Bookable Free Facility Five Spaces",
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
              "latitude": 0.1,
              "longitude": 0.1
            }
          },
          "url": "https://example.com/events/2445"
        },
        "maximumUses": 5,
        "remainingUses": 2,
        "startDate": "2022-07-23T10:45:25+00:00",
        "endDate": "2022-07-23T11:45:25+00:00"
      },
      "position": 8,
      "unitTaxSpecification": [
        {
          "@type": "TaxChargeSpecification",
          "name": "VAT at 20%",
          "price": 2.998,
          "priceCurrency": "GBP",
          "rate": 0.2
        }
      ]
    },
    {
      "@type": "OrderItem",
      "acceptedOffer": {
        "@type": "Offer",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445#/offers/0",
        "allowCustomerCancellationFullRefund": true,
        "price": 14.99,
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
        "@type": "Slot",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445",
        "facilityUse": {
          "@type": "FacilityUse",
          "@id": "https://localhost:5001/api/identifiers/facility-uses/2445",
          "name": "[OPEN BOOKING API TEST INTERFACE] Bookable Free Facility Five Spaces",
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
              "latitude": 0.1,
              "longitude": 0.1
            }
          },
          "url": "https://example.com/events/2445"
        },
        "maximumUses": 5,
        "remainingUses": 2,
        "startDate": "2022-07-23T10:45:25+00:00",
        "endDate": "2022-07-23T11:45:25+00:00"
      },
      "position": 9,
      "unitTaxSpecification": [
        {
          "@type": "TaxChargeSpecification",
          "name": "VAT at 20%",
          "price": 2.998,
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
    "price": 29.98,
    "priceCurrency": "GBP"
  },
  "totalPaymentTax": [
    {
      "@type": "TaxChargeSpecification",
      "name": "VAT at 20%",
      "price": 5.996,
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
 * ⚠️ $.orderedItem[1].acceptedOffer.name: Recommended property `name` is missing from `Offer`.
 * ⚠️ $.orderedItem[1].acceptedOffer.ageRestriction: Recommended property `ageRestriction` is missing from `Offer`.
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
 * ⚠️ $.orderedItem[2].acceptedOffer.name: Recommended property `name` is missing from `Offer`.
 * ⚠️ $.orderedItem[2].acceptedOffer.ageRestriction: Recommended property `ageRestriction` is missing from `Offer`.
 * ⚠️ $.orderedItem[2].error[0].description: Recommended property `description` is missing from `OpportunityCapacityIsReservedByLeaseError`.
 * ⚠️ $.orderedItem[2].error[0].instance: Recommended property `instance` is missing from `OpportunityCapacityIsReservedByLeaseError`.
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
 * ⚠️ $.orderedItem[3].error[0].description: Recommended property `description` is missing from `OpportunityCapacityIsReservedByLeaseError`.
 * ⚠️ $.orderedItem[3].error[0].instance: Recommended property `instance` is missing from `OpportunityCapacityIsReservedByLeaseError`.
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
 * ⚠️ $.orderedItem[4].error[0].description: Recommended property `description` is missing from `OpportunityCapacityIsReservedByLeaseError`.
 * ⚠️ $.orderedItem[4].error[0].instance: Recommended property `instance` is missing from `OpportunityCapacityIsReservedByLeaseError`.
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
 * ⚠️ $.orderedItem[5].error[0].description: Recommended property `description` is missing from `OpportunityHasInsufficientCapacityError`.
 * ⚠️ $.orderedItem[5].error[0].instance: Recommended property `instance` is missing from `OpportunityHasInsufficientCapacityError`.
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
 * ⚠️ $.orderedItem[6].acceptedOffer.name: Recommended property `name` is missing from `Offer`.
 * ⚠️ $.orderedItem[6].acceptedOffer.ageRestriction: Recommended property `ageRestriction` is missing from `Offer`.
 * ⚠️ $.orderedItem[6].error[0].description: Recommended property `description` is missing from `OpportunityHasInsufficientCapacityError`.
 * ⚠️ $.orderedItem[6].error[0].instance: Recommended property `instance` is missing from `OpportunityHasInsufficientCapacityError`.
 * ⚠️ $.orderedItem[6].orderedItem.duration: Recommended property `duration` is missing from `Slot`.
 * ⚠️ $.orderedItem[6].orderedItem.facilityUse.description: Recommended property `description` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[6].orderedItem.facilityUse.image: Recommended property `image` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[6].orderedItem.facilityUse.hoursAvailable: Recommended property `hoursAvailable` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[6].orderedItem.facilityUse.offers: Recommended property `offers` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[6].orderedItem.facilityUse.location.id: Recommended property `@id` is missing from `Place`.
 * ⚠️ $.orderedItem[6].orderedItem.facilityUse.location.url: Recommended property `url` is missing from `Place`.
 * ⚠️ $.orderedItem[6].orderedItem.facilityUse.location.description: Recommended property `description` is missing from `Place`.
 * ⚠️ $.orderedItem[6].orderedItem.facilityUse.location.image: Recommended property `image` is missing from `Place`.
 * ⚠️ $.orderedItem[6].orderedItem.facilityUse.location.telephone: Recommended property `telephone` is missing from `Place`.
 * ⚠️ $.orderedItem[6].orderedItem.facilityUse.location.openingHoursSpecification: Recommended property `openingHoursSpecification` is missing from `Place`.
 * ⚠️ $.orderedItem[6].orderedItem.facilityUse.location.amenityFeature: Recommended property `amenityFeature` is missing from `Place`.
 * ⚠️ $.orderedItem[7].acceptedOffer.name: Recommended property `name` is missing from `Offer`.
 * ⚠️ $.orderedItem[7].acceptedOffer.ageRestriction: Recommended property `ageRestriction` is missing from `Offer`.
 * ⚠️ $.orderedItem[7].error[0].description: Recommended property `description` is missing from `OpportunityHasInsufficientCapacityError`.
 * ⚠️ $.orderedItem[7].error[0].instance: Recommended property `instance` is missing from `OpportunityHasInsufficientCapacityError`.
 * ⚠️ $.orderedItem[7].orderedItem.duration: Recommended property `duration` is missing from `Slot`.
 * ⚠️ $.orderedItem[7].orderedItem.facilityUse.description: Recommended property `description` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[7].orderedItem.facilityUse.image: Recommended property `image` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[7].orderedItem.facilityUse.hoursAvailable: Recommended property `hoursAvailable` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[7].orderedItem.facilityUse.offers: Recommended property `offers` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[7].orderedItem.facilityUse.location.id: Recommended property `@id` is missing from `Place`.
 * ⚠️ $.orderedItem[7].orderedItem.facilityUse.location.url: Recommended property `url` is missing from `Place`.
 * ⚠️ $.orderedItem[7].orderedItem.facilityUse.location.description: Recommended property `description` is missing from `Place`.
 * ⚠️ $.orderedItem[7].orderedItem.facilityUse.location.image: Recommended property `image` is missing from `Place`.
 * ⚠️ $.orderedItem[7].orderedItem.facilityUse.location.telephone: Recommended property `telephone` is missing from `Place`.
 * ⚠️ $.orderedItem[7].orderedItem.facilityUse.location.openingHoursSpecification: Recommended property `openingHoursSpecification` is missing from `Place`.
 * ⚠️ $.orderedItem[7].orderedItem.facilityUse.location.amenityFeature: Recommended property `amenityFeature` is missing from `Place`.
 * ⚠️ $.orderedItem[8].acceptedOffer.name: Recommended property `name` is missing from `Offer`.
 * ⚠️ $.orderedItem[8].acceptedOffer.ageRestriction: Recommended property `ageRestriction` is missing from `Offer`.
 * ⚠️ $.orderedItem[8].error[0].description: Recommended property `description` is missing from `OpportunityHasInsufficientCapacityError`.
 * ⚠️ $.orderedItem[8].error[0].instance: Recommended property `instance` is missing from `OpportunityHasInsufficientCapacityError`.
 * ⚠️ $.orderedItem[8].orderedItem.duration: Recommended property `duration` is missing from `Slot`.
 * ⚠️ $.orderedItem[8].orderedItem.facilityUse.description: Recommended property `description` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[8].orderedItem.facilityUse.image: Recommended property `image` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[8].orderedItem.facilityUse.hoursAvailable: Recommended property `hoursAvailable` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[8].orderedItem.facilityUse.offers: Recommended property `offers` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[8].orderedItem.facilityUse.location.id: Recommended property `@id` is missing from `Place`.
 * ⚠️ $.orderedItem[8].orderedItem.facilityUse.location.url: Recommended property `url` is missing from `Place`.
 * ⚠️ $.orderedItem[8].orderedItem.facilityUse.location.description: Recommended property `description` is missing from `Place`.
 * ⚠️ $.orderedItem[8].orderedItem.facilityUse.location.image: Recommended property `image` is missing from `Place`.
 * ⚠️ $.orderedItem[8].orderedItem.facilityUse.location.telephone: Recommended property `telephone` is missing from `Place`.
 * ⚠️ $.orderedItem[8].orderedItem.facilityUse.location.openingHoursSpecification: Recommended property `openingHoursSpecification` is missing from `Place`.
 * ⚠️ $.orderedItem[8].orderedItem.facilityUse.location.amenityFeature: Recommended property `amenityFeature` is missing from `Place`.
 * ⚠️ $.orderedItem[9].acceptedOffer.name: Recommended property `name` is missing from `Offer`.
 * ⚠️ $.orderedItem[9].acceptedOffer.ageRestriction: Recommended property `ageRestriction` is missing from `Offer`.
 * ⚠️ $.orderedItem[9].error[0].description: Recommended property `description` is missing from `OpportunityHasInsufficientCapacityError`.
 * ⚠️ $.orderedItem[9].error[0].instance: Recommended property `instance` is missing from `OpportunityHasInsufficientCapacityError`.
 * ⚠️ $.orderedItem[9].orderedItem.duration: Recommended property `duration` is missing from `Slot`.
 * ⚠️ $.orderedItem[9].orderedItem.facilityUse.description: Recommended property `description` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[9].orderedItem.facilityUse.image: Recommended property `image` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[9].orderedItem.facilityUse.hoursAvailable: Recommended property `hoursAvailable` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[9].orderedItem.facilityUse.offers: Recommended property `offers` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[9].orderedItem.facilityUse.location.id: Recommended property `@id` is missing from `Place`.
 * ⚠️ $.orderedItem[9].orderedItem.facilityUse.location.url: Recommended property `url` is missing from `Place`.
 * ⚠️ $.orderedItem[9].orderedItem.facilityUse.location.description: Recommended property `description` is missing from `Place`.
 * ⚠️ $.orderedItem[9].orderedItem.facilityUse.location.image: Recommended property `image` is missing from `Place`.
 * ⚠️ $.orderedItem[9].orderedItem.facilityUse.location.telephone: Recommended property `telephone` is missing from `Place`.
 * ⚠️ $.orderedItem[9].orderedItem.facilityUse.location.openingHoursSpecification: Recommended property `openingHoursSpecification` is missing from `Place`.
 * ⚠️ $.orderedItem[9].orderedItem.facilityUse.location.amenityFeature: Recommended property `amenityFeature` is missing from `Place`.
 * ⚠️ $.seller.email: Recommended property `email` is missing from `Organization`.
 * ⚠️ $.seller.url: Recommended property `url` is missing from `Organization`.
 * ⚠️ $.seller.logo: Recommended property `logo` is missing from `Organization`.
 * ⚠️ $.seller.vatID: Recommended property `vatID` is missing from `Organization`.
 * 📝 $.orderedItem[0].orderedItem.facilityUse.location.geo.latitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[0].orderedItem.facilityUse.location.geo.longitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[1].orderedItem.facilityUse.location.geo.latitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[1].orderedItem.facilityUse.location.geo.longitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[2].orderedItem.facilityUse.location.geo.latitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[2].orderedItem.facilityUse.location.geo.longitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[3].orderedItem.facilityUse.location.geo.latitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[3].orderedItem.facilityUse.location.geo.longitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[4].orderedItem.facilityUse.location.geo.latitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[4].orderedItem.facilityUse.location.geo.longitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[5].orderedItem.facilityUse.location.geo.latitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[5].orderedItem.facilityUse.location.geo.longitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[6].orderedItem.facilityUse.location.geo.latitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[6].orderedItem.facilityUse.location.geo.longitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[7].orderedItem.facilityUse.location.geo.latitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[7].orderedItem.facilityUse.location.geo.longitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[8].orderedItem.facilityUse.location.geo.latitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[8].orderedItem.facilityUse.location.geo.longitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[9].orderedItem.facilityUse.location.geo.latitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[9].orderedItem.facilityUse.location.geo.longitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.

## Lease 10 item(s) (fail) >> C2

### C2 Request
PUT https://localhost:5001/api/openbooking/order-quotes/656c7f29-fa8a-41dd-99ae-d18c44cde065

* **Content-Type:** `"application/vnd.openactive.booking+json; version=1"`
* **Authorization:** `"Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkIwNEY3QjkxREUzQjk0NzhDNjE4MzNGQjI0QUE1Q0RCIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2NTg0ODU2NTAsImV4cCI6MTY1ODQ4OTI1MCwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NTAwMyIsImF1ZCI6Im9wZW5ib29raW5nIiwiY2xpZW50X2lkIjoiNjJiNGY3MmUtZmJmOS00OTk0LTlkNDQtYmQ5NTMwOTllMTM0IiwiaHR0cHM6Ly9vcGVuYWN0aXZlLmlvL2NsaWVudElkIjoiNjJiNGY3MmUtZmJmOS00OTk0LTlkNDQtYmQ5NTMwOTllMTM0Iiwic3ViIjoiMTAwIiwiYXV0aF90aW1lIjoxNjU4NDg1NjQ5LCJpZHAiOiJsb2NhbCIsImh0dHBzOi8vb3BlbmFjdGl2ZS5pby9zZWxsZXJJZCI6Imh0dHBzOi8vbG9jYWxob3N0OjUwMDEvYXBpL2lkZW50aWZpZXJzL3NlbGxlcnMvMSIsImp0aSI6IkZFNjE5OTM5Q0M2MUVFRTFDQTFDRUIyNzczMTYyMjg5Iiwic2lkIjoiMEI1RjVGRDEzODJGNTY2REE2NzI2RUM1RjBENjRFQ0QiLCJpYXQiOjE2NTg0ODU2NTAsInNjb3BlIjpbIm9wZW5pZCIsIm9wZW5hY3RpdmUtb3BlbmJvb2tpbmciLCJvcGVuYWN0aXZlLWlkZW50aXR5Iiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbInB3ZCJdfQ.o-QctzkQMggVF6J8EIsjxJ43llGhs2jSEGiCfZxoPJjg0Coj1XkqaKd5Bltzc2D21dEBtbq-c5sKreCqebPhxuDlg_pDikudK9_wCosxWyOPIBS3OX6HFWM-J-Ofpxgkk5thfLTkLlDW8N6f3jtsTIRGm9dZvKsGypmwxnDdRhGKwxSDhnabWbPtFCABWC6DxK5mgb6V5SX3W3QxbI181T1tQioKui-N8j1FSgIpXrE3qy2ShkI-QbxwmMBCYhqcTbhLi41SUSx6gKgtl54lc_JEx-kSBlgsQmOrRKMDDrEecM9JQMNAliL2mJeIClUfC8k_SUKbJ8VvbNBbMjVSCw"`

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
    "email": "Danika88@gmail.com",
    "telephone": "322-920-6435",
    "givenName": "Davis",
    "familyName": "Jennyfer",
    "identifier": "e3f4160a-6898-47e4-9fec-8094e33d5e81"
  },
  "orderedItem": [
    {
      "@type": "OrderItem",
      "position": 0,
      "acceptedOffer": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445#/offers/0",
      "orderedItem": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445"
    },
    {
      "@type": "OrderItem",
      "position": 1,
      "acceptedOffer": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445#/offers/0",
      "orderedItem": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445"
    },
    {
      "@type": "OrderItem",
      "position": 2,
      "acceptedOffer": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445#/offers/0",
      "orderedItem": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445"
    },
    {
      "@type": "OrderItem",
      "position": 3,
      "acceptedOffer": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445#/offers/0",
      "orderedItem": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445"
    },
    {
      "@type": "OrderItem",
      "position": 4,
      "acceptedOffer": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445#/offers/0",
      "orderedItem": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445"
    },
    {
      "@type": "OrderItem",
      "position": 5,
      "acceptedOffer": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445#/offers/0",
      "orderedItem": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445"
    },
    {
      "@type": "OrderItem",
      "position": 6,
      "acceptedOffer": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445#/offers/0",
      "orderedItem": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445"
    },
    {
      "@type": "OrderItem",
      "position": 7,
      "acceptedOffer": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445#/offers/0",
      "orderedItem": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445"
    },
    {
      "@type": "OrderItem",
      "position": 8,
      "acceptedOffer": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445#/offers/0",
      "orderedItem": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445"
    },
    {
      "@type": "OrderItem",
      "position": 9,
      "acceptedOffer": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445#/offers/0",
      "orderedItem": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445"
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
Response status code: 409 Conflict. Responded in 629.927516ms.
```json
{
  "@context": "https://openactive.io/",
  "@type": "OrderQuote",
  "@id": "https://localhost:5001/api/openbooking/order-quotes/656c7f29-fa8a-41dd-99ae-d18c44cde065",
  "lease": {
    "@type": "Lease",
    "leaseExpires": "2022-07-22T10:50:30+00:00"
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
    "identifier": "e3f4160a-6898-47e4-9fec-8094e33d5e81",
    "email": "Danika88@gmail.com",
    "familyName": "Jennyfer",
    "givenName": "Davis",
    "telephone": "322-920-6435"
  },
  "orderedItem": [
    {
      "@type": "OrderItem",
      "acceptedOffer": {
        "@type": "Offer",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445#/offers/0",
        "allowCustomerCancellationFullRefund": true,
        "price": 14.99,
        "priceCurrency": "GBP"
      },
      "orderedItem": {
        "@type": "Slot",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445",
        "facilityUse": {
          "@type": "FacilityUse",
          "@id": "https://localhost:5001/api/identifiers/facility-uses/2445",
          "name": "[OPEN BOOKING API TEST INTERFACE] Bookable Free Facility Five Spaces",
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
              "latitude": 0.1,
              "longitude": 0.1
            }
          },
          "url": "https://example.com/events/2445"
        },
        "maximumUses": 5,
        "remainingUses": 2,
        "startDate": "2022-07-23T10:45:25+00:00",
        "endDate": "2022-07-23T11:45:25+00:00"
      },
      "position": 0,
      "unitTaxSpecification": [
        {
          "@type": "TaxChargeSpecification",
          "name": "VAT at 20%",
          "price": 2.998,
          "priceCurrency": "GBP",
          "rate": 0.2
        }
      ]
    },
    {
      "@type": "OrderItem",
      "acceptedOffer": {
        "@type": "Offer",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445#/offers/0",
        "allowCustomerCancellationFullRefund": true,
        "price": 14.99,
        "priceCurrency": "GBP"
      },
      "orderedItem": {
        "@type": "Slot",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445",
        "facilityUse": {
          "@type": "FacilityUse",
          "@id": "https://localhost:5001/api/identifiers/facility-uses/2445",
          "name": "[OPEN BOOKING API TEST INTERFACE] Bookable Free Facility Five Spaces",
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
              "latitude": 0.1,
              "longitude": 0.1
            }
          },
          "url": "https://example.com/events/2445"
        },
        "maximumUses": 5,
        "remainingUses": 2,
        "startDate": "2022-07-23T10:45:25+00:00",
        "endDate": "2022-07-23T11:45:25+00:00"
      },
      "position": 1,
      "unitTaxSpecification": [
        {
          "@type": "TaxChargeSpecification",
          "name": "VAT at 20%",
          "price": 2.998,
          "priceCurrency": "GBP",
          "rate": 0.2
        }
      ]
    },
    {
      "@type": "OrderItem",
      "acceptedOffer": {
        "@type": "Offer",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445#/offers/0",
        "allowCustomerCancellationFullRefund": true,
        "price": 14.99,
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
        "@type": "Slot",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445",
        "facilityUse": {
          "@type": "FacilityUse",
          "@id": "https://localhost:5001/api/identifiers/facility-uses/2445",
          "name": "[OPEN BOOKING API TEST INTERFACE] Bookable Free Facility Five Spaces",
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
              "latitude": 0.1,
              "longitude": 0.1
            }
          },
          "url": "https://example.com/events/2445"
        },
        "maximumUses": 5,
        "remainingUses": 2,
        "startDate": "2022-07-23T10:45:25+00:00",
        "endDate": "2022-07-23T11:45:25+00:00"
      },
      "position": 2,
      "unitTaxSpecification": [
        {
          "@type": "TaxChargeSpecification",
          "name": "VAT at 20%",
          "price": 2.998,
          "priceCurrency": "GBP",
          "rate": 0.2
        }
      ]
    },
    {
      "@type": "OrderItem",
      "acceptedOffer": {
        "@type": "Offer",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445#/offers/0",
        "allowCustomerCancellationFullRefund": true,
        "price": 14.99,
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
        "@type": "Slot",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445",
        "facilityUse": {
          "@type": "FacilityUse",
          "@id": "https://localhost:5001/api/identifiers/facility-uses/2445",
          "name": "[OPEN BOOKING API TEST INTERFACE] Bookable Free Facility Five Spaces",
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
              "latitude": 0.1,
              "longitude": 0.1
            }
          },
          "url": "https://example.com/events/2445"
        },
        "maximumUses": 5,
        "remainingUses": 2,
        "startDate": "2022-07-23T10:45:25+00:00",
        "endDate": "2022-07-23T11:45:25+00:00"
      },
      "position": 3,
      "unitTaxSpecification": [
        {
          "@type": "TaxChargeSpecification",
          "name": "VAT at 20%",
          "price": 2.998,
          "priceCurrency": "GBP",
          "rate": 0.2
        }
      ]
    },
    {
      "@type": "OrderItem",
      "acceptedOffer": {
        "@type": "Offer",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445#/offers/0",
        "allowCustomerCancellationFullRefund": true,
        "price": 14.99,
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
        "@type": "Slot",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445",
        "facilityUse": {
          "@type": "FacilityUse",
          "@id": "https://localhost:5001/api/identifiers/facility-uses/2445",
          "name": "[OPEN BOOKING API TEST INTERFACE] Bookable Free Facility Five Spaces",
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
              "latitude": 0.1,
              "longitude": 0.1
            }
          },
          "url": "https://example.com/events/2445"
        },
        "maximumUses": 5,
        "remainingUses": 2,
        "startDate": "2022-07-23T10:45:25+00:00",
        "endDate": "2022-07-23T11:45:25+00:00"
      },
      "position": 4,
      "unitTaxSpecification": [
        {
          "@type": "TaxChargeSpecification",
          "name": "VAT at 20%",
          "price": 2.998,
          "priceCurrency": "GBP",
          "rate": 0.2
        }
      ]
    },
    {
      "@type": "OrderItem",
      "acceptedOffer": {
        "@type": "Offer",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445#/offers/0",
        "allowCustomerCancellationFullRefund": true,
        "price": 14.99,
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
        "@type": "Slot",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445",
        "facilityUse": {
          "@type": "FacilityUse",
          "@id": "https://localhost:5001/api/identifiers/facility-uses/2445",
          "name": "[OPEN BOOKING API TEST INTERFACE] Bookable Free Facility Five Spaces",
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
              "latitude": 0.1,
              "longitude": 0.1
            }
          },
          "url": "https://example.com/events/2445"
        },
        "maximumUses": 5,
        "remainingUses": 2,
        "startDate": "2022-07-23T10:45:25+00:00",
        "endDate": "2022-07-23T11:45:25+00:00"
      },
      "position": 5,
      "unitTaxSpecification": [
        {
          "@type": "TaxChargeSpecification",
          "name": "VAT at 20%",
          "price": 2.998,
          "priceCurrency": "GBP",
          "rate": 0.2
        }
      ]
    },
    {
      "@type": "OrderItem",
      "acceptedOffer": {
        "@type": "Offer",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445#/offers/0",
        "allowCustomerCancellationFullRefund": true,
        "price": 14.99,
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
        "@type": "Slot",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445",
        "facilityUse": {
          "@type": "FacilityUse",
          "@id": "https://localhost:5001/api/identifiers/facility-uses/2445",
          "name": "[OPEN BOOKING API TEST INTERFACE] Bookable Free Facility Five Spaces",
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
              "latitude": 0.1,
              "longitude": 0.1
            }
          },
          "url": "https://example.com/events/2445"
        },
        "maximumUses": 5,
        "remainingUses": 2,
        "startDate": "2022-07-23T10:45:25+00:00",
        "endDate": "2022-07-23T11:45:25+00:00"
      },
      "position": 6,
      "unitTaxSpecification": [
        {
          "@type": "TaxChargeSpecification",
          "name": "VAT at 20%",
          "price": 2.998,
          "priceCurrency": "GBP",
          "rate": 0.2
        }
      ]
    },
    {
      "@type": "OrderItem",
      "acceptedOffer": {
        "@type": "Offer",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445#/offers/0",
        "allowCustomerCancellationFullRefund": true,
        "price": 14.99,
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
        "@type": "Slot",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445",
        "facilityUse": {
          "@type": "FacilityUse",
          "@id": "https://localhost:5001/api/identifiers/facility-uses/2445",
          "name": "[OPEN BOOKING API TEST INTERFACE] Bookable Free Facility Five Spaces",
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
              "latitude": 0.1,
              "longitude": 0.1
            }
          },
          "url": "https://example.com/events/2445"
        },
        "maximumUses": 5,
        "remainingUses": 2,
        "startDate": "2022-07-23T10:45:25+00:00",
        "endDate": "2022-07-23T11:45:25+00:00"
      },
      "position": 7,
      "unitTaxSpecification": [
        {
          "@type": "TaxChargeSpecification",
          "name": "VAT at 20%",
          "price": 2.998,
          "priceCurrency": "GBP",
          "rate": 0.2
        }
      ]
    },
    {
      "@type": "OrderItem",
      "acceptedOffer": {
        "@type": "Offer",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445#/offers/0",
        "allowCustomerCancellationFullRefund": true,
        "price": 14.99,
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
        "@type": "Slot",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445",
        "facilityUse": {
          "@type": "FacilityUse",
          "@id": "https://localhost:5001/api/identifiers/facility-uses/2445",
          "name": "[OPEN BOOKING API TEST INTERFACE] Bookable Free Facility Five Spaces",
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
              "latitude": 0.1,
              "longitude": 0.1
            }
          },
          "url": "https://example.com/events/2445"
        },
        "maximumUses": 5,
        "remainingUses": 2,
        "startDate": "2022-07-23T10:45:25+00:00",
        "endDate": "2022-07-23T11:45:25+00:00"
      },
      "position": 8,
      "unitTaxSpecification": [
        {
          "@type": "TaxChargeSpecification",
          "name": "VAT at 20%",
          "price": 2.998,
          "priceCurrency": "GBP",
          "rate": 0.2
        }
      ]
    },
    {
      "@type": "OrderItem",
      "acceptedOffer": {
        "@type": "Offer",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445#/offers/0",
        "allowCustomerCancellationFullRefund": true,
        "price": 14.99,
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
        "@type": "Slot",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445",
        "facilityUse": {
          "@type": "FacilityUse",
          "@id": "https://localhost:5001/api/identifiers/facility-uses/2445",
          "name": "[OPEN BOOKING API TEST INTERFACE] Bookable Free Facility Five Spaces",
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
              "latitude": 0.1,
              "longitude": 0.1
            }
          },
          "url": "https://example.com/events/2445"
        },
        "maximumUses": 5,
        "remainingUses": 2,
        "startDate": "2022-07-23T10:45:25+00:00",
        "endDate": "2022-07-23T11:45:25+00:00"
      },
      "position": 9,
      "unitTaxSpecification": [
        {
          "@type": "TaxChargeSpecification",
          "name": "VAT at 20%",
          "price": 2.998,
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
    "price": 29.98,
    "priceCurrency": "GBP"
  },
  "totalPaymentTax": [
    {
      "@type": "TaxChargeSpecification",
      "name": "VAT at 20%",
      "price": 5.996,
      "priceCurrency": "GBP",
      "rate": 0.2
    }
  ]
}
```

## Lease 10 item(s) (fail) >> C2 >> validation of C2
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
 * ⚠️ $.orderedItem[1].acceptedOffer.name: Recommended property `name` is missing from `Offer`.
 * ⚠️ $.orderedItem[1].acceptedOffer.ageRestriction: Recommended property `ageRestriction` is missing from `Offer`.
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
 * ⚠️ $.orderedItem[2].acceptedOffer.name: Recommended property `name` is missing from `Offer`.
 * ⚠️ $.orderedItem[2].acceptedOffer.ageRestriction: Recommended property `ageRestriction` is missing from `Offer`.
 * ⚠️ $.orderedItem[2].error[0].description: Recommended property `description` is missing from `OpportunityCapacityIsReservedByLeaseError`.
 * ⚠️ $.orderedItem[2].error[0].instance: Recommended property `instance` is missing from `OpportunityCapacityIsReservedByLeaseError`.
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
 * ⚠️ $.orderedItem[3].error[0].description: Recommended property `description` is missing from `OpportunityCapacityIsReservedByLeaseError`.
 * ⚠️ $.orderedItem[3].error[0].instance: Recommended property `instance` is missing from `OpportunityCapacityIsReservedByLeaseError`.
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
 * ⚠️ $.orderedItem[4].error[0].description: Recommended property `description` is missing from `OpportunityCapacityIsReservedByLeaseError`.
 * ⚠️ $.orderedItem[4].error[0].instance: Recommended property `instance` is missing from `OpportunityCapacityIsReservedByLeaseError`.
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
 * ⚠️ $.orderedItem[5].error[0].description: Recommended property `description` is missing from `OpportunityHasInsufficientCapacityError`.
 * ⚠️ $.orderedItem[5].error[0].instance: Recommended property `instance` is missing from `OpportunityHasInsufficientCapacityError`.
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
 * ⚠️ $.orderedItem[6].acceptedOffer.name: Recommended property `name` is missing from `Offer`.
 * ⚠️ $.orderedItem[6].acceptedOffer.ageRestriction: Recommended property `ageRestriction` is missing from `Offer`.
 * ⚠️ $.orderedItem[6].error[0].description: Recommended property `description` is missing from `OpportunityHasInsufficientCapacityError`.
 * ⚠️ $.orderedItem[6].error[0].instance: Recommended property `instance` is missing from `OpportunityHasInsufficientCapacityError`.
 * ⚠️ $.orderedItem[6].orderedItem.duration: Recommended property `duration` is missing from `Slot`.
 * ⚠️ $.orderedItem[6].orderedItem.facilityUse.description: Recommended property `description` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[6].orderedItem.facilityUse.image: Recommended property `image` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[6].orderedItem.facilityUse.hoursAvailable: Recommended property `hoursAvailable` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[6].orderedItem.facilityUse.offers: Recommended property `offers` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[6].orderedItem.facilityUse.location.id: Recommended property `@id` is missing from `Place`.
 * ⚠️ $.orderedItem[6].orderedItem.facilityUse.location.url: Recommended property `url` is missing from `Place`.
 * ⚠️ $.orderedItem[6].orderedItem.facilityUse.location.description: Recommended property `description` is missing from `Place`.
 * ⚠️ $.orderedItem[6].orderedItem.facilityUse.location.image: Recommended property `image` is missing from `Place`.
 * ⚠️ $.orderedItem[6].orderedItem.facilityUse.location.telephone: Recommended property `telephone` is missing from `Place`.
 * ⚠️ $.orderedItem[6].orderedItem.facilityUse.location.openingHoursSpecification: Recommended property `openingHoursSpecification` is missing from `Place`.
 * ⚠️ $.orderedItem[6].orderedItem.facilityUse.location.amenityFeature: Recommended property `amenityFeature` is missing from `Place`.
 * ⚠️ $.orderedItem[7].acceptedOffer.name: Recommended property `name` is missing from `Offer`.
 * ⚠️ $.orderedItem[7].acceptedOffer.ageRestriction: Recommended property `ageRestriction` is missing from `Offer`.
 * ⚠️ $.orderedItem[7].error[0].description: Recommended property `description` is missing from `OpportunityHasInsufficientCapacityError`.
 * ⚠️ $.orderedItem[7].error[0].instance: Recommended property `instance` is missing from `OpportunityHasInsufficientCapacityError`.
 * ⚠️ $.orderedItem[7].orderedItem.duration: Recommended property `duration` is missing from `Slot`.
 * ⚠️ $.orderedItem[7].orderedItem.facilityUse.description: Recommended property `description` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[7].orderedItem.facilityUse.image: Recommended property `image` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[7].orderedItem.facilityUse.hoursAvailable: Recommended property `hoursAvailable` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[7].orderedItem.facilityUse.offers: Recommended property `offers` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[7].orderedItem.facilityUse.location.id: Recommended property `@id` is missing from `Place`.
 * ⚠️ $.orderedItem[7].orderedItem.facilityUse.location.url: Recommended property `url` is missing from `Place`.
 * ⚠️ $.orderedItem[7].orderedItem.facilityUse.location.description: Recommended property `description` is missing from `Place`.
 * ⚠️ $.orderedItem[7].orderedItem.facilityUse.location.image: Recommended property `image` is missing from `Place`.
 * ⚠️ $.orderedItem[7].orderedItem.facilityUse.location.telephone: Recommended property `telephone` is missing from `Place`.
 * ⚠️ $.orderedItem[7].orderedItem.facilityUse.location.openingHoursSpecification: Recommended property `openingHoursSpecification` is missing from `Place`.
 * ⚠️ $.orderedItem[7].orderedItem.facilityUse.location.amenityFeature: Recommended property `amenityFeature` is missing from `Place`.
 * ⚠️ $.orderedItem[8].acceptedOffer.name: Recommended property `name` is missing from `Offer`.
 * ⚠️ $.orderedItem[8].acceptedOffer.ageRestriction: Recommended property `ageRestriction` is missing from `Offer`.
 * ⚠️ $.orderedItem[8].error[0].description: Recommended property `description` is missing from `OpportunityHasInsufficientCapacityError`.
 * ⚠️ $.orderedItem[8].error[0].instance: Recommended property `instance` is missing from `OpportunityHasInsufficientCapacityError`.
 * ⚠️ $.orderedItem[8].orderedItem.duration: Recommended property `duration` is missing from `Slot`.
 * ⚠️ $.orderedItem[8].orderedItem.facilityUse.description: Recommended property `description` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[8].orderedItem.facilityUse.image: Recommended property `image` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[8].orderedItem.facilityUse.hoursAvailable: Recommended property `hoursAvailable` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[8].orderedItem.facilityUse.offers: Recommended property `offers` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[8].orderedItem.facilityUse.location.id: Recommended property `@id` is missing from `Place`.
 * ⚠️ $.orderedItem[8].orderedItem.facilityUse.location.url: Recommended property `url` is missing from `Place`.
 * ⚠️ $.orderedItem[8].orderedItem.facilityUse.location.description: Recommended property `description` is missing from `Place`.
 * ⚠️ $.orderedItem[8].orderedItem.facilityUse.location.image: Recommended property `image` is missing from `Place`.
 * ⚠️ $.orderedItem[8].orderedItem.facilityUse.location.telephone: Recommended property `telephone` is missing from `Place`.
 * ⚠️ $.orderedItem[8].orderedItem.facilityUse.location.openingHoursSpecification: Recommended property `openingHoursSpecification` is missing from `Place`.
 * ⚠️ $.orderedItem[8].orderedItem.facilityUse.location.amenityFeature: Recommended property `amenityFeature` is missing from `Place`.
 * ⚠️ $.orderedItem[9].acceptedOffer.name: Recommended property `name` is missing from `Offer`.
 * ⚠️ $.orderedItem[9].acceptedOffer.ageRestriction: Recommended property `ageRestriction` is missing from `Offer`.
 * ⚠️ $.orderedItem[9].error[0].description: Recommended property `description` is missing from `OpportunityHasInsufficientCapacityError`.
 * ⚠️ $.orderedItem[9].error[0].instance: Recommended property `instance` is missing from `OpportunityHasInsufficientCapacityError`.
 * ⚠️ $.orderedItem[9].orderedItem.duration: Recommended property `duration` is missing from `Slot`.
 * ⚠️ $.orderedItem[9].orderedItem.facilityUse.description: Recommended property `description` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[9].orderedItem.facilityUse.image: Recommended property `image` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[9].orderedItem.facilityUse.hoursAvailable: Recommended property `hoursAvailable` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[9].orderedItem.facilityUse.offers: Recommended property `offers` is missing from `FacilityUse`.
 * ⚠️ $.orderedItem[9].orderedItem.facilityUse.location.id: Recommended property `@id` is missing from `Place`.
 * ⚠️ $.orderedItem[9].orderedItem.facilityUse.location.url: Recommended property `url` is missing from `Place`.
 * ⚠️ $.orderedItem[9].orderedItem.facilityUse.location.description: Recommended property `description` is missing from `Place`.
 * ⚠️ $.orderedItem[9].orderedItem.facilityUse.location.image: Recommended property `image` is missing from `Place`.
 * ⚠️ $.orderedItem[9].orderedItem.facilityUse.location.telephone: Recommended property `telephone` is missing from `Place`.
 * ⚠️ $.orderedItem[9].orderedItem.facilityUse.location.openingHoursSpecification: Recommended property `openingHoursSpecification` is missing from `Place`.
 * ⚠️ $.orderedItem[9].orderedItem.facilityUse.location.amenityFeature: Recommended property `amenityFeature` is missing from `Place`.
 * ⚠️ $.seller.email: Recommended property `email` is missing from `Organization`.
 * ⚠️ $.seller.url: Recommended property `url` is missing from `Organization`.
 * ⚠️ $.seller.logo: Recommended property `logo` is missing from `Organization`.
 * ⚠️ $.seller.vatID: Recommended property `vatID` is missing from `Organization`.
 * 📝 $.orderedItem[0].orderedItem.facilityUse.location.geo.latitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[0].orderedItem.facilityUse.location.geo.longitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[1].orderedItem.facilityUse.location.geo.latitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[1].orderedItem.facilityUse.location.geo.longitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[2].orderedItem.facilityUse.location.geo.latitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[2].orderedItem.facilityUse.location.geo.longitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[3].orderedItem.facilityUse.location.geo.latitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[3].orderedItem.facilityUse.location.geo.longitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[4].orderedItem.facilityUse.location.geo.latitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[4].orderedItem.facilityUse.location.geo.longitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[5].orderedItem.facilityUse.location.geo.latitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[5].orderedItem.facilityUse.location.geo.longitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[6].orderedItem.facilityUse.location.geo.latitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[6].orderedItem.facilityUse.location.geo.longitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[7].orderedItem.facilityUse.location.geo.latitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[7].orderedItem.facilityUse.location.geo.longitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[8].orderedItem.facilityUse.location.geo.latitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[8].orderedItem.facilityUse.location.geo.longitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[9].orderedItem.facilityUse.location.geo.latitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[9].orderedItem.facilityUse.location.geo.longitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.

## Lease 10 item(s) (fail) >> Assert Opportunity Capacity (after C2)

### Opportunity Feed extract for OrderItem 0 Request
GET http://localhost:3000/opportunity/https%3A%2F%2Flocalhost%3A5001%2Fapi%2Fidentifiers%2Ffacility-uses%2F2445%2Ffacility-use-slots%2F20445?useCacheIfAvailable=true&expectedCapacity=2


---
Response status code: 200 OK. Responded in 21.716193ms.
```json
{
  "data": {
    "@context": [
      "https://openactive.io/"
    ],
    "@type": "Slot",
    "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445",
    "identifier": 20445,
    "duration": "PT1H",
    "facilityUse": {
      "@type": "FacilityUse",
      "@id": "https://localhost:5001/api/identifiers/facility-uses/2445",
      "name": "[OPEN BOOKING API TEST INTERFACE] Bookable Free Facility Five Spaces",
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
          "latitude": 0.1,
          "longitude": 0.1
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
        "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445#/offers/0",
        "allowCustomerCancellationFullRefund": true,
        "price": 14.99,
        "priceCurrency": "GBP"
      }
    ],
    "remainingUses": 2,
    "startDate": "2022-07-23T10:45:25+00:00",
    "endDate": "2022-07-23T11:45:25+00:00"
  }
}
```
### Specs
* ✅ should return 200 on success for request relevant to OrderItem 0
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
* ✅ should return HTTP 409
* ✅ should include correct numbers of OpportunityCapacityIsReservedByLeaseError and OpportunityHasInsufficientCapacityError in the OrderItems

## Lease 10 item(s) (fail) >> Assert Opportunity Capacity (after C2) >> validation of Opportunity Feed extract for OrderItem 0
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
PUT https://localhost:5001/api/openbooking/order-quote-templates/ce4c4fea-1626-4857-82ef-ea59e09d9733

* **Content-Type:** `"application/vnd.openactive.booking+json; version=1"`
* **Authorization:** `"Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkIwNEY3QjkxREUzQjk0NzhDNjE4MzNGQjI0QUE1Q0RCIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2NTg0ODU2NTAsImV4cCI6MTY1ODQ4OTI1MCwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NTAwMyIsImF1ZCI6Im9wZW5ib29raW5nIiwiY2xpZW50X2lkIjoiNjJiNGY3MmUtZmJmOS00OTk0LTlkNDQtYmQ5NTMwOTllMTM0IiwiaHR0cHM6Ly9vcGVuYWN0aXZlLmlvL2NsaWVudElkIjoiNjJiNGY3MmUtZmJmOS00OTk0LTlkNDQtYmQ5NTMwOTllMTM0Iiwic3ViIjoiMTAwIiwiYXV0aF90aW1lIjoxNjU4NDg1NjQ5LCJpZHAiOiJsb2NhbCIsImh0dHBzOi8vb3BlbmFjdGl2ZS5pby9zZWxsZXJJZCI6Imh0dHBzOi8vbG9jYWxob3N0OjUwMDEvYXBpL2lkZW50aWZpZXJzL3NlbGxlcnMvMSIsImp0aSI6IkZFNjE5OTM5Q0M2MUVFRTFDQTFDRUIyNzczMTYyMjg5Iiwic2lkIjoiMEI1RjVGRDEzODJGNTY2REE2NzI2RUM1RjBENjRFQ0QiLCJpYXQiOjE2NTg0ODU2NTAsInNjb3BlIjpbIm9wZW5pZCIsIm9wZW5hY3RpdmUtb3BlbmJvb2tpbmciLCJvcGVuYWN0aXZlLWlkZW50aXR5Iiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbInB3ZCJdfQ.o-QctzkQMggVF6J8EIsjxJ43llGhs2jSEGiCfZxoPJjg0Coj1XkqaKd5Bltzc2D21dEBtbq-c5sKreCqebPhxuDlg_pDikudK9_wCosxWyOPIBS3OX6HFWM-J-Ofpxgkk5thfLTkLlDW8N6f3jtsTIRGm9dZvKsGypmwxnDdRhGKwxSDhnabWbPtFCABWC6DxK5mgb6V5SX3W3QxbI181T1tQioKui-N8j1FSgIpXrE3qy2ShkI-QbxwmMBCYhqcTbhLi41SUSx6gKgtl54lc_JEx-kSBlgsQmOrRKMDDrEecM9JQMNAliL2mJeIClUfC8k_SUKbJ8VvbNBbMjVSCw"`

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
      "acceptedOffer": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445#/offers/0",
      "orderedItem": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445"
    },
    {
      "@type": "OrderItem",
      "position": 1,
      "acceptedOffer": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445#/offers/0",
      "orderedItem": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445"
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
Response status code: 200 OK. Responded in 915.28746ms.
```json
{
  "@context": "https://openactive.io/",
  "@type": "OrderQuote",
  "@id": "https://localhost:5001/api/openbooking/order-quotes/ce4c4fea-1626-4857-82ef-ea59e09d9733",
  "lease": {
    "@type": "Lease",
    "leaseExpires": "2022-07-22T10:50:32+00:00"
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
        "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445#/offers/0",
        "allowCustomerCancellationFullRefund": true,
        "price": 14.99,
        "priceCurrency": "GBP"
      },
      "orderedItem": {
        "@type": "Slot",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445",
        "facilityUse": {
          "@type": "FacilityUse",
          "@id": "https://localhost:5001/api/identifiers/facility-uses/2445",
          "name": "[OPEN BOOKING API TEST INTERFACE] Bookable Free Facility Five Spaces",
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
              "latitude": 0.1,
              "longitude": 0.1
            }
          },
          "url": "https://example.com/events/2445"
        },
        "maximumUses": 5,
        "remainingUses": 2,
        "startDate": "2022-07-23T10:45:25+00:00",
        "endDate": "2022-07-23T11:45:25+00:00"
      },
      "position": 0,
      "unitTaxSpecification": [
        {
          "@type": "TaxChargeSpecification",
          "name": "VAT at 20%",
          "price": 2.998,
          "priceCurrency": "GBP",
          "rate": 0.2
        }
      ]
    },
    {
      "@type": "OrderItem",
      "acceptedOffer": {
        "@type": "Offer",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445#/offers/0",
        "allowCustomerCancellationFullRefund": true,
        "price": 14.99,
        "priceCurrency": "GBP"
      },
      "orderedItem": {
        "@type": "Slot",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445",
        "facilityUse": {
          "@type": "FacilityUse",
          "@id": "https://localhost:5001/api/identifiers/facility-uses/2445",
          "name": "[OPEN BOOKING API TEST INTERFACE] Bookable Free Facility Five Spaces",
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
              "latitude": 0.1,
              "longitude": 0.1
            }
          },
          "url": "https://example.com/events/2445"
        },
        "maximumUses": 5,
        "remainingUses": 2,
        "startDate": "2022-07-23T10:45:25+00:00",
        "endDate": "2022-07-23T11:45:25+00:00"
      },
      "position": 1,
      "unitTaxSpecification": [
        {
          "@type": "TaxChargeSpecification",
          "name": "VAT at 20%",
          "price": 2.998,
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
    "price": 29.98,
    "priceCurrency": "GBP"
  },
  "totalPaymentTax": [
    {
      "@type": "TaxChargeSpecification",
      "name": "VAT at 20%",
      "price": 5.996,
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
 * ⚠️ $.orderedItem[1].acceptedOffer.name: Recommended property `name` is missing from `Offer`.
 * ⚠️ $.orderedItem[1].acceptedOffer.ageRestriction: Recommended property `ageRestriction` is missing from `Offer`.
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
 * 📝 $.orderedItem[0].orderedItem.facilityUse.location.geo.latitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[0].orderedItem.facilityUse.location.geo.longitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[1].orderedItem.facilityUse.location.geo.latitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[1].orderedItem.facilityUse.location.geo.longitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.

## Lease 2 item(s) (success) >> C2

### C2 Request
PUT https://localhost:5001/api/openbooking/order-quotes/ce4c4fea-1626-4857-82ef-ea59e09d9733

* **Content-Type:** `"application/vnd.openactive.booking+json; version=1"`
* **Authorization:** `"Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkIwNEY3QjkxREUzQjk0NzhDNjE4MzNGQjI0QUE1Q0RCIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2NTg0ODU2NTAsImV4cCI6MTY1ODQ4OTI1MCwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NTAwMyIsImF1ZCI6Im9wZW5ib29raW5nIiwiY2xpZW50X2lkIjoiNjJiNGY3MmUtZmJmOS00OTk0LTlkNDQtYmQ5NTMwOTllMTM0IiwiaHR0cHM6Ly9vcGVuYWN0aXZlLmlvL2NsaWVudElkIjoiNjJiNGY3MmUtZmJmOS00OTk0LTlkNDQtYmQ5NTMwOTllMTM0Iiwic3ViIjoiMTAwIiwiYXV0aF90aW1lIjoxNjU4NDg1NjQ5LCJpZHAiOiJsb2NhbCIsImh0dHBzOi8vb3BlbmFjdGl2ZS5pby9zZWxsZXJJZCI6Imh0dHBzOi8vbG9jYWxob3N0OjUwMDEvYXBpL2lkZW50aWZpZXJzL3NlbGxlcnMvMSIsImp0aSI6IkZFNjE5OTM5Q0M2MUVFRTFDQTFDRUIyNzczMTYyMjg5Iiwic2lkIjoiMEI1RjVGRDEzODJGNTY2REE2NzI2RUM1RjBENjRFQ0QiLCJpYXQiOjE2NTg0ODU2NTAsInNjb3BlIjpbIm9wZW5pZCIsIm9wZW5hY3RpdmUtb3BlbmJvb2tpbmciLCJvcGVuYWN0aXZlLWlkZW50aXR5Iiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbInB3ZCJdfQ.o-QctzkQMggVF6J8EIsjxJ43llGhs2jSEGiCfZxoPJjg0Coj1XkqaKd5Bltzc2D21dEBtbq-c5sKreCqebPhxuDlg_pDikudK9_wCosxWyOPIBS3OX6HFWM-J-Ofpxgkk5thfLTkLlDW8N6f3jtsTIRGm9dZvKsGypmwxnDdRhGKwxSDhnabWbPtFCABWC6DxK5mgb6V5SX3W3QxbI181T1tQioKui-N8j1FSgIpXrE3qy2ShkI-QbxwmMBCYhqcTbhLi41SUSx6gKgtl54lc_JEx-kSBlgsQmOrRKMDDrEecM9JQMNAliL2mJeIClUfC8k_SUKbJ8VvbNBbMjVSCw"`

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
    "email": "Beryl.Champlin@hotmail.com",
    "telephone": "772.351.1947 x185",
    "givenName": "Mraz",
    "familyName": "Arianna",
    "identifier": "91259397-ffda-400d-b90f-49eeb114182d"
  },
  "orderedItem": [
    {
      "@type": "OrderItem",
      "position": 0,
      "acceptedOffer": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445#/offers/0",
      "orderedItem": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445"
    },
    {
      "@type": "OrderItem",
      "position": 1,
      "acceptedOffer": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445#/offers/0",
      "orderedItem": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445"
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
Response status code: 200 OK. Responded in 434.923777ms.
```json
{
  "@context": "https://openactive.io/",
  "@type": "OrderQuote",
  "@id": "https://localhost:5001/api/openbooking/order-quotes/ce4c4fea-1626-4857-82ef-ea59e09d9733",
  "lease": {
    "@type": "Lease",
    "leaseExpires": "2022-07-22T10:50:32+00:00"
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
    "identifier": "91259397-ffda-400d-b90f-49eeb114182d",
    "email": "Beryl.Champlin@hotmail.com",
    "familyName": "Arianna",
    "givenName": "Mraz",
    "telephone": "772.351.1947 x185"
  },
  "orderedItem": [
    {
      "@type": "OrderItem",
      "acceptedOffer": {
        "@type": "Offer",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445#/offers/0",
        "allowCustomerCancellationFullRefund": true,
        "price": 14.99,
        "priceCurrency": "GBP"
      },
      "orderedItem": {
        "@type": "Slot",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445",
        "facilityUse": {
          "@type": "FacilityUse",
          "@id": "https://localhost:5001/api/identifiers/facility-uses/2445",
          "name": "[OPEN BOOKING API TEST INTERFACE] Bookable Free Facility Five Spaces",
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
              "latitude": 0.1,
              "longitude": 0.1
            }
          },
          "url": "https://example.com/events/2445"
        },
        "maximumUses": 5,
        "remainingUses": 2,
        "startDate": "2022-07-23T10:45:25+00:00",
        "endDate": "2022-07-23T11:45:25+00:00"
      },
      "position": 0,
      "unitTaxSpecification": [
        {
          "@type": "TaxChargeSpecification",
          "name": "VAT at 20%",
          "price": 2.998,
          "priceCurrency": "GBP",
          "rate": 0.2
        }
      ]
    },
    {
      "@type": "OrderItem",
      "acceptedOffer": {
        "@type": "Offer",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445#/offers/0",
        "allowCustomerCancellationFullRefund": true,
        "price": 14.99,
        "priceCurrency": "GBP"
      },
      "orderedItem": {
        "@type": "Slot",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445",
        "facilityUse": {
          "@type": "FacilityUse",
          "@id": "https://localhost:5001/api/identifiers/facility-uses/2445",
          "name": "[OPEN BOOKING API TEST INTERFACE] Bookable Free Facility Five Spaces",
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
              "latitude": 0.1,
              "longitude": 0.1
            }
          },
          "url": "https://example.com/events/2445"
        },
        "maximumUses": 5,
        "remainingUses": 2,
        "startDate": "2022-07-23T10:45:25+00:00",
        "endDate": "2022-07-23T11:45:25+00:00"
      },
      "position": 1,
      "unitTaxSpecification": [
        {
          "@type": "TaxChargeSpecification",
          "name": "VAT at 20%",
          "price": 2.998,
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
    "price": 29.98,
    "priceCurrency": "GBP"
  },
  "totalPaymentTax": [
    {
      "@type": "TaxChargeSpecification",
      "name": "VAT at 20%",
      "price": 5.996,
      "priceCurrency": "GBP",
      "rate": 0.2
    }
  ]
}
```
### Specs
* ✅ should return 200 on success

## Lease 2 item(s) (success) >> C2 >> validation of C2
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
 * ⚠️ $.orderedItem[1].acceptedOffer.name: Recommended property `name` is missing from `Offer`.
 * ⚠️ $.orderedItem[1].acceptedOffer.ageRestriction: Recommended property `ageRestriction` is missing from `Offer`.
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
 * 📝 $.orderedItem[0].orderedItem.facilityUse.location.geo.latitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[0].orderedItem.facilityUse.location.geo.longitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[1].orderedItem.facilityUse.location.geo.latitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.
 * 📝 $.orderedItem[1].orderedItem.facilityUse.location.geo.longitude: The value of this property should have at least 3 decimal places. Note that this notice will also appear when trailing zeros have been truncated.

## Lease 2 item(s) (success) >> Assert Opportunity Capacity (after C2)

### Opportunity Feed extract for OrderItem 0 Request
GET http://localhost:3000/opportunity/https%3A%2F%2Flocalhost%3A5001%2Fapi%2Fidentifiers%2Ffacility-uses%2F2445%2Ffacility-use-slots%2F20445?useCacheIfAvailable=true&expectedCapacity=0


---
Response status code: 200 OK. Responded in 251.26654ms.
```json
{
  "state": "updated",
  "id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445",
  "modified": 1658486734735,
  "data": {
    "@context": [
      "https://openactive.io/"
    ],
    "@type": "Slot",
    "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445",
    "identifier": 20445,
    "duration": "PT1H",
    "facilityUse": {
      "@type": "FacilityUse",
      "@id": "https://localhost:5001/api/identifiers/facility-uses/2445",
      "name": "[OPEN BOOKING API TEST INTERFACE] Bookable Free Facility Five Spaces",
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
          "latitude": 0.1,
          "longitude": 0.1
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
        "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445#/offers/0",
        "allowCustomerCancellationFullRefund": true,
        "price": 14.99,
        "priceCurrency": "GBP"
      }
    ],
    "remainingUses": 0,
    "startDate": "2022-07-23T10:45:25+00:00",
    "endDate": "2022-07-23T11:45:25+00:00"
  }
}
```
### Specs
* ✅ should return 200 on success for request relevant to OrderItem 0
* ✅ Should have the same number of OrderItems as criteria
* ✅ OrderItem at position 0 - should decrement remaining slots
* ✅ OrderItem at position 1 - should decrement remaining slots

## Lease 2 item(s) (success) >> Assert Opportunity Capacity (after C2) >> validation of Opportunity Feed extract for OrderItem 0
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
PUT https://localhost:5001/api/openbooking/order-quote-templates/ce5bfd5f-becd-4c35-b40c-8c44a08f88ee

* **Content-Type:** `"application/vnd.openactive.booking+json; version=1"`
* **Authorization:** `"Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkIwNEY3QjkxREUzQjk0NzhDNjE4MzNGQjI0QUE1Q0RCIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2NTg0ODU2NTAsImV4cCI6MTY1ODQ4OTI1MCwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NTAwMyIsImF1ZCI6Im9wZW5ib29raW5nIiwiY2xpZW50X2lkIjoiNjJiNGY3MmUtZmJmOS00OTk0LTlkNDQtYmQ5NTMwOTllMTM0IiwiaHR0cHM6Ly9vcGVuYWN0aXZlLmlvL2NsaWVudElkIjoiNjJiNGY3MmUtZmJmOS00OTk0LTlkNDQtYmQ5NTMwOTllMTM0Iiwic3ViIjoiMTAwIiwiYXV0aF90aW1lIjoxNjU4NDg1NjQ5LCJpZHAiOiJsb2NhbCIsImh0dHBzOi8vb3BlbmFjdGl2ZS5pby9zZWxsZXJJZCI6Imh0dHBzOi8vbG9jYWxob3N0OjUwMDEvYXBpL2lkZW50aWZpZXJzL3NlbGxlcnMvMSIsImp0aSI6IkZFNjE5OTM5Q0M2MUVFRTFDQTFDRUIyNzczMTYyMjg5Iiwic2lkIjoiMEI1RjVGRDEzODJGNTY2REE2NzI2RUM1RjBENjRFQ0QiLCJpYXQiOjE2NTg0ODU2NTAsInNjb3BlIjpbIm9wZW5pZCIsIm9wZW5hY3RpdmUtb3BlbmJvb2tpbmciLCJvcGVuYWN0aXZlLWlkZW50aXR5Iiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbInB3ZCJdfQ.o-QctzkQMggVF6J8EIsjxJ43llGhs2jSEGiCfZxoPJjg0Coj1XkqaKd5Bltzc2D21dEBtbq-c5sKreCqebPhxuDlg_pDikudK9_wCosxWyOPIBS3OX6HFWM-J-Ofpxgkk5thfLTkLlDW8N6f3jtsTIRGm9dZvKsGypmwxnDdRhGKwxSDhnabWbPtFCABWC6DxK5mgb6V5SX3W3QxbI181T1tQioKui-N8j1FSgIpXrE3qy2ShkI-QbxwmMBCYhqcTbhLi41SUSx6gKgtl54lc_JEx-kSBlgsQmOrRKMDDrEecM9JQMNAliL2mJeIClUfC8k_SUKbJ8VvbNBbMjVSCw"`

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
      "acceptedOffer": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445#/offers/0",
      "orderedItem": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445"
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
Response status code: 409 Conflict. Responded in 277.329272ms.
```json
{
  "@context": "https://openactive.io/",
  "@type": "OrderQuote",
  "@id": "https://localhost:5001/api/openbooking/order-quotes/ce5bfd5f-becd-4c35-b40c-8c44a08f88ee",
  "lease": {
    "@type": "Lease",
    "leaseExpires": "2022-07-22T10:50:33+00:00"
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
        "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445#/offers/0",
        "allowCustomerCancellationFullRefund": true,
        "price": 14.99,
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
        "@type": "Slot",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445",
        "facilityUse": {
          "@type": "FacilityUse",
          "@id": "https://localhost:5001/api/identifiers/facility-uses/2445",
          "name": "[OPEN BOOKING API TEST INTERFACE] Bookable Free Facility Five Spaces",
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
              "latitude": 0.1,
              "longitude": 0.1
            }
          },
          "url": "https://example.com/events/2445"
        },
        "maximumUses": 5,
        "remainingUses": 0,
        "startDate": "2022-07-23T10:45:25+00:00",
        "endDate": "2022-07-23T11:45:25+00:00"
      },
      "position": 0,
      "unitTaxSpecification": [
        {
          "@type": "TaxChargeSpecification",
          "name": "VAT at 20%",
          "price": 2.998,
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
    "openBookingPrepayment": "https://openactive.io/Required",
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

## Lease 1 item(s) (fail) >> C2

### C2 Request
PUT https://localhost:5001/api/openbooking/order-quotes/ce5bfd5f-becd-4c35-b40c-8c44a08f88ee

* **Content-Type:** `"application/vnd.openactive.booking+json; version=1"`
* **Authorization:** `"Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkIwNEY3QjkxREUzQjk0NzhDNjE4MzNGQjI0QUE1Q0RCIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2NTg0ODU2NTAsImV4cCI6MTY1ODQ4OTI1MCwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NTAwMyIsImF1ZCI6Im9wZW5ib29raW5nIiwiY2xpZW50X2lkIjoiNjJiNGY3MmUtZmJmOS00OTk0LTlkNDQtYmQ5NTMwOTllMTM0IiwiaHR0cHM6Ly9vcGVuYWN0aXZlLmlvL2NsaWVudElkIjoiNjJiNGY3MmUtZmJmOS00OTk0LTlkNDQtYmQ5NTMwOTllMTM0Iiwic3ViIjoiMTAwIiwiYXV0aF90aW1lIjoxNjU4NDg1NjQ5LCJpZHAiOiJsb2NhbCIsImh0dHBzOi8vb3BlbmFjdGl2ZS5pby9zZWxsZXJJZCI6Imh0dHBzOi8vbG9jYWxob3N0OjUwMDEvYXBpL2lkZW50aWZpZXJzL3NlbGxlcnMvMSIsImp0aSI6IkZFNjE5OTM5Q0M2MUVFRTFDQTFDRUIyNzczMTYyMjg5Iiwic2lkIjoiMEI1RjVGRDEzODJGNTY2REE2NzI2RUM1RjBENjRFQ0QiLCJpYXQiOjE2NTg0ODU2NTAsInNjb3BlIjpbIm9wZW5pZCIsIm9wZW5hY3RpdmUtb3BlbmJvb2tpbmciLCJvcGVuYWN0aXZlLWlkZW50aXR5Iiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbInB3ZCJdfQ.o-QctzkQMggVF6J8EIsjxJ43llGhs2jSEGiCfZxoPJjg0Coj1XkqaKd5Bltzc2D21dEBtbq-c5sKreCqebPhxuDlg_pDikudK9_wCosxWyOPIBS3OX6HFWM-J-Ofpxgkk5thfLTkLlDW8N6f3jtsTIRGm9dZvKsGypmwxnDdRhGKwxSDhnabWbPtFCABWC6DxK5mgb6V5SX3W3QxbI181T1tQioKui-N8j1FSgIpXrE3qy2ShkI-QbxwmMBCYhqcTbhLi41SUSx6gKgtl54lc_JEx-kSBlgsQmOrRKMDDrEecM9JQMNAliL2mJeIClUfC8k_SUKbJ8VvbNBbMjVSCw"`

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
    "email": "Jillian.Considine@yahoo.com",
    "telephone": "(425) 593-6760",
    "givenName": "Carroll",
    "familyName": "Reed",
    "identifier": "5502b930-87b1-46ec-9433-d82bd681b64f"
  },
  "orderedItem": [
    {
      "@type": "OrderItem",
      "position": 0,
      "acceptedOffer": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445#/offers/0",
      "orderedItem": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445"
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
Response status code: 409 Conflict. Responded in 171.066826ms.
```json
{
  "@context": "https://openactive.io/",
  "@type": "OrderQuote",
  "@id": "https://localhost:5001/api/openbooking/order-quotes/ce5bfd5f-becd-4c35-b40c-8c44a08f88ee",
  "lease": {
    "@type": "Lease",
    "leaseExpires": "2022-07-22T10:50:34+00:00"
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
    "identifier": "5502b930-87b1-46ec-9433-d82bd681b64f",
    "email": "Jillian.Considine@yahoo.com",
    "familyName": "Reed",
    "givenName": "Carroll",
    "telephone": "(425) 593-6760"
  },
  "orderedItem": [
    {
      "@type": "OrderItem",
      "acceptedOffer": {
        "@type": "Offer",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445#/offers/0",
        "allowCustomerCancellationFullRefund": true,
        "price": 14.99,
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
        "@type": "Slot",
        "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445",
        "facilityUse": {
          "@type": "FacilityUse",
          "@id": "https://localhost:5001/api/identifiers/facility-uses/2445",
          "name": "[OPEN BOOKING API TEST INTERFACE] Bookable Free Facility Five Spaces",
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
              "latitude": 0.1,
              "longitude": 0.1
            }
          },
          "url": "https://example.com/events/2445"
        },
        "maximumUses": 5,
        "remainingUses": 0,
        "startDate": "2022-07-23T10:45:25+00:00",
        "endDate": "2022-07-23T11:45:25+00:00"
      },
      "position": 0,
      "unitTaxSpecification": [
        {
          "@type": "TaxChargeSpecification",
          "name": "VAT at 20%",
          "price": 2.998,
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
    "openBookingPrepayment": "https://openactive.io/Required",
    "price": 0
  }
}
```

## Lease 1 item(s) (fail) >> C2 >> validation of C2
### Specs
* ✅ passes validation checks

### Validations
 * ⚠️ $.orderedItem[0].acceptedOffer.name: Recommended property `name` is missing from `Offer`.
 * ⚠️ $.orderedItem[0].acceptedOffer.ageRestriction: Recommended property `ageRestriction` is missing from `Offer`.
 * ⚠️ $.orderedItem[0].error[0].description: Recommended property `description` is missing from `OpportunityCapacityIsReservedByLeaseError`.
 * ⚠️ $.orderedItem[0].error[0].instance: Recommended property `instance` is missing from `OpportunityCapacityIsReservedByLeaseError`.
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

## Lease 1 item(s) (fail) >> Assert Opportunity Capacity (after C2)

### Opportunity Feed extract for OrderItem 0 Request
GET http://localhost:3000/opportunity/https%3A%2F%2Flocalhost%3A5001%2Fapi%2Fidentifiers%2Ffacility-uses%2F2445%2Ffacility-use-slots%2F20445?useCacheIfAvailable=true&expectedCapacity=0


---
Response status code: 200 OK. Responded in 14.179226ms.
```json
{
  "data": {
    "@context": [
      "https://openactive.io/"
    ],
    "@type": "Slot",
    "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445",
    "identifier": 20445,
    "duration": "PT1H",
    "facilityUse": {
      "@type": "FacilityUse",
      "@id": "https://localhost:5001/api/identifiers/facility-uses/2445",
      "name": "[OPEN BOOKING API TEST INTERFACE] Bookable Free Facility Five Spaces",
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
          "latitude": 0.1,
          "longitude": 0.1
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
        "@id": "https://localhost:5001/api/identifiers/facility-uses/2445/facility-use-slots/20445#/offers/0",
        "allowCustomerCancellationFullRefund": true,
        "price": 14.99,
        "priceCurrency": "GBP"
      }
    ],
    "remainingUses": 0,
    "startDate": "2022-07-23T10:45:25+00:00",
    "endDate": "2022-07-23T11:45:25+00:00"
  }
}
```
### Specs
* ✅ should return 200 on success for request relevant to OrderItem 0
* ✅ Should have the same number of OrderItems as criteria
* ✅ OrderItem at position 0 - should decrement remaining slots
* ✅ should return HTTP 409

## Lease 1 item(s) (fail) >> Assert Opportunity Capacity (after C2) >> validation of Opportunity Feed extract for OrderItem 0
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


