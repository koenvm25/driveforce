import { ConstructorStandings } from "@/components/ConstructorStandings";
import { DriverStandings } from "@/components/DriverStandings";
import { IStandingsLoader } from "@/utils/loaders";
import { Box, SegmentedControl, Select, Text, Title } from "@mantine/core";
import { DateTime } from "luxon";
import { useMemo, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import classes from "./Standings.module.css";

type Championship = "drivers" | "constructors";

export function Standings() {
  const { season } = useParams();
  const navigate = useNavigate();
  const { round } = useLoaderData() as IStandingsLoader;
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
        {championship === "drivers" ? (
          <DriverStandings />
        ) : (
          <ConstructorStandings />
        )}
      </Box>
    </Box>
  );
}
