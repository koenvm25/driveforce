import { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getCalendar } from "../../api/endpoints";
import { RoundCard } from "../../components/schedule/RoundCard";
import { Race } from "../../domain/calendar";
import "./Calendar.scss";

const now = new Date();
const season = now.getFullYear();

export const UpcomingEvents = () => {
  const navigate = useNavigate();
  const [races, setRaces] = useState<Race[]>();

  useEffect(() => {
    getCalendar(season).then((response) => {
      const raceTable = response.data.MRData.RaceTable.Races.filter(
        (race: Race) => new Date(race.date) > now
      );
      setRaces(raceTable);
    });
  }, [season]);

  return (
    <Container className="app-container">
      <div className="round-card-container">
        {!!races ? (
          races.map((race) => (
            <RoundCard
              key={race.round}
              race={race}
              onClick={() => navigate(`/calendar/${season}/${race.round}`)}
            />
          ))
        ) : (
          <Spinner animation="grow" />
        )}
      </div>
    </Container>
  );
};
