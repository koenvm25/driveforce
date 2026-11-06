import { DriverStandingsEntity } from "@/types/dto/DriverStandingsDto";
import { Result } from "@/types/Results";
import { useFavouriteDriver, useTeamAccent } from "@/utils/favouriteDriver";
import { getTeamColor } from "@/utils/teamColors";
import { Select, Switch, Text, Title } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";
import classes from "./FavouriteDriverCard.module.css";

interface Props {
  standings: DriverStandingsEntity[];
  lastRaceResults: Result[];
}

export const FavouriteDriverCard: React.FC<Props> = ({
  standings,
  lastRaceResults,
}) => {
  const [favouriteId, setFavouriteId] = useFavouriteDriver();
  const [accentEnabled, setAccentEnabled] = useTeamAccent();
  const entry = standings.find((item) => item.Driver.driverId === favouriteId);

  if (!entry) {
    return (
      <div className={classes.card}>
        <Title order={2} className={classes.title}>
          Your driver
        </Title>
        <Text c="dimmed">Pick a driver to keep their season here.</Text>
        <Select
          aria-label="Favourite driver"
          placeholder="Choose a driver"
          searchable
          data={standings.map((item) => ({
            value: item.Driver.driverId,
            label: `${item.Driver.givenName} ${item.Driver.familyName}`,
          }))}
          value={null}
          onChange={(value) => {
            const picked = standings.find(
              (item) => item.Driver.driverId === value,
            );
            if (picked) {
              setFavouriteId(
                picked.Driver.driverId,
                picked.Constructors[0]?.constructorId,
              );
            }
          }}
          classNames={{ input: classes.select }}
          maw={360}
        />
      </div>
    );
  }

  const team = entry.Constructors[0];
  const lastResult = lastRaceResults.find(
    (result) => result.driver.id === entry.Driver.driverId,
  );
  const gap = Number(standings[0].points) - Number(entry.points);
  const tiles = [
    { label: "Position", value: entry.position },
    { label: "Points", value: entry.points },
    { label: "Behind leader", value: gap === 0 ? "Leader" : String(gap) },
    { label: "Wins", value: entry.wins },
    ...(lastResult
      ? [{ label: "Last race", value: `P${lastResult.position}` }]
      : []),
  ];

  return (
    <div className={classes.card}>
      <div className={classes.header}>
        <Title order={2} className={classes.title}>
          Your driver
        </Title>
        <button
          type="button"
          className={classes.change}
          onClick={() => setFavouriteId(undefined)}
        >
          Change
        </button>
      </div>
      <div className={classes.identity}>
        <Link to={`/drivers/${entry.Driver.driverId}`} className={classes.name}>
          {entry.Driver.givenName} {entry.Driver.familyName}
        </Link>
        {team && (
          <Text className={classes.team}>
            <span
              className={classes.teamDot}
              style={{ backgroundColor: getTeamColor(team.constructorId) }}
            />
            {team.name}
          </Text>
        )}
      </div>
      <div className={classes.tiles}>
        {tiles.map((tile) => (
          <div key={tile.label} className={classes.tile}>
            <div className={classes.tileValue}>{tile.value}</div>
            <div className={classes.tileLabel}>{tile.label}</div>
          </div>
        ))}
      </div>
      <Switch
        label="Use the team colour across the site"
        checked={accentEnabled}
        onChange={(event) => setAccentEnabled(event.currentTarget.checked)}
      />
    </div>
  );
};
