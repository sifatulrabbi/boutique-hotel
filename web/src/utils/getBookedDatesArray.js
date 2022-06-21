/**
 * Get the end date of a month
 * @param {Date} date
 */
function getMonthEndDate(date) {
  const endDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  return endDate.getDate();
}

/**
 * Merger all the dates and remove duplicates
 * @param {{monthIndex: number, dates: number[]}[]} datesArr
 */
export function mergeDuplicateDates(datesArr) {
  const newArr = [];

  for (let i = 0; i < datesArr.length; i++) {
    const matchedIndexes = [];

    const baseMonth = datesArr[i];
    const filteredArr = datesArr.filter((item, index) => {
      if (item.monthIndex === baseMonth.monthIndex) {
        matchedIndexes.push(index);
        return item;
      }
      return false;
    });

    const val = filteredArr.reduce((prev, curr) => {
      const data = {
        monthIndex: prev.monthIndex,
        dates: [...prev.dates, ...curr.dates],
      };

      data.dates = data.dates.filter(
        (item, index, arr) => arr.indexOf(item) === index,
      );

      return data;
    });

    newArr.push(val);
  }

  const result = newArr.filter((item, index, arr) => {
    const duplicate = arr.find((obj) => obj.monthIndex === item.monthIndex);

    return arr.indexOf(duplicate) === index;
  });

  return result;
}

/**
 * Get an array of booked dates and the month index
 * @param {Date} start
 * @param {Date} end
 * @returns {{monthIndex: number; dates: number[]}[]}
 */
export function getBookedDatesArray(start, end) {
  const startMonth = start.getMonth();
  const bookedDates = [];

  // Check if the startMonth is equal to the starting date
  if (start.getMonth() === startMonth) {
    // Check if the end date is in the same month
    if (end.getMonth() === startMonth) {
      const dates = [];
      // calculate the difference between start and end date
      const diff = Math.abs(end.getDate() - start.getDate());

      // Starting date
      let date = start.getDate();
      // Increase the date as the i increases. Stop when i is bigger than the date difference
      for (let i = 0; i < diff + 1; i++) {
        dates.push(date);
        date++;
      }

      // Push the month and the dates array in to the bookedDates array
      bookedDates.push({monthIndex: start.getMonth(), dates: dates});
    } else if (end.getMonth() === startMonth + 1) {
      const firstPortion = [];
      // If the end date is on the next month
      // Find the last date fo the current month
      const startMonthEndDate = getMonthEndDate(start);
      // Calc the difference between last date of the starting month and start date
      const startMonthDiff = startMonthEndDate - start.getDate();

      let date = start.getDate();
      // Push all the dates from starting month
      for (let i = 0; i < startMonthDiff + 1; i++) {
        firstPortion.push(date);
        date++;
      }

      // Push the first portion of the dates array along with the month index
      bookedDates.push({monthIndex: start.getMonth(), dates: firstPortion});

      const secondPortion = [];
      let endDate = 1;
      // Push all the dates till the end date
      for (let i = 0; i < end.getDate(); i++) {
        secondPortion.push(endDate);
        endDate++;
      }

      // Push the second (last) portion of the dates array along with the month index
      bookedDates.push({monthIndex: end.getMonth(), dates: secondPortion});
    }
  }

  return bookedDates;
}
