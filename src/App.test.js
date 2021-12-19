/* eslint-disable testing-library/no-node-access */
import { render } from "@testing-library/react";
import App from "./App";

it("checks for the classname in the app component", () => {
  const { container } = render(<App />);
  expect(container.firstChild).toHaveClass("App");
});
