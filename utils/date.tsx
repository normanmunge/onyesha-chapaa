export function getFormattedDate(date: Date) {
  const month =
    date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
  const day = date.getDay() > 9 ? date.getDay() : `0${date.getDay()}`;
  return `${date.getFullYear()}-${month}-${day}`;
}

export function getDateMinusDays(date: Date, days: number) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}
