import React, { Component } from 'react';
import { connect } from 'react-redux';

import TicketListItem from './../ticket-list-item';
import { fetchTicketsRequest } from './../../actions';
import { sortTickets } from './../../utils';

const TicketList = ({ tickets }) => {
  return (
    <ul>
      {
        tickets.map(ticket => <TicketListItem ticket={ticket}/>)
      }
    </ul>
  )
};

class TicketListEnhancer extends Component {
  componentDidMount() {
    this.props.fetchTicketsRequest()
  }

  render() {
    const { tickets } = this.props;

    return (
      <TicketList tickets={tickets}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tickets: sortTickets(state)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTicketsRequest: dispatch(fetchTicketsRequest())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TicketListEnhancer)