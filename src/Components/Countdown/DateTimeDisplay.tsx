import React from "react";
import useWindowDimensions from "../../Hooks/useWindowDimensions";

interface Props {
  value: number;
  type: "Days"|"Hours"|"Seconds"|"Mins";
}

const DateTimeDisplay = ({ value, type }: Props) => {
  const {width} = useWindowDimensions();

  return (
    <div className={width > 550 ? "countdown" : "countdown-small"}>
      <p>{value}</p>
      <span>{type}</span>
    </div>
  );
};

export default DateTimeDisplay;
