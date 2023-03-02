import { Box, LinearProgress, Container } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCalendar, getSeasonResults } from "../../Api/endpoints";
import { RoundCard } from "../../Components/Schedule/RoundCard";
import { Race } from "../../Domain/calendar";
import useDocumentTitle from "../../Hooks/useDocumentTitle";
import "./Calendar.scss";

const now = new Date();
const season = now.getFullYear();

export const CurrentSeason = () => {
  const [races, setRaces] = useState<Race[]>();
  const [results, setResults] = useState<Race[]>();
  const navigate = useNavigate();
  useDocumentTitle('Current season')

  useEffect(() => {
    getCalendar(season).then((response) => {
      setRaces(response.data.MRData.RaceTable.Races);

      getSeasonResults(season, 500).then((response) => {
        setResults(response.data.MRData.RaceTable.Races);
      });
    });
  }, []);

  return (
    <Container className="app-container" maxWidth='xl'>
      <div className="round-card-container">
        {!!races && !!results ? (
          races.map((race) => {
            const result = results.filter(
              (raceItem) => raceItem.round === race.round
            )[0]?.Results;
            return (
              <RoundCard
                key={race.round}
                race={race}
                results={result}
                onClick={() => navigate(`/calendar/${season}/${race.round}`)}
              />
            );
          })
        ) : (
          <Box sx={{ width: '100%' }}>
            <LinearProgress />
          </Box>
        )}
      </div>
    </Container>
  );
};
