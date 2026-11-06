import {
  Column,
  Points,
  Position,
  ResultsTable,
} from "@/components/ResultsTable/ResultsTable";
import { useDriverCareerTotalsQuery } from "@/queries/DriverQueries";
import { IDriverLoader } from "@/utils/loaders";
import { getTeamColor } from "@/utils/teamColors";
import { Box, Text, Title } from "@mantine/core";
import { DateTime } from "luxon";
import { Link, useLoaderData, useParams } from "react-router-dom";
import classes from "./DriverProfile.module.css";

interface ResultRow {
  round: string;
  raceName: string;
  grid: string;
  position: string;
  points: string;
}

export const DriverProfile: React.FC = () => {
  const { driverId } = useParams();
  const { driver, seasons, latestSeason, latestSeasonRaces } =
    useLoaderData() as IDriverLoader;
  const totals = useDriverCareerTotalsQuery(driverId ?? "");

  if (!driver) {
    return (
      <Box className={classes.root}>
        <Link to="/standings/2025" className={classes.back}>
          ← Standings
        </Link>
        <Title order={1} className={classes.title}>
          Driver not found
        </Title>
      </Box>
    );
  }

  const rows: ResultRow[] = latestSeasonRaces.flatMap((race) => {
    const result = race.Results?.[0];
    return result
      ? [
          {
            round: race.round,
            raceName: race.raceName,
            grid: result.grid,
            position: result.position,
            points: result.points,
          },
        ]
      : [];
  });
  const team = latestSeasonRaces
    .flatMap((race) => race.Results ?? [])
    .map((result) => result.Constructor)
    .pop();

  const columns: Column<ResultRow>[] = [
    { key: "round", header: "Rnd", render: (row) => `R${row.round}` },
    {
      key: "race",
      header: "Race",
      render: (row) => (
        <Link
          to={`/calendar/${latestSeason}/${row.round}`}
          className={classes.raceLink}
        >
          {row.raceName.replace(" Grand Prix", "")}
        </Link>
      ),
    },
    { key: "grid", header: "Grid", hideBelow: "xs", render: (row) => row.grid },
    {
      key: "position",
      header: "Finish",
      render: (row) => <Position value={row.position} />,
    },
    {
      key: "points",
      header: "Pts",
      align: "right",
      render: (row) => <Points value={row.points} />,
    },
  ];

  const stat = (value: number | undefined) =>
    value === undefined ? "–" : String(value);
  const tiles = [
    { label: "Seasons", value: stat(seasons.length) },
    { label: "Races", value: stat(totals.data?.races) },
    { label: "Wins", value: stat(totals.data?.wins) },
    { label: "Poles", value: stat(totals.data?.poles) },
  ];

  return (
    <Box className={classes.root}>
      <Link to={`/standings/${latestSeason ?? ""}`} className={classes.back}>
        ← Standings
      </Link>

      <Box className={classes.header}>
        <Box className={classes.number}>
          {driver.permanentNumber ?? driver.code}
        </Box>
        <Box>
          <Title order={1} className={classes.title}>
            {driver.givenName} {driver.familyName}
          </Title>
          <Text className={classes.subtitle}>
            {team && (
              <>
                <span
                  className={classes.teamDot}
                  style={{ backgroundColor: getTeamColor(team.constructorId) }}
                />
                {team.name} ·{" "}
              </>
            )}
            {driver.nationality} · Born{" "}
            {DateTime.fromISO(driver.dateOfBirth).toFormat("d LLL yyyy")} ·{" "}
            <a
              href={driver.url}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.external}
            >
              Wikipedia ↗
            </a>
          </Text>
        </Box>
      </Box>

      <Box className={classes.tiles}>
        {tiles.map((tile) => (
          <Box key={tile.label} className={classes.tile}>
            <Box className={classes.tileValue}>{tile.value}</Box>
            <Box className={classes.tileLabel}>{tile.label}</Box>
          </Box>
        ))}
      </Box>

      <Box className={classes.layout}>
        <Box className={`${classes.card} ${classes.results}`}>
          <Title order={2} className={classes.cardTitle}>
            {latestSeason} results
          </Title>
          {rows.length > 0 ? (
            <ResultsTable
              rows={rows}
              columns={columns}
              getKey={(row) => row.round}
            />
          ) : (
            <Text c="dimmed" py="xl">
              No results available.
            </Text>
          )}
        </Box>

        <Box className={`${classes.card} ${classes.seasons}`}>
          <Title order={2} className={classes.cardTitle}>
            Seasons
          </Title>
          <Box className={classes.seasonList}>
            {[...seasons].reverse().map((season) => (
              <Link
                key={season}
                to={`/standings/${season}`}
                className={classes.seasonChip}
              >
                {season}
              </Link>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
