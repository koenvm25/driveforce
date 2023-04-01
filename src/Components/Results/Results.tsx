import { Box, Container, Tab, Tabs } from "@mui/material";
import { SyntheticEvent, useState } from "react";
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

  const isRaceHistory = isDateHistory(new Date(`${race.date}T${race.time}`));
  const isSprintHistory = isDateHistory(
    new Date(`${race.Sprint?.date}T${race.Sprint?.time}`)
  );
  const isQualifyingHistory = isDateHistory(
    new Date(`${race.Qualifying?.date}T${race.Qualifying?.time}`)
  );

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
          {isRaceHistory && <Tab label="Race" {...a11yProps(0)} />}
          {isSprintHistory && <Tab label="Sprint" {...a11yProps(1)} />}
          {isQualifyingHistory && <Tab label="Qualifying" {...a11yProps(2)} />}
        </Tabs>
      </Box>
      <TabPanel
        value={value}
        index={
          isSprintHistory ? (isRaceHistory ? 2 : 1) : isRaceHistory ? 1 : 0
        }
      >
        <QualifyingResults season={race.season} round={race.round} />
      </TabPanel>
      <TabPanel value={value} index={isRaceHistory ? 1 : 0}>
        <RaceResults season={race.season} round={race.round} isSprint />
      </TabPanel>
      <TabPanel value={value} index={0}>
        <RaceResults season={race.season} round={race.round} />
      </TabPanel>
    </Container>
  );
};
