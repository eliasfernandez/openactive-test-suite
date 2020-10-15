// const pMemoize = require('p-memoize');
const chakram = require('chakram');
const sharedValidationTests = require('../../shared-behaviours/validation');

/**
 * @typedef {import('chakram').ChakramResponse} ChakramResponse
 * @typedef {import('../../helpers/logger').BaseLoggerType} BaseLoggerType
 * @typedef {import('../../shared-behaviours/validation').ValidationMode} ValidationMode
 * @typedef {import('./flow-stage').FlowStageState} FlowStageState
 */

/**
 * @template TFlowStageResponse
 * @typedef {object} FlowStageDefinition
 * @property {string} testName
 * @property {FlowStageDefinition<unknown>} prerequisite
 * @property {(stateSoFar: FlowStageState) => Promise<import('./flow-stage').FlowStageOutput<TFlowStageResponse>>} runFn
 * @property {(response: TFlowStageResponse, stateSoFar: FlowStageState) => void} itSuccessChecksFn
 * @property {(response: TFlowStageResponse, stateSoFar: FlowStageState) => void} itValidationTestsFn
 */

const FlowStageUtils = {
  /**
   * Create itValidationTestsFn that will work for flow stages whose result
   * is an HTTP response whose body is an OpenActive item.
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
    return (/** @type {import('./flow-stage').FlowStageType<ChakramResponse>} */ flowStage) => {
      sharedValidationTests.shouldBeValidResponse(
        () => flowStage.getResponse(),
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
   * @param {number} expectedStatus
   */
  simpleHttpXXXSuccessChecks(expectedStatus) {
    return (/** @type {import('./flow-stage').FlowStageType<ChakramResponse>} */ flowStage) => {
      it(`should return ${expectedStatus} on success`, () => {
        chakram.expect(flowStage.getResponse()).to.have.status(expectedStatus);
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

  // run: pMemoize(async )

  /**
   * Creates a `describe(..)` block in which:
   *
   * 1. Runs the flow stage in a `beforeAll(..)` block.
   * 2. Runs success checks and validation checks of the response in `it(..)` blocks.
   * 3. Optionally runs extra tests.
   *
   * @template TFlowStageResponse
   * @param {import('./flow-stage').FlowStageType<TFlowStageResponse>} flowStage
   * @param {object} options
   * @param {() => void} [options.itExtraTests] Extra tests which will be run
   *   after success and validation tests have run.
   *   These tests need to create `it(..)` blocks for each of the new tests.
   *   The tests will be run within the same `describe(..)` block as
   *   success/validation tests.
   */
  describeRunAndCheckIsSuccessfulAndValid(flowStage, options = {}) {
    // TODO TODO TODO test this + fetch-opportunities flow stage
    describe(flowStage.testName, () => {
      flowStage
        .beforeSetup()
        .itSuccessChecks()
        .itValidationTests();

      if (options.itExtraTests) {
        options.itExtraTests();
      }
    });
  },
};

/**
 * FlowStageDefinition: { preRequisite, testName, initialState }
 * FlowStageOutput: { result: FlowStageResult, state: FlowStageState }
 * FlowStageRunner: ({ definition: FlowStageDefinition, stateSoFar: FlowStageState })
 *
 * const foOutput = FlowStage.run(FetchOpportunitiesFlow.run: FlowStageRunner, definition, {}))
 * // ... in a different scope
 * FlowStage.itSuccessChecks(foOutput)
 */

module.exports = {
  FlowStageUtils,
};
