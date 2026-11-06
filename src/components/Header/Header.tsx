import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ActionIcon,
  Burger,
  Container,
  Group,
  Menu,
  useMantineColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Header.module.css";
import { Link as RouterLink, NavLink, useLocation } from "react-router-dom";

const year = new Date().getFullYear();

const links: { link: string; match: string; label: string }[] = [
  { link: "/", match: "/", label: "Home" },
  { link: `/calendar/${year}`, match: "/calendar", label: "Calendar" },
  { link: `/standings/${year}`, match: "/standings", label: "Standings" },
  { link: "/penalty-points", match: "/penalty-points", label: "Penalty points" },
];

const isActive = (pathname: string, match: string) =>
  match === "/" ? pathname === "/" : pathname.startsWith(match);

export function Header() {
  const { toggleColorScheme, colorScheme } = useMantineColorScheme();
  const [opened, { toggle, close }] = useDisclosure(false);
  const { pathname } = useLocation();

  const themeToggle = (
    <ActionIcon
      size={44}
      variant="default"
      onClick={toggleColorScheme}
      aria-label={`Switch to ${colorScheme === "dark" ? "light" : "dark"} theme`}
      className={classes.action}
    >
      <FontAwesomeIcon icon={["fas", colorScheme === "dark" ? "sun" : "moon"]} />
    </ActionIcon>
  );

  return (
    <header className={classes.header}>
      <Container size={1200} className={classes.inner}>
        <RouterLink to="/" className={classes.logo}>
          <span className={classes.logoBar} />
          DriveForce
        </RouterLink>

        <Group gap={4} visibleFrom="sm">
          {links.map(({ link, match, label }) => (
            <NavLink
              key={link}
              to={link}
              className={classes.link}
              data-active={isActive(pathname, match) || undefined}
            >
              {label}
            </NavLink>
          ))}
          {themeToggle}
        </Group>

        <Group gap="xs" hiddenFrom="sm">
          {themeToggle}
          <Menu opened={opened} onChange={toggle} position="bottom-end">
            <Menu.Target>
              <Burger opened={opened} size="sm" aria-label="Open menu" />
            </Menu.Target>
            <Menu.Dropdown>
              {links.map(({ link, match, label }) => (
                <Menu.Item
                  key={link}
                  component={RouterLink}
                  to={link}
                  onClick={close}
                  data-active={isActive(pathname, match) || undefined}
                  className={classes.menuItem}
                >
                  {label}
                </Menu.Item>
              ))}
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Container>
    </header>
  );
}
