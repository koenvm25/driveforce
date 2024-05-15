import {DriverWithPenaltyPoints, getDriverPenaltyPoints} from '@/api/supaBase';
import {toMillis} from '@/helpers/dateTimeHelpers';
import {useQuery} from 'react-query';

export const usePenaltyPointsQuery = () => {
  return useQuery<DriverWithPenaltyPoints[]>(
    ['penaltyPoints'],
    async () => {
      const driversWithPenaltyPoints = await getDriverPenaltyPoints((drivers) => drivers);
      return driversWithPenaltyPoints;
    },
    {
      keepPreviousData: true,
      cacheTime: toMillis({minute: 90}),
      staleTime: toMillis({minute: 60}),
    },
  );
};
