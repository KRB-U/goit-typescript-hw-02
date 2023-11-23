/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Days {
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY,
}

function isWeekend(day: Days): boolean {
  return day === Days.SATURDAY || day === Days.SUNDAY;
}

// METHOD_2 КОПІЯ в index.ts в корені
// type Weekdays = "Mon" | "Tue" | "Wed" | "Thu" | "Fri";
// type Weekend = "Sat" | "Sun";

// type AllWeekDays = Weekdays | Weekend;

// function isWeekendNow(day: AllWeekDays): boolean {
//   const IsDayOff: Record<Weekend, true> = {
//     Sat: true,
//     Sun: true,
//   };
//   return IsDayOff.hasOwnProperty(day);
// }
