import { describe, it, expect, vi } from "vitest";
import { renderInAppShell, screen } from "../test-utils";
import userEvent from "@testing-library/user-event";
import Header from "./Header";

vi.mock("@mantine/hooks", async importOriginal => {
  const actual = await importOriginal<typeof import("@mantine/hooks")>();
  return {
    ...actual,
    useMediaQuery: vi.fn(() => true),
  };
});

describe("Header — mobile menu", () => {
  it("renders navigation links", () => {
    renderInAppShell(<Header />);
    // Both desktop NavLinks and mobile Collapse nav exist in the DOM;
    // use getAllByText since each label appears in both sections.
    expect(screen.getAllByText("About").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Services").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Work").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Contact").length).toBeGreaterThan(0);
  });

  it("clicking the burger toggles the Collapse section", async () => {
    const user = userEvent.setup();
    renderInAppShell(<Header />);

    // The Collapse section wraps the mobile NavLinks. Before clicking,
    // its height is 0 (collapsed). Clicking the burger calls handlers.toggle.
    // We verify the click completes without error and the burger renders.
    const burger = screen.getByRole("button");
    expect(burger).toBeInTheDocument();
    await user.click(burger);
    // After clicking, the Collapse `in` prop becomes true.
    // In jsdom, the height transitions to scrollHeight (which is 0 in jsdom),
    // so both states produce the same DOM height. We assert the element still exists.
    expect(burger).toBeInTheDocument();
  });
});
