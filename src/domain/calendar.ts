import { Result } from "./result";

export type RaceTable = {
  season: number;
  Races: Race[]
}

export type Race = {
  season: number;
  round: number;
  url: string;
  raceName: string;
  Circuit: Circuit
  date: string
  time: string
  FirstPractice?: Event;
  SecondPractice?: Event;
  ThirdPractice?: Event;
  Qualifying?: Event;
  Sprint?: Event;
  Results?: Result[];
}

type Event = {
  date: string;
  time: string;
}

type Circuit = {
  circuitId: string;
  url: string;
  circuitName: string;
  Location: Location;
}

type Location = {
  lat: number;
  long: number;
  lacality: string;
  country: string;
}