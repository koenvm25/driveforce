import React, { useEffect } from "react";

import { Container } from "@mantine/core";
import { Outlet, useNavigation } from "react-router-dom";
import { Header } from "../Header/Header";
import { nprogress } from "@mantine/nprogress";

export const Layout: React.FC = () => {
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "loading") {
      nprogress.start();
    } else if (navigation.state === "idle") {
      nprogress.complete();
    }
  }, [navigation.state]);

  return (
    <div>
      <Header />
      <Container size={1200} py={40} display="flex" style={{ flexDirection: "column" }}>
        <Outlet />
      </Container>
    </div>
  );
};
