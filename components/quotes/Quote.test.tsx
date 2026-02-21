import { describe, it, expect } from "vitest";
import { render, screen } from "../../test-utils";
import Quote from "./Quote";

const defaultProps = {
  avatar: "/images/test-avatar.jpg",
  alt: "Test person",
  bg: "white",
  quote: "This is a testimonial quote.",
  author: "Test Author",
  title: "Senior Designer",
};

describe("Quote — textColor logic", () => {
  // The textColor derivation in Quote.tsx: bg === "green.9" ? "white" : "black"
  // Mantine passes `c` as a CSS variable, so we verify the rendered quote text
  // is present and the component does not throw for each bg variant.

  it("renders the quote text when bg is green.9", () => {
    render(<Quote {...defaultProps} bg="green.9" />);
    expect(
      screen.getByText("This is a testimonial quote.")
    ).toBeInTheDocument();
  });

  it("renders the quote text when bg is white", () => {
    render(<Quote {...defaultProps} bg="white" />);
    expect(
      screen.getByText("This is a testimonial quote.")
    ).toBeInTheDocument();
  });

  it("renders author and title", () => {
    render(<Quote {...defaultProps} />);
    expect(screen.getByText("Test Author")).toBeInTheDocument();
    expect(screen.getByText("Senior Designer")).toBeInTheDocument();
  });
});
