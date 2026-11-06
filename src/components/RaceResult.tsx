import { Result } from "@/types/Results";
import { IRoundLoader } from "@/utils/loaders";
import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  Column,
  DriverName,
  Points,
  Position,
  ResultsTable,
  Team,
} from "./ResultsTable/ResultsTable";

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
  { key: "grid", header: "Grid", hideBelow: "md", render: (result) => result.grid },
  { key: "laps", header: "Laps", hideBelow: "sm", render: (result) => result.laps },
  {
    key: "time",
    header: "Time",
    align: "right",
    render: (result) => result.time || "DNF",
  },
  {
    key: "points",
    header: "Pts",
    align: "right",
    render: (result) => <Points value={result.points} />,
  },
];

export const RaceResult: React.FC = () => {
  const { raceResult } = useLoaderData() as IRoundLoader;

  return (
    <ResultsTable
      rows={raceResult?.race ?? []}
      columns={raceColumns}
      getKey={(result) => result.driver.id}
    />
  );
};
