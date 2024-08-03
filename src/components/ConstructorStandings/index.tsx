import { IStandingsLoader } from "@/utils/loaders";
import { Table } from "@mantine/core";
import { useLoaderData } from "react-router-dom";

export const ConstructorStandings: React.FC = () => {
  const { constructorStandings } = useLoaderData() as IStandingsLoader;

  return !constructorStandings ? (
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
        {constructorStandings.map((constructor) => (
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
