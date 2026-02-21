import { render as rtlRender, type RenderOptions } from "@testing-library/react";
import { AppShell, MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { type ReactNode } from "react";

function Providers({ children }: { children: ReactNode }) {
  return (
    <MantineProvider>
      <Notifications />
      {children}
    </MantineProvider>
  );
}

// Use this wrapper when rendering components that use AppShell.Header / AppShell.Footer
function AppShellProviders({ children }: { children: ReactNode }) {
  return (
    <MantineProvider>
      <Notifications />
      <AppShell>{children}</AppShell>
    </MantineProvider>
  );
}

export function render(ui: ReactNode, options?: RenderOptions) {
  return rtlRender(ui, { wrapper: Providers, ...options });
}

export function renderInAppShell(ui: ReactNode, options?: RenderOptions) {
  return rtlRender(ui, { wrapper: AppShellProviders, ...options });
}

export * from "@testing-library/react";
