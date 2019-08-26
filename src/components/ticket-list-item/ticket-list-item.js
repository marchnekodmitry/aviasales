import React from 'react';

const TicketListItem = ({ ticket }) => {
  return (
    <li>
      {ticket.price}
    </li>
  )
};

export default TicketListItem;