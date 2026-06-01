export function convertDateToWeekDay(dateString: string){
    const dayMap = new Map([
        [0, "Sunday"],
        [1, "Monday"],
        [2, "Tuesday"],
        [3, "Wednesday"],
        [4, "Thursday"],
        [5, "Friday"],
        [6, "Saturday"],
      ]);

    const date = new Date(dateString);

    return dayMap.get(date.getDay());
}

export function isDateToday(dateString: string){
  const inputDate = new Date(dateString);
  const today = new Date();

  const isThisYear = inputDate.getFullYear() === today.getFullYear();
  const isThisMonth = inputDate.getMonth() === today.getMonth();
  const isThisDayOfMonth = inputDate.getDate() === today.getDate();

  return isThisYear && isThisMonth && isThisDayOfMonth;
}