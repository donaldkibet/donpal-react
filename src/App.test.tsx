import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Donald Kibet Simple Website 2020/i);
  expect(linkElement).toBeTruthy();
});
