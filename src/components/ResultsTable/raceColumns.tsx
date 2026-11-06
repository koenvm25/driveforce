import { Result } from "@/types/Results";
import {
  Column,
  DriverName,
  FastestLapMark,
  Points,
  PositionsDelta,
  Position,
  Team,
} from "./ResultsTable";

export const raceColumns: Column<Result>[] = [
  {
    key: "position",
    header: "Pos",
    render: (result) => <Position value={result.position} />,
  },
  {
    key: "driver",
    header: "Driver",
    render: (result) => (
      <DriverName driver={result.driver} id={result.driver.id} />
    ),
  },
  {
    key: "team",
    header: "Team",
    hideBelow: "xs",
    render: (result) => (
      <Team id={result.constructor.id} name={result.constructor.name} />
    ),
  },
  {
    key: "grid",
    header: "Grid",
    hideBelow: "md",
    render: (result) => (
      <>
        {result.grid}{" "}
        <PositionsDelta grid={result.grid} position={result.position} />
      </>
    ),
  },
  {
    key: "laps",
    header: "Laps",
    hideBelow: "sm",
    render: (result) => result.laps,
  },
  {
    key: "time",
    header: "Time",
    align: "right",
    render: (result) => (
      <>
        {result.fastestLaps?.rank === "1" && <FastestLapMark />}
        {result.time || "DNF"}
      </>
    ),
  },
  {
    key: "points",
    header: "Pts",
    align: "right",
    render: (result) => <Points value={result.points} />,
  },
];
