import { Box, Tab, Tabs } from "@mui/material";
import { Container } from "@mui/system";
import { SyntheticEvent, useState } from "react";
import { SeasonSelector } from "../../Components/SeasonSelector";
import { ConstructorStandings } from "../../Components/Standings/ContructorStandings";
import { DriverStandings } from "../../Components/Standings/DriverStandings";
import { TabPanel } from "../../Components/TabPanel";
import useDocumentTitle from "../../Hooks/useDocumentTitle";

const currentYear = new Date().getFullYear();

interface Props {
  removeSeasonSelector?: boolean;
  removeTitle?: boolean;
}

export const Standings = ({
  removeSeasonSelector = false,
  removeTitle = false,
}: Props) => {
  const [value, setValue] = useState(0);
  const [season, setSeason] = useState<number>(currentYear);
  useDocumentTitle(removeTitle ? "" : "Standings");

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
    <Container sx={{ flexGrow: 10, paddingBottom: "10px" }}>
      {!removeSeasonSelector && (
        <SeasonSelector setSeason={setSeason} season={season} />
      )}
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          indicatorColor="secondary"
        >
          <Tab label="Drivers" {...a11yProps(0)} />
          <Tab label="Constructors" {...a11yProps(1)} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <DriverStandings season={season} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ConstructorStandings season={season} />
      </TabPanel>
    </Container>
  );
};
