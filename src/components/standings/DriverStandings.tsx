import {
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Table,
  LinearProgress,
  Box,
} from "@mui/material";
import { useEffect, useState } from "react";
import { getDriverStandings } from "../../api/endpoints";
import { DriverStandingsTable } from "../../domain/standings";
import "./Standings.scss";

interface Props {
  season: number;
}

export const DriverStandings = ({ season }: Props) => {
  const [standings, setStandings] = useState<DriverStandingsTable>();

  useEffect(() => {
    setStandings(undefined);
    getDriverStandings(season).then((response) => {
      console.log(response.data.MRData);
      setStandings(response.data.MRData.StandingsTable);
    });
  }, [season]);

  return (
    <div className="table-container">
      {!!standings ? (
        <TableContainer component={Paper}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Position</TableCell>
                <TableCell>Driver</TableCell>
                <TableCell>Team</TableCell>
                <TableCell>Points</TableCell>
                <TableCell>Wins</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {standings.StandingsLists[0].DriverStandings.map((driver) => (
                <TableRow key={driver.position}>
                  <TableCell>{driver.position}</TableCell>
                  <TableCell>
                    {driver.Driver.givenName} {driver.Driver.familyName}
                  </TableCell>
                  <TableCell>{driver.Constructors[0]?.name}</TableCell>
                  <TableCell>{driver.points}</TableCell>
                  <TableCell>{driver.wins}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box>
      )}
    </div>
  );
};
