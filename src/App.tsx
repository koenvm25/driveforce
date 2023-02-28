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
import { PreviousSeasons } from "./Pages/Schedule/PreviousSeasons";
import { CurrentSeason } from "./Pages/Schedule/CurrentSeason";
import { Weekend } from "./Pages/Weekend/Weekend";
import { Standings } from "./Pages/Standings/Standings";
import theme from "./Assets/theme";

export const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Dashboard />} />
        <Route path="/standings" element={<Standings />} />
        <Route path="/calendar/previous-seasons" element={<PreviousSeasons />} />
        <Route path="/calendar/:season/:round" element={<Weekend />} />
        <Route path="/calendar" element={<CurrentSeason />} />
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
