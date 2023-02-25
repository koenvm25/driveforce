import { Box, Container, LinearProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRace } from "../../Api/endpoints";
import { UpcomingEvent } from "../../Components/Dashboard/UpcomingEvent";
import { Race } from "../../Domain/calendar";

export const WeekendSchedule = () => {
  const { season, round } = useParams();
  const [race, setRace] = useState<Race>();

  useEffect(() => {
    if (season && round) {
      getRace(season, round).then((response) => {
        const raceTable = response.data.MRData.RaceTable.Races;
        setRace(raceTable[0]);
      });
    }
  }, [season]);

  return (
    <Container className="app-container">
      {!!race ? (
        <UpcomingEvent race={race} />
      ) : (
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      )}
    </Container>
  );
};
