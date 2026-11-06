import {
  mapToQualifyingResult,
  mapToRaceResult,
  mapToSprintResult,
} from "@/domain/ResultsMapper";
import { RaceResult } from "@/types/Results";
import { ErgastResponse } from "@/types/dto/ErgastDto";
import { RaceResultsDto } from "@/types/dto/RaceResultsDto";
import {
  getCircuitWinners,
  getQualifyingResults,
  getRaceResults,
  getSeasonResults,
  getSeasonSprintResults,
  getSprintResults,
} from "@/utils/api/endpoints";
import { toMillis } from "@/utils/dateTimeHelpers";
import { useQuery } from "@tanstack/react-query";

export const useSeasonResultsQuery = (season: string, enabled = true) => {
  return useQuery<Awaited<ErgastResponse<RaceResultsDto>>>({
    queryKey: ["seasonResults", season],
    queryFn: async () => getSeasonResults(season),
    enabled,
    gcTime: toMillis({ minutes: 90 }),
    staleTime: toMillis({ minutes: 60 }),
  });
};

export const useSeasonSprintResultsQuery = (season: string, enabled = true) => {
  return useQuery<Awaited<ErgastResponse<RaceResultsDto>>>({
    queryKey: ["seasonSprintResults", season],
    queryFn: async () => getSeasonSprintResults(season),
    enabled,
    gcTime: toMillis({ minutes: 90 }),
    staleTime: toMillis({ minutes: 60 }),
  });
};

export interface PastWinner {
  season: string;
  round: string;
  driverId: string;
  driverName: string;
  constructorId: string;
  constructorName: string;
}

export const useCircuitWinnersQuery = (
  circuitId: string,
  beforeSeason: string,
) => {
  return useQuery<PastWinner[]>({
    queryKey: ["circuitWinners", circuitId, beforeSeason],
    queryFn: async () => {
      const dto = await getCircuitWinners(circuitId);
      return (dto.data.MRData?.RaceTable.Races ?? [])
        .filter(
          (race) =>
            Number(race.season) < Number(beforeSeason) && race.Results?.[0],
        )
        .map((race) => {
          const winner = race.Results![0];
          return {
            season: race.season,
            round: race.round,
            driverId: winner.Driver.driverId,
            driverName: `${winner.Driver.givenName} ${winner.Driver.familyName}`,
            constructorId: winner.Constructor.constructorId,
            constructorName: winner.Constructor.name,
          };
        })
        .reverse();
    },
    gcTime: toMillis({ minutes: 90 }),
    staleTime: toMillis({ minutes: 60 }),
    retry: 1,
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
