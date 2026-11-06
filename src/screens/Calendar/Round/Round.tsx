import { Countdown } from "@/components/Countdown/Countdown";
import { QualifyingResult } from "@/components/Qualifying";
import { RaceResult } from "@/components/RaceResult";
import { SprintResult } from "@/components/SprintResult";
import { IRoundLoader } from "@/utils/loaders";
import { getNextEvent, getWeekendSessions } from "@/utils/scheduleHelpers";
import { getTeamColor } from "@/utils/teamColors";
import { Box, Tabs, Text, Title } from "@mantine/core";
import { DateTime } from "luxon";
import { Link, useLoaderData } from "react-router-dom";
import classes from "./Round.module.css";

export const Round: React.FC = () => {
  const { race, raceResult, sprintResult, qualifyingResult } =
    useLoaderData() as IRoundLoader;

  if (!race) return null;

  const now = DateTime.now();
  const nextEvent = getNextEvent([race]);
  const sessions = getWeekendSessions(race);
  const { locality, country } = race.circuit.location;
  const winner = raceResult?.race[0];

  const resultTabs: { value: string; label: string; content: React.ReactNode }[] = [];
  if (raceResult) {
    resultTabs.push({ value: "race", label: "Race", content: <RaceResult /> });
  }
  if (sprintResult) {
    resultTabs.push({ value: "sprint", label: "Sprint", content: <SprintResult /> });
  }
  if (qualifyingResult) {
    resultTabs.push({
      value: "qualifying",
      label: "Qualifying",
      content: <QualifyingResult />,
    });
  }

  const firstDay = sessions[0]?.dateTime ?? race.events.race.dateTime;
  const lastDay = race.events.race.dateTime;

  return (
    <Box className={classes.root}>
      <Link to={`/calendar/${race.season}`} className={classes.back}>
        ← {race.season} calendar
      </Link>

      <Box className={classes.header}>
        <Box className={classes.roundNumber}>{race.round.padStart(2, "0")}</Box>
        <Box>
          <Title order={1} className={classes.title}>
            {race.name}
          </Title>
          <Text className={classes.subtitle}>
            {race.circuit.name} · {locality}, {country} ·{" "}
            {firstDay.hasSame(lastDay, "day")
              ? lastDay.toFormat("LLL dd, yyyy")
              : `${firstDay.toFormat("LLL dd")} – ${lastDay.toFormat("LLL dd, yyyy")}`}
          </Text>
        </Box>
      </Box>

      <Box className={classes.layout}>
        <Box className={`${classes.card} ${classes.main}`}>
          {resultTabs.length > 0 ? (
            <Tabs defaultValue={resultTabs[0].value} variant="unstyled">
              <Tabs.List className={classes.pills} mb="sm">
                {resultTabs.map((tab) => (
                  <Tabs.Tab key={tab.value} value={tab.value} className={classes.pill}>
                    {tab.label}
                  </Tabs.Tab>
                ))}
              </Tabs.List>
              {resultTabs.map((tab) => (
                <Tabs.Panel key={tab.value} value={tab.value}>
                  {tab.content}
                </Tabs.Panel>
              ))}
            </Tabs>
          ) : nextEvent ? (
            <Box className={classes.upcoming}>
              <Text className={classes.eyebrow}>Up next</Text>
              <Title order={2} className={classes.cardTitle}>
                {nextEvent.name} starts in
              </Title>
              <Countdown dateTime={nextEvent.dateTime} />
              <Text c="dimmed">Results appear here once the sessions are done.</Text>
            </Box>
          ) : (
            <Text c="dimmed" py="xl">
              No results available for this round.
            </Text>
          )}
        </Box>

        <Box className={classes.aside}>
          <Box className={classes.card}>
            <Box className={classes.cardHeader}>
              <Title order={2} className={classes.cardTitle}>
                Weekend
              </Title>
              <Text size="sm" c="dimmed">
                {now.zoneName}
              </Text>
            </Box>
            <Box>
              {sessions.map((session) => (
                <Box
                  key={session.name}
                  className={classes.session}
                  data-past={(!!nextEvent && session.dateTime < now) || undefined}
                >
                  <Box>
                    <Box className={classes.sessionName}>{session.name}</Box>
                    <Box className={classes.sessionDate}>
                      {session.dateTime.toFormat("ccc LLL dd")}
                    </Box>
                  </Box>
                  <Box
                    className={classes.sessionTime}
                    data-next={
                      (!!nextEvent && session.dateTime.equals(nextEvent.dateTime)) ||
                      undefined
                    }
                  >
                    {session.dateTime.toFormat("HH:mm")}
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>

          {winner && (
            <Box className={classes.card}>
              <Title order={2} className={classes.cardTitle}>
                Winner
              </Title>
              <Box className={classes.winner}>
                <Box
                  className={classes.winnerBar}
                  style={{ backgroundColor: getTeamColor(winner.constructor.id) }}
                />
                <Box>
                  <Box className={classes.winnerName}>
                    {winner.driver.givenName} {winner.driver.familyName}
                  </Box>
                  <Text size="sm" c="dimmed">
                    {winner.constructor.name}
                    {winner.time ? ` · ${winner.time}` : ""}
                  </Text>
                </Box>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};
