import {
  Column,
  Points,
  Position,
  ResultsTable,
} from "@/components/ResultsTable/ResultsTable";
import { useTeamTotalsQuery } from "@/queries/DriverQueries";
import { ITeamLoader } from "@/utils/loaders";
import { getTeamColor } from "@/utils/teamColors";
import { Box, Text, Title } from "@mantine/core";
import { Link, useLoaderData, useParams } from "react-router-dom";
import classes from "../Driver/DriverProfile.module.css";

interface ResultRow {
  round: string;
  raceName: string;
  finishes: { driverId: string; code: string; position: string }[];
  points: number;
}

export const TeamProfile: React.FC = () => {
  const { teamId } = useParams();
  const { team, seasons, latestSeason, latestSeasonRaces, standing } =
    useLoaderData() as ITeamLoader;
  const totals = useTeamTotalsQuery(teamId ?? "");

  if (!team) {
    return (
      <Box className={classes.root}>
        <Link to="/standings/2025" className={classes.back}>
          ← Standings
        </Link>
        <Title order={1} className={classes.title}>
          Team not found
        </Title>
      </Box>
    );
  }

  const rows: ResultRow[] = latestSeasonRaces.map((race) => ({
    round: race.round,
    raceName: race.raceName,
    finishes: (race.Results ?? []).map((result) => ({
      driverId: result.Driver.driverId,
      code: result.Driver.code ?? result.Driver.familyName,
      position: result.position,
    })),
    points: (race.Results ?? []).reduce(
      (sum, result) => sum + Number(result.points),
      0,
    ),
  }));

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
    {
      key: "finishes",
      header: "Finish",
      render: (row) => (
        <Box style={{ display: "flex", gap: 12 }}>
          {row.finishes.map((finish) => (
            <Link
              key={finish.driverId}
              to={`/drivers/${finish.driverId}`}
              className={classes.raceLink}
            >
              <Position value={finish.position} />
            </Link>
          ))}
        </Box>
      ),
    },
    {
      key: "points",
      header: "Pts",
      align: "right",
      render: (row) => <Points value={String(row.points)} />,
    },
  ];

  const stat = (value: number | undefined) =>
    value === undefined ? "–" : String(value);
  const tiles = [
    { label: "Seasons", value: stat(seasons.length) },
    { label: "Wins", value: stat(totals.data?.wins) },
    { label: "Poles", value: stat(totals.data?.poles) },
    ...(standing
      ? [
          { label: `${latestSeason} position`, value: `P${standing.position}` },
          { label: `${latestSeason} points`, value: standing.points },
        ]
      : []),
  ];

  return (
    <Box className={classes.root}>
      <Link to={`/standings/${latestSeason ?? ""}`} className={classes.back}>
        ← Standings
      </Link>

      <Box className={classes.header}>
        <Box>
          <Title order={1} className={classes.title}>
            {team.name}
          </Title>
          <Text className={classes.subtitle}>
            <span
              className={classes.teamDot}
              style={{ backgroundColor: getTeamColor(team.constructorId) }}
            />
            {team.nationality} ·{" "}
            <a
              href={team.url}
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
