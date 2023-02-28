import { Box, Container, Tab, Tabs } from "@mui/material";
import { ReactNode, SyntheticEvent, useEffect, useState } from "react";
import { Race } from "../../Domain/calendar";
import { isDateHistory } from "../../Utils/dateTimeHelpers";
import { TabPanel } from "../TabPanel";
import { QualifyingResults } from "./QualifyingResults";
import { RaceResults } from "./RaceResults";

interface Props {
  race: Race;
}

export const Results = ({ race }: Props) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const a11yProps = (index: number) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };

  return (
    <Container>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          indicatorColor="secondary"
        >
          {isDateHistory(
            new Date(`${race.Qualifying?.date}T${race.Qualifying?.time}`)
          ) && <Tab label="Qualifying" {...a11yProps(0)} />}
          {isDateHistory(
            new Date(`${race.Sprint?.date}T${race.Sprint?.time}`)
          ) && <Tab label="Sprint" {...a11yProps(1)} />}
          {isDateHistory(new Date(`${race.date}T${race.time}`)) && (
            <Tab label="Race" {...a11yProps(2)} />
          )}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <QualifyingResults season={race.season} round={race.round} />
      </TabPanel>
      <TabPanel value={value} index={!race.Sprint ? 2 : 1}>
        <RaceResults season={race.season} round={race.round} isSprint />
      </TabPanel>
      <TabPanel value={value} index={!race.Sprint ? 1 : 2}>
        <RaceResults season={race.season} round={race.round} />
      </TabPanel>
    </Container>
  );
};
