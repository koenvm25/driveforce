import { Countdown } from "@/components/Countdown/Countdown";
import { IDashboardLoader } from "@/utils/loaders";
import { getWeekendSessions } from "@/utils/scheduleHelpers";
import { getTeamColor } from "@/utils/teamColors";
import { Box, Text, Title } from "@mantine/core";
import { DateTime } from "luxon";
import { Link, useLoaderData } from "react-router-dom";
import classes from "./Dashboard.module.css";

const PODIUM_COLORS = ["var(--df-gold)", "var(--df-silver)", "var(--df-bronze)"];
const PODIUM_ORDER = [1, 0, 2];
const PODIUM_HEIGHTS = ["100%", "78%", "66%"];

export const Dashboard: React.FC = () => {
  const { nextEvent, race, lastRace, driverStandings } =
    useLoaderData() as IDashboardLoader;

  const sessions = race ? getWeekendSessions(race) : [];
  const podium = lastRace?.race.slice(0, 3) ?? [];
  const topDrivers = driverStandings?.slice(0, 5) ?? [];
  const leaderPoints = Number(topDrivers[0]?.points) || 1;
  const now = DateTime.now();

  return (
    <Box>
      {nextEvent && (
        <Box className={classes.grid}>
          <Box className={`${classes.card} ${classes.hero}`}>
            <Text className={classes.eyebrow}>
              <span>Next race</span>
              <span className={classes.eyebrowMuted}>·</span>
              <span className={classes.eyebrowMuted}>
                Round {nextEvent.round}
              </span>
            </Text>
            <Box>
              <Title order={1} className={classes.raceName}>
                {nextEvent.race}
              </Title>
              <Text mt="md" size="lg" c="dimmed">
                {nextEvent.circuit}
                {race && ` · ${race.circuit.location.locality}, ${race.circuit.location.country}`}
              </Text>
            </Box>
            <Text className={classes.countdownLabel}>
              {nextEvent.name} starts in
            </Text>
            <Countdown dateTime={nextEvent.dateTime} />
          </Box>

          <Box className={`${classes.card} ${classes.schedule}`}>
            <Box className={classes.cardHeader}>
              <Title order={2} className={classes.cardTitle}>
                Weekend schedule
              </Title>
              <Text size="sm" c="dimmed">
                {now.zoneName}
              </Text>
            </Box>
            {sessions.map((session) => (
              <Box
                key={session.name}
                className={classes.session}
                data-past={session.dateTime < now || undefined}
              >
                <Box className={classes.sessionDate}>
                  <Box className={classes.sessionDay}>
                    {session.dateTime.toFormat("dd")}
                  </Box>
                  <Box className={classes.sessionMonth}>
                    {session.dateTime.toFormat("LLL")}
                  </Box>
                </Box>
                <Box className={classes.sessionName}>{session.name}</Box>
                <Box
                  className={classes.sessionTime}
                  data-next={session.dateTime.equals(nextEvent.dateTime) || undefined}
                >
                  {session.dateTime.toFormat("HH:mm")}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      )}

      <Box className={classes.grid}>
        {lastRace && podium.length > 0 && (
          <Box className={`${classes.card} ${classes.lastRace}`}>
            <Box className={classes.cardHeader}>
              <Title order={2} className={classes.cardTitle}>
                Last race · {lastRace.raceName.replace(" Grand Prix", "")}
              </Title>
              <Link
                to={`/calendar/${lastRace.season}/${lastRace.round}`}
                className={classes.cardLink}
              >
                Full results →
              </Link>
            </Box>
            <Box className={classes.podium}>
              {PODIUM_ORDER.map((index) => {
                const result = podium[index];
                if (!result) return <Box key={index} />;
                return (
                  <Box
                    key={result.driver.id}
                    className={classes.podiumStep}
                    style={{ height: PODIUM_HEIGHTS[index] }}
                  >
                    <Box
                      className={classes.podiumPosition}
                      style={{ color: PODIUM_COLORS[index] }}
                    >
                      {result.position}
                    </Box>
                    <Box className={classes.podiumName}>
                      <span className={classes.givenName}>
                        {result.driver.givenName}{" "}
                      </span>
                      {result.driver.familyName}
                    </Box>
                    <Box className={classes.team}>
                      <span
                        className={classes.teamDot}
                        style={{ backgroundColor: getTeamColor(result.constructor.id) }}
                      />
                      {result.constructor.name}
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Box>
        )}

        {topDrivers.length > 0 && (
          <Box className={`${classes.card} ${classes.standings}`}>
            <Box className={classes.cardHeader}>
              <Title order={2} className={classes.cardTitle}>
                Drivers' championship
              </Title>
              <Link
                to={`/standings/${now.year}`}
                className={classes.cardLink}
              >
                Full standings →
              </Link>
            </Box>
            {topDrivers.map((entry) => (
              <Box key={entry.Driver.driverId} className={classes.standingRow}>
                <Box className={classes.standingPosition}>{entry.position}</Box>
                <Box className={classes.standingName}>
                  <span className={classes.givenName}>
                    {entry.Driver.givenName}{" "}
                  </span>
                  {entry.Driver.familyName}
                </Box>
                <Box className={classes.standingBar}>
                  <Box
                    className={classes.standingFill}
                    style={{
                      width: `${(Number(entry.points) / leaderPoints) * 100}%`,
                      backgroundColor: getTeamColor(entry.Constructors[0]?.constructorId),
                    }}
                  />
                </Box>
                <Box className={classes.standingPoints}>{entry.points}</Box>
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};
