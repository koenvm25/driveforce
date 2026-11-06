import { Event, Race } from "@/types/RaceSchedule";
import { getWeekendSessions } from "./scheduleHelpers";

const durationMinutes = (name: string) => {
  const lower = name.toLowerCase();
  if (lower.includes("race")) return 120;
  if (lower.includes("shootout")) return 45;
  return 60;
};

const formatUtc = (date: Date) =>
  date
    .toISOString()
    .replace(/[-:]/g, "")
    .replace(/\.\d{3}/, "");

const escapeText = (text: string) =>
  text.replace(/[\\;,]/g, (char) => `\\${char}`).replace(/\n/g, "\\n");

const toEvent = (race: Race, session: Event) => {
  const start = session.dateTime.toJSDate();
  const end = new Date(
    start.getTime() + durationMinutes(session.name) * 60_000,
  );
  const { locality, country } = race.circuit.location;
  return [
    "BEGIN:VEVENT",
    `UID:${race.season}-${race.round}-${session.name.replace(/\W+/g, "-").toLowerCase()}@driveforce`,
    `DTSTAMP:${formatUtc(new Date())}`,
    `DTSTART:${formatUtc(start)}`,
    `DTEND:${formatUtc(end)}`,
    `SUMMARY:${escapeText(`${race.name} – ${session.name}`)}`,
    `LOCATION:${escapeText(`${race.circuit.name}, ${locality}, ${country}`)}`,
    "END:VEVENT",
  ];
};

export const buildWeekendCalendar = (race: Race) =>
  [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//DriveForce//F1 weekend//EN",
    "CALSCALE:GREGORIAN",
    ...getWeekendSessions(race).flatMap((session) => toEvent(race, session)),
    "END:VCALENDAR",
  ].join("\r\n");

export const downloadWeekendCalendar = (race: Race) => {
  const blob = new Blob([buildWeekendCalendar(race)], {
    type: "text/calendar;charset=utf-8",
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${race.season}-round-${race.round}-${race.circuit.id}.ics`;
  link.click();
  URL.revokeObjectURL(url);
};
