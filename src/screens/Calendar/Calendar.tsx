import { getCountyCode } from "@/domain/Country";
import { ISeasonLoader } from "@/utils/loaders";
import { Box, SegmentedControl, Select, Text, Title } from "@mantine/core";
import { DateTime } from "luxon";
import React, { useMemo, useState } from "react";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import classes from "./Calendar.module.css";

type Filter = "all" | "completed" | "upcoming";

const FILTERS: { value: Filter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "completed", label: "Completed" },
  { value: "upcoming", label: "Upcoming" },
];

export const Calendar: React.FC = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { results, calendar } = useLoaderData() as ISeasonLoader;
  const [filter, setFilter] = useState<Filter>("all");

  const seasons = useMemo(() => {
    const years = [];
    for (let i = DateTime.now().year; i >= 1950; i--) {
      years.push(String(i));
    }
    return years;
  }, []);

  const podiumByRound = useMemo(
    () =>
      new Map(
        (results?.RaceTable.Races ?? []).map((race) => [
          race.round,
          (race.Results ?? []).slice(0, 3),
        ])
      ),
    [results]
  );

  const races = calendar?.races ?? [];
  const completedCount = races.filter((race) =>
    podiumByRound.has(race.round)
  ).length;
  const visibleRaces = races.filter((race) => {
    if (filter === "all") return true;
    const completed = podiumByRound.has(race.round);
    return filter === "completed" ? completed : !completed;
  });

  return (
    <Box className={classes.root}>
      <Box className={classes.header}>
        <Box>
          <Title order={1} className={classes.title}>
            {params.season} Calendar
          </Title>
          <Text mt="sm" c="dimmed">
            {races.length} rounds · {completedCount} completed
          </Text>
        </Box>
        <Box className={classes.controls}>
          <SegmentedControl
            aria-label="Filter rounds"
            data={FILTERS}
            value={filter}
            onChange={(value) => setFilter(value as Filter)}
            classNames={{ root: classes.filter, label: classes.filterLabel }}
          />
          <Select
            aria-label="Season"
            data={seasons}
            value={params.season}
            allowDeselect={false}
            w={120}
            classNames={{ input: classes.seasonInput }}
            onChange={(value) => value && navigate(`/calendar/${value}`)}
          />
        </Box>
      </Box>

      {visibleRaces.length === 0 ? (
        <Text className={classes.empty}>No rounds to show.</Text>
      ) : (
        <Box className={classes.grid}>
          {visibleRaces.map((race) => {
            const country = race.circuit.location.country;
            const countryCode = getCountyCode(country);
            const podium = podiumByRound.get(race.round) ?? [];
            const start = race.events.firstPractice ?? race.events.race;
            return (
              <Link
                key={race.round}
                to={`/calendar/${race.season}/${race.round}`}
                className={classes.card}
              >
                <Box className={classes.cardTop}>
                  <Box className={classes.round}>
                    {race.round.padStart(2, "0")}
                  </Box>
                  <Box className={classes.country}>
                    {countryCode && (
                      <img
                        className={classes.flag}
                        src={`https://flagcdn.com/w40/${countryCode.toLowerCase()}.png`}
                        alt=""
                      />
                    )}
                    {countryCode ?? country}
                  </Box>
                </Box>
                <Box className={classes.cardBody}>
                  <Box className={classes.raceName}>{race.name}</Box>
                  <Box className={classes.meta}>{race.circuit.name}</Box>
                  <Box className={classes.meta}>
                    {start.dateTime.toFormat("LLL dd")} –{" "}
                    {race.events.race.dateTime.toFormat("LLL dd")}
                  </Box>
                </Box>
                <Box className={classes.podium}>
                  {[0, 1, 2].map((index) => {
                    const code = podium[index]?.Driver.code;
                    return (
                      <Box key={index} className={classes.podiumCell}>
                        <Box className={classes.podiumLabel} data-place={index + 1}>
                          P{index + 1}
                        </Box>
                        <Box className={classes.podiumCode} data-empty={!code || undefined}>
                          {code ?? "–"}
                        </Box>
                      </Box>
                    );
                  })}
                </Box>
              </Link>
            );
          })}
        </Box>
      )}
    </Box>
  );
};
