import "./App.scss";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Standings } from "./screens/standings/Standings";
import { Dashboard } from "./screens/Dashboard";
import { Calendar } from "./screens/schedule/Calendar";
import { Race } from "./screens/schedule/Race";

export const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Dashboard />} />
        <Route path="/standings" element={<Standings />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/calendar/:round" element={<Race />} />
      </  >
    )
  );

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container className="nav-container">
          <Navbar.Brand href="/">Formula 1</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/calendar">Calendar</Nav.Link>
            <Nav.Link href="/standings">Standings</Nav.Link>
            <Nav.Link href="/drivers">Drivers</Nav.Link>
            <Nav.Link href="/teams">Teams</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container className="app-container">
        <RouterProvider router={router} />
      </Container>
    </div>
  );
};
