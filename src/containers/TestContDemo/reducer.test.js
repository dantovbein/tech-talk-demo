/* Auto-generated file created by Dan Tovbein 06/06/2019 at 13:34:16hs */

import {
  TEST_CONT_DEMO
} from "../../constants/";

import Reducer, { initialState } from "./reducer";

beforeEach(() => {});
afterEach(() => {});
beforeAll(() => {});
afterAll(() => {});

describe("Reducer :: <TestContDemo/>", () => {

  test("Has an initial state", () => {

    const initialStateExpected = {
      name: ""
    };

    expect(Reducer(undefined, {
      type: "unexpected",
      payload: null
    })).toEqual({
      ...initialStateExpected
    });
  });

  test(`'name' value should be the same as '${TEST_CONT_DEMO}' when the action is '${TEST_CONT_DEMO}'`, () => {
    expect(Reducer(undefined, {
      type: TEST_CONT_DEMO,
      payload: {
        name: TEST_CONT_DEMO
      }
    })).toEqual({
      ...initialState,
      name: TEST_CONT_DEMO
    });
  });
});
