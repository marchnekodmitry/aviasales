import { call, put, take, all } from 'redux-saga/effects';
import AviaService from './../services/avia-service';
import { fetchTicketsSucceeded, fetchTicketsFailed } from './../actions';
import { mergeWithTickets } from '../utils';

function* getTickets() {
  let received = false,
      tickets = [],
      error = false;

  try {
    while (!received) {
      let {tickets: ticketsPack, stop} = yield call(AviaService.getTickets);
      received = stop;
      tickets = [...tickets, ...ticketsPack];
    }
  } catch (e) {
    error = true;
  } finally {
    return {
      tickets,
      error
    }
  }
}

function* fetchTickets() {
  while (true) {
    yield take('TICKETS_FETCH_REQUESTED');
    let result = {},
        attempts = 0;

    try {
      yield call(AviaService.getSearchId);

      do {
        const response = yield getTickets();
        result = mergeWithTickets(result, response);
        attempts++
      } while (result.error && attempts < 5);

      result.error ?
        yield put(fetchTicketsFailed(result.tickets)) :
        yield put(fetchTicketsSucceeded(result.tickets));
    } catch (e) {
      console.error(e);
    }
  }
}

export default function* rootSaga() {
  yield all([
    fetchTickets()
  ]);
}