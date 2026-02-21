import { describe, it, expect, vi, beforeEach } from "vitest";
import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import { render } from "../../test-utils";
import { notifications } from "@mantine/notifications";
import Contact from "./page";

vi.mock("@mantine/notifications", () => ({
  notifications: {
    show: vi.fn(),
  },
  Notifications: () => null,
}));

describe("Contact form — validation", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("shows an error when name is less than 2 characters", async () => {
    const user = userEvent.setup();
    render(<Contact />);

    await user.type(screen.getByLabelText("Name"), "A");
    await user.click(screen.getByRole("button", { name: /send message/i }));

    expect(
      screen.getByText("Please provide a name")
    ).toBeInTheDocument();
  });

  it("passes validation when name is 2 or more characters", async () => {
    const user = userEvent.setup();
    render(<Contact />);

    await user.type(screen.getByLabelText("Name"), "Jo");
    await user.click(screen.getByRole("button", { name: /send message/i }));

    expect(
      screen.queryByText("Please provide a name")
    ).not.toBeInTheDocument();
  });

  it("shows an error for an email without @", async () => {
    const user = userEvent.setup();
    render(<Contact />);

    await user.type(screen.getByLabelText("Email"), "notanemail");
    await user.click(screen.getByRole("button", { name: /send message/i }));

    expect(
      screen.getByText("Please provide a valid email")
    ).toBeInTheDocument();
  });

  it("passes validation for a valid email format", async () => {
    const user = userEvent.setup();
    render(<Contact />);

    await user.type(screen.getByLabelText("Email"), "user@example.com");
    await user.click(screen.getByRole("button", { name: /send message/i }));

    expect(
      screen.queryByText("Please provide a valid email")
    ).not.toBeInTheDocument();
  });

  it("shows an error when subject is blank", async () => {
    const user = userEvent.setup();
    render(<Contact />);

    await user.click(screen.getByRole("button", { name: /send message/i }));

    expect(
      screen.getByText("Please provide a subject line")
    ).toBeInTheDocument();
  });

  it("shows an error when subject is only whitespace", async () => {
    const user = userEvent.setup();
    render(<Contact />);

    await user.type(screen.getByLabelText("Subject"), "   ");
    await user.click(screen.getByRole("button", { name: /send message/i }));

    expect(
      screen.getByText("Please provide a subject line")
    ).toBeInTheDocument();
  });

  it("shows an error when message is blank", async () => {
    const user = userEvent.setup();
    render(<Contact />);

    await user.click(screen.getByRole("button", { name: /send message/i }));

    expect(
      screen.getByText("Message must not be blank")
    ).toBeInTheDocument();
  });

  it("shows an error when message is only whitespace", async () => {
    const user = userEvent.setup();
    render(<Contact />);

    await user.type(screen.getByLabelText("Message"), "   ");
    await user.click(screen.getByRole("button", { name: /send message/i }));

    expect(
      screen.getByText("Message must not be blank")
    ).toBeInTheDocument();
  });
});

describe("Contact form — honeypot", () => {
  it("renders a hidden company field for bot prevention", () => {
    render(<Contact />);

    const honeypot = document.querySelector('[name="company"]') as HTMLElement;
    expect(honeypot).toBeInTheDocument();
    expect(honeypot).toHaveAttribute("tabindex", "-1");
    expect(honeypot).toHaveAttribute("autocomplete", "off");

    // Mantine's style prop lands on the TextInput root wrapper, not the <input>.
    // Walk up the DOM to verify an ancestor carries display:none.
    const hiddenAncestor = honeypot.closest('[style*="display"]') as HTMLElement;
    expect(hiddenAncestor).not.toBeNull();
    expect(hiddenAncestor.style.display).toBe("none");
  });
});

describe("Contact form — submit flow", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  async function fillValidForm(user: ReturnType<typeof userEvent.setup>) {
    await user.type(screen.getByLabelText("Name"), "Jane Doe");
    await user.type(screen.getByLabelText("Email"), "jane@example.com");
    await user.type(screen.getByLabelText("Subject"), "Hello");
    await user.type(screen.getByLabelText("Message"), "This is a test message");
  }

  it("shows a success notification after a successful fetch", async () => {
    const user = userEvent.setup();
    render(<Contact />);

    global.fetch = vi.fn().mockResolvedValue({ ok: true });

    await fillValidForm(user);
    await user.click(screen.getByRole("button", { name: /send message/i }));

    expect(notifications.show).toHaveBeenCalledWith(
      expect.objectContaining({ title: "Thanks for your message!" })
    );
  });

  it("shows an error notification when fetch fails", async () => {
    const user = userEvent.setup();
    render(<Contact />);

    global.fetch = vi.fn().mockRejectedValue(new Error("Network error"));

    await fillValidForm(user);
    await user.click(screen.getByRole("button", { name: /send message/i }));

    expect(notifications.show).toHaveBeenCalledWith(
      expect.objectContaining({
        title: "Sorry, an error has occurred",
        color: "red",
      })
    );
  });

  it("includes all form values in the fetch body", async () => {
    const user = userEvent.setup();
    render(<Contact />);

    global.fetch = vi.fn().mockResolvedValue({ ok: true });

    await fillValidForm(user);
    await user.click(screen.getByRole("button", { name: /send message/i }));

    expect(global.fetch).toHaveBeenCalledWith(
      expect.any(String),
      expect.objectContaining({
        method: "POST",
        body: expect.stringContaining('"name":"Jane Doe"'),
      })
    );
  });
});
