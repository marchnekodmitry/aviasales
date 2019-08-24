const initialState = {
  tickets: [],
  transferCount: {
    all: true,
    0: false,
    1: false,
    2: false,
    3: false
  },
  sortType: 'cheap', // cheap or fast
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
    default:
      return state;
  }
};

export default reducer;