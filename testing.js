// const date = new Date('2023-03-05T15:00:00');
const date = new Date('2023-03-05T15:00:00Z');

options = {
  // year: "numeric",
  // month: "long",
  // day: "numeric",
  hour: "numeric",
  minute: "numeric",
  weekday: "long"
  // timeZone: "America/Los_Angeles",
};

const locale = Intl.DateTimeFormat().resolvedOptions().locale;
console.log(Intl.DateTimeFormat(locale, options).format(date));
console.log(Intl.DateTimeFormat('nl-NL').format(date));
console.log(date.toLocaleString())
