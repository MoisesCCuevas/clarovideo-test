
export const formatTime = (date : number = 0) => {
  const dateFormat = new Date(date);
  const minutes = dateFormat.getMinutes() < 10 ? `0${dateFormat.getMinutes()}` : dateFormat.getMinutes();
  const hours = dateFormat.getHours() < 10 ? `0${dateFormat.getHours()}` : dateFormat.getHours();
  return `${hours}:${minutes}`;
};

export const formatDuration = (duration : string = '') => {
  const hours = duration.substring(0, 2);
  const minutes = duration.substring(3, 5);
  return `${hours}h ${minutes}min`;
};

export const createDateFormat = (date : string) => {
  const dateValue = Date.parse(date);
  return dateValue;
}
