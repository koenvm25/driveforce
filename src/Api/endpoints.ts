import { get } from "./config";

// Standings
export const getDriverStandings = (season: number) => get(`${season}/driverStandings.json`)
export const getConstructorStandings = (season: number) => get(`${season}/constructorStandings.json`)

// Schedule
export const getCalendar = (season: number) => get(`${season}.json`)
export const getRace = (season: string, round: string) => get(`${season}/${round}.json`)

// Results
export const getSeasonResults = (season: number, limit?: number) => get(`${season}/Results.json?limit=${limit}`)
export const getRoundResult = (season: number, round: number) => get(`${season}/${round}/Results.json`)