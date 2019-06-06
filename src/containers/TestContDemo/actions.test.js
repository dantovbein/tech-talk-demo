/* Auto-generated file created by Dan Tovbein 06/06/2019 at 13:34:16hs */

import React from "react";
import { Provider } from "react-redux";
import { shallow } from "enzyme";
import TestContDemo from "./index";
import Store from "../../store";
import {
  setNameToComponent
} from "./actions";
import {
  TEST_CONT_DEMO
} from "../../constants/";

beforeEach(() => {});
afterEach(() => {});
beforeAll(() => {});
afterAll(() => {});

describe("Actions :: <TestContDemo/>", () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow( <Provider store={Store}><TestContDemo /></Provider> )
  });

  test("Component <TestContDemo/> should change it's name from 'null' to 'TestContDemo'", () => {
    const expectedAction = {
      type: TEST_CONT_DEMO,
      payload: {
        name: TEST_CONT_DEMO
      }
    };

    expect(Store.getState().testContDemoReducer.name).toBe(null);
    expect(Store.dispatch(setNameToComponent(TEST_CONT_DEMO))).toEqual(expectedAction);
    expect(Store.getState().testContDemoReducer.name).toBe(TEST_CONT_DEMO);
  });

});
