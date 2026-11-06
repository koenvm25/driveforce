import {
  Column,
  PointsBar,
  Position,
  ResultsTable,
  SubText,
  Team,
} from "@/components/ResultsTable/ResultsTable";
import { ConstructorStandingsEntity } from "@/types/dto/ConstructorStandingsDto";
import { IStandingsLoader } from "@/utils/loaders";
import { getTeamColor } from "@/utils/teamColors";
import { Text } from "@mantine/core";
import { useLoaderData } from "react-router-dom";

export const ConstructorStandings: React.FC = () => {
  const { constructorStandings } = useLoaderData() as IStandingsLoader;

  if (!constructorStandings?.length) {
    return <Text c="dimmed" py="xl" ta="center">No data available</Text>;
  }

  const leaderPoints = Number(constructorStandings[0].points);
  const columns: Column<ConstructorStandingsEntity>[] = [
    {
      key: "position",
      header: "Pos",
      render: (entry) => <Position value={entry.position} />,
    },
    {
      key: "team",
      header: "Team",
      render: (entry) => (
        <>
          <Team
            strong
            id={entry.Constructor.constructorId}
            name={entry.Constructor.name}
          />
          <SubText>{entry.Constructor.nationality}</SubText>
        </>
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
          color={getTeamColor(entry.Constructor.constructorId)}
        />
      ),
    },
  ];

  return (
    <ResultsTable
      rows={constructorStandings}
      columns={columns}
      getKey={(entry) => entry.Constructor.constructorId}
    />
  );
};
