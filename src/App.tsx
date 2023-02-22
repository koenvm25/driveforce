import "./App.scss";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
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
import { WeekendSchedule } from "./screens/schedule/WeekendSchedule";
import { UpcomingEvents } from "./screens/schedule/UpcomingEvents";

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
      <Navbar bg="dark" variant="dark" expand="sm">
        <Container className="nav-container">
          <Navbar.Brand href="/">Formula 1</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Calendar">
                <NavDropdown.Item href="/calendar/upcoming-events">
                  Upcoming events
                </NavDropdown.Item>
                <NavDropdown.Item href="/calendar">
                  Full seasons
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/standings">Standings</Nav.Link>
              <Nav.Link href="/results">Results</Nav.Link>
              <Nav.Link href="/drivers">Drivers</Nav.Link>
              <Nav.Link href="/teams">Teams</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <RouterProvider router={router} />
    </div>
  );
};
