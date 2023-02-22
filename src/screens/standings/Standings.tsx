import { useState } from "react";
import { Tabs, Tab, Container } from "react-bootstrap";
import { DriverStandings } from "../../components/standings/DriverStandings";
import { ConstructorStandings } from "../../components/standings/ContructorStandings";
import { SeasonSelector } from "../../components/SeasonSelector";

interface Props {
  removeSeasonSelector?: boolean;
}

export const Standings = ({ removeSeasonSelector = false }: Props) => {
  const currentYear = new Date().getFullYear();
  const [season, setSeason] = useState<number>(currentYear);

  return (
    <Container className="app-container">
      {!removeSeasonSelector && <SeasonSelector setSeason={setSeason} season={season} />}
      <Tabs defaultActiveKey="driver" id="standingsTabs">
        <Tab eventKey="driver" title="Drivers">
          <DriverStandings season={season} />
        </Tab>
        <Tab eventKey="team" title="Teams">
          <ConstructorStandings season={season} />
        </Tab>
      </Tabs>
    </Container>
  );
};
