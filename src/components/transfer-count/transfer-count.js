import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { changeTransferCount } from './../../actions';

const StyledWrapper = styled.div`
  padding: 20px 0 10px 0;
  background-color: #FFFFFF;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  
  .visually-hidden {
    position: absolute;
    clip: rect(0 0 0 0);
    width: 1px;
    height: 1px;
    margin: -1px;
  }
`;

const StyledTitle = styled.p`
  margin: 0 0 10px 0;
  padding: 0 20px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #4A4A4A;
`;

const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 20px;
`;

const StyledItem = styled.li`    
  :hover {
    background: #F1FCFF;
  }
`;

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  cursor: pointer;
`;

const InputText = styled.div`
  position: relative;
  padding-left: 30px;

  ::before {
    content: '';
    position: absolute;
    left: 0;
    width: 20px;
    height: 20px;
    background-image: url(${require('./checkbox.svg')});
  }
  input:checked + & {
    ::before {
      background-image: url(${require('./checkbox-active.svg')});
    }
  }
`;

const TransferCount = ({ transferCount, transferCountHandler }) => {
  const TransferCountItem = ({ dataCount, checked, children }) => {
    return (
      <StyledItem className='item'>
        <StyledLabel>
          <input type='checkbox'
                 data-count={dataCount}
                 onChange={(e) => transferCountHandler(e)}
                 checked={checked}
                 className='visually-hidden'/>
          <InputText className='checkbox-text'>{children}</InputText>
        </StyledLabel>
      </StyledItem>
    );
  };

  return (
    <StyledWrapper>
      <StyledTitle>Количество пересадок</StyledTitle>
      <StyledList>
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
      </StyledList>
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