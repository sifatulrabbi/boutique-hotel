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

  daysAndDates = {
    Sun: [],
    Mon: [],
    Tue: [],
    Wed: [],
    Thu: [],
    Fri: [],
    Sat: [],
  };

  monthlyCalendar = [];

  constructor(today) {
    this.year = today.getFullYear();
    this.month = this.months[today.getMonth()];

    this.fillBeforeFirstDate(today);

    for (let i = 1; i < this.month.days + 1; i++) {
      const d = new Date(this.year, today.getMonth(), i);
      const dayName = this.days[d.getDay()];

      if (this.daysAndDates[dayName]) {
        this.daysAndDates[dayName].push(d.getDate());
      }
    }

    this.fillAfterLastDate(today);
  }

  fillBeforeFirstDate(today) {
    // Find the first date of the month
    const firstDate = new Date(this.year, today.getMonth(), 1);

    let firstDay = firstDate.getDay() - 1;
    while (this.days[firstDay]) {
      const day = this.days[firstDay];
      // Push 0 for empty spaces
      this.daysAndDates[day].push(0);

      firstDay--;
    }
  }

  fillAfterLastDate(today) {
    // Find the last date of the month
    const lastDate = new Date(this.year, today.getMonth(), this.month.days);

    let lastDay = lastDate.getDay() + 1;
    while (this.days[lastDay]) {
      const day = this.days[lastDay];
      // Push 0 for empty spaces
      this.daysAndDates[day].push(0);

      lastDay++;
    }
  }
}
