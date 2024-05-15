import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ActionIcon,
  Burger,
  Container,
  Group,
  useMantineColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Header.module.css";

const links = [
  { link: "/calendar", label: "Calendar" },
  { link: "/standings", label: "Standings" },
  { link: "/penalty-points", label: "Penalty points" },
];

export function Header() {
  const { toggleColorScheme, colorScheme } = useMantineColorScheme();
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={link.link === window.location.pathname || undefined}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <h1>DriveForce</h1>
        <Group gap={5} visibleFrom="xs">
          {items}
          <ActionIcon
            size="lg"
            onClick={toggleColorScheme}
            className={classes.action}
          >
            <FontAwesomeIcon
              icon={["fas", colorScheme === "dark" ? "sun" : "moon"]}
              color={colorScheme === "dark" ? "white" : "black"}
            />
          </ActionIcon>
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}
