import { useQualifyingResultQuery } from "@/queries/ResultQueries";
import { Loader } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { DataTable } from "mantine-datatable";
import React from "react";

interface Props {
  season: string;
  round: string;
}

export const QualifyingResult: React.FC<Props> = ({ season, round }) => {
  const { width } = useViewportSize();
  const result = useQualifyingResultQuery(season, round);

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
        {
          accessor: "q1",
          title: "Q1",
          hidden: width < 550,
          render: (result) => result.q1 || "-",
        },
        {
          accessor: "q2",
          title: "Q2",
          hidden: width < 450,
          render: (result) => result.q2 || "-",
        },
        {
          accessor: "q3",
          title: "Q3",
          render: (result) => result.q3 || "-",
        },
      ]}
      records={result.data.qualifying}
    />
  );
};
