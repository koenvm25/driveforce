import { Box, Container, LinearProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCalendar, getSeasonResults } from "../../Api/endpoints";
import { RoundCard } from "../../Components/Schedule/RoundCard";
import { SeasonSelector } from "../../Components/SeasonSelector";
import { Race } from "../../Domain/calendar";
import useDocumentTitle from "../../Hooks/useDocumentTitle";
import "./Calendar.scss";

const previousYear = new Date().getFullYear() - 1;

export const PreviousSeasons = () => {
  const [season, setSeason] = useState<number>(previousYear);
  const [calendar, setCalendar] = useState<Race[]>();
  const [results, setResults] = useState<Race[]>();
  const navigate = useNavigate();
  useDocumentTitle('Season history')

  useEffect(() => {
    getCalendar(season).then((response) => {
      setCalendar(response.data.MRData.RaceTable.Races);

      getSeasonResults(season, 500).then((response) => {
        setResults(response.data.MRData.RaceTable.Races);
      });
    });
  }, [season]);

  const updateSeason = (season: number) => {
    setCalendar(undefined);
    setResults(undefined);
    setSeason(season);
  };

  return (
    <Container maxWidth="xl">
      <SeasonSelector
        setSeason={updateSeason}
        season={season}
        removeCurrentYear
      />
      <div className="round-card-container">
        {!!calendar && !!results ? (
          calendar.map((race) => {
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
          <Box sx={{ width: "100%" }}>
            <LinearProgress />
          </Box>
        )}
      </div>
    </Container>
  );
};
