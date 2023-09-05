import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

test("it renders wihtout crashing", () => {
  render(<Card />);
});

it("should match snapshot", () => {
  const { asFragment } = render(<Card />);
  expect(asFragment()).toMatchSnapshot();
});
