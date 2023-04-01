import React from "react";

interface Props {
  value: number;
  type: "Days"|"Hours"|"Seconds"|"Mins";
}

const DateTimeDisplay = ({ value, type }: Props) => {
  return (
    <div className="countdown">
      <p>{value}</p>
      <span>{type}</span>
    </div>
  );
};

export default DateTimeDisplay;
