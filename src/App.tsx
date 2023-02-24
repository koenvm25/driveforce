import { ThemeProvider } from "@mui/material";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.scss";
import theme from "./assets/theme";
import { NavBar } from "./components/NavBar/NavBar";
import { Dashboard } from "./screens/Dashboard";
import { Calendar } from "./screens/schedule/Calendar";
import { UpcomingEvents } from "./screens/schedule/UpcomingEvents";
import { WeekendSchedule } from "./screens/schedule/WeekendSchedule";
import { Standings } from "./screens/standings/Standings";

const pages = ["Calendar", "standings", "Results", "Drivers", "Teams"];

export const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Dashboard />} />
        <Route path="/standings" element={<Standings />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/calendar/:season/:round" element={<WeekendSchedule />} />
        <Route path="/calendar/upcoming-events" element={<UpcomingEvents />} />
      </>
    )
  );

  return (
    <div>
      <ThemeProvider theme={theme}>
        <NavBar />
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  );
};
