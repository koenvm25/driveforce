import { ReactNode, SyntheticEvent, useState } from "react";
import { DriverStandings } from "../../components/standings/DriverStandings";
import { ConstructorStandings } from "../../components/standings/ContructorStandings";
import { SeasonSelector } from "../../components/SeasonSelector";
import { Box, Tabs, Tab } from "@mui/material";
import { Container } from "@mui/system";
import SportsMotorsportsIcon from "@mui/icons-material/SportsMotorsports";
import GroupsIcon from "@mui/icons-material/Groups";

const currentYear = new Date().getFullYear();

interface Props {
  removeSeasonSelector?: boolean;
}

export const Standings = ({ removeSeasonSelector = false }: Props) => {
  const [value, setValue] = useState(0);
  const [season, setSeason] = useState<number>(currentYear);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const a11yProps = (index: number) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };

  interface TabPanelProps {
    children?: ReactNode;
    index: number;
    value: number;
  }

  const TabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props;
    
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            {children}
          </Box>
        )}
      </div>
    );
  }

  return (
    <Container>
      {!removeSeasonSelector && <SeasonSelector setSeason={setSeason} season={season} />}
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          indicatorColor="secondary"
          // style={{color: '#d90429', backgroundColor: '#d90429'}}
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
