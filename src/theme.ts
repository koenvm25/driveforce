import { MantineColorsTuple, createTheme } from "@mantine/core";

const ember: MantineColorsTuple = [
  "#fff0e8",
  "#ffdccb",
  "#ffc0a3",
  "#ffa073",
  "#ff8a5a",
  "#ff7a45",
  "#c9410b",
  "#b03a0a",
  "#8f2f08",
  "#6e2406",
];

export const theme = createTheme({
  primaryColor: "ember",
  primaryShade: { light: 6, dark: 5 },
  autoContrast: true,
  colors: { ember },
  fontFamily: "Inter, system-ui, sans-serif",
  headings: {
    fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
    fontWeight: "700",
  },
  defaultRadius: "md",
});
