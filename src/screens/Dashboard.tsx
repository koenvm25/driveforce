import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { getCalendar } from "../api/endpoints";
import { UpcomingEvent } from "../components/dashboard/UpcomingEvent";
import { DriverStandings } from "../components/standings/DriverStandings";
import { Twitter } from "../components/Twitter";
import { Race } from "../domain/calendar";
import useWindowDimensions from "../hooks/useWindowDimensions";
import "./Dashboard.scss";
import { Standings } from "./standings/Standings";

const now = new Date();
const season = now.getFullYear();

export const Dashboard = () => {
  const [races, setRaces] = useState<Race[]>();
  const { width } = useWindowDimensions();

  useEffect(() => {
    getCalendar(season).then((response) => {
      const raceTable = response.data.MRData.RaceTable.Races.filter(
        (race: Race) => new Date(race.date) > now
      );
      setRaces(raceTable);
    });
  }, [season]);

  return (
    <Container className="app-container">
      <div className="header-container">
        <div>
          <UpcomingEvent race={races && races[0]} />
          <h4>Standings</h4>
          <Standings removeSeasonSelector />
        </div>
        <div
          style={
            width > 550
              ? { height: 1500, width: 500 }
              : { height: 500, width: width - 20 }
          }
        >
          <TwitterTimelineEmbed
            options={
              width > 550
                ? { height: 1500, width: 500 }
                : { height: 500, width: width - 20 }
            }
            sourceType="url"
            url="https://twitter.com/f1"
          />
        </div>
      </div>
    </Container>
  );
};
