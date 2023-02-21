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

export const convertToPeriodString = (
  endDate: Date,
): string => {
  const startDate = new Date(endDate);
  startDate.setDate(startDate.getDate() -3)
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
