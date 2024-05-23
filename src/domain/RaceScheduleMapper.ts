import {Race, RaceTable} from '@/types/RaceSchedule';
import {RaceSchedule, RacesEntity} from '@/types/dto/RaceScheduleDto';
import {DateTime} from 'luxon';

export const mapToRaceTable = (raceScheduleDto: RaceSchedule | undefined): RaceTable | undefined => {
  if (!raceScheduleDto) return undefined;
  const races: Race[] = raceScheduleDto.RaceTable.Races.map((race) => {
    return {
      round: race.round,
      season: race.season,
      url: race.round,
      name: race.raceName,
      circuit: {
        id: race.Circuit.circuitId,
        url: race.Circuit.url,
        name: race.Circuit.circuitName,
        location: {
          lat: race.Circuit.Location.lat,
          long: race.Circuit.Location.long,
          locality: race.Circuit.Location.locality,
          country: race.Circuit.Location.country,
        },
      },
      events: mapToEvents(race),
    };
  });

  return {
    season: raceScheduleDto.RaceTable.season,
    races,
  };
};

const mapToEvents = (raceEntity: RacesEntity): Race['events'] => {
  return !!raceEntity.Sprint && !raceEntity.ThirdPractice
    ? {
        isSprintWeekend: true,
        firstPractice: {
          name: 'First practice',
          dateTime: DateTime.fromISO(
            raceEntity.FirstPractice.date + 'T' + raceEntity.FirstPractice.time,
          ),
        },
        qualifying: {
          name: 'Qualifying',
          dateTime: DateTime.fromISO(raceEntity.Qualifying.date + 'T' + raceEntity.Qualifying.time),
        },
        sprintShootout: {
          name: 'Sprint shootout',
          dateTime: DateTime.fromISO(
            raceEntity.SecondPractice.date + 'T' + raceEntity.SecondPractice.time,
          ),
        },
        sprint: {
          name: 'Sprint',
          dateTime: DateTime.fromISO(raceEntity.Sprint.date + 'T' + raceEntity.Sprint.time),
        },
        race: {
          name: 'Race',
          dateTime: DateTime.fromISO(raceEntity.date + 'T' + raceEntity.time),
        },
      }
    : {
        isSprintWeekend: false,
        firstPractice: {
          name: 'First practice',
          dateTime: DateTime.fromISO(
            raceEntity.FirstPractice.date + 'T' + raceEntity.FirstPractice.time,
          ),
        },
        secondPractice: {
          name: 'Second practice',
          dateTime: DateTime.fromISO(
            raceEntity.SecondPractice.date + 'T' + raceEntity.SecondPractice.time,
          ),
        },
        thirdPractice: {
          name: 'Third practice',
          dateTime: DateTime.fromISO(
            raceEntity.ThirdPractice?.date + 'T' + raceEntity.ThirdPractice?.time,
          ),
        },
        qualifying: {
          name: 'Qualifying',
          dateTime: DateTime.fromISO(raceEntity.Qualifying.date + 'T' + raceEntity.Qualifying.time),
        },
        race: {
          name: 'Race',
          dateTime: DateTime.fromISO(raceEntity.date + 'T' + raceEntity.time),
        },
      };
};
