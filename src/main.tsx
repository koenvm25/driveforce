import "@mantine/core/styles.layer.css";
import "@mantine/nprogress/styles.layer.css";
import "@mantine/charts/styles.layer.css";
import "mantine-datatable/styles.layer.css";
import "./theme.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { MantineProvider, ScrollArea } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "./Router";
import { NavigationProgress } from "@mantine/nprogress";
import { theme } from "./theme";

library.add(fas, far);

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
