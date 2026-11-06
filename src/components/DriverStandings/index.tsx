import {
  ChampionBadge,
  Column,
  DriverName,
  PointsBar,
  Position,
  ResultsTable,
  SubText,
  Team,
} from "@/components/ResultsTable/ResultsTable";
import { DriverStandingsEntity } from "@/types/dto/DriverStandingsDto";
import { IStandingsLoader } from "@/utils/loaders";
import { getTeamColor } from "@/utils/teamColors";
import { Text } from "@mantine/core";
import { useLoaderData } from "react-router-dom";

export const DriverStandings: React.FC = () => {
  const { driverStandings, seasonComplete } =
    useLoaderData() as IStandingsLoader;

  if (!driverStandings?.length) {
    return (
      <Text c="dimmed" py="xl" ta="center">
        No data available
      </Text>
    );
  }

  const leaderPoints = Number(driverStandings[0].points);
  const columns: Column<DriverStandingsEntity>[] = [
    {
      key: "position",
      header: "Pos",
      render: (entry) => <Position value={entry.position} />,
    },
    {
      key: "driver",
      header: "Driver",
      render: (entry) => (
        <>
          <DriverName driver={entry.Driver} id={entry.Driver.driverId} />
          {seasonComplete && entry.position === "1" && <ChampionBadge />}
          <SubText>{entry.Driver.nationality}</SubText>
        </>
      ),
    },
    {
      key: "team",
      header: "Team",
      hideBelow: "xs",
      render: (entry) => (
        <Team
          id={entry.Constructors[0]?.constructorId}
          name={entry.Constructors.map((team) => team.name).join(" / ")}
        />
      ),
    },
    {
      key: "wins",
      header: "Wins",
      hideBelow: "xs",
      align: "right",
      render: (entry) => entry.wins,
    },
    {
      key: "points",
      header: "Points",
      render: (entry) => (
        <PointsBar
          value={entry.points}
          max={leaderPoints}
          color={getTeamColor(entry.Constructors[0]?.constructorId)}
        />
      ),
    },
  ];

  return (
    <ResultsTable
      rows={driverStandings}
      columns={columns}
      getKey={(entry) => entry.Driver.driverId}
    />
  );
};
