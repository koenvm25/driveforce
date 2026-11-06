import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, useLocation } from "react-router-dom";
import { isActiveLink, navLinks } from "../Header/navLinks";
import classes from "./BottomNav.module.css";

export const BottomNav: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <nav className={classes.nav} aria-label="Primary">
      {navLinks.map(({ link, match, label, icon }) => (
        <NavLink
          key={link}
          to={link}
          className={classes.item}
          data-active={isActiveLink(pathname, match) || undefined}
        >
          <FontAwesomeIcon icon={icon} />
          {label}
        </NavLink>
      ))}
    </nav>
  );
};
