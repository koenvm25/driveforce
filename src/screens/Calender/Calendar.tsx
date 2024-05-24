import { getCountyCode } from "@/domain/Country";
import { useSeasonScheduleQuery } from "@/queries/RaceScheduleQueries";
import { useSeasonResultsQuery } from "@/queries/ResultQueries";
import {
  Box,
  Card,
  Image,
  Loader,
  Select,
  SimpleGrid,
  Text,
} from "@mantine/core";
import { DateTime } from "luxon";
import React, { useState } from "react";
import classes from "./Calender.module.css";
import { useNavigate } from "react-router-dom";

export const Calender: React.FC = () => {
  const navigate = useNavigate();
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
      {isLoadingRaceTable && currentSeasonResults.isLoading && <Loader />}
      {raceTable &&
        !isLoadingRaceTable &&
        !currentSeasonResults.isLoading &&
        currentSeasonResults.data && (
          <SimpleGrid
            cols={{ base: 1, sm: 2, lg: 3 }}
            spacing={{ base: 10, sm: "xl" }}
            verticalSpacing={{ base: "md", sm: "xl" }}
          >
            {raceTable.races.map((race) => {
              const countryCode = getCountyCode(race.circuit.location.country);
              return (
                <Box
                  key={race.round}
                  h="auto"
                  onClick={() =>
                    navigate(`/calendar/${race.season}/${race.round}`)
                  }
                >
                  <Card shadow="md" padding="md">
                    <Card.Section>
                      <Image
                        src={`https://flagcdn.com/${countryCode?.toLowerCase()}.svg`}
                        h={200}
                        fit="contain"
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
                      {currentSeasonResults.data.data.MRData?.RaceTable.Races?.find(
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
                </Box>
              );
            })}
          </SimpleGrid>
        )}
    </Box>
  );
};
