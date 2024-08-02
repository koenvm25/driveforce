import {
  mapToQualifyingResult,
  mapToRaceResult,
  mapToSprintResult,
} from "@/domain/ResultsMapper";
import { RaceResult } from "@/types/Results";
import { ErgastResponse } from "@/types/dto/ErgastDto";
import { RaceResultsDto } from "@/types/dto/RaceResultsDto";
import {
  getQualifyingResults,
  getRaceResults,
  getSeasonResults,
  getSprintResults,
} from "@/utils/api/endpoints";
import { toMillis } from "@/utils/dateTimeHelpers";
import { useQuery } from "@tanstack/react-query";

export const useSeasonResultsQuery = (season: string) => {
  return useQuery<ErgastResponse<RaceResultsDto>>({
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
