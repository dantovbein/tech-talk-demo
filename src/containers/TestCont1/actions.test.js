/* Auto-generated file created by Dan Tovbein 04/06/2019 at 19:25:46hs */

import React from "react";
import { Provider } from "react-redux";
import { shallow } from "enzyme";
import TestCont1 from "./index";
import Store from "../../store";
import {
  setNameToComponent
} from "./actions";
import {
  TEST_CONT1
} from "../../constants/";

beforeEach(() => {});
afterEach(() => {});
beforeAll(() => {});
afterAll(() => {});

describe("Actions :: <TestCont1/>", () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow( <Provider store={Store}><TestCont1 /></Provider> )
  });

  test("Component <TestCont1/> should change it's name from 'null' to 'TestCont1'", () => {
    const expectedAction = {
      type: TEST_CONT1,
      payload: {
        name: TEST_CONT1
      }
    };

    expect(Store.getState().testCont1Reducer.name).toBe(null);
    expect(Store.dispatch(setNameToComponent(TEST_CONT1))).toEqual(expectedAction);
    expect(Store.getState().testCont1Reducer.name).toBe(TEST_CONT1);
  });

});
