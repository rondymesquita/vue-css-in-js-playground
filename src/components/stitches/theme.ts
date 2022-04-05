import { createStitches } from "@stitches/core";
import type * as Types from "@stitches/core";

const { createTheme, theme } = createStitches({
  theme: {
    colors: {
      primary: "#red",
      bg: "green",
      fg: "#eee",
    },
  },
});

export const theme2 = theme;

export const darkTheme = createTheme("dark-theme", {
  colors: {
    primary: "#00FA9A",
    bg: "#145",
    fg: "#eee",
  },
  space: {},
  fonts: {},
});

export const lightTheme = createTheme("light-theme", {
  colors: {
    primary: "#7B68EE",
    bg: "#eee",
    fg: "#145",
  },
  space: {},
  fonts: {},
});
