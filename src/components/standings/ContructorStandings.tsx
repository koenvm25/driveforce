import {
  Box,
  LinearProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";
import { getConstructorStandings } from "../../Api/endpoints";
import { ConstructorStandingsTable } from "../../Domain/standings";
import "./Standings.scss";

interface Props {
  season: number;
}

export const ConstructorStandings = ({ season }: Props) => {
  const [standings, setStandings] = useState<ConstructorStandingsTable>();

  useEffect(() => {
    setStandings(undefined);
    getConstructorStandings(season).then((response) => {
      console.log(response.data.MRData);
      setStandings(response.data.MRData.StandingsTable);
    });
  }, [season]);

  return (
    <div className="table-container">
      {!!standings ? (
        standings.StandingsLists.length > 0 ? (
          <TableContainer component={Paper}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Position</TableCell>
                  <TableCell>Team</TableCell>
                  <TableCell>Points</TableCell>
                  <TableCell>Wins</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {standings.StandingsLists[0].ConstructorStandings.map(
                  (constructor) => (
                    <TableRow key={constructor.position}>
                      <TableCell>{constructor.position}</TableCell>
                      <TableCell>{constructor.Constructor.name}</TableCell>
                      <TableCell>{constructor.points}</TableCell>
                      <TableCell>{constructor.wins}</TableCell>
                    </TableRow>
                  )
                )}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <div>Constructor standings for this year are not available</div>
        )
      ) : (
        <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box>
      )}
    </div>
  );
};
