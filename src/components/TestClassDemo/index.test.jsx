/* Auto-generated file created by Dan Tovbein 06/06/2019 at 13:32:37hs */

import React from "react";
import { render, shallow, mount } from "enzyme";
import TestClassDemo from "./index";
import * as styles from "./styles.css";

describe("Standard Component :: <TestClassDemo/>", () => {

  const _props = {
    ___name: "TestClassDemo"
  };

  beforeEach(() => {});
  afterEach(() => {});
  beforeAll(() => {});
  afterAll(() => {});

  test("Component should receive default prop '___name' as TestClassDemo", () => {
    const wrapper = mount(
      <TestClassDemo {..._props} />
    );
    expect(wrapper.prop("___name")).toBe("TestClassDemo")
  });

  test("Render component as expected", () => {
    const wrapper = mount(
      <TestClassDemo {..._props} />
    );
    expect(wrapper.hasClass("styles.testClassDemo")).toBe(true);
  });

  test("It should have no default elements", () => {
    const wrapper = mount(
      <TestClassDemo {..._props} />
    );
    expect(wrapper.find('.default-component-content').length).toEqual(0);
  });

  test("Check if .default-component-content class has been removed in stylesheet", () => {
    expect(false).toEqual(true);
  });

});
