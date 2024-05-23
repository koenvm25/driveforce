import { getCountyCode } from "@/domain/Country";
import classes from "./Calender.module.css";
import { useSeasonScheduleQuery } from "@/queries/RaceScheduleQueries";
import { useSeasonResultsQuery } from "@/queries/ResultQueries";
import { Box, Card, Grid, Select, Image, Text, Loader } from "@mantine/core";
import { DateTime } from "luxon";
import React, { useState } from "react";

export const Calender: React.FC = () => {
  const [season, setSeason] = useState<string>(String(DateTime.now().year));

  const { data: raceTable, isLoading: isLoadingRaceTable } =
    useSeasonScheduleQuery(season);
  const currentSeasonResults = useSeasonResultsQuery(season);

  const seasons = () => {
    const years = [];
    for (let i = DateTime.now().year; i >= 1950; i--) {
      years.push(String(i));
    }
    return years;
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.selector}>
        <Select
          data={seasons()}
          defaultValue={season}
          onChange={(value) => value && setSeason(value)}
        />
      </Box>
      {isLoadingRaceTable && <Loader />}
      {raceTable && !isLoadingRaceTable && (
        <Grid>
          {raceTable.races.map((race) => {
            const countryCode = getCountyCode(race.circuit.location.country);
            return (
              <Grid.Col
                key={race.round}
                span={{ base: 12, lg: 4, xs: 6 }}
                h="auto"
              >
                <Card shadow="sm" padding="md">
                  <Card.Section>
                    <Image
                      src={`https://flagcdn.com/${countryCode?.toLowerCase()}.svg`}
                      h={250}
                      alt={`flag of ${race.circuit.location.country}`}
                    />
                  </Card.Section>

                  <Text fw={500} size="lg" mt="md">
                    {race.name}
                  </Text>
                  <Text fw={200} size="md">
                    {race.circuit.name}
                  </Text>
                  <Text fw={200} size="md" c="dimmed">
                    {race.events.firstPractice.dateTime.toFormat("LLLL dd")}
                    {" - "}
                    {race.events.race.dateTime.toFormat("LLLL dd")}
                  </Text>
                  <Box className={classes.podium}>
                    {currentSeasonResults.data?.data.MRData?.RaceTable.Races?.find(
                      (result) => result.round === race.round
                    )
                      ?.Results?.slice(0, 3)
                      .map((result, index) => {
                        const className =
                          index === 0 ? "one" : index === 1 ? "two" : "three";
                        return (
                          <Text
                            c="black"
                            key={result.Driver.driverId}
                            className={classes[className]}
                          >
                            {index + 1}. {result.Driver.code}
                          </Text>
                        );
                      })}
                  </Box>
                </Card>
              </Grid.Col>
            );
          })}
        </Grid>
      )}
    </Box>
  );
};
