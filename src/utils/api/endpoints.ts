import { ApiResult, ErgastResponse } from "@/types/dto/ErgastDto";
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
export const getLastRaceResults = (): ErgastResponse<RaceResultsDto> =>
  get("/current/last/results.json");
export const getCurrentSeasonResults = (): ErgastResponse<RaceResultsDto> =>
  get(`/current/results.json?limit=10000`);
const MAX_PAGE_SIZE = 100;
export const getSeasonResults = async (
  season: string
): ErgastResponse<RaceResultsDto> => {
  const url = `/${season}/results.json`;
  const first = await get<ApiResult<RaceResultsDto>>(url, {
    params: { limit: MAX_PAGE_SIZE, offset: 0 },
  });
  const firstData = first.data.MRData;
  if (!firstData) return first;

  const races = [...(firstData.RaceTable.Races ?? [])];
  const total = Number(firstData.total);
  for (let offset = MAX_PAGE_SIZE; offset < total; offset += MAX_PAGE_SIZE) {
    const page = await get<ApiResult<RaceResultsDto>>(url, {
      params: { limit: MAX_PAGE_SIZE, offset },
    });
    for (const race of page.data.MRData?.RaceTable.Races ?? []) {
      const existing = races.find((r) => r.round === race.round);
      if (existing) {
        existing.Results = [...(existing.Results ?? []), ...(race.Results ?? [])];
      } else {
        races.push(race);
      }
    }
  }

  firstData.RaceTable.Races = races;
  return first;
};
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
