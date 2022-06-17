/**
 * Function to count the difference between to times
 * @param {Date} checkIn
 * @param {Date} checkOut
 */
export function calcDays(checkIn, checkOut) {
  const start = checkIn.getTime();
  const end = checkOut.getTime();

  // Time difference in milliseconds
  const diffInMilli = Math.abs(end - start);
  // Time difference in minutes
  const diffInMinutes = diffInMilli / (1000 * 60);
  // Time difference in hours
  const diffInHours = diffInMinutes / 60;
  // Time difference in days
  const diffInDays = diffInHours / 24;

  return {
    milliseconds: diffInMilli,
    minutes: diffInMinutes,
    hours: diffInHours,
    days: diffInDays,
  };
}

export const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
