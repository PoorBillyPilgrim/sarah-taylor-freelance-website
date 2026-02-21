import { describe, it, expect } from "vitest";
import { renderInAppShell, screen } from "../../test-utils";
import Footer from "./Footer";

describe("Footer", () => {
  it("renders the current year in the copyright notice", () => {
    renderInAppShell(<Footer />);
    const year = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument();
  });

  it("opens the LinkedIn link in a new tab", () => {
    renderInAppShell(<Footer />);
    const linkedin = screen.getByRole("link", { name: /linkedin/i });
    expect(linkedin).toHaveAttribute("target", "_blank");
  });

  it("opens internal links in the same tab", () => {
    renderInAppShell(<Footer />);
    const aboutLink = screen.getByRole("link", { name: /about/i });
    expect(aboutLink).toHaveAttribute("target", "_self");
  });
});
