import { createTheme } from "@mui/material/styles";

const palette = {
  Gradient: {
    main: "#4FC3F7",
    gradientLtr: ["#4FC3F7", "#51ABF4"],
    gradientRtl: ["#4FC3F7", "#51ABF4"],
    onGradientLight: "#FFFFFF",
    onGradientDark: "#000000",
    gradientDarkRtl: ["#4FC3F7", "#51ABF4"],
    gradientDarkLtr: ["#51ABF4", "#4FC3F7"],
  },
  primary: {
    main: "#2b2d42",
    light: "#51ABF4",
    dark: "#51ABF4",
    onLight: "#FFFFFF",
    onDark: "#102231",
    containerLight: "#DCEEFD",
    onContainerLight: "#204462",
    containerDark: "#316792",
    onContainerDark: "#B9DDFB",
  },

  secondary: {
    main: "#d90429",
    light: "#4FC3F7",
    onLight: "#FFFFFF",
    containerLight: "#DCF3FD",
    onContainerLight: "#204E63",
    dark: "#4FC3F7",
    onDark: "#102731",
    containerDark: "#2F7594",
    onContainerDark: "#B9E7FC",
  },
  Accent: {
    main: "#9980FF",
    light: "#9980FF",
    onLight: "#FFFFFF",
    containerLight: "#EBE6FF",
    onContainerLight: "#3D3366",
    ButtonLight: "#AD99FF",
    onButtonLight: "#FFFFFF",
    dark: "#AD99FF",
    onDark: "#1F1A33",
    containerDark: "#5C4D99",
    onContainerDark: "#D6CCFF",
  },
  error: {
    main: "#DC3545",
    light: "#DC3545",
    onLight: "#FFFFFF",
    contrastText: "#FFFFFF",
    containerLight: "#F2B5BB",
    onContainerLight: "#58161D",
    ButtonLight: "#E3606D",
    onButtonLight: "#FFFFFF",
    dark: "#E3606D",
    onDark: "#2C0B0E",
    containerDark: "#2C0B0E",
    onContainerDark: "#F1AFB6",
  },
  warning: {
    main: "#EFA82D",
    light: "#EFA82D",
    onLight: "#FFFFFF",
    contrastText: "#FFFFFF",
    containerLight: "#F9E1B6",
    onContainerLight: "#604312",
    dark: "#F2B957",
    onDark: "#302209",
    containerDark: "#8F651B",
    onContainerDark: "#F9DCAB",
  },
  success: {
    main: "#28AB46",
    light: "#28AB46",
    onLight: "#FFFFFF",
    contrastText: "#FFFFFF",
    containerLight: "#ACEBBB",
    onContainerLight: "#08220E",
    dark: "#53BC6B",
    onDark: "#08220E",
    containerDark: "#18672A",
    onContainerDark: "#A9DDB5",
  },
  Background: {
    background: "#F5F8FC",
    onBackground: "#61666B",
    surface: "#FFFFFF",
    onSurfaceHigh: "#4E5256",
    onSurfaceLow: "#818589",
  },
  Meta: {
    inpute: "#A0A3A6",
    inputeActive: "#61666B",
    outlineButton: "#A0A3A6",
    outlineButtonText: "#61666B",
    line: "#DFE0E1",
  },
};

const breakpoints = {
  values: {
    xxs: 0,
    xs: 425,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
};

const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: [
      "dana",
      "dana-number",
      "Open Sans",
      "Roboto",
      "Arial",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      '"Helvetica Neue"',
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  palette,
  breakpoints,
});

export default theme;
