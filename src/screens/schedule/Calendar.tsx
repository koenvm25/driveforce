import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { getCalendar, getResults } from "../../api/endpoints";
import { RoundCard } from "../../components/schedule/RoundCard";
import { SeasonSelector } from "../../components/SeasonSelector";
import { Race } from "../../domain/calendar";
import "./Calendar.scss";

export const Calendar = () => {
  const currentYear = new Date().getFullYear();
  const [season, setSeason] = useState<number>(currentYear);
  const [calendar, setCalendar] = useState<Race[]>();
  const [results, setResults] = useState<Race[]>();

  useEffect(() => {
    getCalendar(season).then((response) => {
      console.log(response.data.MRData);
      setCalendar(response.data.MRData.RaceTable.Races);

      getResults(season, 500).then((response) => {
        setResults(response.data.MRData.RaceTable.Races);
        console.log(response.data.MRData.RaceTable.Races)
      });
    })
  }, [season]);

  const updateSeason = (season: number) => {
    setCalendar(undefined);
    setResults(undefined);
    setSeason(season)
  }

  return (
    <div>
      <SeasonSelector setSeason={updateSeason} season={season} />
      <div className="race-card-container">
        {!!calendar && !!results ? (
          calendar.map((race) => {
            const result = results.filter(
              (raceItem) => raceItem.round === race.round
            )[0]?.Results;
            return <RoundCard key={race.round} race={race} results={result} />;
          })
        ) : (
          <Spinner animation="grow" />
        )}
      </div>
    </div>
  );
};
