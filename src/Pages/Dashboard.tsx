import { Container } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { getCalendar } from "../Api/endpoints";
import { UpcomingEvent } from "../Components/Dashboard/UpcomingEvent";
import { Standings } from "../Components/Standings/Standings";
import { Race } from "../Domain/calendar";
import useDocumentTitle from "../Hooks/useDocumentTitle";
import useWindowDimensions from "../Hooks/useWindowDimensions";
import "./Dashboard.scss";

const now = new Date();
const season = now.getFullYear();

export const Dashboard = () => {
  const [races, setRaces] = useState<Race[]>();
  const navigate = useNavigate();
  useDocumentTitle("dashboard");
  const { width, height } = useWindowDimensions();

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
        <div className="dashboard-upcoming-container">
          {!!races && (
            <UpcomingEvent
              race={races[0]}
              onClick={() => navigate(`/calendar/${season}/${races[0].round}`)}
            />
          )}
          <Standings removeSeasonSelector removeTitle />
        </div>
        <div
          style={
            width > 550
              ? { height: "100%", width: 500 }
              : { height: 500, width: width - 30 }
          }
        >
          <TwitterTimelineEmbed
            options={
              width > 550
                ? { height: height - 110, width: 500 }
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
