import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("increments counter when button is clicked", () => {
  render(<App />);
  
  // Buscar el botón con el texto "count is 0"
  const button = screen.getByText(/count is/i);

  // Simular un clic en el botón
  fireEvent.click(button);

  // Verificar que el contador se haya incrementado
  expect(button).toHaveTextContent("count is 1");
});
