export type DriverStandingsTable = {
  season: number;
  StandingsLists: DriverStandingsList[];
}

export type ConstructorStandingsTable = {
  season: number;
  StandingsLists: ConstructorStandingsList[];
}

type DriverStandingsList = {
  season: number;
  round: number;
  DriverStandings: DriverStanding[];
}

type ConstructorStandingsList = {
  season: number;
  round: number;
  ConstructorStandings: ConstructorStanding[];
}

type ConstructorStanding = {
  position: number;
  positionText: string
  points: number;
  wins: number;
  Constructor: Constructor;
} 

type DriverStanding = {
  position: number;
  positionText: string
  points: number;
  wins: number;
  Driver: Driver;
  Constructors: Constructor[];
}

type Driver = {
  driverId: string;
  permanentNumber: number;
  code: string;
  url: string;
  givenName: string;
  familyName: string;
  dateOfBirth: string
  nationality: string
}

type Constructor = {
  constructorId: string;
  url: string;
  name: string;
  nationality: string;
}