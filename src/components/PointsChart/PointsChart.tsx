import { mapToPointsProgress } from "@/domain/PointsProgress";
import {
  useSeasonResultsQuery,
  useSeasonSprintResultsQuery,
} from "@/queries/ResultQueries";
import { DriverStandingsEntity } from "@/types/dto/DriverStandingsDto";
import { getTeamColor } from "@/utils/teamColors";
import { LineChart, LineChartSeries } from "@mantine/charts";
import { Loader, MultiSelect, Text } from "@mantine/core";
import { useMemo, useState } from "react";
import classes from "./PointsChart.module.css";

const DASH_PATTERNS = [undefined, "6 4", "2 4"];
const DEFAULT_SELECTION = 5;

interface Props {
  season: string;
  driverStandings: DriverStandingsEntity[];
}

export const PointsChart: React.FC<Props> = ({ season, driverStandings }) => {
  const [selected, setSelected] = useState(() =>
    driverStandings
      .slice(0, DEFAULT_SELECTION)
      .map((entry) => entry.Driver.driverId),
  );
  const results = useSeasonResultsQuery(season);
  const sprints = useSeasonSprintResultsQuery(season);

  const rows = useMemo(
    () =>
      mapToPointsProgress(results.data?.data.MRData, sprints.data?.data.MRData),
    [results.data, sprints.data],
  );

  const series = useMemo(() => {
    const perTeam = new Map<string, number>();
    return selected.flatMap((driverId): LineChartSeries[] => {
      const entry = driverStandings.find(
        (candidate) => candidate.Driver.driverId === driverId,
      );
      if (!entry) return [];
      const teamId = entry.Constructors[0]?.constructorId ?? "";
      const teamIndex = perTeam.get(teamId) ?? 0;
      perTeam.set(teamId, teamIndex + 1);
      return [
        {
          name: driverId,
          label: entry.Driver.familyName,
          color: getTeamColor(teamId),
          strokeDasharray: DASH_PATTERNS[teamIndex % DASH_PATTERNS.length],
        },
      ];
    });
  }, [selected, driverStandings]);

  const options = driverStandings.map((entry) => ({
    value: entry.Driver.driverId,
    label: `${entry.Driver.givenName} ${entry.Driver.familyName}`,
  }));

  if (results.isError || sprints.isError) {
    return (
      <Text c="dimmed" py="xl" ta="center">
        Could not load the points progression.
      </Text>
    );
  }

  return (
    <div className={classes.root}>
      <MultiSelect
        label="Drivers"
        placeholder={selected.length ? undefined : "Pick drivers to compare"}
        data={options}
        value={selected}
        onChange={setSelected}
        maxValues={8}
        searchable
        clearable
        classNames={{ input: classes.input }}
      />
      {results.isPending || sprints.isPending ? (
        <div className={classes.loading}>
          <Loader size="sm" />
        </div>
      ) : rows.length === 0 || series.length === 0 ? (
        <Text c="dimmed" py="xl" ta="center">
          {series.length === 0
            ? "Pick at least one driver."
            : "No results available for this season."}
        </Text>
      ) : (
        <>
          <LineChart
            h={420}
            data={rows}
            dataKey="round"
            series={series}
            curveType="linear"
            strokeWidth={3}
            withDots={false}
            gridAxis="xy"
            yAxisProps={{ domain: [0, "auto"] }}
            tooltipAnimationDuration={150}
          />
          <ul className={classes.legend}>
            {series.map((item) => (
              <li key={item.name} className={classes.legendItem}>
                <svg
                  width="28"
                  height="4"
                  viewBox="0 0 28 4"
                  aria-hidden="true"
                >
                  <line
                    x1="0"
                    x2="28"
                    y1="2"
                    y2="2"
                    stroke={item.color}
                    strokeWidth="3"
                    strokeDasharray={item.strokeDasharray}
                  />
                </svg>
                {item.label}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
