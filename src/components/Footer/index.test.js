import { render, screen } from "@testing-library/react";
import Footer from "./index";

test('renders Footer component',  () => {
  render(<Footer />);
  const linkHome = screen.getByText(/Home/i);
  const linkAbout = screen.getByText(/About/i);
  const linkServices = screen.getByText(/Services/i);
  const linkContact = screen.getByText(/Contact/i);

  expect(linkHome).toBeInTheDocument();
  expect(linkAbout).toBeInTheDocument();
  expect(linkServices).toBeInTheDocument();
  expect(linkContact).toBeInTheDocument();
});
