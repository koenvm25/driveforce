import {
  AppBar,
  Toolbar,
  Button,
  Fade,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import "./NavBar.scss";
import { NavDrawer } from "./NavDrawer";
import Logo from "../../Assets/logo.svg";

export const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (nav: string) => {
    if (nav) {
      window.location.href = nav;
    }
    setAnchorEl(null);
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="static">
      <Toolbar className="nav-bar">
        <img
          src={Logo}
          alt="DriveForce Logo"
          width={200}
          onClick={() => (window.location.href = "/")}
          className="nav-logo"
        />
        {isMobile ? (
          <NavDrawer />
        ) : (
          <div className="nav-links">
            <Button
              style={{ color: "#fff" }}
              className="nav-btn"
              size="large"
              onClick={handleClick}
            >
              Calendar
            </Button>
            <Menu
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <MenuItem onClick={() => handleClose("/calendar")}>
                Full seaons
              </MenuItem>
              <MenuItem
                onClick={() => handleClose("/calendar/upcoming-events")}
              >
                Upcoming events
              </MenuItem>
            </Menu>
            <Button
              href="/standings"
              style={{ color: "#fff" }}
              className="nav-btn"
              size="large"
            >
              Standings
            </Button>
            <Button
              href="/results"
              style={{ color: "#fff" }}
              className="nav-btn"
              size="large"
            >
              Results
            </Button>
            <Button
              href="/drivers"
              style={{ color: "#fff" }}
              className="nav-btn"
              size="large"
            >
              Drivers
            </Button>
            <Button
              style={{ color: "#fff" }}
              className="nav-btn"
              size="large"
              href="/teams"
            >
              Teams
            </Button>
            <Button
              style={{ color: "#fff" }}
              className="nav-btn"
              size="large"
              href="/penalty-points"
            >
              Penalty points
            </Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};
