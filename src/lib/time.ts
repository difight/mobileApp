import moment from 'moment';

const formateDateTime = 'YYYY-MM-DD HH:mm:ss'

export function getCurrentDateTime() {
  return moment().format(formateDateTime)
}