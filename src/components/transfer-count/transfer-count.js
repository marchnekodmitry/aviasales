import React from 'react';
import { connect } from 'react-redux';

import { changeTransferCount } from './../../actions';

const TransferCount = ({ transferCount, transferCountHandler }) => {
  const TransferCountItem = ({ dataCount, checked, children }) => {
    return (
      <li>
        <label>
          <input type='checkbox'
                 data-count={dataCount}
                 onChange={(e) => transferCountHandler(e)}
                 checked={checked}/>
          {children}
        </label>
      </li>
    );
  };

  return (
    <StyledWrapper>
      <p className='title'>Количество пересадок</p>
      <ul>
        <TransferCountItem dataCount='all' checked={transferCount.all}>
          Все
        </TransferCountItem>
        <TransferCountItem dataCount='0' checked={transferCount[0]}>
          0 пересадок
        </TransferCountItem>
        <TransferCountItem dataCount='1' checked={transferCount[1]}>
          1 пересадка
        </TransferCountItem>
        <TransferCountItem dataCount='2' checked={transferCount[2]}>
          2 пересадки
        </TransferCountItem>
        <TransferCountItem dataCount='3' checked={transferCount[3]}>
          3 пересадки
        </TransferCountItem>
      </ul>
    </StyledWrapper>
  )
};

const transferCountHandler = (e) => {
  return changeTransferCount(e.target.getAttribute('data-count'))
};

const mapStateToProps = ({ sort }) => {
  return {
    transferCount: sort.transferCount
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    transferCountHandler: (e) => dispatch(transferCountHandler(e))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TransferCount)