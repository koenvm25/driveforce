import React, { useEffect } from "react";

import { Box } from "@mantine/core";
import { Outlet, useNavigation } from "react-router-dom";
import { Header } from "../Header/Header";
import { nprogress } from "@mantine/nprogress";

export const Layout: React.FC = () => {
  const navigation = useNavigation();

  useEffect(() => {
    console.log(navigation.state);
    if (navigation.state === "loading") {
      console.log("Start loading");
      nprogress.start();
    } else if (navigation.state === "idle") {
      console.log("Complete loading");
      nprogress.complete();
    }
  }, [navigation.state]);

  return (
    <div>
      <Header />
      <Box style={{ width: "100%" }} p={16} display="flex">
        <Outlet />
      </Box>
    </div>
  );
};
