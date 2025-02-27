import moment from 'moment';

const formateDateTime = 'YYYY-MM-DD HH:mm:ss'
const formateDateStart = 'YYYY-MM-DD 00:00:00'
const formateDateEnd = 'YYYY-MM-DD 23:59:59'

export function getCurrentDateTime() {
  return moment().format(formateDateTime)
}
export function getCurrenStartEndDateTime() {
  return {
    dateFrom: moment().format(formateDateStart),
    dateTo: moment().format(formateDateEnd)
  }
}