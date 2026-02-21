import React from "react";
import "@mantine/core/styles.layer.css";
import "@mantine/notifications/styles.layer.css";
import "@mantine/carousel/styles.layer.css";
import "./global.css";

import {
  ColorSchemeScript,
  mantineHtmlProps,
  MantineProvider,
} from "@mantine/core";
import { resolver, theme } from "../theme";
import AppLayout from "../components/AppLayout";
import { Notifications } from "@mantine/notifications";

export const metadata = {
  title: "Sarah M. Taylor",
  description: "Website for Sarah M. Taylor",
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme} cssVariablesResolver={resolver}>
          <Notifications autoClose={5000} />
          <AppLayout>{children}</AppLayout>
        </MantineProvider>
      </body>
    </html>
  );
}
