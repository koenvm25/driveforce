import { useCountdown } from "../../Hooks/useCountdown";
import { ShowCounter } from "./ShowCounter";
import "./CountdownTimer.scss"

interface Props { targetDate: Date }

export const CountdownTimer = ({ targetDate }: Props) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ShowCounter days={0} hours={0} minutes={0} seconds={0} />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};
