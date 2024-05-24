import { NextEvent } from "@/types/RaceSchedule";
import { Box, Title } from "@mantine/core";
import { Countdown } from "../Countdown/Countdown";
import classes from "./NextEventBanner.module.css";

interface Props {
  nextEvent: NextEvent;
}

export const NextEventBanner: React.FC<Props> = ({ nextEvent }) => {
  return (
    <Box className={classes.container}>
      <Box className={classes.race}>
        <Title order={1} size="3rem">
          {nextEvent.race}
        </Title>
        <Title order={2} size="2rem">
          {nextEvent.circuit}
        </Title>
      </Box>
      <Box className={classes.nextEvent}>
        <Title>{nextEvent.name}</Title>
        <Countdown dateTime={nextEvent.dateTime} />
      </Box>
    </Box>
  );
};
