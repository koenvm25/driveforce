import { IRoundLoader } from "@/utils/loaders";
import { useViewportSize } from "@mantine/hooks";
import { DataTable } from "mantine-datatable";
import React from "react";
import { useLoaderData } from "react-router-dom";

export const QualifyingResult: React.FC = () => {
  const { width } = useViewportSize();
  const { qualifyingResult } = useLoaderData() as IRoundLoader;

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
      records={qualifyingResult?.qualifying}
    />
  );
};
