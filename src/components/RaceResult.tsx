import { IRoundLoader } from "@/utils/loaders";
import React from "react";
import { useLoaderData } from "react-router-dom";
import { raceColumns } from "./ResultsTable/raceColumns";
import { ResultsTable } from "./ResultsTable/ResultsTable";

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
