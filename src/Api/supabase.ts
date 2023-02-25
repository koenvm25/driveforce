import { createClient } from "@supabase/supabase-js";

export const getDriverPenaltyPoints = async (
  setDrivers: (drivers: DriverWithPenaltyPoints[]) => void
) => {
  const supabaseUrl = "https://ezcxlijkyxcygregizon.supabase.co";
  const supabaseKey = process.env.REACT_APP_SUPABASE_KEY!;
  const supabase = createClient(supabaseUrl, supabaseKey);
  supabase
    .from("drivers")
    .select("*")
    .then((driversResponse) => {
      supabase
        .from("points")
        .select(
          `
        id,
        points,
        reason,
        expires_at,
        race,
        short_reason,
        driver_id (
          id,
          name,
          number
        )
      `
        )
        .then((pointsResponse) => {
          const drivers = mapToPoints(
            driversResponse.data as DriverDto[],
            pointsResponse.data as PointDto[]
          );
          setDrivers(drivers);
        });
    });
};

const mapToPoints = (
  driversDto: DriverDto[],
  poinstDto: PointDto[]
): DriverWithPenaltyPoints[] => {
  const drivers: DriverWithPenaltyPoints[] = driversDto.map((driverDto) => {
    const filteredPoints = poinstDto.filter(
      (point) => point.driver_id.id === driverDto.id
    );
    const points: Point[] = filteredPoints
      .map((filteredPoint) => {
        const point: Point = {
          id: filteredPoint.id,
          expiresAt: new Date(filteredPoint.expires_at),
          points: filteredPoint.points,
          race: filteredPoint.race,
          reason: filteredPoint.reason,
          shortReason: filteredPoint.short_reason,
        };
        return point;
      })
      .filter((point) => point.expiresAt > new Date());
    const driver: DriverWithPenaltyPoints = {
      ...driverDto,
      points: points,
    };
    return driver;
  });
  drivers.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  return drivers;
};

type DriverDto = {
  id: number;
  name: string;
  number: number;
};

type PointDto = {
  id: number;
  expires_at: string;
  points: number;
  race: string;
  reason: string;
  short_reason: string;
  driver_id: DriverDto;
};

export type Point = {
  id: number;
  expiresAt: Date;
  points: number;
  race: string;
  reason: string;
  shortReason: string;
};

export type DriverWithPenaltyPoints = {
  id: number;
  name: string;
  number: number;
  points: Point[];
};
