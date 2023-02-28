import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Race } from "../../Domain/calendar";

const dateOptions: Intl.DateTimeFormatOptions = {
  month: "long",
  day: "numeric",
};

const timeOptions: Intl.DateTimeFormatOptions = {
  minute: "2-digit",
  hour: "2-digit",
};

interface Props {
  race: Race;
}

export const WeekendSchedule = ({ race }: Props) => {
  const getEventDate = (dateString: string, timeString: string) => {
    return new Date(`${dateString}T${timeString}`);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Circuit</TableCell>
            <TableCell>City</TableCell>
            <TableCell>Country</TableCell>
            <TableCell>Wiki</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>{race.Circuit.circuitName}</TableCell>
            <TableCell>{race.Circuit.Location.locality}</TableCell>
            <TableCell>{race.Circuit.Location.country}</TableCell>
            <TableCell>
              <a href={race.Circuit.url} target="_blank">
                Report
              </a>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Event</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {!!race.FirstPractice && (
            <TableRow>
              <TableCell>First practice</TableCell>
              <TableCell>
                {getEventDate(
                  race.FirstPractice.date,
                  race.FirstPractice.time
                ).toLocaleDateString(undefined, dateOptions)}
              </TableCell>
              <TableCell>
                {getEventDate(
                  race.FirstPractice.date,
                  race.FirstPractice.time
                ).toLocaleTimeString(undefined, timeOptions)}
              </TableCell>
            </TableRow>
          )}
          {!!race.SecondPractice && (
            <TableRow>
              <TableCell>Second practice</TableCell>
              <TableCell>
                {getEventDate(
                  race.SecondPractice.date,
                  race.SecondPractice.time
                ).toLocaleDateString(undefined, dateOptions)}
              </TableCell>
              <TableCell>
                {getEventDate(
                  race.SecondPractice.date,
                  race.SecondPractice.time
                ).toLocaleTimeString(undefined, timeOptions)}
              </TableCell>
            </TableRow>
          )}
          {!!race.ThirdPractice && (
            <TableRow>
              <TableCell>Third practice</TableCell>
              <TableCell>
                {getEventDate(
                  race.ThirdPractice.date,
                  race.ThirdPractice.time
                ).toLocaleDateString(undefined, dateOptions)}
              </TableCell>
              <TableCell>
                {getEventDate(
                  race.ThirdPractice.date,
                  race.ThirdPractice.time
                ).toLocaleTimeString(undefined, timeOptions)}
              </TableCell>
            </TableRow>
          )}
          {!!race.Qualifying && (
            <TableRow>
              <TableCell>Qualifying</TableCell>
              <TableCell>
                {getEventDate(
                  race.Qualifying.date,
                  race.Qualifying.time
                ).toLocaleDateString(undefined, dateOptions)}
              </TableCell>
              <TableCell>
                {getEventDate(
                  race.Qualifying.date,
                  race.Qualifying.time
                ).toLocaleTimeString(undefined, timeOptions)}
              </TableCell>
            </TableRow>
          )}
          {!!race.Sprint && (
            <TableRow>
              <TableCell>Sprint race</TableCell>
              <TableCell>
                {getEventDate(
                  race.Sprint.date,
                  race.Sprint.time
                ).toLocaleDateString(undefined, dateOptions)}
              </TableCell>
              <TableCell>
                {getEventDate(
                  race.Sprint.date,
                  race.Sprint.time
                ).toLocaleTimeString(undefined, timeOptions)}
              </TableCell>
            </TableRow>
          )}
          <TableRow>
            <TableCell>Race</TableCell>
            <TableCell>
              {getEventDate(race.date, race.time).toLocaleDateString(
                undefined,
                dateOptions
              )}
            </TableCell>
            <TableCell>
              {getEventDate(race.date, race.time).toLocaleTimeString(
                undefined,
                timeOptions
              )}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
