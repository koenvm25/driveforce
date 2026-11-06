import { mapToRaceTable } from "@/domain/RaceScheduleMapper";
import {
  getCalendar,
  getConstructorStandings,
  getCurrentCalendar,
  getDriver,
  getDriverSeasonResults,
  getDriverSeasons,
  getDriverStandings,
  getLastRaceResults,
  getQualifyingResults,
  getRace,
  getRaceResults,
  getSeasonResults,
  getSprintResults,
} from "./api/endpoints";
import { RaceResultsDto, RacesEntityResults } from "@/types/dto/RaceResultsDto";
import { Driver } from "@/types/dto/DriverStandingsDto";
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
  roundCount: number | undefined;
  raceResult: RaceResult | undefined;
  sprintResult: RaceResult | undefined;
  qualifyingResult: RaceResult | undefined;
}
export async function roundLoader(season: string, round: string) {
  const [raceDto, calendarDto] = await Promise.all([
    getRace(season, round),
    getCalendar(season).catch(() => undefined),
  ]);
  const race = mapToRaceTable(raceDto.data.MRData)?.races[0];
  const roundCount = calendarDto?.data.MRData?.RaceTable.Races.length;
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
  return { race, roundCount, raceResult, sprintResult, qualifyingResult };
}

export interface IDriverLoader {
  driver: Driver | undefined;
  seasons: string[];
  latestSeason: string | undefined;
  latestSeasonRaces: RacesEntityResults[];
}
export async function driverLoader(driverId: string): Promise<IDriverLoader> {
  const [driverDto, seasonsDto] = await Promise.all([
    getDriver(driverId),
    getDriverSeasons(driverId),
  ]);
  const seasons = (seasonsDto.data.MRData?.SeasonTable.Seasons ?? []).map(
    (entry) => entry.season
  );
  const latestSeason = seasons[seasons.length - 1];
  const resultsDto = latestSeason
    ? await getDriverSeasonResults(driverId, latestSeason)
    : undefined;
  return {
    driver: driverDto.data.MRData?.DriverTable.Drivers[0],
    seasons,
    latestSeason,
    latestSeasonRaces: resultsDto?.data.MRData?.RaceTable.Races ?? [],
  };
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
