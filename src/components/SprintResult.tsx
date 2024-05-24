import { useSprintResultQuery } from "@/queries/ResultQueries";
import { Loader } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { DataTable } from "mantine-datatable";
import React from "react";

interface Props {
  season: string;
  round: string;
}

export const SprintResult: React.FC<Props> = ({ season, round }) => {
  const { width } = useViewportSize();
  const result = useSprintResultQuery(season, round);

  if (result.isLoading || !result.data) {
    return <Loader />;
  }

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
      records={result.data.sprint}
    />
  );
};
