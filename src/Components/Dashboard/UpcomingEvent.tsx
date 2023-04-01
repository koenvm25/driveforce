import { events, Race } from "../../Domain/calendar";
import { getNextEvent } from "../../Utils/dateTimeHelpers";
import { capitalizeFirstLetter } from "../../Utils/stringHelpers";
import useWindowDimensions from "../../Hooks/useWindowDimensions";
import { Box, Divider, LinearProgress } from "@mui/material";
import { CountdownTimer } from "../Countdown/CountdownTimer";

interface Props {
  race?: Race;
  onClick?: () => void;
}

export const UpcomingEvent = ({ race, onClick }: Props) => {
  const { width } = useWindowDimensions();

  const nextEvent = race ? getNextEvent(race) : undefined;

  return (
    <div className="upcoming-event-container">
      {race && nextEvent?.name ? (
        <div
          className="upcoming-event"
          onClick={onClick}
          style={onClick && { cursor: "pointer" }}
        >
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
            <Divider
              orientation="vertical"
              flexItem
              style={{ borderLeftWidth: "2px", marginRight: "3px" }}
            />
            <CountdownTimer
              targetDate={new Date(`${nextEvent.date}T${nextEvent.time}`)}
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
