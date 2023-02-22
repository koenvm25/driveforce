import { get } from "./config";

// Standings
export const getDriverStandings = (season: number) => get(`${season}/driverStandings.json`)
export const getConstructorStandings = (season: number) => get(`${season}/constructorStandings.json`)

// Schedule
export const getCalendar = (season: number) => get(`${season}.json`)
export const getRace = (season: number, round: number) => get(`${season}/${round}.json`)

// Results
export const getResults = (season: number, limit?: number) => get(`${season}/Results.json?limit=${limit}`)