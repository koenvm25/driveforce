import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ActionIcon,
  Burger,
  Container,
  Group,
  Menu,
  Title,
  useMantineColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";

const links: { link: string; label: string; icon?: IconProp }[] = [
  {
    link: `/calendar/${new Date().getFullYear()}`,
    label: "Calendar",
    icon: ["far", "calendar"],
  },
  {
    link: `/standings/${new Date().getFullYear()}`,
    label: "Standings",
    icon: ["fas", "ranking-star"],
  },
  { link: "/penalty-points", label: "Penalty points" },
];

export function Header() {
  const { toggleColorScheme, colorScheme } = useMantineColorScheme();
  const [opened, { toggle }] = useDisclosure(false);

  const Link: React.FC<{ label: string; link: string }> = ({ label, link }) => (
    <NavLink
      key={link}
      to={link}
      className={classes.link}
      data-active={link === window.location.pathname || undefined}
    >
      {label}
    </NavLink>
  );

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <NavLink to="/">
          <Title>DriveForce</Title>
        </NavLink>
        <Group gap={5} visibleFrom="xs">
          {links.map((link) => (
            <Link {...link} />
          ))}
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

        <Menu opened={opened}>
          <Menu.Target>
            <Burger
              opened={opened}
              onClick={toggle}
              size="sm"
              hiddenFrom="xs"
            />
          </Menu.Target>

          <Menu.Dropdown>
            <>
              {links.map((link) => (
                <Menu.Item
                  rightSection={
                    link.icon ? (
                      <FontAwesomeIcon
                        icon={link.icon}
                        style={{ width: "rem(14)", height: "rem(14)" }}
                      />
                    ) : undefined
                  }
                  key={link.link}
                >
                  <Link {...link} />
                </Menu.Item>
              ))}

              <Menu.Divider />

              <Menu.Item
                onClick={toggleColorScheme}
                rightSection={
                  colorScheme === "dark" ? (
                    <FontAwesomeIcon
                      icon={["fas", "sun"]}
                      style={{ width: "rem(14)", height: "rem(14)" }}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={["fas", "moon"]}
                      style={{ width: "rem(14)", height: "rem(14)" }}
                    />
                  )
                }
              >
                {colorScheme === "dark" ? "Light Mode" : "Dark Mode"}
              </Menu.Item>
            </>
          </Menu.Dropdown>
        </Menu>
      </Container>
    </header>
  );
}
