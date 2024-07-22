import { useConstructorStandingsQuery } from "@/queries/StandingsQueries";
import { Loader, Table } from "@mantine/core";
import { useMemo } from "react";

type Props = {
  season: string;
};

export const ConstructorStandings: React.FC<Props> = ({ season }) => {
  const seasonStandings = useConstructorStandingsQuery(season);

  const standings = useMemo(() => {
    return seasonStandings.data?.data.MRData?.StandingsTable.StandingsLists &&
      seasonStandings.data?.data.MRData?.StandingsTable.StandingsLists.length >
        0
      ? seasonStandings.data?.data.MRData?.StandingsTable.StandingsLists[0]
          .ConstructorStandings
      : undefined;
  }, [seasonStandings.data]);

  return seasonStandings.isLoading ? (
    <Loader />
  ) : !standings ? (
    <span>No data available</span>
  ) : (
    <Table stickyHeader striped>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Position</Table.Th>
          <Table.Th>Name</Table.Th>
          <Table.Th>Points</Table.Th>
          <Table.Th className="hidden md:table-cell">Nationality</Table.Th>
          <Table.Th className="hidden sm:table-cell">Wins</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {standings.map((constructor) => (
          <Table.Tr key={constructor.position}>
            <Table.Th>{constructor.position}</Table.Th>
            <Table.Td>{constructor.Constructor.name}</Table.Td>
            <Table.Td>{constructor.points}</Table.Td>
            <Table.Td className="hidden md:table-cell">
              {constructor.Constructor.nationality}
            </Table.Td>
            <Table.Td className="hidden sm:table-cell">
              {constructor.wins}
            </Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
};
