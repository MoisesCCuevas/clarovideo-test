export const baseUrl = 'https://mfwkweb-api.clarovideo.net/services/epg/channel';
export const params = 'device_id=web&device_category=web&device_model=web&device_type=web&device_so=Chrome&format=json&device_manufacturer=generic&authpn=webclient&authpt=tfg1h3j4k6fd7&api_version=v5.93&region=guatemala&HKS=web61144bb49d549&user_id=54343080&date_from=20210812200256&date_to=20210813200256&quantity=200';

export const timeLine = [
  '20:00', '21:00', '22:00', '23:00', '00:00', '01:00', '02:00',
  '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00',
  '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00',
  '17:00', '18:00', '19:00'
];

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
