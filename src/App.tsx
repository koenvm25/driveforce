import { ThemeProvider } from "@mui/material";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.scss";
import { NavBar } from "./Components/NavBar/NavBar";
import { Dashboard } from "./Pages/Dashboard";
import { PenaltyPoints } from "./Pages/PenaltyPoints/PenaltyPoints";
import { Results } from "./Pages/Results/Results";
import { Calendar } from "./Pages/Schedule/Calendar";
import { UpcomingEvents } from "./Pages/Schedule/UpcomingEvents";
import { WeekendSchedule } from "./Pages/Schedule/WeekendSchedule";
import { Standings } from "./Pages/Standings/Standings";
import theme from "./Assets/theme";

export const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Dashboard />} />
        <Route path="/standings" element={<Standings />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/calendar/:season/:round" element={<WeekendSchedule />} />
        <Route path="/calendar/upcoming-events" element={<UpcomingEvents />} />
        <Route path="/results" element={<Results />} />
        <Route path="/penalty-points" element={<PenaltyPoints />} />
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
