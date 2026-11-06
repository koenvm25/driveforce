import { Driver, RacesEntityResults } from "@/types/dto/RaceResultsDto";

export interface HeadToHead {
  driver: number;
  teammate: number;
}

export interface TeammateComparison {
  teammate: Driver;
  sharedRaces: number;
  qualifying: HeadToHead;
  race: HeadToHead;
  points: HeadToHead;
}

const emptyScore = (): HeadToHead => ({ driver: 0, teammate: 0 });

const pickTeammate = (races: RacesEntityResults[], driverId: string) => {
  const shared = new Map<string, { driver: Driver; count: number }>();
  for (const race of races) {
    const results = race.Results ?? [];
    if (!results.some((result) => result.Driver.driverId === driverId))
      continue;
    for (const { Driver } of results) {
      if (Driver.driverId === driverId) continue;
      const entry = shared.get(Driver.driverId) ?? { driver: Driver, count: 0 };
      entry.count += 1;
      shared.set(Driver.driverId, entry);
    }
  }
  return [...shared.values()].sort((a, b) => b.count - a.count)[0];
};

export const compareWithTeammate = (
  raceRows: RacesEntityResults[],
  qualifyingRows: RacesEntityResults[],
  driverId: string,
): TeammateComparison | undefined => {
  const picked = pickTeammate(raceRows, driverId);
  if (!picked) return undefined;
  const teammateId = picked.driver.driverId;

  const race = emptyScore();
  const points = emptyScore();
  for (const { Results = [] } of raceRows) {
    const mine = Results?.find((r) => r.Driver.driverId === driverId);
    const theirs = Results?.find((r) => r.Driver.driverId === teammateId);
    if (!mine || !theirs) continue;
    points.driver += Number(mine.points);
    points.teammate += Number(theirs.points);
    if (Number(mine.position) < Number(theirs.position)) race.driver += 1;
    else race.teammate += 1;
  }

  const qualifying = emptyScore();
  for (const { QualifyingResults = [] } of qualifyingRows) {
    const mine = QualifyingResults?.find((r) => r.Driver.driverId === driverId);
    const theirs = QualifyingResults?.find(
      (r) => r.Driver.driverId === teammateId,
    );
    if (!mine || !theirs) continue;
    if (Number(mine.position) < Number(theirs.position)) qualifying.driver += 1;
    else qualifying.teammate += 1;
  }

  return {
    teammate: picked.driver,
    sharedRaces: picked.count,
    qualifying,
    race,
    points,
  };
};
