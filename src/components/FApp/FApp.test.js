import React from "react";
import { render } from "@testing-library/react";
import FApp from "./FApp";

test("renders learn react link", () => {
  const { getByText } = render(<FApp />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
