import {
  Box,
  Divider,
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { getRoundResult, getSprintResults } from "../../Api/endpoints";
import { Result } from "../../Domain/result";

interface Props {
  season: number;
  round: number;
  isSprint?: boolean;
}

export const RaceResults = ({ season, round, isSprint = false }: Props) => {
  const [finished, setFinished] = useState<Result[]>();
  const [notFinished, setNotFinished] = useState<Result[]>();

  useEffect(() => {
    isSprint
      ? getSprintResults(season, round).then((response) => {
          setFinished(
            response.data.MRData.RaceTable?.Races[0]?.SprintResults.filter(
              (result: Result) =>
                result.status === "Finished" ||
                result.status.toLowerCase().includes("lap")
            )
          );
          setNotFinished(
            response.data.MRData.RaceTable?.Races[0]?.SprintResults.filter(
              (result: Result) =>
                result.status !== "Finished" &&
                !result.status.toLowerCase().includes("lap")
            )
          );
        })
      : getRoundResult(season, round).then((response) => {
          setFinished(
            response.data.MRData.RaceTable?.Races[0]?.Results.filter(
              (result: Result) =>
                result.status === "Finished" ||
                result.status.toLowerCase().includes("lap")
            )
          );
          setNotFinished(
            response.data.MRData.RaceTable?.Races[0]?.Results.filter(
              (result: Result) =>
                result.status !== "Finished" &&
                !result.status.toLowerCase().includes("lap")
            )
          );
        });
  }, [season, round]);

  return (
    <TableContainer>
      {finished && notFinished ? (
        <>
          {finished.length > 0 ? (
            <>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Rank</TableCell>
                    <TableCell>Driver</TableCell>
                    <TableCell>Team</TableCell>
                    <TableCell>Points</TableCell>
                    <TableCell>Fastes lap</TableCell>
                    <TableCell>Time</TableCell>
                    <TableCell>Laps</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {finished.map((result) => (
                    <TableRow key={result.position}>
                      <TableCell>{result.position}</TableCell>
                      <TableCell>
                        {result.Driver.givenName} {result.Driver.familyName}
                      </TableCell>
                      <TableCell>{result.Constructor.name}</TableCell>
                      <TableCell>{result.points}</TableCell>
                      <TableCell>
                        {!!result.FastestLap
                          ? result.FastestLap.Time?.time
                          : undefined}
                      </TableCell>
                      <TableCell>
                        {!!result.Time ? result.Time?.time : result.status}
                      </TableCell>
                      <TableCell>{result.laps}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <Divider sx={{ marginTop: "5px" }} />
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Rank</TableCell>
                    <TableCell>Driver</TableCell>
                    <TableCell>Team</TableCell>
                    <TableCell>Fastes lap</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Reason</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {notFinished.map((result) => (
                    <TableRow key={result.position}>
                      <TableCell>{result.position}</TableCell>
                      <TableCell>
                        {result.Driver.givenName} {result.Driver.familyName}
                      </TableCell>
                      <TableCell>{result.Constructor.name}</TableCell>
                      <TableCell>
                        {!!result.FastestLap
                          ? result.FastestLap.Time?.time
                          : undefined}
                      </TableCell>
                      <TableCell>DNF</TableCell>
                      <TableCell>{result.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </>
          ) : (
            <Typography>
              {isSprint
                ? "Sprint results are not yet available"
                : "Race results are not yet available"}
            </Typography>
          )}
        </>
      ) : (
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      )}
    </TableContainer>
  );
};
