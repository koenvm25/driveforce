import React from "react";

import { Box } from "@mantine/core";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";

export const Layout: React.FC = () => (
  <div>
    <Header />
    <Box style={{ width: "100%" }} p={16} display="flex">
      <Outlet />
    </Box>
  </div>
);
