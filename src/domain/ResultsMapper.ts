import {RaceResult} from '@/types/Results';
import {RaceResultsDto} from '@/types/dto/RaceResultsDto';
import {DateTime} from 'luxon';

export const mapToRaceResult = (
  raceResults: RaceResultsDto | undefined,
): RaceResult | undefined => {
  if (!raceResults?.RaceTable.Races || raceResults.RaceTable.Races.length < 1) return;

  const race = raceResults.RaceTable.Races[0];
  if (!race.Results) return;

  try {
    return {
      season: raceResults.RaceTable.season,
      round: race.round,
      url: raceResults.url,
      raceName: race.raceName,
      dateTime: DateTime.fromISO(race.date + 'T' + race.time),
      circuit: {
        id: race.Circuit.circuitId,
        url: race.Circuit.url,
        name: race.Circuit.circuitName,
        location: race.Circuit.Location,
      },
      race: race.Results.map((result) => {
        return {
          number: result.number,
          position: result.position,
          points: result.points,
          grid: result.grid,
          laps: result.laps,
          time: result.Time?.time ? result.Time.time : result.status,
          driver: {
            id: result.Driver.driverId,
            permanentNumber: result.Driver.permanentNumber,
            code: result.Driver.code,
            url: result.Driver.url,
            givenName: result.Driver.givenName,
            familyName: result.Driver.familyName,
            dateOfBirth: DateTime.fromISO(result.Driver.dateOfBirth),
            nationality: result.Driver.nationality,
          },
          constructor: {
            id: result.Constructor.constructorId,
            url: result.Constructor.url,
            name: result.Constructor.name,
            nationality: result.Constructor.nationality,
          },
          fastestLaps: result.FastestLap
            ? {
                rank: result.FastestLap.rank,
                lap: result.FastestLap.lap,
                time: result.FastestLap.Time.time,
                averageSeed: {
                  unit: result.FastestLap.AverageSpeed.units,
                  speed: result.FastestLap.AverageSpeed.speed,
                },
              }
            : undefined,
        };
      }),
      sprint: [],
      qualifying: [],
    };
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export const mapToSprintResult = (
  raceResults: RaceResultsDto | undefined,
): RaceResult | undefined => {
  if (!raceResults?.RaceTable.Races || raceResults.RaceTable.Races.length < 1) return;

  const race = raceResults.RaceTable.Races[0];
  if (!race.SprintResults) return;

  try {
    return {
      season: raceResults.RaceTable.season,
      round: race.round,
      url: raceResults.url,
      raceName: race.raceName,
      dateTime: DateTime.fromISO(race.date + 'T' + race.time),
      circuit: {
        id: race.Circuit.circuitId,
        url: race.Circuit.url,
        name: race.Circuit.circuitName,
        location: race.Circuit.Location,
      },
      race: [],
      sprint: race.SprintResults.map((result) => {
        return {
          number: result.number,
          position: result.position,
          points: result.points,
          grid: result.grid,
          laps: result.laps,
          time: result.Time?.time ? result.Time.time : undefined,
          driver: {
            id: result.Driver.driverId,
            permanentNumber: result.Driver.permanentNumber,
            code: result.Driver.code,
            url: result.Driver.url,
            givenName: result.Driver.givenName,
            familyName: result.Driver.familyName,
            dateOfBirth: DateTime.fromISO(result.Driver.dateOfBirth),
            nationality: result.Driver.nationality,
          },
          constructor: {
            id: result.Constructor.constructorId,
            url: result.Constructor.url,
            name: result.Constructor.name,
            nationality: result.Constructor.nationality,
          },
          fastestLaps: result.FastestLap
            ? {
                lap: result.FastestLap.lap,
                time: result.FastestLap.Time.time,
              }
            : undefined,
        };
      }),
      qualifying: [],
    };
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export const mapToQualifyingResult = (
  raceResults: RaceResultsDto | undefined,
): RaceResult | undefined => {
  if (!raceResults?.RaceTable.Races || raceResults.RaceTable.Races.length < 1) return;

  try {
    const race = raceResults.RaceTable.Races[0];
    if (!race.QualifyingResults) return;

    return {
      season: raceResults.RaceTable.season,
      round: race.round,
      url: raceResults.url,
      raceName: race.raceName,
      dateTime: DateTime.fromISO(race.date + 'T' + race.time),
      circuit: {
        id: race.Circuit.circuitId,
        url: race.Circuit.url,
        name: race.Circuit.circuitName,
        location: race.Circuit.Location,
      },
      race: [],
      sprint: [],
      qualifying: race.QualifyingResults.map((result) => ({
        number: result.number,
        position: result.position,
        driver: {
          id: result.Driver.driverId,
          permanentNumber: result.Driver.permanentNumber,
          code: result.Driver.code,
          url: result.Driver.url,
          givenName: result.Driver.givenName,
          familyName: result.Driver.familyName,
          dateOfBirth: DateTime.fromISO(result.Driver.dateOfBirth),
          nationality: result.Driver.nationality,
        },
        constructor: {
          id: result.Constructor.constructorId,
          url: result.Constructor.url,
          name: result.Constructor.name,
          nationality: result.Constructor.nationality,
        },
        q1: result.Q1,
        q2: result.Q2 ?? '',
        q3: result.Q3 ?? '',
      })),
    };
  } catch (error) {
    console.error(error);
    return undefined;
  }
};
