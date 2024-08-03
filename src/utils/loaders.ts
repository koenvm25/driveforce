import { mapToRaceTable } from "@/domain/RaceScheduleMapper";
import {
  getCalendar,
  getQualifyingResults,
  getRace,
  getRaceResults,
  getSeasonResults,
  getSprintResults,
} from "./api/endpoints";
import { RaceResultsDto } from "@/types/dto/RaceResultsDto";
import { Race, RaceTable } from "@/types/RaceSchedule";
import { isEventInTheFuture } from "./scheduleHelpers";
import {
  mapToQualifyingResult,
  mapToRaceResult,
  mapToSprintResult,
} from "@/domain/ResultsMapper";
import { RaceResult } from "@/types/Results";

export interface ISeasonLoader {
  results: RaceResultsDto | undefined;
  calendar: RaceTable | undefined;
}
export async function seasonLoader(season: string): Promise<ISeasonLoader> {
  const [calendar, results] = await Promise.all([
    getCalendar(season),
    getSeasonResults(season),
  ]);

  return {
    results: results.data.MRData,
    calendar: mapToRaceTable(calendar.data.MRData),
  };
}

export interface IRoundLoader {
  race: Race | undefined;
  raceResult: RaceResult | undefined;
  sprintResult: RaceResult | undefined;
  qualifyingResult: RaceResult | undefined;
}
export async function roundLoader(season: string, round: string) {
  const race = mapToRaceTable((await getRace(season, round)).data.MRData)
    ?.races[0];
  const [raceResultsDto, sprintResultsDto, qualifyingResultDto] =
    await Promise.all([
      isEventInTheFuture(race?.events.race)
        ? getRaceResults(season, round)
        : undefined,
      race?.events.isSprintWeekend && isEventInTheFuture(race?.events.sprint)
        ? getSprintResults(season, round)
        : undefined,
      isEventInTheFuture(race?.events.qualifying)
        ? getQualifyingResults(season, round)
        : undefined,
    ]);
  const raceResult = mapToRaceResult(raceResultsDto?.data.MRData);
  const sprintResult = mapToSprintResult(sprintResultsDto?.data.MRData);
  const qualifyingResult = mapToQualifyingResult(
    qualifyingResultDto?.data.MRData
  );
  return { race, raceResult, sprintResult, qualifyingResult };
}

export function sleeper(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
