import { events, Race } from "../../domain/calendar";
import { getNextEvent } from "../../domain/dateTimeHelpers";
import { capitilizeFirstLetter } from "../../domain/stringHelpers";
import FlipCountDown from "@rumess/react-flip-countdown";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { Box, LinearProgress } from "@mui/material";

const now = new Date();
const season = now.getFullYear();

interface Props {
  race?: Race;
}

export const UpcomingEvent = ({ race: race }: Props) => {
  const { width } = useWindowDimensions();

  const nextEvent = race ? getNextEvent(race) : undefined;

  return (
    <div>
      {!!nextEvent?.name ? (
        <div className="upcoming-event">
          <div className="upcoming-event-title-container">
            {width < 768 ? (
              <>
                <h3 className="upcoming-event-title">Next event:</h3>
                <h3 className="upcoming-event-title">
                  {capitilizeFirstLetter(events[nextEvent?.name])}
                </h3>
              </>
            ) : (
              <>
                <h2 className="upcoming-event-title">Next event:</h2>
                <h2 className="upcoming-event-title">
                  {capitilizeFirstLetter(events[nextEvent?.name])}
                </h2>
              </>
            )}
          </div>
          <FlipCountDown
            endAt={`${nextEvent.date} ${nextEvent.time}`}
            hideYear
            hideMonth
            endAtZero
            dayTitle="Days"
            hourTitle="Hours"
            minuteTitle="Minutes"
            secondTitle="Seconds"
            theme="light"
            size={width < 768 ? "small" : "medium"}
          />
        </div>
      ) : (
        <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box>
      )}
    </div>
  );
};
