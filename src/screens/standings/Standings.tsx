import { useState } from "react";
import { Tabs, Tab, Form } from "react-bootstrap";
import "./Standings.scss";
import { DriverStandings } from "../../components/standings/DriverStandings";
import { ConstructorStandings } from "../../components/standings/ContructorStandings";

export const Standings = () => {
  const currentYear = new Date().getFullYear();
  const [season, setSeason] = useState<number>(currentYear);

  const options = [];

  for (let year = 1950; year <= currentYear; year++) {
    options.push(
      <option value={year} key={year}>
        {year}
      </option>
    );
  }

  return (
    <div>
      <div className="options-container">
        Season:
        <Form.Select
          aria-label="Default select example"
          className="options"
          defaultValue={currentYear}
          onChange={(event) => setSeason(Number(event.target.value))}
        >
          {options}
        </Form.Select>
      </div>
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
