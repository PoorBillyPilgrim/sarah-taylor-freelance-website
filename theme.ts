"use client";

import {
  Container,
  createTheme,
  CSSVariablesResolver,
  Text,
} from "@mantine/core";

export const theme = createTheme({
  /* TYPOGRAPHY */
  fontFamily: "Mont-Light",
  headings: {
    fontFamily: "Mont-Heavy",
    sizes: {
      h2: {
        fontSize: "2.5rem",
      },
    },
  },

  /** COLORS */
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
    pink: [
      "#fff1e7",
      "#fdd8c4", // primary [1]
      "#fac0a1",
      "#f89d6d",
      "#f68041",
      "#f56d25",
      "#f56417",
      "#da530c",
      "#c34907",
      "#aa3c00",
    ],
  },

  /** COMPONENTS */
  components: {
    Container: Container.extend({
      defaultProps: {
        size: "xl",
      },
    }),

    Text: Text.extend({
      styles: {
        root: {
          fontSize: "1.2rem",
          fontWeight: 600,
        },
      },
    }),
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
