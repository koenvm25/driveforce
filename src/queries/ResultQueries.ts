import {
  getQualifyingResults,
  getRaceResults,
  getSeasonResults,
  getSprintResults,
} from "@/api/endpoints";
import {
  mapToRaceResult,
  mapToSprintResult,
  mapToQualifyingResult,
} from "@/domain/ResultsMapper";
import { toMillis } from "@/helpers/dateTimeHelpers";
import { RaceResult } from "@/types/Results";
import { ApiResult } from "@/types/dto/ErgastDto";
import { RaceResultsDto } from "@/types/dto/RaceResultsDto";
import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useSeasonResultsQuery = (season: string) => {
  return useQuery<AxiosResponse<ApiResult<RaceResultsDto>>>({
    queryKey: ["seasonResults", season],
    queryFn: async () => getSeasonResults(season),
    gcTime: toMillis({ minutes: 90 }),
    staleTime: toMillis({ minutes: 60 }),
  });
};

export const useRaceResultQuery = (season: string, round: string) => {
  return useQuery<RaceResult | undefined>({
    queryKey: ["raceResult", season, round],
    queryFn: async () => {
      const raceResultsDto = await getRaceResults(season, round);
      return mapToRaceResult(raceResultsDto.data.MRData);
    },
    gcTime: toMillis({ minutes: 90 }),
    staleTime: toMillis({ minutes: 60 }),
  });
};

export const useSprintResultQuery = (season: string, round: string) => {
  return useQuery<RaceResult | undefined>({
    queryKey: ["sprintResult", season, round],
    queryFn: async () => {
      const sprintResultsDto = await getSprintResults(season, round);
      return mapToSprintResult(sprintResultsDto.data.MRData);
    },
    gcTime: toMillis({ minutes: 90 }),
    staleTime: toMillis({ minutes: 60 }),
  });
};

export const useQualifyingResultQuery = (season: string, round: string) => {
  return useQuery<RaceResult | undefined>({
    queryKey: ["qualifyingResult", season, round],
    queryFn: async () => {
      const sprintResultsDto = await getQualifyingResults(season, round);
      return mapToQualifyingResult(sprintResultsDto.data.MRData);
    },
    gcTime: toMillis({ minutes: 90 }),
    staleTime: toMillis({ minutes: 60 }),
  });
};
