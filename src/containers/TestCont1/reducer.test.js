/* Auto-generated file created by Dan Tovbein 04/06/2019 at 19:25:46hs */

import {
  TEST_CONT1
} from "../../constants/";

import Reducer, { initialState } from "./reducer";

beforeEach(() => {});
afterEach(() => {});
beforeAll(() => {});
afterAll(() => {});

describe("Reducer :: <TestCont1/>", () => {

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

  test(`'name' value should be the same as '${TEST_CONT1}' when the action is '${TEST_CONT1}'`, () => {
    expect(Reducer(undefined, {
      type: TEST_CONT1,
      payload: {
        name: TEST_CONT1
      }
    })).toEqual({
      ...initialState,
      name: TEST_CONT1
    });
  });
});
