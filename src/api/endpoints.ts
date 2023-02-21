import { getFlag } from "./countryflagsapiConfig";
import { getF1 } from "./ergastConfig";

// Standings
export const getDriverStandings = (season: number) => getF1(`${season}/driverStandings.json`)
export const getConstructorStandings = (season: number) => getF1(`${season}/constructorStandings.json`)

// Schedule
export const getCalendar = (season: number) => getF1(`${season}.json`)
export const getRace = (season: number, round: number) => getF1(`${season}/${round}.json`)

// Country flags
export const getCountriesFlag = (country: string) => getFlag(`${country}`)