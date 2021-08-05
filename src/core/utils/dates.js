import moment from 'moment';

const date = moment;

// using unix because it's a timestemp
date.shortDay = time => {
  return date.unix(time).format('ddd');
}

date.shortFullDay = time => {
  return date.unix(time).format('dddd');
}

export default date;
