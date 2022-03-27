import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const rootElement = screen.queryByTestId("app");
  expect(rootElement).toBeInTheDocument();
});
