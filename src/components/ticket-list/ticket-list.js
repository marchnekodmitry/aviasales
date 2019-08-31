import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import TicketListItem from './../ticket-list-item';
import { fetchTicketsRequest } from './../../actions';
import { sortTickets } from './../../utils';
import LoadingBoundary from '../loading-boundary';
import ErrorBoundary from "../error-boundary/error-boundary";

const StyledList = styled.ul`
  min-height: 180px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const TicketList = ({ tickets }) => {
  return (
    <StyledList>
      {tickets.slice(0, 5).map(ticket => {
        return <TicketListItem ticket={ticket} key={ticket.hash}/>
      })}
    </StyledList>
  )
};

class TicketListEnhancer extends Component {
  componentDidMount() {
    this.props.fetchTicketsRequest()
  }

  render() {
    const { tickets, loading, error } = this.props;

    return (
      <ErrorBoundary error={error} requestFunc={this.props.fetchTicketsRequest}>
        <LoadingBoundary loading={loading}>
          <TicketList tickets={tickets}/>
        </LoadingBoundary>
      </ErrorBoundary>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tickets: sortTickets(state),
    loading: state.loading,
    error: state.error
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTicketsRequest: () => dispatch(fetchTicketsRequest())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TicketListEnhancer)