import {DateTime, Duration, DurationLikeObject, DurationUnits} from 'luxon';

export const toMillis = (duration: DurationLikeObject): number => {
  return Duration.fromObject(duration).toMillis();
};

export const getDuration = (
  date1: DateTime,
  date2: DateTime,
  options?: DurationUnits,
): Duration => {
  return date1.diff(date2, options);
};

export const getDateTime = (date: string, time: string) => {
  return DateTime.fromISO(`${date}T${time}`);
};
