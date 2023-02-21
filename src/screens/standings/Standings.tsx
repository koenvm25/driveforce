import { useState } from "react";
import { Tabs, Tab, Form } from "react-bootstrap";
import { DriverStandings } from "../../components/standings/DriverStandings";
import { ConstructorStandings } from "../../components/standings/ContructorStandings";
import { SeasonSelector } from "../../components/SeasonSelector";

export const Standings = () => {
  const currentYear = new Date().getFullYear();
  const [season, setSeason] = useState<number>(currentYear);

  return (
    <div>
      <SeasonSelector setSeason={setSeason} season={season}/>
      <Tabs defaultActiveKey="driver" id="standingsTabs">
        <Tab eventKey="driver" title="Drivers">
          <DriverStandings season={season} />
        </Tab>
        <Tab eventKey="team" title="Teams">
          <ConstructorStandings season={season} />
        </Tab>
      </Tabs>
    </div>
  );
};
