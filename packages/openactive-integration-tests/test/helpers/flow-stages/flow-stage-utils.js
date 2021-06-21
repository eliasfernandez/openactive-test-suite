const chakram = require('chakram');
const faker = require('faker');
const sharedValidationTests = require('../../shared-behaviours/validation');
const { generateUuid } = require('../generate-uuid');
const RequestHelper = require('../request-helper');
const { getSellerConfigWithTaxMode } = require('../sellers');
const { BookRecipe } = require('./book-recipe');

/**
 * @typedef {{
 *  '@type': 'Person' | 'Organization',
 *  identifier: string
 *  telephone: string,
 *  givenName: string,
 *  familyName: string,
 *  email: string,
 *  }} Customer
 */

/**
 * @typedef {import('chakram').ChakramResponse} ChakramResponse
 * @typedef {import('../../helpers/logger').BaseLoggerType} BaseLoggerType
 * @typedef {import('../../helpers/request-helper').RequestHelperType} RequestHelperType
 * @typedef {import('../../shared-behaviours/validation').ValidationMode} ValidationMode
 * @typedef {import('./flow-stage').FlowStageOutput} FlowStageOutput
 *
 * @typedef {import('./flow-stage').FlowStageType<unknown, unknown>} UnknownFlowStageType
 * @typedef {import('./flow-stage').FlowStageType<
 *   unknown,
 *   Required<Pick<FlowStageOutput, 'httpResponse'>>,
 * >} FlowStageTypeWithHttpResponseOutput
 * @typedef {import('../../types/SellerConfig').SellerConfig} SellerConfig
 */

const { SELLER_CONFIG } = global;

