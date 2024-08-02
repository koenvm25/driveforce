import { getCountyCode } from "@/domain/Country";
import { ISeasonLoader } from "@/utils/loaders";
import { Box, Card, Image, Select, SimpleGrid, Text } from "@mantine/core";
import { DateTime } from "luxon";
import React, { useMemo } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import classes from "./Calendar.module.css";

export const Calendar: React.FC = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { results, calendar } = useLoaderData() as ISeasonLoader;

  const seasons = useMemo(() => {
    const years = [];
    for (let i = DateTime.now().year; i >= 1950; i--) {
      years.push(String(i));
    }
    return years;
  }, []);

  return (
    <Box className={classes.root}>
      <Box className={classes.selector}>
        <Select
          data={seasons}
          defaultValue={params.season}
          onChange={(value) => value && navigate(`/calendar/${value}`)}
        />
      </Box>
      {calendar && (
        <SimpleGrid
          cols={{ base: 1, sm: 2, lg: 3 }}
          spacing={{ base: 10, sm: "xl" }}
          verticalSpacing={{ base: "md", sm: "xl" }}
        >
          {calendar.races.map((race) => {
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
                    {race.events.firstPractice
                      ? `${race.events.firstPractice.dateTime.toFormat(
                          "LLLL dd"
                        )} - `
                      : ""}
                    {race.events.race.dateTime.toFormat("LLLL dd")}
                  </Text>
                  <Box className={classes.podium}>
                    {results?.RaceTable.Races?.find(
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
