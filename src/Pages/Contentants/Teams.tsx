import {
  Box,
  Container,
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
import { getTeams } from "../../Api/endpoints";
import { SeasonSelector } from "../../Components/SeasonSelector";
import { Constructor } from "../../Domain/standings";
import useDocumentTitle from "../../Hooks/useDocumentTitle";

export const Teams = () => {
  const [teams, setTeams] = useState<Constructor[]>();
  const [season, setSeason] = useState(new Date().getFullYear());
  useDocumentTitle('Teams')

  useEffect(() => {
    getTeams(season).then((response) => {
      setTeams(response.data.MRData.ConstructorTable.Constructors);
    });
  }, [season]);

  return (
    <Container>
      <SeasonSelector setSeason={setSeason} season={season} />
      {teams ? (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Nationality</TableCell>
                <TableCell>Information</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {teams.map((team) => (
                <TableRow>
                  <TableCell>{team.name}</TableCell>
                  <TableCell>{team.nationality}</TableCell>
                  <TableCell>
                    <a href={team.url} target="_blank" rel="noreferrer">
                      Information
                    </a>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      )}
    </Container>
  );
};
