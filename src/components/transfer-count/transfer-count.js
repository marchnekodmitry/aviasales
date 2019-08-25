import React from 'react';
import { connect } from 'react-redux';

import { changeTransferCount } from './../../actions';

const TransferCount = ({ transferCount, transferCountHandler }) => {
  return (
    <div>
      <p>Количество пересадок</p>
      <ul>
        <li><input type='checkbox'
                   data-count='all'
                   onChange={ (e) => transferCountHandler(e) }
                   checked={ transferCount.all }/></li>
        <li><input type='checkbox'
                   data-count='0'
                   onChange={ (e) => transferCountHandler(e) }
                   checked={ transferCount[0] }/></li>
        <li><input type='checkbox'
                   data-count='1'
                   onChange={ (e) => transferCountHandler(e) }
                   checked={ transferCount[1] }/></li>
        <li><input type='checkbox'
                   data-count='2'
                   onChange={ (e) => transferCountHandler(e) }
                   checked={ transferCount[2] }/></li>
        <li><input type='checkbox'
                   data-count='3'
                   onChange={ (e) => transferCountHandler(e) }
                   checked={ transferCount[3] }/></li>
      </ul>
    </div>
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