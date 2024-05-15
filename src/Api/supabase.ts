// import { createClient } from "@supabase/supabase-js";
// import { DateTime } from "luxon";

// export const getDriverPenaltyPoints = async (
//   setDrivers: (drivers: DriverWithPenaltyPoints[]) => void
// ) => {
//   const supabaseUrl = process.env.SUPABASE_URL!;
//   const supabaseKey = process.env.SUPABASE_KEY!;
//   const supabase = createClient(supabaseUrl, supabaseKey);
//   const driversWithPenaltyPoints = supabase
//     .from("drivers")
//     .select("*")
//     .eq("active", true)
//     .then(async (driversResponse) => {
//       return await supabase
//         .from("points")
//         .select(
//           `
//         id,
//         points,
//         reason,
//         expires_at,
//         race,
//         short_reason,
//         driver_id (
//           id,
//           name,
//           number
//         )
//       `
//         )
//         .then((pointsResponse) => {
//           const drivers = mapToPoints(
//             driversResponse.data as DriverDto[],
//             pointsResponse.data as unknown as PointDto[]
//           );
//           return drivers;
//         });
//     });

//   return driversWithPenaltyPoints;
// };

// const mapToPoints = (
//   driversDto: DriverDto[],
//   poinstDto: PointDto[]
// ): DriverWithPenaltyPoints[] => {
//   const drivers: DriverWithPenaltyPoints[] = driversDto.map((driverDto) => {
//     const filteredPoints = poinstDto.filter(
//       (point) => point.driver_id.id === driverDto.id
//     );
//     const points: Point[] = filteredPoints
//       .map((filteredPoint) => {
//         const point: Point = {
//           id: filteredPoint.id,
//           expiresAt: DateTime.fromISO(filteredPoint.expires_at),
//           points: filteredPoint.points,
//           race: filteredPoint.race,
//           reason: filteredPoint.reason,
//           shortReason: filteredPoint.short_reason,
//         };
//         return point;
//       })
//       .filter((point) => point.expiresAt > DateTime.now());
//     const driver: DriverWithPenaltyPoints = {
//       ...driverDto,
//       points: points,
//       totalPoints: getTotalPoints(points),
//     };
//     return driver;
//   });
//   drivers.sort((a, b) => a.number - b.number);
//   return drivers;
// };

// const getTotalPoints = (points: Point[]) => {
//   let totalPoints = 0;
//   points.map((point) => (totalPoints = totalPoints + point.points));
//   return totalPoints;
// };

// type DriverDto = {
//   id: number;
//   name: string;
//   number: number;
// };

// type PointDto = {
//   id: number;
//   expires_at: string;
//   points: number;
//   race: string;
//   reason: string;
//   short_reason: string;
//   driver_id: DriverDto;
// };

// export type Point = {
//   id: number;
//   expiresAt: DateTime;
//   points: number;
//   race: string;
//   reason: string;
//   shortReason: string;
// };

// export type DriverWithPenaltyPoints = {
//   id: number;
//   name: string;
//   number: number;
//   totalPoints: number;
//   points: Point[];
// };
