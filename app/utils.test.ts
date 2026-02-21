import { describe, it, expect, afterEach } from "vitest";
import { getSrc } from "./utils";

describe("getSrc", () => {
  const originalEnv = process.env.NEXT_PUBLIC_SITE_ENV;

  afterEach(() => {
    process.env.NEXT_PUBLIC_SITE_ENV = originalEnv;
  });

  it("prepends the base path when SITE_ENV is staging", () => {
    process.env.NEXT_PUBLIC_SITE_ENV = "staging";
    expect(getSrc("/contact")).toBe("/sarah-taylor-freelance-website/contact");
  });

  it("returns the path unchanged when SITE_ENV is prod", () => {
    process.env.NEXT_PUBLIC_SITE_ENV = "prod";
    expect(getSrc("/contact")).toBe("/contact");
  });

  it("returns the path unchanged when SITE_ENV is undefined", () => {
    delete process.env.NEXT_PUBLIC_SITE_ENV;
    expect(getSrc("/contact")).toBe("/contact");
  });

  it("handles empty string paths", () => {
    process.env.NEXT_PUBLIC_SITE_ENV = "staging";
    expect(getSrc("")).toBe("/sarah-taylor-freelance-website");
  });
});
