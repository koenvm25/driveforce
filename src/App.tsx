import "./App.scss";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Standings } from "./screens/standings/Standings";

export const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/standings" element={<Standings />}></Route>
    )
  );

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <div className="nav-container">
          <Navbar.Brand href="/">Best</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/calendar">Calendar</Nav.Link>
            <Nav.Link href="/standings">Standings</Nav.Link>
            <Nav.Link href="/drivers">Drivers</Nav.Link>
            <Nav.Link href="/teams">Teams</Nav.Link>
          </Nav>
        </div>
      </Navbar>
      <div className="app-container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
};
