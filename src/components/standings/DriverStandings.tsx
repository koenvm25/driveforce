import { useEffect, useState } from "react";
import { Spinner, Table } from "react-bootstrap";
import { getDriverStandings } from "../../api/endpoints";
import { DriverStandingsTable } from "../../domain/standings";
import "./Standings.scss";

interface Props {
  season: number;
}

export const DriverStandings = ({ season }: Props) => {
  const [standings, setStandings] = useState<DriverStandingsTable>();

  useEffect(() => {
    setStandings(undefined)
    getDriverStandings(season).then((response) => {
      console.log(response.data.MRData);
      setStandings(response.data.MRData.StandingsTable);
    });
  }, [season]);

  return (
    <div className="table-container">
      {!!standings ? (
        <Table striped hover bordered>
          <thead>
            <tr>
            <th>Position</th>
            <th>Driver</th>
            <th>Team</th>
            <th>Points</th></tr>
          </thead>
          <tbody>
            {standings.StandingsLists[0].DriverStandings.map((contestant) => (
              <tr key={contestant.position}>
                <td>{contestant.position}</td>
                <td>
                  {contestant.Driver.givenName} {contestant.Driver.familyName}
                </td>
                <td>{contestant.Constructors[0]?.name}</td>
                <td>{contestant.points}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <Spinner animation="grow" />
      )}
      {/* <Spinner animation="grow" /> */}
    </div>
  );
};
