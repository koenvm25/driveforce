import { useEffect, useState } from "react";
import { Spinner, Table } from "react-bootstrap";
import { getConstructorStandings } from "../../api/endpoints";
import { ConstructorStandingsTable } from "../../domain/standings";
import "./Standings.scss";

interface Props {
  season: number;
}

export const ConstructorStandings = ({ season }: Props) => {
  const [standings, setStandings] = useState<ConstructorStandingsTable>();

  useEffect(() => {
    setStandings(undefined)
    getConstructorStandings(season).then((response) => {
      console.log(response.data.MRData);
      setStandings(response.data.MRData.StandingsTable);
    });
  }, [season]);

  return (
    <div className="table-container">
      {!!standings ? (
        standings.StandingsLists.length > 0 ? (
          <Table striped hover>
            <thead>
              <tr>
                <th>Position</th>
                <th>Team</th>
                <th>Points</th>
                <th>Wins</th>
              </tr>
            </thead>
            <tbody>
              {standings.StandingsLists[0].ConstructorStandings.map(
                (contestant) => (
                  <tr key={contestant.position}>
                    <td>{contestant.position}</td>
                    <td>{contestant.Constructor.name}</td>
                    <td>{contestant.points}</td>
                    <td>{contestant.wins}</td>
                  </tr>
                )
              )}
            </tbody>
          </Table>
        ) : (
          <div>Constructor standings for this year are not available</div>
        )
      ) : (
        <Spinner animation="grow" />
      )}
    </div>
  );
};
