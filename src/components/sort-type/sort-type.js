import React from 'react';
import { connect } from 'react-redux';

import { changeSortType } from './../../actions';

const SortType = ({ sortType, sortTypeHandler }) => {
  return (
    <div>
      <label>
        <input
          name='sort'
          type='radio'
          data-sort='cheap'
          checked={ sortType.cheap }
          onChange={ (e) => sortTypeHandler(e) }/>
        Самый дешевый
      </label>
      <label>
        <input
          name='sort'
          type='radio'
          data-sort='fast'
          checked={ sortType.fast }
          onChange={ (e) => sortTypeHandler(e) }/>
        Самый быстрый
      </label>
    </div>  
  )
};

const sortTypeHandler = (e) => {
  return changeSortType(e.target.getAttribute('data-sort'))
};

const mapStateToProps = ({ sortType }) => {
  return { sortType }
};

const mapDispatchToProps = (dispatch) => {
  return {
    sortTypeHandler: (e) => dispatch(sortTypeHandler(e))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SortType)