import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getQualifyingResults } from "../../Api/endpoints";
import { QualifyingResult } from "../../Domain/result";

interface Props {
  season: number;
  round: number;
}

export const QualifyingResults = ({season, round}: Props) => {
  const [results, setResults] = useState<QualifyingResult[]>()

  useEffect(() => {
    getQualifyingResults(season, round).then((response) => {
      setResults(response.data.MRData.RaceTable?.Races[0]?.QualifyingResults);
    })
  }, [season, round])

  return (
    <TableContainer>
      {results ? (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Rank</TableCell>
              <TableCell>Driver</TableCell>
              <TableCell>team</TableCell>
              <TableCell>Q3</TableCell>
              <TableCell>Q2</TableCell>
              <TableCell>Q1</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {results.map((result) => (
              <TableRow>
                <TableCell>{result.position}</TableCell>
                <TableCell>{result.Driver.givenName} {result.Driver.familyName}</TableCell>
                <TableCell>{result.Constructor.name}</TableCell>
                <TableCell>{result.Q3}</TableCell>
                <TableCell>{result.Q2}</TableCell>
                <TableCell>{result.Q1}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
            <Typography>Qualifying results are not yet available</Typography>
        )}
    </TableContainer>
  )
}