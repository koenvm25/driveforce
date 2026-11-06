import { Constructor } from "./ConstructorStandingsDto";
import { Driver } from "./DriverStandingsDto";

export interface DriverTableDto {
  total: string;
  DriverTable: {
    driverId?: string;
    Drivers: Driver[];
  };
}

export interface ConstructorTableDto {
  total: string;
  ConstructorTable: {
    constructorId?: string;
    Constructors: Constructor[];
  };
}

export interface SeasonTableDto {
  total: string;
  SeasonTable: {
    Seasons: { season: string; url: string }[];
  };
}

export interface TotalDto {
  total: string;
}
