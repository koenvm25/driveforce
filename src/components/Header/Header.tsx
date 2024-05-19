import { IconProp } from "@fortawesome/fontawesome-svg-core";
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

const links: { link: string; label: string; icon?: IconProp }[] = [
  { link: "/calendar", label: "Calendar", icon: ["far", "calendar"] },
  { link: "/standings", label: "Standings", icon: ["fas", "ranking-star"] },
  { link: "/penalty-points", label: "Penalty points" },
];

export function Header() {
  const { toggleColorScheme, colorScheme } = useMantineColorScheme();
  const [opened, { toggle }] = useDisclosure(false);

  const Link: React.FC<{ label: string; link: string }> = ({ label, link }) => (
    <a
      key={label}
      href={link}
      className={classes.link}
      data-active={link === window.location.pathname || undefined}
    >
      {label}
    </a>
  );

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <h1>DriveForce</h1>
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
                    link.icon ? <FontAwesomeIcon icon={link.icon} /> : undefined
                  }
                >
                  <Link {...link} />
                </Menu.Item>
              ))}

              <Menu.Divider />

              <Menu.Item
                onClick={toggleColorScheme}
                rightSection={
                  colorScheme === "dark" ? (
                    <FontAwesomeIcon icon={["fas", "sun"]} />
                  ) : (
                    <FontAwesomeIcon icon={["fas", "moon"]} />
                  )
                }
                style={{ alignItems: "flex-end", display: "flex", flex: 1 }}
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
