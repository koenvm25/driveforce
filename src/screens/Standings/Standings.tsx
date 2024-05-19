import classes from "./Standings.module.css";

import { Box, Select, Tabs } from "@mantine/core";
import { DateTime } from "luxon";
import { useField } from "@mantine/form";
import { DriverStandings } from "@/components/DriverStandings";
import { ConstructorStandings } from "@/components/ConstructorStandings";

const seasons = () => {
  const years = [];
  for (let i = DateTime.now().year; i >= 1950; i--) {
    years.push(i.toString());
  }
  return years;
};

export function Standings() {
  const year = useField({
    initialValue: DateTime.now().year.toString(),
  });

  return (
    <Tabs defaultValue="drivers" classNames={classes}>
      <Box className={classes.tabContainer}>
        <Tabs.List>
          <Tabs.Tab value="drivers">Drivers</Tabs.Tab>
          <Tabs.Tab value="constructors">Constructors</Tabs.Tab>
        </Tabs.List>
        <Select {...year.getInputProps()} data={seasons()} />
      </Box>

      <Tabs.Panel value="drivers">
        <Box className={classes.tabContainer}>
          <DriverStandings season={year.getValue()} />
        </Box>
      </Tabs.Panel>
      <Tabs.Panel value="constructors">
        <Box className={classes.tabContainer}>
          <ConstructorStandings season={year.getValue()} />
        </Box>
      </Tabs.Panel>
    </Tabs>
  );
}
