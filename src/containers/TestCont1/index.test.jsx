/* Auto-generated file created by Dan Tovbein 04/06/2019 at 19:25:46hs */

import React from "react";
import { render, shallow, mount } from "enzyme";
import TestCont1 from "./index";
import sinon from "sinon";
import configureStore from "redux-mock-store";
import Store from "../../store";
import {
  TEST_CONT1
} from "../../constants/";
import * as styles from "./styles.css";

describe("Smart Component :: <TestCont1/>", () => {

  const mockStore = configureStore()({
    testCont1Reducer: {
      name: TEST_CONT1
    }
  });

  const _props = {
    ___name: "TestCont1"
  };

  const dispatch = sinon.spy();

  beforeEach(() => {});
  afterEach(() => {});
  beforeAll(() => {});
  afterAll(() => {});

  test("Component should receive default prop '___name' as TestCont1", () => {
    const wrapper = render(
      <TestCont1 {..._props}
                     dispatch={dispatch}
                     store={mockStore}/>
    );
    expect(wrapper.prop("___name")).toBe("TestCont1")
  });

  test("Render as expected and create it's own state on the store", () => {
    const wrapper = render(
      <TestCont1 {..._props}
                     dispatch={dispatch}
                     store={mockStore}
      />
    );
    expect(Store.getState().testCont1Reducer).toBeDefined();
    expect(wrapper.hasClass(`${styles.testCont1}`)).toBe(true);
  });

  test("Calls componentDidMount once it's rendered", () => {
    const wrapper = render(
      <TestCont1 {..._props}
                     dispatch={dispatch}
                     store={mockStore}
      />
    );
    shallow(wrapper);
    const componentDidMount = sinon.spy(TestCont1.prototype, "componentDidMount");
    expect(componentDidMount.calledOnce).toEqual(true);
  });

  test("It should have no default elements", () => {
    const wrapper = render(
      <TestCont1 {..._props}
                     dispatch={dispatch}
                     store={mockStore}
      />
    );
    expect(wrapper.find(".default-component-content").length === 0).toEqual(true);
  });

  test("Check if .default-component-content class has been removed in stylesheet", () => {
    expect(false).toEqual(true);
  });
});
