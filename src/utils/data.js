export const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const monthNum = (m) => {
  switch (m) {
    case "January":
      return 0;
    case "February":
      return 1;
    case "March":
      return 2;
    case "April":
      return 3;
    case "May":
      return 4;
    case "June":
      return 5;
    case "July":
      return 6;
    case "August":
      return 7;
    case "September":
      return 8;
    case "October":
      return 9;
    case "November":
      return 10;
    case "December":
      return 11;
    default:
      return null;
  }
};

export const manipulate = (date) => {
  const day = new Date(date.getFullYear(), date.getMonth(), 1);
  // Get the first day of the month
  const dayone = new Date(date.getFullYear(), date.getMonth(), 1).getDay();

  // Get the last date of the month
  const lastdate = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  // Get the day of the last date of the month
  const dayend = new Date(
    date.getFullYear(),
    date.getMonth(),
    lastdate
  ).getDay();

  // Get the last date of the previous month
  const monthlastdate = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const days = [];

  // loop over the last dates of the previous month
  for (let i = dayone; i > 0; i--) {
    let temp = new Date(
      day.getFullYear(),
      day.getMonth() - 1,
      monthlastdate - i + 1
    );
    let calendarDay = {
      currentMonth: temp.getMonth() === day.getMonth(),
      date: temp,
      month: day.getMonth(),
      year: day.getFullYear(),
      number: monthlastdate - i + 1,
      selected: day.toDateString() === date.toDateString(),
    };
    days.push(calendarDay);
  }

  // loop to add the dates of the current month
  for (let i = 1; i <= lastdate; i++) {
    let temp = new Date(day.getFullYear(), day.getMonth(), i);
    let calendarDay = {
      currentMonth: temp.getMonth() === day.getMonth(),
      date: temp,
      month: day.getMonth(),
      year: day.getFullYear(),
      number: i,
      selected: day.toDateString() === date.toDateString(),
      today:
        i === date.getDate() &&
        day.getMonth() === new Date().getMonth() &&
        day.getFullYear() === new Date().getFullYear(),
    };
    days.push(calendarDay);
  }

  // loop to add the first dates of the next month
  for (let i = dayend; i < 6; i++) {
    let temp = new Date(day.getFullYear(), day.getMonth() + 1, i - dayend + 1);
    let calendarDay = {
      currentMonth: temp.getMonth() === new Date().getMonth(),
      date: temp,
      month: day.getMonth(),
      year: day.getFullYear(),
      number: i - dayend + 1,
      selected: day.toDateString() === date.toDateString(),
    };
    days.push(calendarDay);
  }
  return days;
};
