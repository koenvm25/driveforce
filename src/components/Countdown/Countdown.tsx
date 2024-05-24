import classes from "./Countdown.module.css";
import { useCountdown } from "@/hooks/useCountdown";
import { Box, Title } from "@mantine/core";
import { DateTime } from "luxon";

export const Countdown: React.FC<{ dateTime: DateTime }> = ({ dateTime }) => {
  const countdown = useCountdown(dateTime);
  return (
    <Box className={classes.countdown}>
      {(Object.keys(countdown) as Array<keyof typeof countdown>).map((key) => (
        <Box key={key} className={classes.numberContainer}>
          <Title className={classes.number}>{countdown[key]}</Title>
          <Title className={classes.day}>{key.charAt(0).toUpperCase() + key.slice(1)}</Title>
        </Box>
      ))}
    </Box>
  );
};
