import { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getRace } from "../../api/endpoints";
import { UpcomingEvent } from "../../components/dashboard/UpcomingEvent";
import { Race } from "../../domain/calendar";

export const WeekendSchedule = () => {
  const { season, round } = useParams();
  const [race, setRace] = useState<Race>();

  useEffect(() => {
    if (season && round) {
      getRace(season, round).then((response) => {
        const raceTable = response.data.MRData.RaceTable.Races;
        console.log(raceTable);
        setRace(raceTable[0]);
      });
    }
  }, [season]);

  return (
    <Container className="app-container">
      {!!race ? <UpcomingEvent race={race} /> : <Spinner />}
    </Container>
  );
};
