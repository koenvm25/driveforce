import { get } from "./config";

// Standings
export const getDriverStandings = (season: number) => get(`${season}/driverStandings.json`)
export const getConstructorStandings = (season: number) => get(`${season}/constructorStandings.json`)