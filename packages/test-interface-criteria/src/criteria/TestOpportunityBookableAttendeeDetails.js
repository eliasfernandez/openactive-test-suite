const {
  createCriteria,
  mustRequireAttendeeDetails,
  remainingCapacityMustBeAtLeastTwo,
  startDateMustBe2HrsInAdvance,
  eventStatusMustNotBeCancelledOrPostponed,
  mustHaveBookableOffer,
} = require('./criteriaUtils');

const TestOpportunityBookableAttendeeDetails = createCriteria({
  name: 'TestOpportunityBookableAttendeeDetails',
  opportunityConstraints: [
    [
      'Remaining capacity must be at least two (or one for IndividualFacilityUse)',
      remainingCapacityMustBeAtLeastTwo,
    ],
    [
      'Start date must be 2hrs in advance for random tests to use',
      startDateMustBe2HrsInAdvance,
    ],
    [
      'eventStatus must not be Cancelled or Postponed',
      eventStatusMustNotBeCancelledOrPostponed,
    ],
  ],
  offerConstraints: [
    [
      'Must have "bookable" offer',
      mustHaveBookableOffer,
    ],
    [
      'Must require attendee details',
      mustRequireAttendeeDetails,
    ],
  ],
});

module.exports = {
  TestOpportunityBookableAttendeeDetails,
};