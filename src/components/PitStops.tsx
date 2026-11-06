import { usePitStopsQuery } from "@/queries/ResultQueries";
import { PitStopDto } from "@/types/dto/PitStopsDto";
import { IRoundLoader } from "@/utils/loaders";
import { Text } from "@mantine/core";
import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  Column,
  DriverName,
  FastestLapMark,
  ResultsTable,
  Team,
} from "./ResultsTable/ResultsTable";

const toSeconds = (duration: string) =>
  duration.split(":").reduce((total, part) => total * 60 + Number(part), 0);

export const PitStops: React.FC = () => {
  const { race, raceResult } = useLoaderData() as IRoundLoader;
  const { data, isPending, isError } = usePitStopsQuery(
    race?.season ?? "",
    race?.round ?? "",
  );

  if (isPending)
    return (
      <Text c="dimmed" py="xl">
        Loading pit stops…
      </Text>
    );
  if (isError || !data?.length) {
    return (
      <Text c="dimmed" py="xl">
        No pit stop data available for this race.
      </Text>
    );
  }

  const entries = new Map(
    (raceResult?.race ?? []).map((result) => [result.driver.id, result]),
  );
  const fastest = Math.min(...data.map((stop) => toSeconds(stop.duration)));

  const columns: Column<PitStopDto>[] = [
    {
      key: "lap",
      header: "Lap",
      render: (stop) => stop.lap,
    },
    {
      key: "driver",
      header: "Driver",
      render: (stop) => {
        const driver = entries.get(stop.driverId)?.driver;
        return driver ? (
          <DriverName driver={driver} id={driver.id} />
        ) : (
          stop.driverId
        );
      },
    },
    {
      key: "team",
      header: "Team",
      hideBelow: "xs",
      render: (stop) => {
        const constructor = entries.get(stop.driverId)?.constructor;
        return constructor ? (
          <Team id={constructor.id} name={constructor.name} />
        ) : null;
      },
    },
    {
      key: "stop",
      header: "Stop",
      hideBelow: "sm",
      render: (stop) => stop.stop,
    },
    {
      key: "duration",
      header: "Time",
      align: "right",
      render: (stop) => (
        <>
          {toSeconds(stop.duration) === fastest && (
            <FastestLapMark label="Fastest pit stop" />
          )}
          {stop.duration}
        </>
      ),
    },
  ];

  return (
    <ResultsTable
      rows={data}
      columns={columns}
      getKey={(stop) => `${stop.driverId}-${stop.stop}`}
    />
  );
};
