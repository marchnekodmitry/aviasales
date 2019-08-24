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

export {
  fetchSucceeded,
  fetchFailed,
  changeTransferCount
}