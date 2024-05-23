import { mapToRaceTable } from "@/domain/RaceScheduleMapper";
import { toMillis } from "@/helpers/dateTimeHelpers";
import { RaceTable } from "@/types/RaceSchedule";
import { getCalendar, getCurrentCalendar, getRace } from "../api/endpoints";
import { useQuery } from "@tanstack/react-query";

export const useSeasonScheduleQuery = (season: string) => {
  return useQuery<RaceTable | undefined>({
    queryKey: ["seasonSchedule", season],
    queryFn: async () => {
      const calendar = await getCalendar(season);
      return mapToRaceTable(calendar.data.MRData);
    },
    gcTime: toMillis({ minute: 90 }),
    staleTime: toMillis({ minute: 60 }),
  });
};

export const useCurrentSeasonScheduleQuery = () => {
  return useQuery<RaceTable | undefined>({
    queryKey: ["currentSeasonSchedule"],
    queryFn: async () => {
      const calendar = await getCurrentCalendar();
      return mapToRaceTable(calendar.data.MRData);
    },
    gcTime: toMillis({ minute: 90 }),
    staleTime: toMillis({ minute: 60 }),
  });
};

export const useRoundScheduleQuery = (season: string, round: string) => {
  return useQuery<RaceTable | undefined>({
    queryKey: ["round", season, round],
    queryFn: async () => {
      const race = await getRace(season, round);
      return mapToRaceTable(race.data.MRData);
    },
    gcTime: toMillis({ minute: 90 }),
    staleTime: toMillis({ minute: 60 }),
  });
};
