import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { changeSortType } from './../../actions';

const StyledWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #FFFFFF;overflow: hidden;
  
  
  .visually-hidden {
    position: absolute;
    clip: rect(0 0 0 0);
    width: 1px;
    height: 1px;
    margin: -1px;
  }
`;

const StyledLabel = styled.label`
  cursor: pointer;
  
  :first-child .input-text {
    border-radius: 8px 0 0 8px;
  }
  :last-child .input-text {
    border-radius: 0 8px 8px 0;
  }
`;

const InputText = styled.div`
  padding: 15px 57px;
  border: 1px solid #DFE5EC;
  background-color: #FFFFFF;
  color: #4A4A4A;
  
  input:checked + & {
    background-color: #2196F3;
    color: #FFFFFF;
  }
`;

const SortType = ({ sortType, sortTypeHandler }) => {
  const SortTypeItem = ({ dataSort, children, checked }) => {
    return (
      <StyledLabel>
        <input
            name='sort'
            type='radio'
            data-sort={dataSort}
            checked={checked}
            onChange={(e) => sortTypeHandler(e)}
            className='visually-hidden'/>
        <InputText className='input-text'>{children}</InputText>
      </StyledLabel>
    );
  };

  return (
    <StyledWrapper>
      <SortTypeItem dataSort={'cheap'} checked={sortType.cheap}>
        Самый дешевый
      </SortTypeItem>
      <SortTypeItem dataSort={'fast'} checked={sortType.fast}>
        Самый быстрый
      </SortTypeItem>
    </StyledWrapper>
  )
};

const sortTypeHandler = (e) => {
  return changeSortType(e.target.getAttribute('data-sort'))
};

const mapStateToProps = ({ sort }) => {
  return {
    sortType: sort.sortType
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    sortTypeHandler: (e) => dispatch(sortTypeHandler(e))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SortType)