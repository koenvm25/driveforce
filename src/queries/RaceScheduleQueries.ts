import {mapToRaceTable} from '@/domain/RaceScheduleMapper';
import {toMillis} from '@/helpers/dateTimeHelpers';
import {RaceTable} from '@/types/RaceSchedule';
import {useQuery} from 'react-query';
import {getCalendar, getCurrentCalendar, getRace} from '../api/endpoints';

export const useSeasonScheduleQuery = (season: number) => {
  return useQuery<RaceTable | undefined>(
    ['seasonSchedule', season],
    async () => {
      const calendar = await getCalendar(season);
      return mapToRaceTable(calendar.data.MRData);
    },
    {
      keepPreviousData: true,
      cacheTime: toMillis({minute: 90}),
      staleTime: toMillis({minute: 60}),
    },
  );
};

export const useCurrentSeasonScheduleQuery = () => {
  return useQuery<RaceTable | undefined>(
    ['currentSeasonSchedule'],
    async () => {
      const calendar = await getCurrentCalendar();
      return mapToRaceTable(calendar.data.MRData);
    },
    {
      keepPreviousData: true,
      cacheTime: toMillis({minute: 90}),
      staleTime: toMillis({minute: 60}),
    },
  );
};

export const useRoundScheduleQuery = (season: string, round: string) => {
  return useQuery<RaceTable | undefined>(
    ['round', season, round],
    async () => {
      const race = await getRace(season, round);
      return mapToRaceTable(race.data.MRData);
    },
    {
      keepPreviousData: true,
      cacheTime: toMillis({minute: 90}),
      staleTime: toMillis({minute: 60}),
    },
  );
};
