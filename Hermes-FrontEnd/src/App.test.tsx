import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("increments counter when button is clicked", () => {
  render(<App />);
  
  // Find the button with the text "count is 0"
  const button = screen.getByText(/count is/i);

  // Simulate a click on the button
  fireEvent.click(button);

  // Verify that the counter has incremented
  expect(button).toHaveTextContent("count is 1");
});

