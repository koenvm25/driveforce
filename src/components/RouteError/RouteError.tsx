import { Box, Button, Text, Title } from "@mantine/core";
import { useRouteError } from "react-router-dom";
import classes from "./RouteError.module.css";

const isRateLimited = (error: unknown) =>
  typeof error === "object" &&
  error !== null &&
  "detail" in error &&
  typeof error.detail === "string" &&
  error.detail.toLowerCase().includes("throttled");

export const RouteError: React.FC = () => {
  const error = useRouteError();
  const rateLimited = isRateLimited(error);

  return (
    <Box className={classes.root}>
      <Title order={1} className={classes.title}>
        {rateLimited ? "Slow down a moment" : "Something went wrong"}
      </Title>
      <Text c="dimmed" maw={480}>
        {rateLimited
          ? "The data provider is limiting how many requests we can send. Wait a minute and try again."
          : "We couldn't load this page. Check your connection and try again."}
      </Text>
      <Button onClick={() => window.location.reload()}>Try again</Button>
    </Box>
  );
};
