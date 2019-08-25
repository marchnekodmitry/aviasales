import * as R from 'ramda';
import { createSelector } from 'reselect';

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
    const filterValues = findKeysOfTrueField(transferCount);
    const hasInFilterValues = R.flip(R.includes)(filterValues);
    const isPassFilter = R.allPass(
      R.pathSatisfies(hasInFilterValues, ['segments', 0, 'stops']),
      R.pathSatisfies(hasInFilterValues, ['segments', 1, 'stops'])
    );
    return R.filter(isPassFilter)(tickets)
  }
);

const sortTickets = createSelector(
  [transferCountSelector, getSortType],
  (tickets, sortType) => {
    switch(findKeysOfTrueField(sortType)) {
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

export {
  findKeysOfTrueField,
  sortTickets
}