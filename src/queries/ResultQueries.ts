import {
  getQualifyingResults,
  getRaceResults,
  getSeasonResults,
  getSprintResults,
} from '@/api/endpoints';
import {mapToQualifyingResult, mapToRaceResult, mapToSprintResult} from '@/domain/ResultsMapper';
import {toMillis} from '@/helpers/dateTimeHelpers';
import {RaceResult} from '@/types/Results';
import {ApiResult} from '@/types/dto/ErgastDto';
import {RaceResultsDto} from '@/types/dto/RaceResultsDto';
import {AxiosResponse} from 'axios';
import {useQuery} from 'react-query';

export const useSeasonResultsQuery = (season: number) => {
  return useQuery<AxiosResponse<ApiResult<RaceResultsDto>>>(
    ['seasonResults', season],
    async () => getSeasonResults(season),
    {
      keepPreviousData: true,
      cacheTime: toMillis({minutes: 90}),
      staleTime: toMillis({minutes: 60}),
    },
  );
};

export const useRaceResultQuery = (season: string, round: string) => {
  return useQuery<RaceResult | undefined>(
    ['raceResult', season, round],
    async () => {
      const raceResultsDto = await getRaceResults(season, round);
      return mapToRaceResult(raceResultsDto.data.MRData);
    },
    {
      keepPreviousData: true,
      cacheTime: toMillis({minutes: 90}),
      staleTime: toMillis({minutes: 60}),
    },
  );
};

export const useSprintResultQuery = (season: string, round: string) => {
  return useQuery<RaceResult | undefined>(
    ['sprintResult', season, round],
    async () => {
      const sprintResultsDto = await getSprintResults(season, round);
      return mapToSprintResult(sprintResultsDto.data.MRData);
    },
    {
      keepPreviousData: true,
      cacheTime: toMillis({minutes: 90}),
      staleTime: toMillis({minutes: 60}),
    },
  );
};

export const useQualifyingResultQuery = (season: string, round: string) => {
  return useQuery<RaceResult | undefined>(
    ['qualifyingResult', season, round],
    async () => {
      const sprintResultsDto = await getQualifyingResults(season, round);
      return mapToQualifyingResult(sprintResultsDto.data.MRData);
    },
    {
      keepPreviousData: true,
      cacheTime: toMillis({minutes: 90}),
      staleTime: toMillis({minutes: 60}),
    },
  );
};
