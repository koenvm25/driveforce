import { Container } from "@mui/material";
import { useState, useEffect } from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { getCalendar } from "../Api/endpoints";
import { UpcomingEvent } from "../Components/Dashboard/UpcomingEvent";
import { Race } from "../Domain/calendar";
import useWindowDimensions from "../Hooks/useWindowDimensions";
import "./Dashboard.scss";
import { Standings } from "./Standings/Standings";

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
  }, []);

  return (
    <Container className="app-container" maxWidth='xl'>
      <div className="header-container">
        <div>
          <UpcomingEvent race={races && races[0]}/>
          <h4 className="title">Standings</h4>
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