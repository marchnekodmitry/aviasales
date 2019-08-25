const fetchTicketsRequest = () => {
  return {
    type: 'TICKETS_FETCH_REQUESTED'
  }
};

const fetchTicketsSucceeded = (tickets) => {
  return {
    type: 'TICKETS_FETCH_SUCCEEDED',
    payload: tickets
  }
};

const fetchTicketsFailed = (tickets) => {
  return {
    type: 'TICKETS_FETCH_FAILED',
    payload: tickets
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
  fetchTicketsRequest,
  fetchTicketsSucceeded,
  fetchTicketsFailed,
  changeTransferCount,
  changeSortType
}