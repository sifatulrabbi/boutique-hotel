/**
 * @param {Date} start
 * @param {Date} end
 */
module.exports.calcTimeDifference = function (start, end) {
  const startTime = start.getTime();
  const endTime = end.getTime();

  if (startTime === endTime) {
    return {
      days: 1,
      hours: 24,
      minutes: 24 * 60,
    };
  }

  const timeDifference = Math.abs(endTime - startTime);
  const minutes = timeDifference / 1000 / 60;
  const hours = minutes / 60;
  const days = hours / 24;

  return {
    days,
    hours,
    minutes,
  };
};
