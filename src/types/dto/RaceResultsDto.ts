export interface RaceResultsDto {
  xmlns: string;
  series: string;
  url: string;
  limit: string;
  offset: string;
  total: string;
  RaceTable: RaceTable;
}
export interface RaceTable {
  season: string;
  Races?: RacesEntityResults[] | null;
}
export interface RacesEntityResults {
  season: string;
  round: string;
  url: string;
  raceName: string;
  Circuit: Circuit;
  date: string;
  time: string;
  Results?: ResultsEntity[] | null;
  SprintResults?: ResultsEntity[] | null
  QualifyingResults?: QualifyingResultsEntity[] | null;
}
export interface Circuit {
  circuitId: string;
  url: string;
  circuitName: string;
  Location: Location;
}
export interface Location {
  lat: string;
  long: string;
  locality: string;
  country: string;
}
export interface ResultsEntity {
  number: string;
  position: string;
  positionText: string;
  points: string;
  Driver: Driver;
  Constructor: Constructor;
  grid: string;
  laps: string;
  status: string;
  Time?: Time | null;
  FastestLap: FastestLap;
}
export interface QualifyingResultsEntity {
  number: string;
  position: string;
  Driver: Driver;
  Constructor: Constructor;
  Q1: string;
  Q2?: string | null;
  Q3?: string | null;
}
export interface Driver {
  driverId: string;
  permanentNumber: string;
  code: string;
  url: string;
  givenName: string;
  familyName: string;
  dateOfBirth: string;
  nationality: string;
}
export interface Constructor {
  constructorId: string;
  url: string;
  name: string;
  nationality: string;
}
export interface Time {
  millis: string;
  time: string;
}
export interface FastestLap {
  rank: string;
  lap: string;
  Time: Time1;
  AverageSpeed: AverageSpeed;
}
export interface Time1 {
  time: string;
}
export interface AverageSpeed {
  units: string;
  speed: string;
}
