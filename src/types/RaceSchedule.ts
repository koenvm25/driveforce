import { DateTime } from "luxon";
import { Circuit } from "./Circuit";

export interface RaceTable {
  season: string;
  races: Race[];
}

export interface Race {
  round: string;
  season: string;
  url: string;
  name: string;
  events: Events | SprintEvents;
  circuit: Circuit;
}

interface Events {
  isSprintWeekend: false;
  firstPractice?: Event;
  secondPractice?: Event;
  thirdPractice?: Event;
  qualifying?: Event;
  race: Event;
}

interface SprintEvents {
  isSprintWeekend: true;
  firstPractice?: Event;
  qualifying?: Event;
  sprintShootout?: Event;
  sprint?: Event;
  race: Event;
}

export interface Event {
  name: string;
  dateTime: DateTime;
}

export interface NextEvent {
  dateTime: DateTime;
  name: string;
  circuit: string;
  race: string;
  season: string;
  round: string;
}
