import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "../test-utils";
import userEvent from "@testing-library/user-event";
import { useWindowScroll } from "@mantine/hooks";
import AppLayout from "./AppLayout";

vi.mock("./Header", () => ({ default: () => <div data-testid="header" /> }));
vi.mock("./footer/Footer", () => ({
  default: () => <div data-testid="footer" />,
}));
vi.mock("@fortawesome/react-fontawesome", () => ({
  FontAwesomeIcon: () => <svg data-testid="arrow-up-icon" />,
}));
vi.mock("@mantine/hooks", async importOriginal => {
  const actual = await importOriginal<typeof import("@mantine/hooks")>();
  return { ...actual, useWindowScroll: vi.fn() };
});

describe("AppLayout — scroll-to-top button", () => {
  const scrollTo = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("hides the scroll button when scroll position is at the top", () => {
    vi.mocked(useWindowScroll).mockReturnValue([{ x: 0, y: 0 }, scrollTo]);
    render(<AppLayout>content</AppLayout>);
    expect(screen.queryByTestId("arrow-up-icon")).not.toBeInTheDocument();
  });

  it("shows the scroll button when scrolled down", () => {
    vi.mocked(useWindowScroll).mockReturnValue([{ x: 0, y: 200 }, scrollTo]);
    render(<AppLayout>content</AppLayout>);
    expect(screen.getByTestId("arrow-up-icon")).toBeInTheDocument();
  });

  it("calls scrollTo with y:0 when the scroll button is clicked", async () => {
    vi.mocked(useWindowScroll).mockReturnValue([{ x: 0, y: 200 }, scrollTo]);
    const user = userEvent.setup();
    render(<AppLayout>content</AppLayout>);
    await user.click(screen.getByRole("button"));
    expect(scrollTo).toHaveBeenCalledWith({ y: 0 });
  });
});
