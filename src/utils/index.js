import * as R from 'ramda';
import { createSelector } from 'reselect';
import hash from 'object-hash';

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

export {
  findKeysOfTrueField,
  sortTickets,
  generateHashForEachTicket,
  mergeWithTickets
}