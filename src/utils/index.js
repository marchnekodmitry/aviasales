import * as R from 'ramda';
import { createSelector } from 'reselect';
import hash from 'hash-sum';

const findKeysOfTrueField = (obj) => {
  return R.filter(
    R.flip(R.prop)(obj),
    R.keys(obj)
  )
};

const getTickets = state => state.tickets;
const getTransferCount = state => state.sort.transferCount;
const getSortType = state => state.sort.sortType;

const transferCountSelector = createSelector(
  [getTickets, getTransferCount],
  (tickets, transferCount) => {
    if (transferCount.all) return tickets;
    const filterValues = R.map((v) => parseInt(v), findKeysOfTrueField(transferCount));
    const hasInFilterValues = (stops) => R.includes(stops.length, filterValues);
    const isPassFilter = R.allPass([
      R.pathSatisfies(hasInFilterValues, ['segments', 0, 'stops']),
      R.pathSatisfies(hasInFilterValues, ['segments', 1, 'stops'])
    ]);
    return R.filter(isPassFilter)(tickets);
  }
);

const sortTickets = createSelector(
  [transferCountSelector, getSortType],
  (tickets, sortType) => {
    switch(findKeysOfTrueField(sortType)[0]) {
      case 'cheap':
        return R.sortBy(R.prop('price'))(tickets);
      case 'fast':
        const sum = (f, g) => (param) => {
          return f(param) + g(param);
        };
        return R.sortBy(sum(
          R.path(['segments', 0, 'duration']),
          R.path(['segments', 1, 'duration'])
        ))(tickets);
      default:
        return tickets;
    }
  }
);

const generateHashForEachTicket = R.map(obj => R.assoc('hash', hash(obj), obj));

const mergeWithTickets = R.mergeWithKey(
  (key, left, right) => key === 'tickets' ? R.concat(left, right) : right
);

const getTransferString = (stops) => {
  const transferCount = stops.length;
  switch (transferCount) {
    case 1: return `${transferCount} пересадка`;
    case 2:
    case 3:
    case 4: return `${transferCount} пересадки`;
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 0: return `${transferCount} пересадок`;
    default: return `${transferCount} пересадка`;
  }
};

const timeConvert = (mins) => {
  return `${Math.floor(mins / 60)}ч ${mins % 60}м`;
};

const dateToDepartureArrivalConvert = (date, duration) => {
  const departureTime = /T\d\d:\d\d/.exec(date)[0].slice(1);
  const timeMins = parseInt(departureTime.slice(3));
  const timeHours = parseInt(departureTime.slice(0, 2));
  const totalMins = timeMins + timeHours * 60 + duration;
  const arrivalHours = `0${(Math.floor(totalMins / 60) % 24)}`.slice(-2);
  const arrivalMins = `0${totalMins % 60}`.slice(-2);
  return `${departureTime} - ${arrivalHours}:${arrivalMins}`
};

const getTransferCities = R.join(', ');

const convertPrice = (price) => {
  const string = R.toString(price);
  return `${R.slice(0, -3, string)} ${R.slice(-3, Infinity, string)} Р`;
};

export {
  findKeysOfTrueField,
  sortTickets,
  generateHashForEachTicket,
  mergeWithTickets,
  getTransferString,
  timeConvert,
  getTransferCities,
  dateToDepartureArrivalConvert,
  convertPrice
}