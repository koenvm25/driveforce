import { Event, Race, RaceTable } from "@/types/RaceSchedule";
import {
  EventDto,
  RaceSchedule,
  RacesEntity,
} from "@/types/dto/RaceScheduleDto";
import { DateTime } from "luxon";

export const mapToRaceTable = (
  raceScheduleDto: RaceSchedule | undefined
): RaceTable | undefined => {
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

const mapToEvents = (raceEntity: RacesEntity): Race["events"] => {
  return !!raceEntity.Sprint && !raceEntity.ThirdPractice
    ? {
        isSprintWeekend: true,
        firstPractice: mapToEvent(raceEntity.FirstPractice, "First Practice"),
        qualifying: mapToEvent(raceEntity.Qualifying, "Qualifying"),
        sprintShootout: mapToEvent(
          raceEntity.SecondPractice,
          "Sprint Shootout"
        ),
        sprint: mapToEvent(raceEntity.Sprint, "Sprint"),
        race: {
          name: "Race",
          dateTime: DateTime.fromISO(raceEntity.date + "T" + raceEntity.time),
        },
      }
    : {
        isSprintWeekend: false,
        firstPractice: mapToEvent(raceEntity.FirstPractice, "First Practice"),
        secondPractice: mapToEvent(
          raceEntity.SecondPractice,
          "Second Practice"
        ),
        thirdPractice: mapToEvent(raceEntity.ThirdPractice, "Third Practice"),
        qualifying: mapToEvent(raceEntity.Qualifying, "Qualifying"),
        race: {
          name: "Race",
          dateTime: DateTime.fromISO(raceEntity.date + "T" + raceEntity.time),
        },
      };
};

const mapToEvent = (
  event: EventDto | undefined,
  name: string
): Event | undefined => {
  if (!event) return;

  return {
    name,
    dateTime: DateTime.fromISO(event.date + "T" + event.time),
  };
};
