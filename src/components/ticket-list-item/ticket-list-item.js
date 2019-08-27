import React, { Fragment } from 'react';

import { getTransferString,
         timeConvert,
         getTransferCities,
         dateToDepartureArrivalConvert } from '../../utils';

const TicketListItem = ({ ticket }) => {
  const { price, carrier, segments } = ticket;

  const tableSection = (num) => {
    return (
      <Fragment>
        <tr>
          <th>{segments[num].origin}-{segments[num].destination}</th>
          <th>В пути</th>
          <th>{getTransferString(segments[num].stops)}</th>
        </tr>
        <tr>
          <td>{dateToDepartureArrivalConvert(segments[num].date, segments[num].duration)}</td>
          <td>{timeConvert(segments[num].duration)}</td>
          <td>{getTransferCities(segments[num].stops)}</td>
        </tr>
      </Fragment>
    )
  };

  return (
    <li>
      <div>
        <p>{price}</p>
        <p>{carrier}</p>
      </div>
      <table>
        <tbody>
          {tableSection(0)}
          {tableSection(1)}
        </tbody>
      </table>
    </li>
  )
};

export default TicketListItem;