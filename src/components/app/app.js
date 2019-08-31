import React, { Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';

import TransferCount from './../transfer-count';
import SortType from './../sort-type';
import TicketList from './../ticket-list';
import AppHeader from './../app-header';
import PageGrid from './../page-grid';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600&display=swap&subset=cyrillic');
  body {
    background: #F3F7FA;
  }
`;

const App = () => {
  return (
    <Fragment>
      <GlobalStyle/>
      <PageGrid
        top={
          <AppHeader/>
        }
        left={
          <TransferCount/>
        }
        right={
          <Fragment>
            <SortType/>
            <TicketList/>
          </Fragment>
        }
      />
    </Fragment>
  )
};

export default App;