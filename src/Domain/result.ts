import { Constructor, Driver } from "./standings";

export type Result = {
  number: number;
  position: number;
  positionText: string;
  poinst: number;
  Driver: Driver;
  Constructor: Constructor;
  grid: number;
  laps: number;
  status: string;
  Time: Time;
  FastestLap: FastestLap;
}

type Time = {
  millis?: number;
  time: string;
}

type FastestLap = {
  rank: number;
  lap: number;
  Time: Time;
  AverageSpeed: Speed;
}

type Speed = {
  units: string;
  speed: number;
}

export type QualifyingResult = {
  number: number;
  position: number
  Driver: Driver;
  Constructor: Constructor;
  Q1: string;
  Q2: string;
  Q3: string;
}