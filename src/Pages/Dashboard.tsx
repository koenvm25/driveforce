import { Container, Paper } from "@mui/material";
import { useState, useEffect } from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { getCalendar } from "../Api/endpoints";
import { UpcomingEvent } from "../Components/Dashboard/UpcomingEvent";
import { Race } from "../Domain/calendar";
import useDocumentTitle from "../Hooks/useDocumentTitle";
import useWindowDimensions from "../Hooks/useWindowDimensions";
import "./Dashboard.scss";
import { Standings } from "./Standings/Standings";

const now = new Date();
const season = now.getFullYear();

export const Dashboard = () => {
  const [races, setRaces] = useState<Race[]>();
  const { width } = useWindowDimensions();
  useDocumentTitle('dashboard')

  useEffect(() => {
    getCalendar(season).then((response) => {
      const raceTable = response.data.MRData.RaceTable.Races.filter(
        (race: Race) => new Date(`${race.date}T${race.time}`) > now
      );
      setRaces(raceTable);
    });
  }, []);

  return (
    <Container className="app-container" maxWidth="xl">
      <div className="dashboard-container">
        <div className="dashboard-upcoming-container" >
          <UpcomingEvent race={races ? races[0] : undefined} />
          <Paper>
            <h4 className="standings-title">Standings</h4>
            <Standings removeSeasonSelector removeTitle />
          </Paper>
        </div>
        <div
          style={
            width > 550
              ? { height: 1500, width: 500 }
              : { height: 500, width: width - 30 }
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
