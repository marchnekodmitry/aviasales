import React, { Fragment } from 'react';

import TransferCount from './../transfer-count';
import SortType from './../sort-type';
import TicketList from './../ticket-list';

const App = () => {
  return (
    <Fragment>
      <TransferCount/>
      <SortType/>
      <TicketList/>
    </Fragment>
  )
};

export default App;