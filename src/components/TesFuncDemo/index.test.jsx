/* Auto-generated file created by Dan Tovbein 06/06/2019 at 13:30:16hs */

import React from "react";
import { render, shallow, mount } from "enzyme";
import TesFuncDemo from "./index";
import * as styles from "./styles.css";

describe("Standard Component :: <TesFuncDemo/>", () => {

  const _props = {
    ___name: "TesFuncDemo"
  };

  beforeEach(() => {});
  afterEach(() => {});
  beforeAll(() => {});
  afterAll(() => {});

  test("Component should receive default prop '___name' as TesFuncDemo", () => {
    const wrapper = mount(
      <TesFuncDemo {..._props} />
    );
    expect(wrapper.prop("___name")).toBe("TesFuncDemo")
  });

  test("Render component as expected", () => {
    const wrapper = mount(
      <TesFuncDemo {..._props} />
    );
    expect(wrapper.hasClass("styles.tesFuncDemo")).toBe(true);
  });

  test("It should have no default elements", () => {
    const wrapper = mount(
      <TesFuncDemo {..._props} />
    );
    expect(wrapper.find('.default-component-content').length).toEqual(0);
  });

  test("Check if .default-component-content class has been removed in stylesheet", () => {
    expect(false).toEqual(true);
  });

});
