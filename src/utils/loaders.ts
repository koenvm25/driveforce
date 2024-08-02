import { mapToRaceTable } from "@/domain/RaceScheduleMapper";
import { getCalendar, getRace, getSeasonResults } from "./api/endpoints";
import { RaceResultsDto } from "@/types/dto/RaceResultsDto";
import { RaceTable } from "@/types/RaceSchedule";

export interface ISeasonLoader {
  results: RaceResultsDto | undefined;
  calendar: RaceTable | undefined;
}
export async function seasonLoader(season: string): Promise<ISeasonLoader> {
  const [calendar, results] = await Promise.all([
    getCalendar(season),
    getSeasonResults(season),
  ]);

  await sleeper(3000);

  return {
    results: results.data.MRData,
    calendar: mapToRaceTable(calendar.data.MRData),
  };
}

export async function roundLoader(
  season: string,
  round: string
): Promise<RaceTable | undefined> {
  const race = await getRace(season, round);
  return mapToRaceTable(race.data.MRData);
}

function sleeper(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
