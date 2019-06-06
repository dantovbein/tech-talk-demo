/* Auto-generated file created by Dan Tovbein 04/06/2019 at 19:03:45hs */

import React from "react";
import { render, shallow, mount } from "enzyme";
import TestClass1 from "./index";
import * as styles from "./styles.css";

//import Adapter from 'enzyme-adapter-react-15';

describe("Standard Component :: <TestClass1/>", () => {

  const _props = {
    ___name: "TestClass1"
  };

  beforeEach(() => {});
  afterEach(() => {});
  beforeAll(() => {});
  afterAll(() => {});

  test("Component should receive default prop '___name' as TestClass1", () => {
    const wrapper = mount(
      <TestClass1 {..._props} />
    );
    expect(wrapper.prop("___name")).toBe("TestClass1")
  });

  test("Render component as expected", () => {
    const wrapper = mount(
      <TestClass1 {..._props} />
    );
    expect(wrapper.hasClass(`${styles.testClass1}`)).toBe(true);
  });

  test("It should have no default elements", () => {
    const wrapper = mount(
      <TestClass1 {..._props} />
    );
    expect(wrapper.find('.default-component-content').length).toEqual(0);
  });

  test("Check if .default-component-content class has been removed in stylesheet", () => {
    expect(false).toEqual(true);
  });

});
