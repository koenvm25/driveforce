import { ConstructorStandings } from "@/types/dto/ConstructorStandingsDto";
import { DriverStandings } from "@/types/dto/DriverStandingsDto";
import { ApiResult } from "@/types/dto/ErgastDto";
import { toMillis } from "@/helpers/dateTimeHelpers";
import { AxiosResponse } from "axios";
import { useQuery } from "@tanstack/react-query";
import { getConstructorStandings, getDriverStandings } from "../api/endpoints";

export const useDriversStandingsQuery = (season: string) => {
  return useQuery<AxiosResponse<ApiResult<DriverStandings>>>({
    queryKey: ["driverStandings", season],
    queryFn: async () => getDriverStandings(season),
    gcTime: toMillis({ minute: 90 }),
    staleTime: toMillis({ minute: 60 }),
  });
};

export const useConstructorStandingsQuery = (season: string) => {
  return useQuery<AxiosResponse<ApiResult<ConstructorStandings>>>({
    queryKey: ["constructorStandings", season],
    queryFn: async () => getConstructorStandings(season),
    gcTime: toMillis({ minute: 90 }),
    staleTime: toMillis({ minute: 60 }),
  });
};
