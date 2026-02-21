import "@testing-library/jest-dom";
import { vi } from "vitest";

// jsdom doesn't implement window.matchMedia, but Mantine reads it at render time
// to handle responsive styles and color scheme detection. Without this stub,
// any test that mounts a Mantine component will throw before assertions run.
// The mock always returns `matches: false` (no media query matches) and
// no-ops all listener methods since we don't need real responsive behavior in tests.
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Preemptive mock — no component currently calls useRouter/usePathname, but
// this prevents crashes if any future component imports next/navigation hooks.
vi.mock("next/navigation", () => ({
  useRouter: vi.fn(() => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
  })),
  usePathname: vi.fn(() => "/"),
  useSearchParams: vi.fn(() => new URLSearchParams()),
}));

// Replace Next.js <Link> with a plain <a> tag so tests can inspect href and
// other attributes without needing a full Next.js router context.
vi.mock("next/link", () => ({
  default: (props: {
    children?: unknown;
    href?: string;
    [key: string]: unknown;
  }) => {
    const { createElement } = require("react");
    const { children, href, ...rest } = props;
    return createElement("a", { href, ...rest }, children);
  },
}));
