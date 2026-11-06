import { mapToRaceTable } from "@/domain/RaceScheduleMapper";
import {
  getCalendar,
  getConstructorStandings,
  getCurrentCalendar,
  getDriverStandings,
  getLastRaceResults,
  getQualifyingResults,
  getRace,
  getRaceResults,
  getSeasonResults,
  getSprintResults,
} from "./api/endpoints";
import { RaceResultsDto } from "@/types/dto/RaceResultsDto";
import { NextEvent, Race, RaceTable } from "@/types/RaceSchedule";
import { getNextEvent, hasEventPassed } from "./scheduleHelpers";
import {
  mapToQualifyingResult,
  mapToRaceResult,
  mapToSprintResult,
} from "@/domain/ResultsMapper";
import { RaceResult } from "@/types/Results";
import { ConstructorStandingsEntity } from "@/types/dto/ConstructorStandingsDto";
import { DriverStandingsEntity } from "@/types/dto/DriverStandingsDto";

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
      hasEventPassed(race?.events.race)
        ? getRaceResults(season, round)
        : undefined,
      race?.events.isSprintWeekend && hasEventPassed(race?.events.sprint)
        ? getSprintResults(season, round)
        : undefined,
      hasEventPassed(race?.events.qualifying)
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

export interface IStandingsLoader {
  round: string | undefined;
  constructorStandings: ConstructorStandingsEntity[] | undefined;
  driverStandings: DriverStandingsEntity[] | undefined;
}
export async function standingsLoader(
  season: string
): Promise<IStandingsLoader> {
  const [driverStandings, constructorStandings] = await Promise.all([
    getDriverStandings(season),
    getConstructorStandings(season),
  ]);
  return {
    round: driverStandings.data.MRData?.StandingsTable.StandingsLists[0]?.round,
    constructorStandings:
      constructorStandings.data.MRData?.StandingsTable.StandingsLists[0]
        ?.ConstructorStandings,
    driverStandings:
      driverStandings.data.MRData?.StandingsTable.StandingsLists[0]
        ?.DriverStandings,
  };
}

export interface IDashboardLoader {
  nextEvent: NextEvent | undefined;
  race: Race | undefined;
  lastRace: RaceResult | undefined;
  driverStandings: DriverStandingsEntity[] | undefined;
}
export async function dashboardLoader(): Promise<IDashboardLoader> {
  const [schedule, lastRaceResults, driverStandings] = await Promise.all([
    getCurrentCalendar(),
    getLastRaceResults().catch(() => undefined),
    getDriverStandings("current").catch(() => undefined),
  ]);
  const raceTable = mapToRaceTable(schedule.data.MRData);
  const nextEvent = getNextEvent(raceTable?.races);
  return {
    nextEvent,
    race: raceTable?.races.find((race) => race.round === nextEvent?.round),
    lastRace: mapToRaceResult(lastRaceResults?.data.MRData),
    driverStandings:
      driverStandings?.data.MRData?.StandingsTable.StandingsLists[0]
        ?.DriverStandings,
  };
}

export function sleeper(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
