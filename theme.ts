"use client";

import { createTheme, CSSVariablesResolver } from "@mantine/core";

export const theme = createTheme({
  /* Put your mantine theme override here */
  fontFamily: "Mont, sans-serif",
  primaryColor: "orange",
  primaryShade: 5, // styles focus outline
  colors: {
    green: [
      "#f4f8f2",
      "#e7ede5",
      "#ccd9c6",
      "#afc5a4",
      "#96b487",
      "#86a974",
      "#7da46a",
      "#6b8f59",
      "#5e7f4d",
      "#2a3b22", // primary [9]
    ],
    orange: [
      "#ffefe3",
      "#ffdecf",
      "#fabda1",
      "#f5996f",
      "#f07a44",
      "#ee6628", // primary [5]
      "#ee5c1a",
      "#d44c0d",
      "#bd4208",
      "#a53601",
    ],
  },

  // custom CSS variable values
  other: {
    headerHeight: "100px",
  },
});

export const resolver: CSSVariablesResolver = theme => ({
  variables: {
    "--header-height": theme.other.headerHeight,
  },
  light: {},
  dark: {},
});
