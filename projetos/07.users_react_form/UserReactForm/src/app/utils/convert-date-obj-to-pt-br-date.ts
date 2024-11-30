export const convertDateObjToPtBrDate = (date: Date): string => {
  const year = padZero(date.getFullYear());
  const month = padZero(date.getMonth() + 1);
  const day = padZero(date.getDate());

  return `${day}/${month}/${year}`;
};

const padZero = (value: number): string =>
  value < 10 ? `0${value}` : `${value.toString()}`;
