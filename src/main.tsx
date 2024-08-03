import "@mantine/core/styles.layer.css";
import "@mantine/nprogress/styles.layer.css";
import "mantine-datatable/styles.layer.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { MantineProvider, ScrollArea, createTheme } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "./Router";
import { NavigationProgress } from "@mantine/nprogress";

library.add(fas, far);

const theme = createTheme({
  primaryColor: "blue",
  colors: {
    blue: [
      "#7AD1DD",
      "#5FCCDB",
      "#44CADC",
      "#2AC9DE",
      "#1AC2D9",
      "#11B7CD",
      "#09ADC3",
      "#0E99AC",
      "#128797",
      "#147885",
    ],
    pink: [
      "#F0BBDD",
      "#ED9BCF",
      "#EC7CC3",
      "#ED5DB8",
      "#F13EAF",
      "#F71FA7",
      "#FF00A1",
      "#E00890",
      "#C50E82",
      "#AD1374",
    ],
  },
});

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider defaultColorScheme="auto" theme={theme}>
      <ScrollArea h="100vh">
        <QueryClientProvider client={queryClient}>
          <NavigationProgress />
          <Router />
        </QueryClientProvider>
      </ScrollArea>
    </MantineProvider>
  </React.StrictMode>
);
