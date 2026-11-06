import {
  compareWithTeammate,
  TeammateComparison,
} from "@/domain/TeammateComparison";
import {
  getConstructorSeasonQualifying,
  getConstructorSeasonResults,
  getConstructorTotal,
  getDriverTotal,
} from "@/utils/api/endpoints";
import { toMillis } from "@/utils/dateTimeHelpers";
import { useQuery } from "@tanstack/react-query";

export const useTeammateComparisonQuery = (
  driverId: string,
  constructorId: string | undefined,
  season: string | undefined,
) => {
  return useQuery<TeammateComparison | undefined>({
    queryKey: ["teammateComparison", driverId, constructorId, season],
    enabled: !!constructorId && !!season,
    queryFn: async () => {
      const races = await getConstructorSeasonResults(constructorId!, season!);
      const qualifying = await getConstructorSeasonQualifying(
        constructorId!,
        season!,
      );
      return compareWithTeammate(
        races.data.MRData?.RaceTable.Races ?? [],
        qualifying.data.MRData?.RaceTable.Races ?? [],
        driverId,
      );
    },
    gcTime: toMillis({ minutes: 90 }),
    staleTime: toMillis({ minutes: 60 }),
    retry: 1,
  });
};

export interface TeamTotals {
  wins: number;
  poles: number;
}

export const useTeamTotalsQuery = (constructorId: string) => {
  return useQuery<TeamTotals>({
    queryKey: ["teamTotals", constructorId],
    queryFn: async () => {
      const wins = await getConstructorTotal(constructorId, "results/1");
      const poles = await getConstructorTotal(constructorId, "qualifying/1");
      return {
        wins: Number(wins.data.MRData?.total ?? 0),
        poles: Number(poles.data.MRData?.total ?? 0),
      };
    },
    gcTime: toMillis({ minutes: 90 }),
    staleTime: toMillis({ minutes: 60 }),
    retry: 1,
  });
};

export interface CareerTotals {
  races: number;
  wins: number;
  poles: number;
}

export const useDriverCareerTotalsQuery = (driverId: string) => {
  return useQuery<CareerTotals>({
    queryKey: ["driverCareerTotals", driverId],
    queryFn: async () => {
      // sequential on purpose: parallel requests trip the API's burst rate limit
      const races = await getDriverTotal(driverId, "results");
      const wins = await getDriverTotal(driverId, "results/1");
      const poles = await getDriverTotal(driverId, "qualifying/1");
      return {
        races: Number(races.data.MRData?.total ?? 0),
        wins: Number(wins.data.MRData?.total ?? 0),
        poles: Number(poles.data.MRData?.total ?? 0),
      };
    },
    gcTime: toMillis({ minutes: 90 }),
    staleTime: toMillis({ minutes: 60 }),
    retry: 1,
  });
};
