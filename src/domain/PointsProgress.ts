import { RaceResultsDto } from "@/types/dto/RaceResultsDto";

export interface PointsProgressRow {
  round: string;
  raceName: string;
  [driverId: string]: string | number;
}

export const mapToPointsProgress = (
  results: RaceResultsDto | undefined,
  sprints: RaceResultsDto | undefined
): PointsProgressRow[] => {
  const races = [...(results?.RaceTable.Races ?? [])].sort(
    (a, b) => Number(a.round) - Number(b.round)
  );

  const sprintPoints = new Map<string, Map<string, number>>();
  for (const race of sprints?.RaceTable.Races ?? []) {
    sprintPoints.set(
      race.round,
      new Map(
        (race.SprintResults ?? []).map((result) => [
          result.Driver.driverId,
          Number(result.points),
        ])
      )
    );
  }

  const totals = new Map<string, number>();
  return races.map((race) => {
    const gained = new Map<string, number>();
    for (const result of race.Results ?? []) {
      gained.set(result.Driver.driverId, Number(result.points));
    }
    for (const [driverId, points] of sprintPoints.get(race.round) ?? []) {
      gained.set(driverId, (gained.get(driverId) ?? 0) + points);
    }
    for (const [driverId, points] of gained) {
      totals.set(driverId, (totals.get(driverId) ?? 0) + points);
    }

    const row: PointsProgressRow = {
      round: `R${race.round}`,
      raceName: race.raceName,
    };
    for (const [driverId, total] of totals) {
      row[driverId] = total;
    }
    return row;
  });
};
