import {DateTime} from 'luxon';
import {Circuit} from './Circuit';
import {Driver} from './Driver';
import {Constructor} from './Constructor';

export interface RaceResult {
  round: string;
  season: string;
  url: string;
  raceName: string;
  dateTime: DateTime;
  circuit: Circuit;
  race: Result[];
  sprint: Result[];
  qualifying: QResult[];
}

interface Result {
  number: string;
  position: string;
  points: string;
  grid: string;
  laps: string;
  driver: Driver;
  constructor: Constructor;
  time: string | undefined;
  fastestLaps:
    | {
        rank?: string;
        lap: string;
        time: string;
        averageSeed?: {
          unit: string;
          speed: string;
        };
      }
    | undefined;
}

interface QResult {
  number: string;
  position: string;
  driver: Driver;
  constructor: Constructor;
  q1: string;
  q2: string;
  q3: string;
}
