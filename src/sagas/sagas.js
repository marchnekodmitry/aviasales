import { call, put, take } from 'redux-saga/effects';
import AviaService from './../services/avia-service';
import { fetchSucceeded, fetchFailed } from './../actions';

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

      yield put(fetchSucceeded(tickets));
    } catch (e) {
      yield put(fetchFailed(tickets));
    }
  }
}

export default function* rootSaga() {
  yield fetchTickets();
}