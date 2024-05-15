import { useDriversStandingsQuery } from "@/queries/StandingsQueries";
import { Loader, Table } from "@mantine/core";
import { useMemo } from "react";

type Props = {
  season: string;
};

export const DriverStandings: React.FC<Props> = ({ season }) => {
  const seasonStandings = useDriversStandingsQuery(season);

  const standings = useMemo(() => {
    return seasonStandings.data?.data.MRData?.StandingsTable.StandingsLists &&
      seasonStandings.data?.data.MRData?.StandingsTable.StandingsLists.length >
        0
      ? seasonStandings.data?.data.MRData?.StandingsTable.StandingsLists[0]
          .DriverStandings
      : undefined;
  }, [seasonStandings.data]);

  return seasonStandings.isLoading ? (
    <Loader />
  ) : !standings ? (
    <div>
      <span>No data available</span>
    </div>
  ) : (
    <Table stickyHeader striped>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Position</Table.Th>
          <Table.Th>Name</Table.Th>
          <Table.Th className="hidden md:table-cell">Nationality</Table.Th>
          <Table.Th>Points</Table.Th>
          <Table.Th className="hidden sm:table-cell">Team</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {standings.map((driver) => (
          <Table.Tr key={driver.position}>
            <Table.Th>{driver.position}</Table.Th>
            <Table.Td>
              {driver.Driver.givenName} {driver.Driver.familyName}
            </Table.Td>
            <Table.Td className="hidden md:table-cell">
              {driver.Driver.nationality}
            </Table.Td>
            <Table.Td>{driver.points}</Table.Td>
            <Table.Td className="hidden sm:table-cell">
              {driver.Constructors[0].name}
            </Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
};
