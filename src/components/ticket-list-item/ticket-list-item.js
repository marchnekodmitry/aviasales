import React, { Fragment } from 'react';
import styled from 'styled-components';

import { getTransferString,
         timeConvert,
         getTransferCities,
         dateToDepartureArrivalConvert,
         convertPrice } from '../../utils';

const StyledItem = styled.li`
  margin-bottom: 20px;
  padding: 20px;
  background: #FFFFFF;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`;

const TicketHead = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  
  p {
    margin: 0;
  }
  
  .price {
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 24px;
    color: #2196F3;
  }
  
  .company {
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 24px;
  }
`;

const StyledTable = styled.table`
  width: 100%;
  th {
    width: 33%;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    color: #A0B0B9;
  }
  
  td {
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    color: #4A4A4A;
  }
`;

const TicketListItem = ({ ticket }) => {
  const { price, carrier, segments } = ticket;

  const tableSection = (num) => {
    return (
      <Fragment>
        <tr>
          <th>{segments[num].origin} - {segments[num].destination}</th>
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
    <StyledItem>
      <TicketHead>
        <p className='price'>{convertPrice(price)}</p>
        <p className='company'>{carrier}</p>
      </TicketHead>
      <StyledTable>
        <tbody>
          {tableSection(0)}
          {tableSection(1)}
        </tbody>
      </StyledTable>
    </StyledItem>
  )
};

export default TicketListItem;