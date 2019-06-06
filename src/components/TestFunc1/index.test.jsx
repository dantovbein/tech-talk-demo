/* Auto-generated file created by Dan Tovbein 04/06/2019 at 19:18:44hs */

import React from "react";
import { render, shallow, mount } from "enzyme";
import TestFunc1 from "./index";
import styles from "./styles.css";

describe("Standard Component :: <TestFunc1/>", () => {

  const _props = {
    ___name: "TestFunc1"
  };

  beforeEach(() => {});
  afterEach(() => {});
  beforeAll(() => {});
  afterAll(() => {});

  test("Component should receive default prop '___name' as TestFunc1", () => {
    const wrapper = mount(
      <TestFunc1 {..._props} />
    );
    expect(wrapper.prop("___name")).toBe("TestFunc1") 
  });

  test("Render component as expected", () => {
    const wrapper = shallow(
      <TestFunc1 {..._props} />
    );
    expect(wrapper.hasClass('test-func1')).toBe(true); // modifique esto
  });

  test("It should have no default elements", () => {
    const wrapper = mount(
      <TestFunc1 {..._props} />
    );
    expect(wrapper.find('.default-component-content').length).toEqual(0);
  });

  /*
  test("Check if .default-component-content class has been removed in stylesheet", () => {
    expect(false).toEqual(true);
  });
  */

});
