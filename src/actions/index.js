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

export {
  fetchSucceeded,
  fetchFailed
}