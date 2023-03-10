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
import { PreviousSeasons } from "./Pages/Schedule/PreviousSeasons";
import { CurrentSeason } from "./Pages/Schedule/CurrentSeason";
import { Weekend } from "./Pages/Weekend/Weekend";
import { Standings } from "./Pages/Standings/Standings";
import theme from "./Assets/theme";
import { Drivers } from "./Pages/Contentants/Drivers";
import { Teams } from "./Pages/Contentants/Teams";

export const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Dashboard />} />
        <Route path="/standings" element={<Standings />} />
        <Route path="/calendar/season-history" element={<PreviousSeasons />} />
        <Route path="/calendar/:season/:round" element={<Weekend />} />
        <Route path="/calendar" element={<CurrentSeason />} />
        <Route path="/penalty-points" element={<PenaltyPoints />} />
        <Route path="/drivers" element={<Drivers />} />
        <Route path="/teams" element={<Teams />} />
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
