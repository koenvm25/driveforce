import {
  Collapse,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CalendarIcon from "@mui/icons-material/CalendarMonth";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import TimerIcon from "@mui/icons-material/Timer";
import SportsMotorsportsIcon from "@mui/icons-material/SportsMotorsports";
import GroupsIcon from "@mui/icons-material/Groups";
import { useState } from "react";

export const NavDrawer = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openCollapsable, setOpenCollapsable] = useState(true);

  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          <ListItemButton onClick={() => setOpenCollapsable(!openCollapsable)}>
            <ListItemIcon>
              <CalendarIcon htmlColor="#000" />
            </ListItemIcon>
            <ListItemText primary="Calendar" />
            {openCollapsable ? (
              <ExpandLess htmlColor="#000" />
            ) : (
              <ExpandMore htmlColor="#000" />
            )}
          </ListItemButton>
          <Collapse in={openCollapsable}>
            <List>
              <ListItemButton
                href="/calendar"
                className="nav-btn"
                onClick={() => setOpenDrawer(false)}
              >
                Full season
              </ListItemButton>
              <ListItemButton
                href="/calendar/upcoming-events"
                className="nav-btn"
                onClick={() => setOpenDrawer(false)}
              >
                Upcoming events
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton
            href="/standings"
            className="nav-btn"
            onClick={() => setOpenDrawer(false)}
          >
            <ListItemIcon>
              <LeaderboardIcon htmlColor="#000" />
            </ListItemIcon>
            <ListItemText primary="Standings" />
          </ListItemButton>
          <ListItemButton
            href="/results"
            className="nav-btn"
            onClick={() => setOpenDrawer(false)}
          >
            <ListItemIcon>
              <TimerIcon htmlColor="#000" />
            </ListItemIcon>
            <ListItemText primary="Results" />
          </ListItemButton>
          <ListItemButton
            href="/drivers"
            className="nav-btn"
            onClick={() => setOpenDrawer(false)}
          >
            <ListItemIcon>
              <SportsMotorsportsIcon htmlColor="#000" />
            </ListItemIcon>
            <ListItemText primary="Drivers" />
          </ListItemButton>
          <ListItemButton
            href="/teams"
            className="nav-btn"
            onClick={() => setOpenDrawer(false)}
          >
            <ListItemIcon>
              <GroupsIcon htmlColor="#000" />
            </ListItemIcon>
            <ListItemText primary="Teams" />
          </ListItemButton>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon htmlColor="#fff" />
      </IconButton>
    </>
  );
};
