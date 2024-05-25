import classes from "./Round.module.css";
import { NextEventBanner } from "@/components/NextEvent/NextEventBanner";
import { QualifyingResult } from "@/components/Qualifying";
import { RaceResult } from "@/components/RaceResult";
import { SprintResult } from "@/components/SprintResult";
import { getNextEvent, isEventInTheFuture } from "@/helpers/scheduleHelpers";
import { useRoundScheduleQuery } from "@/queries/RaceScheduleQueries";
import { Event } from "@/types/RaceSchedule";
import { Box, Text, Divider, Loader, Tabs, Title } from "@mantine/core";
import { useMemo } from "react";
import { useParams } from "react-router-dom";

type Params = {
  season: string;
  round: string;
};

export const Round: React.FC = () => {
  const { season, round } = useParams<keyof Params>() as Params;
  const roundSchedule = useRoundScheduleQuery(season, round);
  const race = useMemo(() => roundSchedule.data?.races[0], [roundSchedule]);
  const resultsAreActive = race
    ? isEventInTheFuture(race.events.qualifying)
    : undefined;

  const nextEvent = getNextEvent(roundSchedule.data?.races);

  return (
    <Box flex={1}>
      {roundSchedule.isLoading && <Loader />}
      {race && (
        <Box flex={1}>
          {nextEvent && <NextEventBanner nextEvent={nextEvent} />}
          <Tabs className={classes.tabsContainer} defaultValue="schedule">
            <Tabs.List>
              <Tabs.Tab value="schedule">Schedule</Tabs.Tab>
              <Tabs.Tab value="results" disabled={!resultsAreActive}>
                Results
              </Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value="schedule" w="100%">
              {race.events.isSprintWeekend ? (
                <Box className={classes.events}>
                  <EventDisplay event={race.events.race} />
                  <EventDisplay event={race.events.qualifying} />
                  <EventDisplay event={race.events.sprint} />
                  <EventDisplay event={race.events.sprintShootout} />
                  <EventDisplay event={race.events.firstPractice} />
                </Box>
              ) : (
                <Box className={classes.events}>
                  <EventDisplay event={race.events.race} />
                  <EventDisplay event={race.events.qualifying} />
                  <EventDisplay event={race.events.thirdPractice} />
                  <EventDisplay event={race.events.secondPractice} />
                  <EventDisplay event={race.events.firstPractice} />
                </Box>
              )}
            </Tabs.Panel>
            <Tabs.Panel value="results" w="100%">
              <Results
                isSprintWeekend={race.events.isSprintWeekend}
                {...race}
              />
            </Tabs.Panel>
          </Tabs>
        </Box>
      )}
    </Box>
  );
};

const EventDisplay: React.FC<{ event: Event }> = ({ event }) => {
  return (
    <Box className={classes.eventContainer}>
      <Box className={classes.date}>
        <Title order={2}>{event.dateTime.day}</Title>
        <Title order={4}>{event.dateTime.monthShort?.toUpperCase()}</Title>
      </Box>
      <Divider
        orientation="vertical"
        mr="lg"
        ml="lg"
        size="md"
        color="light-dark(var(--mantine-color-gray-5), var(--mantine-color-gray-9))"
      />
      <Box className={classes.event}>
        <Title order={1}>{event.name}</Title>
        <Text size="xl">{event.dateTime.toFormat("HH:mm")}</Text>
      </Box>
    </Box>
  );
};

const Results: React.FC<{
  isSprintWeekend: boolean;
  season: string;
  round: string;
}> = ({ isSprintWeekend, season, round }) => {
  return (
    <Tabs
      defaultValue="race"
      variant="pills"
      className={classes.resultContainer}
    >
      <Tabs.List>
        <Tabs.Tab value="race">Race</Tabs.Tab>
        {isSprintWeekend && <Tabs.Tab value="sprint">Sprint</Tabs.Tab>}
        <Tabs.Tab value="qualifying">Qualifying</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="race" w="100%">
        <RaceResult season={season} round={round} />
      </Tabs.Panel>
      <Tabs.Panel value="sprint" w="100%">
        <SprintResult season={season} round={round} />
      </Tabs.Panel>
      <Tabs.Panel value="qualifying" w="100%">
        <QualifyingResult season={season} round={round} />
      </Tabs.Panel>
    </Tabs>
  );
};
