import classes from "./Standings.module.css";

import { Box, Select, Tabs } from "@mantine/core";
import { DateTime } from "luxon";
import { DriverStandings } from "@/components/DriverStandings";
import { ConstructorStandings } from "@/components/ConstructorStandings";
import { useNavigate, useParams } from "react-router-dom";

const seasons = () => {
  const years = [];
  for (let i = DateTime.now().year; i >= 1950; i--) {
    years.push(i.toString());
  }
  return years;
};

export function Standings() {
  const { season } = useParams();
  const navigate = useNavigate();

  return (
    <Tabs variant="pills" defaultValue="drivers" classNames={classes}>
      <Box className={classes.tabContainer}>
        <Tabs.List>
          <Tabs.Tab value="drivers">Drivers</Tabs.Tab>
          <Tabs.Tab value="constructors">Constructors</Tabs.Tab>
        </Tabs.List>
        <Select
          value={season}
          onChange={(value) => value && navigate(`/standings/${value}`)}
          data={seasons()}
        />
      </Box>

      <Tabs.Panel value="drivers">
        <Box className={classes.tabContainer}>
          <DriverStandings />
        </Box>
      </Tabs.Panel>
      <Tabs.Panel value="constructors">
        <Box className={classes.tabContainer}>
          <ConstructorStandings />
        </Box>
      </Tabs.Panel>
    </Tabs>
  );
}
