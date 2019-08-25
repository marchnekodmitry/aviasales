const fetchSucceeded = (tickets) => {
  return {
    type: 'TICKETS_FETCH_SUCCEEDED',
    payload: tickets
  }
};

const fetchFailed = () => {
  return {
    type: 'TICKETS_FETCH_FAILED',
    error: true
  }
};

const changeTransferCount = (count) => {
  return {
    type: 'CHANGE_TRANSFER_COUNT',
    payload: count
  }
};

const changeSortType = (type) => {
  return {
    type: 'CHANGE_SORT_TYPE',
    payload: type
  }
};

export {
  fetchSucceeded,
  fetchFailed,
  changeTransferCount,
  changeSortType
}