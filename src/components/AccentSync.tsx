import { getAccentColors } from "@/utils/accentColor";
import { useFavouriteTeam, useTeamAccent } from "@/utils/favouriteDriver";
import { getTeamColor, hasTeamColor } from "@/utils/teamColors";
import { useComputedColorScheme } from "@mantine/core";
import { useEffect } from "react";

const VARIABLES = [
  "--df-accent",
  "--df-accent-text",
  "--df-on-accent",
  "--mantine-primary-color-filled",
  "--mantine-primary-color-filled-hover",
] as const;

export const AccentSync: React.FC = () => {
  const scheme = useComputedColorScheme("light");
  const teamId = useFavouriteTeam();
  const [enabled] = useTeamAccent();

  useEffect(() => {
    const style = document.documentElement.style;
    if (!enabled || !hasTeamColor(teamId)) {
      VARIABLES.forEach((name) => style.removeProperty(name));
      return;
    }
    const colors = getAccentColors(getTeamColor(teamId), scheme);
    style.setProperty("--df-accent", colors.accent);
    style.setProperty("--df-accent-text", colors.accentText);
    style.setProperty("--df-on-accent", colors.onAccent);
    style.setProperty("--mantine-primary-color-filled", colors.accent);
    style.setProperty("--mantine-primary-color-filled-hover", colors.hover);
  }, [enabled, teamId, scheme]);

  return null;
};
