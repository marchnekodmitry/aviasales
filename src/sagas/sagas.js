import { call, put, take, all } from 'redux-saga/effects';
import AviaService from './../services/avia-service';
import { fetchTicketsSucceeded, fetchTicketsFailed } from './../actions';

function* fetchTickets() {
  while (true) {
    yield take('TICKETS_FETCH_REQUESTED');
    let tickets = [];
    try {
      yield call(AviaService.getSearchId);
      let received = false;

      while (!received) {
        let { tickets: ticketsPack, stop } = yield call(AviaService.getTickets);
        received = stop;
        tickets = [...tickets, ...ticketsPack];
      }

      yield put(fetchTicketsSucceeded(tickets));
    } catch (e) {
      yield put(fetchTicketsFailed(tickets));
    }
  }
}

function* log() {
  while (true) {
    const action = yield take('*');
    console.log(action);
  }
}

export default function* rootSaga() {
  yield all([
    fetchTickets(),
    log()
  ]);
}