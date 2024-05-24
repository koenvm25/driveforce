import { Countdown } from "@/components/Countdown/Countdown";
import { getNextEvent } from "@/helpers/scheduleHelpers";
import { useCurrentSeasonScheduleQuery } from "@/queries/RaceScheduleQueries";
import { Box, Title } from "@mantine/core";
import { useMemo } from "react";
import classes from "./Dashboard.module.css";

export const Dashboard: React.FC = () => {
  const currentRaceSchedule = useCurrentSeasonScheduleQuery();
  const nextEvent = useMemo(
    () => getNextEvent(currentRaceSchedule.data?.races),
    [currentRaceSchedule.data?.races]
  );

  if (!nextEvent) return null;

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
