const { FeatureHelper } = require('../../../../helpers/feature-helper');
const { FlowStageRecipes, FlowStageUtils } = require('../../../../helpers/flow-stages');
const { itShouldReturnAnOpenBookingError } = require('../../../../shared-behaviours/errors');

/**
 * @typedef {import('../../../../helpers/flow-stages/c2').C2FlowStageType} C2FlowStageType
 * @typedef {import('../../../../helpers/flow-stages/b').BFlowStageType} BFlowStageType
 * @typedef {import('../../../../helpers/flow-stages/p').PFlowStageType} PFlowStageType
 */

FeatureHelper.describeFeature(module, {
  testCategory: 'core',
  testFeature: 'common-error-conditions',
  testFeatureImplemented: true,
  testIdentifier: 'incomplete-customer-details',
  testName: 'Expect an IncompleteCustomerDetailsError when customer details are missing the required email property',
  testDescription: 'Run each of C2 and B for a valid opportunity, with customer details missing the required email property, expecting an IncompleteCustomerDetailsError to be returned (C1 is ignored because customer details are not accepted for C1)',
  // The primary opportunity criteria to use for the primary OrderItem under test
  testOpportunityCriteria: 'TestOpportunityBookable',
  // The secondary opportunity criteria to use for multiple OrderItem tests
  controlOpportunityCriteria: 'TestOpportunityBookable',
  numOpportunitiesUsedPerCriteria: 2, // one for each of the C2 and B tests
},
(configuration, orderItemCriteriaList, featureIsImplemented, logger) => {
  /**
   * @param {C2FlowStageType | BFlowStageType} flowStage
   */
  const itShouldReturnAnIncompleteCustomerDetailsError = flowStage => (
    itShouldReturnAnOpenBookingError('IncompleteCustomerDetailsError', 400, () => flowStage.getOutput().httpResponse));

  describe('Missing customer email property at C2', () => {
    // # Initialise Flow Stages
    const { fetchOpportunities, c1, c2 } = FlowStageRecipes.initialiseSimpleC1C2Flow(orderItemCriteriaList, logger, {
      c2ReqTemplateRef: 'noCustomerEmail',
      c2ExpectToFail: true,
    });

    // # Set up Tests
    FlowStageUtils.describeRunAndCheckIsSuccessfulAndValid(fetchOpportunities);
    FlowStageUtils.describeRunAndCheckIsSuccessfulAndValid(c1);
    FlowStageUtils.describeRunAndCheckIsValid(c2, () => {
      itShouldReturnAnIncompleteCustomerDetailsError(c2.getStage('c2'));
    });
  });

  describe('Missing customer email property at B', () => {
    // # Initialise Flow Stages
    const { fetchOpportunities, c1, c2, bookRecipe } = FlowStageRecipes.initialiseSimpleC1C2BookFlow(orderItemCriteriaList, logger, {
      bookReqTemplateRef: 'noCustomerEmail',
      bookExpectToFail: true,
    });

    // # Set up Tests
    FlowStageUtils.describeRunAndCheckIsSuccessfulAndValid(fetchOpportunities);
    FlowStageUtils.describeRunAndCheckIsSuccessfulAndValid(c1);
    FlowStageUtils.describeRunAndCheckIsSuccessfulAndValid(c2);
    FlowStageUtils.describeRunAndCheckIsValid(bookRecipe.firstStage, () => {
      itShouldReturnAnIncompleteCustomerDetailsError(bookRecipe.firstStage);
    });
  });
});
