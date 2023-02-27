import { events, Race } from "../../Domain/calendar";
import { getNextEvent } from "../../Utils/dateTimeHelpers";
import { capitalizeFirstLetter } from "../../Utils/stringHelpers";
import FlipCountDown from "@rumess/react-flip-countdown";
import useWindowDimensions from "../../Hooks/useWindowDimensions";
import { Box, LinearProgress } from "@mui/material";

interface Props {
  race?: Race;
}

export const UpcomingEvent = ({ race }: Props) => {
  const { width } = useWindowDimensions();

  const nextEvent = race ? getNextEvent(race) : undefined;

  return (
    <div className="upcoming-event-container">
      {race && nextEvent?.name ? (
        <div className="upcoming-event">
          <h2 className="upcoming-event-race-name">{race?.raceName}</h2>
          <div className="upcoming-event-next-event">
            <div className="upcoming-event-title-container">
              {width < 768 ? (
                <>
                  <h3 className="upcoming-event-title">Next event:</h3>
                  <h3 className="upcoming-event-title">
                    {capitalizeFirstLetter(events[nextEvent?.name])}
                  </h3>
                </>
              ) : (
                <>
                  <h3 className="upcoming-event-title">Next event:</h3>
                  <h3 className="upcoming-event-title">
                    {capitalizeFirstLetter(events[nextEvent?.name])}
                  </h3>
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
        </div>
      ) : (
        <Box sx={{ width: "100%", margin: "5px" }}>
          <LinearProgress />
        </Box>
      )}
    </div>
  );
};
