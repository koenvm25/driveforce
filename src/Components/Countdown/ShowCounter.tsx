import useWindowDimensions from "../../Hooks/useWindowDimensions";
import DateTimeDisplay from "./DateTimeDisplay";

interface Props {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const ShowCounter = ({ days, hours, minutes, seconds }: Props) => {
  const { width } = useWindowDimensions();

  return (
    <div className="show-counter">
      <div
        className={
          width > 550 ? "countdown-container" : "countdown-container-small"
        }
      >
        {(days > 0 || width > 550) && (
          <>
            <DateTimeDisplay value={days} type={"Days"} />
            <p>:</p>
          </>
        )}
        <DateTimeDisplay value={hours} type={"Hours"} />
        <p>:</p>
        <DateTimeDisplay value={minutes} type={"Mins"} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={"Seconds"} />
      </div>
    </div>
  );
};
