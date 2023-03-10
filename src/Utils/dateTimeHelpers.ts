import { Race, Event } from "../Domain/calendar";

export const convertDateAndTimeStringsToReadable = (
  dateString: string,
  timeString: string
): string => {
  const date = new Date(dateString + "T" + timeString);

  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "numeric",
  };

  const locale = Intl.DateTimeFormat().resolvedOptions().locale;
  return Intl.DateTimeFormat(locale, options).format(date);
};

export const isDateInFuture = (date: Date) => {
  const now = new Date();
  return date > now;
};

export const isDateHistory = (date: Date) => {
  const now = new Date();
  return date < now;
};

export const convertToPeriodString = (endDate: Date): string => {
  const startDate = new Date(endDate);
  startDate.setDate(startDate.getDate() - 3);
  if (startDate.getMonth() === endDate.getMonth()) {
    return `${startDate.getDate()} - ${endDate.toLocaleString("default", {
      month: "long",
      day: "numeric",
    })}`;
  } else {
    return `${startDate.toLocaleString("default", {
      month: "long",
      day: "numeric",
    })} - ${endDate.toLocaleString("default", {
      month: "long",
      day: "numeric",
    })}`;
  }
};

export const getNextEvent = (nextRace: Race): Event => {
  if (nextRace.FirstPractice) {
    const date = new Date(
      `${nextRace.FirstPractice.date}T${nextRace.FirstPractice.time}`
    );
    if (isDateInFuture(date)) {
      const event: Event = {
        ...nextRace.FirstPractice,
        name: "FirstPractice",
      };
      return event;
    }
  }
  if (nextRace.SecondPractice) {
    const date = new Date(
      `${nextRace.SecondPractice.date}T${nextRace.SecondPractice.time}`
    );
    if (isDateInFuture(date)) {
      const event: Event = {
        ...nextRace.SecondPractice,
        name: "SecondPractice",
      };
      return event;
    }
  }
  if (nextRace.ThirdPractice) {
    const date = new Date(
      `${nextRace.ThirdPractice.date}T${nextRace.ThirdPractice.time}`
    );
    if (isDateInFuture(date)) {
      const event: Event = {
        ...nextRace.ThirdPractice,
        name: "ThirdPractice",
      };
      return event;
    }
  }
  if (nextRace.Qualifying) {
    const date = new Date(
      `${nextRace.Qualifying.date}T${nextRace.Qualifying.time}`
    );
    if (isDateInFuture(date)) {
      const event: Event = {
        ...nextRace.Qualifying,
        name: "Qualifying",
      };
      return event;
    }
  }
  if (nextRace.Sprint) {
    const date = new Date(`${nextRace.Sprint.date}T${nextRace.Sprint.time}`);
    if (isDateInFuture(date)) {
      const event: Event = {
        ...nextRace.Sprint,
        name: "Sprint",
      };
      return event;
    }
  }
  const event: Event = {
    date: nextRace.date,
    time: nextRace.time,
    name: "Race",
  };
  return event;
};

export const isDateMoreThanMonthInFuture = (date: Date) => {
  return monthDiff(new Date(), date) >= 1;
};

function monthDiff(d1: Date, d2: Date) {
  var months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();
  return months <= 0 ? 0 : months;
}
