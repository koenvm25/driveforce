import { Box, Container, LinearProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { getCalendar, getResults } from "../../Api/endpoints";
import { RoundCard } from "../../Components/Schedule/RoundCard";
import { SeasonSelector } from "../../Components/SeasonSelector";
import { Race } from "../../Domain/calendar";
import "./Calendar.scss";

export const PreviousSeasons = () => {
  const previousYear = new Date().getFullYear() - 1;
  const [season, setSeason] = useState<number>(previousYear);
  const [calendar, setCalendar] = useState<Race[]>();
  const [results, setResults] = useState<Race[]>();

  useEffect(() => {
    getCalendar(season).then((response) => {
      setCalendar(response.data.MRData.RaceTable.Races);

      getResults(season, 500).then((response) => {
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
    <Container maxWidth='xl'>
      <SeasonSelector setSeason={updateSeason} season={season} removeCurrentYear />
      <div className="round-card-container">
        {!!calendar && !!results ? (
          calendar.map((race) => {
            const result = results.filter(
              (raceItem) => raceItem.round === race.round
            )[0]?.Results;
            return <RoundCard key={race.round} race={race} results={result} />;
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
