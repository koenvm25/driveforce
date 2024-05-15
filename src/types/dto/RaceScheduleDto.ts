export interface RaceSchedule {
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
  Races: RacesEntity[];
}
export interface RacesEntity {
  season: string;
  round: string;
  url: string;
  raceName: string;
  Circuit: Circuit;
  date: string;
  time: string;
  FirstPractice: Event;
  SecondPractice: Event;
  ThirdPractice?: Event;
  Qualifying: Event;
  Sprint?: Event;
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
export interface Event {
  date: string;
  time: string;
}
