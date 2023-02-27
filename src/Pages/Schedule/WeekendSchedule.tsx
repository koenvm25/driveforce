import { Box, Container, LinearProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRace } from "../../Api/endpoints";
import { UpcomingEvent } from "../../Components/Dashboard/UpcomingEvent";
import { Race } from "../../Domain/calendar";
import { isDateInFuture } from "../../Utils/dateTimeHelpers";

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
  }, [season, round]);

  return (
    <Container className="app-container">
      {!!race ? (
        <>
          {isDateInFuture(new Date()) ? (
            <UpcomingEvent race={race} />
          ) : (
            <div>not in future</div>
          )}
        </>
      ) : (
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      )}
    </Container>
  );
};
