export class BookingCalendar {
  months = [
    {name: 'January', days: 31},
    {name: 'February', days: 28},
    {name: 'March', days: 31},
    {name: 'April', days: 30},
    {name: 'May', days: 31},
    {name: 'June', days: 30},
    {name: 'July', days: 31},
    {name: 'August', days: 31},
    {name: 'September', days: 30},
    {name: 'October', days: 31},
    {name: 'November', days: 30},
    {name: 'December', days: 31},
  ];

  days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  monthlyCalendar = [];

  constructor() {
    const today = new Date();
    this.year = today.getFullYear();
    this.month = this.months[today.getMonth()];
    const secondMonth = new Date(2022, today.getMonth() + 1, 1);
    const thirdMonth = new Date(2022, secondMonth.getMonth() + 1, 1);

    this.daysAndDates = this.createMonthlyCalendar(today);
    const firstCal = this.createMonthlyCalendar(today);
    const secondCal = this.createMonthlyCalendar(secondMonth);
    const thirdCal = this.createMonthlyCalendar(thirdMonth);

    this.monthlyCalendar = [
      {month: this.months[today.getMonth()].name, dates: firstCal},
      {month: this.months[secondMonth.getMonth()].name, dates: secondCal},
      {month: this.months[thirdMonth.getMonth()].name, dates: thirdCal},
    ];
  }

  createMonthlyCalendar(today) {
    const daysAndDates = {
      Sun: [],
      Mon: [],
      Tue: [],
      Wed: [],
      Thu: [],
      Fri: [],
      Sat: [],
    };

    this.fillBeforeFirstDate(today, daysAndDates);

    for (let i = 1; i < this.month.days + 1; i++) {
      const d = new Date(this.year, today.getMonth(), i);
      const dayName = this.days[d.getDay()];

      if (daysAndDates[dayName]) {
        daysAndDates[dayName].push(d.getDate());
      }
    }

    this.fillAfterLastDate(today, daysAndDates);

    return daysAndDates;
  }

  fillBeforeFirstDate(today, daysAndDates) {
    // Find the first date of the month
    const firstDate = new Date(this.year, today.getMonth(), 1);

    let firstDay = firstDate.getDay() - 1;
    while (this.days[firstDay]) {
      const day = this.days[firstDay];
      // Push 0 for empty spaces
      daysAndDates[day].push(0);

      firstDay--;
    }
  }

  fillAfterLastDate(today, daysAndDates) {
    // Find the last date of the month
    const lastDate = new Date(this.year, today.getMonth(), this.month.days);

    let lastDay = lastDate.getDay() + 1;
    while (this.days[lastDay]) {
      const day = this.days[lastDay];
      // Push 0 for empty spaces
      daysAndDates[day].push(0);

      lastDay++;
    }
  }
}
