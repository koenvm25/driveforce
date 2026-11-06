import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { RouteError } from "./components/RouteError/RouteError";
import { Dashboard } from "./screens/Dashboard/Dashboard";
import { Calendar } from "./screens/Calendar/Calendar";
import { Round } from "./screens/Calendar/Round/Round";
import { Standings } from "./screens/Standings/Standings";
import { Title } from "@mantine/core";
import { DriverProfile } from "./screens/Driver/DriverProfile";
import {
  dashboardLoader,
  driverLoader,
  roundLoader,
  seasonLoader,
  standingsLoader,
} from "./utils/loaders";

export const Router: React.FC = () => {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          errorElement: <RouteError />,
          children: [
            {
              path: "",
              element: <Dashboard />,
              loader: () => dashboardLoader(),
            },
            {
              path: "calendar/:season",
              element: <Calendar />,
              loader: ({ params }) => seasonLoader(params.season!),
            },
            {
              path: "calendar/:season/:round",
              element: <Round />,
              loader: ({ params }) =>
                roundLoader(params.season!, params.round!),
            },
            {
              path: "standings/:season",
              element: <Standings />,
              loader: ({ params }) => standingsLoader(params.season!),
            },
            {
              path: "drivers/:driverId",
              element: <DriverProfile />,
              loader: ({ params }) => driverLoader(params.driverId!),
            },
            {
              path: "penalty-points",
              element: <Title>Penalty points</Title>,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
