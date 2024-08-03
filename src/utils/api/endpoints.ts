import { ErgastResponse } from "@/types/dto/ErgastDto";
import { get } from "./axiosConfig";
import { DriverStandings } from "@/types/dto/DriverStandingsDto";
import { RaceSchedule } from "@/types/dto/RaceScheduleDto";
import { RaceResultsDto } from "@/types/dto/RaceResultsDto";
import { ConstructorStandings } from "@/types/dto/ConstructorStandingsDto";

// Standings
export const getDriverStandings = (
  season: string
): ErgastResponse<DriverStandings> => get(`/${season}/driverStandings.json`);
export const getConstructorStandings = (
  season: string
): ErgastResponse<ConstructorStandings> =>
  get(`/${season}/constructorStandings.json`);

// Schedule
export const getCalendar = (season: string): ErgastResponse<RaceSchedule> =>
  get(`${season}.json`);
export const getRace = (
  season: string,
  round: string
): ErgastResponse<RaceSchedule> => get(`/${season}/${round}.json`);
export const getCurrentCalendar = (): ErgastResponse<RaceSchedule> =>
  get("/current.json");

// Results
export const getCurrentSeasonResults = (): ErgastResponse<RaceResultsDto> =>
  get(`/current/results.json?limit=1000`);
export const getSeasonResults = (
  season: string,
  limit: number = 1000
): ErgastResponse<RaceResultsDto> =>
  get(`/${season}/results.json?limit=${limit}`);
export const getRaceResults = (
  season: string,
  round: string
): ErgastResponse<RaceResultsDto> => get(`/${season}/${round}/results.json`);
export const getQualifyingResults = (season: string, round: string) =>
  get(`/${season}/${round}/qualifying.json`);
export const getSprintResults = (
  season: string,
  round: string
): ErgastResponse<RaceResultsDto> => get(`/${season}/${round}/sprint.json`);

// Contestants
export const getDrivers = (season: number) => get(`/${season}/drivers.json`);
export const getTeams = (season: number) => get(`/${season}/constructors.json`);
