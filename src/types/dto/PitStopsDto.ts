export interface PitStopsDto {
  total: string;
  RaceTable: {
    Races?: { PitStops?: PitStopDto[] | null }[] | null;
  };
}

export interface PitStopDto {
  driverId: string;
  lap: string;
  stop: string;
  time: string;
  duration: string;
}
