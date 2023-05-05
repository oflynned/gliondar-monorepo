import { DateTime } from 'luxon';

// TODO should account for locale here
export const formatTimestampToDateTime = (
  timestamp?: Date | null
): string | null => {
  if (!timestamp) {
    return null;
  }

  const time = DateTime.fromJSDate(timestamp).toLocaleString({
    ...DateTime.TIME_SIMPLE,
  });
  const date = formatTimestampToDateWithDay(timestamp);

  // 8:00pm on Mon, 15 May 2023
  return `${time} on ${date}`;
};

export const formatTimestampToDateWithDay = (
  timestamp?: Date | null
): string | null => {
  if (!timestamp) {
    return null;
  }

  // Wednesday, 10 May 2023
  return DateTime.fromJSDate(timestamp).toLocaleString({
    ...DateTime.DATE_FULL,
    weekday: 'long',
  });
};

export const formatTimestampToDate = (
  timestamp?: Date | null
): string | null => {
  if (!timestamp) {
    return null;
  }

  // 19 April 2023
  return DateTime.fromJSDate(timestamp).toLocaleString(DateTime.DATE_FULL);
};

export const formatTimeElapsed = (timestamp?: Date | null): string | null => {
  if (!timestamp) {
    return null;
  }

  const referenceTime = DateTime.fromJSDate(timestamp);
  const now = DateTime.now();

  const minsElapsed = Math.floor(now.diff(referenceTime).as('minutes'));
  const hoursElapsed = Math.floor(now.diff(referenceTime).as('hours'));

  if (minsElapsed < 1) {
    return 'Just now';
  }

  if (hoursElapsed < 1) {
    return `${minsElapsed} mins ago`;
  }

  if (hoursElapsed < 24) {
    return `${hoursElapsed} hours ago`;
  }

  return formatTimestampToDate(timestamp);
};
