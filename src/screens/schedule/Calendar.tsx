import { useEffect, useState } from "react";
import { Spinner, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getCalendar } from "../../api/endpoints";
import { RoundCard } from "../../components/schedule/RoundCard";
import { SeasonSelector } from "../../components/SeasonSelector";
import { RaceTable } from "../../domain/calendar";
import './Calendar.scss'

export const Calendar = () => {
  const currentYear = new Date().getFullYear();
  const [season, setSeason] = useState<number>(currentYear);
  const [calendar, setCalendar] = useState<RaceTable>();
  // const navigate = useNavigate();

  useEffect(() => {
    getCalendar(season).then((response) => {
      console.log(response.data.MRData);
      setCalendar(response.data.MRData.RaceTable);
    });
  }, [season]);

  console.log(season)

  return (
    <div>
      <SeasonSelector setSeason={setSeason} season={season} />
      <div className="race-card-container">
        {!!calendar ? (
          // <Table striped hover bordered>
          //   <thead>
          //     <tr>
          //       <th>Round</th>
          //       <th>Race name</th>
          //       <th>Dates</th>
          //       <th>Race start time</th>
          //     </tr>
          //   </thead>
          //   <tbody>
          //     {calendar.Races.map((race) => (
          //       <tr onClick={() => navigate(`/calendar/${race.round}`)}>
          //         <td>{race.round}</td>
          //         <td>{race.raceName}</td>
          //         <td>{convertToPeriodString(new Date(race.FirstPractice.date), new Date(race.date))}</td>
          //         <td>{convertDateAndTimeStringsToReadable(race.date, race.time)}</td>
          //       </tr>
          //     ))}
          //   </tbody>
          // </Table>
          calendar.Races.map((race) => (
            <RoundCard key={race.round} race={race} />
          ))
        ) : (
          <Spinner animation="grow" />
        )}
      </div>
    </div>
  );
};
