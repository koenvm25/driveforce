import { IRoundLoader } from "@/utils/loaders";
import React from "react";
import { useLoaderData } from "react-router-dom";
import { raceColumns } from "./ResultsTable/raceColumns";
import { ResultsTable } from "./ResultsTable/ResultsTable";

export const SprintResult: React.FC = () => {
  const { sprintResult } = useLoaderData() as IRoundLoader;

  return (
    <ResultsTable
      rows={sprintResult?.sprint ?? []}
      columns={raceColumns}
      getKey={(result) => result.driver.id}
    />
  );
};
