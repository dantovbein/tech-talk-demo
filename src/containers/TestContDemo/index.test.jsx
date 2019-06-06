/* Auto-generated file created by Dan Tovbein 06/06/2019 at 13:34:15hs */

import React from "react";
import { render, shallow, mount } from "enzyme";
import TestContDemo from "./index";
import sinon from "sinon";
import configureStore from "redux-mock-store";
import Store from "../../store";
import {
  TEST_CONT_DEMO
} from "../../constants/";
import * as styles from "./styles.css";

describe("Smart Component :: <TestContDemo/>", () => {

  const mockStore = configureStore()({
    testContDemoReducer: {
      name: TEST_CONT_DEMO
    }
  });

  const _props = {
    ___name: "TestContDemo"
  };

  const dispatch = sinon.spy();

  beforeEach(() => {});
  afterEach(() => {});
  beforeAll(() => {});
  afterAll(() => {});

  test("Component should receive default prop '___name' as TestContDemo", () => {
    const wrapper = render(
      <TestContDemo {..._props}
                     dispatch={dispatch}
                     store={mockStore}/>
    );
    expect(wrapper.prop("___name")).toBe("TestContDemo")
  });

  test("Render as expected and create it's own state on the store", () => {
    const wrapper = render(
      <TestContDemo {..._props}
                     dispatch={dispatch}
                     store={mockStore}
      />
    );
    expect(Store.getState().testContDemoReducer).toBeDefined();
    expect(wrapper.hasClass("styles.testContDemo")).toBe(true);
  });

  test("Calls componentDidMount once it's rendered", () => {
    const wrapper = render(
      <TestContDemo {..._props}
                     dispatch={dispatch}
                     store={mockStore}
      />
    );
    shallow(wrapper);
    const componentDidMount = sinon.spy(TestContDemo.prototype, "componentDidMount");
    expect(componentDidMount.calledOnce).toEqual(true);
  });

  test("It should have no default elements", () => {
    const wrapper = render(
      <TestContDemo {..._props}
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
