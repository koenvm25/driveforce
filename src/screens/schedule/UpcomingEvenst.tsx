import { useEffect, useState } from "react";
import { Spinner} from "react-bootstrap";
import { getCalendar } from "../../api/endpoints";
import { RoundCard } from "../../components/schedule/RoundCard";
import { Race, RaceTable } from "../../domain/calendar";
import "./Calendar.scss";

export const UpcomingEvents = () => {
  const today = new Date()
  const season = today.getFullYear();
  const [calendar, setCalendar] = useState<Race[]>();

  useEffect(() => {
    getCalendar(season).then((response) => {
      console.log(response.data.MRData);
      const raceTable = response.data.MRData.RaceTable.Races.filter((race: Race) => new Date(race.date) > today)
      setCalendar(raceTable);
      console.log(raceTable)
    });
  }, [season]);

  return (
    <div>
      <div className="race-card-container">
        {!!calendar ? (
          calendar.map((race) => (
            <RoundCard key={race.round} race={race} />
          ))
        ) : (
          <Spinner animation="grow" />
        )}
      </div>
    </div>
  );
};
