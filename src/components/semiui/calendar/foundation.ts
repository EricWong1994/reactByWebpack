// import {
// 	format,
// 	getWeeksInMonth,
// 	getWeekOfMonth,
// 	isSameMonth,
// 	startOfMonth,
// 	endOfMonth,
// 	isBefore,
// 	isAfter,
// 	addDays,
// 	startOfWeek,
// 	differenceInCalendarDays,
// 	isSameDay,
// 	startOfDay,
// 	isSameWeek,
// 	Locale,
// } from 'date-fns';

import { format, compareAsc } from "date-fns";

export const dateFns = () => {
  const temp = format(new Date(2014, 1, 11), "MM/dd/yyyy");
  console.log("temp: ", temp);
  //=> '02/11/2014'

  const dates = [
    new Date(1995, 6, 2),
    new Date(1987, 1, 11),
    new Date(1989, 6, 10),
  ];
  dates.sort(compareAsc);
  //=> [
  //   Wed Feb 11 1987 00:00:00,
  //   Mon Jul 10 1989 00:00:00,
  //   Sun Jul 02 1995 00:00:00
  // ]
  console.log("dates: ", dates);
};

// export const testFn;
