import { findKeyOfTrueField } from '../utils';

const initialState = {
  tickets: [],
  transferCount: {
    all: true,
    0: false,
    1: false,
    2: false,
    3: false
  },
  sortType: {  // only 1 can be true
    cheap: true,
    fast: false
  },
  loading: false,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_TRANSFER_COUNT':
      return {
        ...state,
        transferCount: {
          ...state.transferCount,
          [action.payload]: !state.transferCount[action.payload]
        }
      };
    case 'CHANGE_SORT_TYPE':
      return {
        ...state,
        sortType: {
          ...state.sortType,
          [findKeyOfTrueField(state.sortType)]: false,
          [action.payload]: true
        }
      };
    default:
      return state;
  }
};

export default reducer;