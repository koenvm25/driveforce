import { Box, LinearProgress, Container } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCalendar } from "../../Api/endpoints";
import { RoundCard } from "../../Components/Schedule/RoundCard";
import { Race } from "../../Domain/calendar";
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
    <Container className="app-container" maxWidth='xl'>
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
          <Box sx={{ width: '100%' }}>
            <LinearProgress />
          </Box>
        )}
      </div>
    </Container>
  );
};
