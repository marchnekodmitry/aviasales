import React, { Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';

import TransferCount from './../transfer-count';
import SortType from './../sort-type';
import TicketList from './../ticket-list';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap&subset=cyrillic');
  body {
    background: #F3F7FA;
  }
`;

const App = () => {
  return (
    <Fragment>
      <GlobalStyle/>
      <TransferCount/>
      <SortType/>
      <TicketList/>
    </Fragment>
  )
};

export default App;