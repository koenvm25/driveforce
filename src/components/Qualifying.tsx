import { QResult } from "@/types/Results";
import { IRoundLoader } from "@/utils/loaders";
import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  Column,
  DriverName,
  Position,
  ResultsTable,
  Team,
} from "./ResultsTable/ResultsTable";

const columns: Column<QResult>[] = [
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
  { key: "q1", header: "Q1", hideBelow: "xs", align: "right", render: (result) => result.q1 || "–" },
  { key: "q2", header: "Q2", hideBelow: "xs", align: "right", render: (result) => result.q2 || "–" },
  { key: "q3", header: "Q3", align: "right", render: (result) => result.q3 || "–" },
];

export const QualifyingResult: React.FC = () => {
  const { qualifyingResult } = useLoaderData() as IRoundLoader;

  return (
    <ResultsTable
      rows={qualifyingResult?.qualifying ?? []}
      columns={columns}
      getKey={(result) => result.driver.id}
    />
  );
};
