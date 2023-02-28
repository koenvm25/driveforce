import { get } from "./config";

// Standings
export const getDriverStandings = (season: number) => get(`${season}/driverStandings.json`)
export const getConstructorStandings = (season: number) => get(`${season}/constructorStandings.json`)

// Schedule
export const getCalendar = (season: number) => get(`${season}.json`)
export const getRace = (season: string, round: string) => get(`${season}/${round}.json`)

// Results
export const getSeasonResults = (season: number, limit?: number) => get(`${season}/results.json?limit=${limit}`)
export const getRoundResult = (season: number, round: number) => get(`${season}/${round}/results.json`)
export const getQualifyingResults = (season: number, round: number) => get(`${season}/${round}/qualifying.json`)
export const getSprintResults = (season: number, round: number) => get(`${season}/${round}/sprint.json`)

// Contestants
export const getDrivers = (season: number) => get(`${season}/drivers.json`)
export const getTeams = (season: number) => get(`${season}/constructors.json`)