import { ConstructorStandings } from "@/components/ConstructorStandings";
import { DriverStandings } from "@/components/DriverStandings";
import { PointsChart } from "@/components/PointsChart/PointsChart";
import { IStandingsLoader } from "@/utils/loaders";
import { Box, SegmentedControl, Select, Text, Title } from "@mantine/core";
import { DateTime } from "luxon";
import { useMemo, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import classes from "./Standings.module.css";

type Championship = "drivers" | "constructors" | "progress";

export function Standings() {
  const { season } = useParams();
  const navigate = useNavigate();
  const { round, driverStandings } = useLoaderData() as IStandingsLoader;
  const [championship, setChampionship] = useState<Championship>("drivers");

  const seasons = useMemo(() => {
    const years = [];
    for (let i = DateTime.now().year; i >= 1950; i--) {
      years.push(String(i));
    }
    return years;
  }, []);

  return (
    <Box className={classes.root}>
      <Box className={classes.header}>
        <Box>
          <Title order={1} className={classes.title}>
            {season} Standings
          </Title>
          {round && (
            <Text mt="sm" c="dimmed">
              After round {round}
            </Text>
          )}
        </Box>
        <Box className={classes.controls}>
          <SegmentedControl
            aria-label="Championship"
            data={[
              { value: "drivers", label: "Drivers" },
              { value: "constructors", label: "Constructors" },
              { value: "progress", label: "Progress" },
            ]}
            value={championship}
            onChange={(value) => setChampionship(value as Championship)}
            classNames={{ root: classes.switcher, label: classes.switcherLabel }}
          />
          <Select
            aria-label="Season"
            data={seasons}
            value={season}
            allowDeselect={false}
            w={120}
            classNames={{ input: classes.seasonInput }}
            onChange={(value) => value && navigate(`/standings/${value}`)}
          />
        </Box>
      </Box>

      <Box className={classes.card}>
        {championship === "drivers" && <DriverStandings />}
        {championship === "constructors" && <ConstructorStandings />}
        {championship === "progress" &&
          (driverStandings?.length && season ? (
            <PointsChart
              key={season}
              season={season}
              driverStandings={driverStandings}
            />
          ) : (
            <Text c="dimmed" py="xl" ta="center">
              No data available
            </Text>
          ))}
      </Box>
    </Box>
  );
}
