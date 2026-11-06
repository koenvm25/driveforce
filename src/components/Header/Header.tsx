import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ActionIcon,
  Container,
  Group,
  useMantineColorScheme,
} from "@mantine/core";
import classes from "./Header.module.css";
import { Link as RouterLink, NavLink, useLocation } from "react-router-dom";
import { isActiveLink, navLinks } from "./navLinks";

export function Header() {
  const { toggleColorScheme, colorScheme } = useMantineColorScheme();
  const { pathname } = useLocation();

  return (
    <header className={classes.header}>
      <Container size={1200} className={classes.inner}>
        <RouterLink to="/" className={classes.logo}>
          <span className={classes.logoBar} />
          DriveForce
        </RouterLink>

        <Group gap={4}>
          <Group gap={4} visibleFrom="sm">
            {navLinks.map(({ link, match, label }) => (
              <NavLink
                key={link}
                to={link}
                className={classes.link}
                data-active={isActiveLink(pathname, match) || undefined}
              >
                {label}
              </NavLink>
            ))}
          </Group>
          <ActionIcon
            size={44}
            variant="default"
            onClick={toggleColorScheme}
            aria-label={`Switch to ${colorScheme === "dark" ? "light" : "dark"} theme`}
            className={classes.action}
          >
            <FontAwesomeIcon
              icon={["fas", colorScheme === "dark" ? "sun" : "moon"]}
            />
          </ActionIcon>
        </Group>
      </Container>
    </header>
  );
}
