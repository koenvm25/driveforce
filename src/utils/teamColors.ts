const TEAM_COLORS: Record<string, string> = {
  red_bull: "#3671C6",
  ferrari: "#E8002D",
  mclaren: "#FF8000",
  mercedes: "#27F4D2",
  aston_martin: "#229971",
  alpine: "#FF87BC",
  williams: "#64C4FF",
  rb: "#6692FF",
  sauber: "#52E252",
  haas: "#B6BABD",
  audi: "#F50537",
};

const FALLBACK = "#8A8178";

export const getTeamColor = (constructorId: string | undefined) =>
  (constructorId && TEAM_COLORS[constructorId]) || FALLBACK;
