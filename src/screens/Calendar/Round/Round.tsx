import { Countdown } from "@/components/Countdown/Countdown";
import { PitStops } from "@/components/PitStops";
import { QualifyingResult } from "@/components/Qualifying";
import { RaceResult } from "@/components/RaceResult";
import { SprintResult } from "@/components/SprintResult";
import { downloadWeekendCalendar } from "@/utils/calendarFile";
import { IRoundLoader } from "@/utils/loaders";
import { getNextEvent, getWeekendSessions } from "@/utils/scheduleHelpers";
import { getTeamColor } from "@/utils/teamColors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Tabs, Text, Title } from "@mantine/core";
import { DateTime } from "luxon";
import { Link, useLoaderData } from "react-router-dom";
import { PastWinners } from "./PastWinners";
import classes from "./Round.module.css";

const RoundStep: React.FC<{
  label: string;
  icon: "chevron-left" | "chevron-right";
  to: string | undefined;
}> = ({ label, icon, to }) =>
  to ? (
    <Link to={to} className={classes.step} aria-label={label}>
      <FontAwesomeIcon icon={["fas", icon]} />
    </Link>
  ) : (
    <span className={classes.step} aria-label={label} aria-disabled="true">
      <FontAwesomeIcon icon={["fas", icon]} />
    </span>
  );

export const Round: React.FC = () => {
  const { race, roundCount, raceResult, sprintResult, qualifyingResult } =
    useLoaderData() as IRoundLoader;

  if (!race) return null;

  const now = DateTime.now();
  const roundNumber = Number(race.round);
  const nextEvent = getNextEvent([race]);
  const sessions = getWeekendSessions(race);
  const { locality, country } = race.circuit.location;
  const winner = raceResult?.race[0];

  const resultTabs: {
    value: string;
    label: string;
    content: React.ReactNode;
  }[] = [];
  if (raceResult) {
    resultTabs.push({ value: "race", label: "Race", content: <RaceResult /> });
  }
  if (sprintResult) {
    resultTabs.push({
      value: "sprint",
      label: "Sprint",
      content: <SprintResult />,
    });
  }
  if (qualifyingResult) {
    resultTabs.push({
      value: "qualifying",
      label: "Qualifying",
      content: <QualifyingResult />,
    });
  }
  if (raceResult) {
    resultTabs.push({
      value: "pitstops",
      label: "Pit stops",
      content: <PitStops />,
    });
  }

  const firstDay = sessions[0]?.dateTime ?? race.events.race.dateTime;
  const lastDay = race.events.race.dateTime;

  return (
    <Box className={classes.root}>
      <Box className={classes.topBar}>
        <Link to={`/calendar/${race.season}`} className={classes.back}>
          ← {race.season} calendar
        </Link>
        <Box className={classes.stepper}>
          <RoundStep
            label="Previous round"
            icon="chevron-left"
            to={
              roundNumber > 1
                ? `/calendar/${race.season}/${roundNumber - 1}`
                : undefined
            }
          />
          <RoundStep
            label="Next round"
            icon="chevron-right"
            to={
              roundCount && roundNumber < roundCount
                ? `/calendar/${race.season}/${roundNumber + 1}`
                : undefined
            }
          />
        </Box>
      </Box>

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
            <Tabs
              defaultValue={resultTabs[0].value}
              variant="unstyled"
              keepMounted={false}
            >
              <Tabs.List className={classes.pills} mb="sm">
                {resultTabs.map((tab) => (
                  <Tabs.Tab
                    key={tab.value}
                    value={tab.value}
                    className={classes.pill}
                  >
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
              <Text c="dimmed">
                Results appear here once the sessions are done.
              </Text>
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
                  data-past={
                    (!!nextEvent && session.dateTime < now) || undefined
                  }
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
                      (!!nextEvent &&
                        session.dateTime.equals(nextEvent.dateTime)) ||
                      undefined
                    }
                  >
                    {session.dateTime.toFormat("HH:mm")}
                  </Box>
                </Box>
              ))}
            </Box>
            <button
              type="button"
              className={classes.outlineButton}
              onClick={() => downloadWeekendCalendar(race)}
            >
              <FontAwesomeIcon icon={["far", "calendar-plus"]} />
              Add to calendar
            </button>
          </Box>

          <PastWinners circuitId={race.circuit.id} season={race.season} />

          {winner && (
            <Box className={classes.card}>
              <Title order={2} className={classes.cardTitle}>
                Winner
              </Title>
              <Box className={classes.winner}>
                <Box
                  className={classes.winnerBar}
                  style={{
                    backgroundColor: getTeamColor(winner.constructor.id),
                  }}
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
