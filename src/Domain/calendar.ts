import { Result } from "./result";

export type RaceTable = {
  season: number;
  Races: Race[];
};

export type Race = {
  season: number;
  round: number;
  url: string;
  raceName: string;
  Circuit: Circuit;
  date: string;
  time: string;
  FirstPractice?: Event;
  SecondPractice?: Event;
  ThirdPractice?: Event;
  Qualifying?: Event;
  Sprint?: Event;
  Results?: Result[];
};

export type Event = {
  date: string;
  time: string;
  name?: EventName;
};

type Circuit = {
  circuitId: string;
  url: string;
  circuitName: string;
  Location: Location;
};

type Location = {
  lat: number;
  long: number;
  locality: string;
  country: string;
};

type EventName =
  | "FirstPractice"
  | "SecondPractice"
  | "ThirdPractice"
  | "Qualifying"
  | "Sprint"
  | "Race";

export enum events {
  FirstPractice = "first practice",
  SecondPractice = "second practice",
  ThirdPractice = "third practice",
  Qualifying = "qualifying",
  Sprint = "sprint race",
  Race = "race",
}
