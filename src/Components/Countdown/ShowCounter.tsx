import DateTimeDisplay from "./DateTimeDisplay";

interface Props {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const ShowCounter = ({ days, hours, minutes, seconds }: Props) => {
  return (
    <div className="show-counter">
      <div className="countdown-container">
        <DateTimeDisplay value={days} type={"Days"} />
        <p>:</p>
        <DateTimeDisplay value={hours} type={"Hours"} />
        <p>:</p>
        <DateTimeDisplay value={minutes} type={"Mins"} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={"Seconds"} />
      </div>
    </div>
  );
};
