import { getDuration } from "@/utils/dateTimeHelpers";
import { DateTime, Duration } from "luxon";
import { useEffect, useState } from "react";

export const useCountdown = (targetDate: DateTime) => {
  const [countDown, setCountDown] = useState(
    getDuration(targetDate, DateTime.now(), [
      "days",
      "hours",
      "minutes",
      "seconds",
    ])
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(
        getDuration(targetDate, DateTime.now(), [
          "days",
          "hours",
          "minutes",
          "seconds",
        ])
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [countDown, targetDate]);

  return getReturnValues(countDown);
};

const getReturnValues = (duration: Duration) => {
  // calculate time left
  const days = Math.floor(duration.days);
  const hours = Math.floor(duration.hours);
  const min = Math.floor(duration.minutes);
  const sec = Math.floor(duration.seconds);

  return { days, hours, min, sec };
};
