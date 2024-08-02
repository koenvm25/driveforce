import {Event, NextEvent, Race} from '@/types/RaceSchedule';
import {DateTime} from 'luxon';

export const isEventInTheFuture = (event: Event) => {
  return event.dateTime < DateTime.now();
};

export const getNextEvent = (races?: Race[]): NextEvent | undefined => {
  if (!races) return;

  const now = DateTime.now();
  for (const race of races) {
    if (race.events.race.dateTime.diff(now, ['seconds']).seconds < 0) continue;
    if (race.events.firstPractice.dateTime.diff(now, ['seconds']).seconds > 0) {
      return {
        dateTime: race.events.firstPractice.dateTime,
        name: 'First practice',
        circuit: race.circuit.name,
        race: race.name,
        round: race.round,
        season: race.season,
      };
    }
    if (!race.events.isSprintWeekend) {
      if (race.events.secondPractice.dateTime.diff(now, ['seconds']).seconds > 0) {
        return {
          dateTime: race.events.secondPractice.dateTime,
          name: 'Second practice',
          circuit: race.circuit.name,
          race: race.name,
          round: race.round,
          season: race.season,
        };
      } else if (race.events.thirdPractice.dateTime.diff(now, ['seconds']).seconds > 0) {
        return {
          dateTime: race.events.thirdPractice.dateTime,
          name: 'Third practice',
          circuit: race.circuit.name,
          race: race.name,
          round: race.round,
          season: race.season,
        };
      } else if (race.events.qualifying.dateTime.diff(now, ['seconds']).seconds > 0) {
        return {
          dateTime: race.events.qualifying.dateTime,
          name: 'Qualifying',
          circuit: race.circuit.name,
          race: race.name,
          round: race.round,
          season: race.season,
        };
      }
    } else {
      if (race.events.qualifying.dateTime.diff(now, ['seconds']).seconds > 0) {
        return {
          dateTime: race.events.qualifying.dateTime,
          name: 'Qualifying',
          circuit: race.circuit.name,
          race: race.name,
          round: race.round,
          season: race.season,
        };
      }
      if (race.events.sprintShootout.dateTime.diff(now, ['seconds']).seconds > 0) {
        return {
          dateTime: race.events.sprintShootout.dateTime,
          name: 'Spring shootout',
          circuit: race.circuit.name,
          race: race.name,
          round: race.round,
          season: race.season,
        };
      }
      if (race.events.sprint.dateTime.diff(now, ['seconds']).seconds > 0) {
        return {
          dateTime: race.events.sprint.dateTime,
          name: 'Sprint race',
          circuit: race.circuit.name,
          race: race.name,
          round: race.round,
          season: race.season,
        };
      }
    }
    if (race.events.race.dateTime.diff(now, ['seconds']).seconds > 0) {
      return {
        dateTime: race.events.race.dateTime,
        name: 'Race',
        circuit: race.circuit.name,
        race: race.name,
        round: race.round,
        season: race.season,
      };
    }
  }
};
