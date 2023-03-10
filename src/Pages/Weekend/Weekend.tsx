import { Box, Container, LinearProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRace } from "../../Api/endpoints";
import { UpcomingEvent } from "../../Components/Dashboard/UpcomingEvent";
import { Results } from "../../Components/Results/Results";
import { WeekendSchedule } from "../../Components/Schedule/WeekendSchedule";
import { Race } from "../../Domain/calendar";
import useDocumentTitle from "../../Hooks/useDocumentTitle";
import { isDateHistory, isDateInFuture } from "../../Utils/dateTimeHelpers";

export const Weekend = () => {
  const { season, round } = useParams();
  const [race, setRace] = useState<Race>();
  useDocumentTitle(race ? race.raceName : "Race");

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
          {isDateInFuture(new Date(`${race.date}T${race.time}`)) && (
            <>
              <UpcomingEvent race={race} />
              <WeekendSchedule race={race} />
            </>
          )}
          {(isDateHistory(
            new Date(`${race.Qualifying?.date}T${race.Qualifying?.time}`)
          ) ||
            isDateHistory(new Date(`${race.date}T${race.time}`))) && (
            <Results race={race} />
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
