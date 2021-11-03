import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Footer from "../Footer/Footer.js";

describe("Footer Component", () => {
  test("check footer brand name", () => {
    render(<Footer />);
    const linkElement = screen.getByText("LA Store", { exact: false });
    expect(linkElement).toBeInTheDocument();
  });

  test("check footer subscribe now text", () => {
    render(<Footer />);
    const linkElement = screen.getByText(
      "Stay In Touch! Join our Newsletter.",
      { exact: false }
    );

    expect(linkElement).toBeInTheDocument();
  });
});
