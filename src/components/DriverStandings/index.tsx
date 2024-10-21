import { IStandingsLoader } from "@/utils/loaders";
import { Table } from "@mantine/core";
import { useLoaderData } from "react-router-dom";

export const DriverStandings: React.FC = () => {
  const { driverStandings } = useLoaderData() as IStandingsLoader;

  return !driverStandings ? (
    <div>
      <span>No data available</span>
    </div>
  ) : (
    <Table stickyHeader striped>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Position</Table.Th>
          <Table.Th>Name</Table.Th>
          <Table.Th>Points</Table.Th>
          <Table.Th visibleFrom="sm">Wins</Table.Th>
          <Table.Th visibleFrom="sm">Nationality</Table.Th>
          <Table.Th visibleFrom="xs" className="hidden sm:table-cell">
            Team
          </Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {driverStandings.map((driver) => (
          <Table.Tr key={driver.position}>
            <Table.Th>{driver.position}</Table.Th>
            <Table.Td>
              {driver.Driver.givenName} {driver.Driver.familyName}
            </Table.Td>
            <Table.Td>{driver.points}</Table.Td>
            <Table.Td visibleFrom="sm" className="hidden md:table-cell">
              {driver.wins}
            </Table.Td>
            <Table.Td visibleFrom="sm" className="hidden md:table-cell">
              {driver.Driver.nationality}
            </Table.Td>
            <Table.Td visibleFrom="xs" className="hidden sm:table-cell">
              {driver.Constructors[0].name}
            </Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
};
