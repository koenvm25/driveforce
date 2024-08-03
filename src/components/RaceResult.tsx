import { IRoundLoader } from "@/utils/loaders";
import { useViewportSize } from "@mantine/hooks";
import { DataTable } from "mantine-datatable";
import React from "react";
import { useLoaderData } from "react-router-dom";

export const RaceResult: React.FC = () => {
  const { width } = useViewportSize();
  const { raceResult } = useLoaderData() as IRoundLoader;

  return (
    <DataTable
      columns={[
        { accessor: "position", title: "#" },
        { accessor: "number", title: "Number", hidden: width < 900 },
        { accessor: "driver.familyName", title: "Driver" },
        { accessor: "constructor.name", title: "Car", hidden: width < 650 },
        { accessor: "laps", title: "Laps", hidden: width < 500 },
        {
          accessor: "time",
          title: "Time",
          hidden: width < 400,
          render: (result) => result.time || "DNF",
        },
        { accessor: "points", title: "Points" },
      ]}
      records={raceResult?.race}
    />
  );
};