const FlowStageUtils = {
  // # Utilities for FlowStage factory
  //
  // e.g. for C1FlowStage
  /**
   * Empty `getInput` arg to use for FlowStages which need no input.
   */
  emptyGetInput: () => ({}),

  /**
   * Create itValidationTestsFn that will work for flow stages whose output
   * inclues an HTTP response (`httpResponse`) whose body is an OpenActive item.
   *
   * Runs sharedValidationTests.shouldBeValidResponse() against the response.
   *
   * @param {BaseLoggerType} logger
   * @param {object} validationSpec
   * @param {string} validationSpec.name Name to use for tests generated by
   *   validation checks.
   * @param {ValidationMode} validationSpec.validationMode
   */
  simpleValidationTests(logger, { name, validationMode }) {
    return (/** @type {FlowStageTypeWithHttpResponseOutput} */ flowStage) => {
      sharedValidationTests.shouldBeValidResponse(
        () => flowStage.getOutput().httpResponse,
        name,
        logger,
        {
          validationMode,
        },
      );
    };
  },

  /**
   * Create itSuccessChecksFn that will just check that a FlowStage's result
   * has an HTTP XXX status (e.g. 204).
   *
   * This only works for FlowStages whose result is just an HTTP response.
   *
   * @param {number} expectedStatus
   */
  simpleHttpXXXSuccessChecks(expectedStatus) {
    return (/** @type {FlowStageTypeWithHttpResponseOutput} */ flowStage) => {
      it(`should return ${expectedStatus} on success`, () => {
        chakram.expect(flowStage.getOutput().httpResponse).to.have.status(expectedStatus);
      });
    };
  },

  /**
   * Create itSuccessChecksFn that will just check that a FlowStage's result
   * has an HTTP 200 status.
   *
   * This only works for FlowStages whose result is just an HTTP response.
   */
  simpleHttp200SuccessChecks() {
    return FlowStageUtils.simpleHttpXXXSuccessChecks(200);
  },

  /**
   * Create itSuccessChecksFn that will just check that a FlowStage's result
   * has an HTTP 200 status.
   *
   * This only works for FlowStages whose result is just an HTTP response.
   */
  simpleHttp201SuccessChecks() {
    return FlowStageUtils.simpleHttpXXXSuccessChecks(201);
  },

  /**
   * Create itSuccessChecksFn that will just check that a FlowStage's result
   * has an HTTP 204 status.
   *
   * This only works for FlowStages whose result is just an HTTP response.
   */
  simpleHttp204SuccessChecks() {
    return FlowStageUtils.simpleHttpXXXSuccessChecks(204);
  },

  // # Utilities for test specs

  /**
   * @param {object} args
   * @param {RequestHelperType} args.requestHelper
   * @param {BaseLoggerType} args.logger
   * @param {string} [args.uuid]
   * @param {SellerConfig} [args.sellerConfig]
   * @param {Customer} [args.customer]
   */
  createDefaultFlowStageParams({ requestHelper, logger, uuid, sellerConfig, customer }) {
    return {
      requestHelper,
      logger,
      uuid: uuid || generateUuid(),
      sellerConfig: sellerConfig || SELLER_CONFIG.primary,
      customer: customer || this.createRandomCustomerDetails(),
    };
  },

  /**
   * Randomly generate customer details
   * @returns {Customer}
   */
  createRandomCustomerDetails() {
    return {
      '@type': 'Person',
      email: faker.internet.email(),
      telephone: faker.phone.phoneNumber(),
      givenName: faker.name.lastName(),
      familyName: faker.name.firstName(),
      identifier: faker.datatype.uuid(),
    };
  },

  /**
   * Uses reasonable values for:
   * - sellerConfig: derived from tax mode (if provided) - otherwise, primary seller
   * - requestHelper: A new one is created using the data present
   *
   * @param {object} args
   * @param {BaseLoggerType} args.logger
   * @param {string | null} [args.taxMode]
   */
  createSimpleDefaultFlowStageParams({ logger, taxMode = null }) {
    const sellerConfig = taxMode ? getSellerConfigWithTaxMode(taxMode) : SELLER_CONFIG.primary;
    const requestHelper = new RequestHelper(logger, sellerConfig);
    return FlowStageUtils.createDefaultFlowStageParams({
      requestHelper, logger, sellerConfig,
    });
  },

  /**
   * Creates a `describe(..)` block in which:
   *
   * 1. Runs the flow stage in a `beforeAll(..)` block.
   * 2. (Depending on the value of `checks`) Runs success checks and validation checks of the response in `it(..)` blocks.
   * 3. Optionally runs extra tests.
   *
   * @param {object} checks
   * @param {boolean} checks.doCheckSuccess If true, success checks will be run
   * @param {boolean} checks.doCheckIsValid If true, validation will be run
   * @param {UnknownFlowStageType | BookRecipe} flowStageOrBookRecipe If this is a BookRecipe,
   *   all stages within will be checked for validity/success.
   *
   *   NOTE It is recommended to only use a BookRecipe when expecting success. If expecting failure,
   *   it is recommended to run only the first stage `describeRunAndRunChecks({ .. }, bookRecipe.firstStage)`.
   *   There is no point simulating approval if P was expected to fail.
   * @param {() => void} [itAdditionalTests] Additional tests which will
   *   be run after success and validation tests have run.
   *   These tests need to create `it(..)` blocks for each of the new tests.
   *   The tests will be run within the same `describe(..)` block as
   *   success/validation tests.
   */
  describeRunAndRunChecks(checks, flowStageOrBookRecipe, itAdditionalTests) {
    if (flowStageOrBookRecipe instanceof BookRecipe) {
      if (flowStageOrBookRecipe.p) {
        FlowStageUtils.describeRunAndRunChecks(checks, flowStageOrBookRecipe.p);
        /* TODO optimize: Make it possible to stop after P if P fails. If P fails, there's not going to be any items
        approved items appearing in the feed - which means that the tests will time out */
        FlowStageUtils.describeRunAndRunChecks(checks, flowStageOrBookRecipe.simulateSellerApproval);
        FlowStageUtils.describeRunAndRunChecks(checks, flowStageOrBookRecipe.orderFeedUpdateCollector);
        FlowStageUtils.describeRunAndRunChecks(checks, flowStageOrBookRecipe.b);
        FlowStageUtils.describeRunAndRunChecks(
          checks,
          flowStageOrBookRecipe.orderFeedUpdateAfterDeleteProposal,
          itAdditionalTests,
        );
      } else {
        FlowStageUtils.describeRunAndRunChecks(checks, flowStageOrBookRecipe.b, itAdditionalTests);
      }
      return;
    }
    if (!flowStageOrBookRecipe.shouldDescribeFlowStage) {
      throw new Error(`describeRunAndCheckIsSuccessfulAndValid(..) cannot run on ${flowStageOrBookRecipe.getLoggableStageName()} as shouldDescribeFlowStage is false`);
    }
    describe(flowStageOrBookRecipe.testName, () => {
      flowStageOrBookRecipe.beforeSetup();

      if (checks.doCheckSuccess) {
        flowStageOrBookRecipe.itSuccessChecks();
      }
      if (checks.doCheckIsValid) {
        flowStageOrBookRecipe.itValidationTests();
      }

      if (itAdditionalTests) {
        itAdditionalTests();
      }
    });
  },

  /**
   * Creates a `describe(..)` block in which:
   *
   * 1. Runs the flow stage in a `beforeAll(..)` block.
   * 2. Runs success checks and validation checks of the response in `it(..)` blocks.
   * 3. Optionally runs extra tests.
   *
   * @param {UnknownFlowStageType | BookRecipe} flowStageOrBookRecipe If this is a BookRecipe,
   *   all stages within will be checked for validity/success.
   * @param {() => void} [itAdditionalTests] Additional tests which will
   *   be run after success and validation tests have run.
   *   These tests need to create `it(..)` blocks for each of the new tests.
   *   The tests will be run within the same `describe(..)` block as
   *   success/validation tests.
   */
  describeRunAndCheckIsSuccessfulAndValid(flowStageOrBookRecipe, itAdditionalTests) {
    return FlowStageUtils.describeRunAndRunChecks({ doCheckIsValid: true, doCheckSuccess: true }, flowStageOrBookRecipe, itAdditionalTests);
  },

  /**
   * Use for a FlowStage which is expected to return a (valid) error response.
   *
   * Creates a `describe(..)` block in which:
   *
   * 1. Runs the flow stage in a `beforeAll(..)` block.
   * 2. Runs validation checks of the response in `it(..)` blocks.
   *   NOTE: Success checks are not run
   * 3. Optionally runs extra tests.
   *
   * @param {UnknownFlowStageType | BookRecipe} flowStageOrBookRecipe If this is a BookRecipe,
   *   all stages within will be checked for validity.
   * @param {() => void} [itAdditionalTests] Additional tests which will
   *   be run after success and validation tests have run.
   *   These tests need to create `it(..)` blocks for each of the new tests.
   *   The tests will be run within the same `describe(..)` block as
   *   success/validation tests.
   */
  describeRunAndCheckIsValid(flowStageOrBookRecipe, itAdditionalTests) {
    return FlowStageUtils.describeRunAndRunChecks({ doCheckIsValid: true, doCheckSuccess: false }, flowStageOrBookRecipe, itAdditionalTests);
  },
};

module.exports = {
  FlowStageUtils,
};
