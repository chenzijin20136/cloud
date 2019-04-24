import React from 'react';
import { connect } from './react-redux';
import { Actions } from './Store';

const Counter = ({ name, onIncrement, value, onDecrement}) => (
  <div className={name}>
    <button onClick={onIncrement}>+</button>
      <span style={{margin: 40}}>{value}</span>
    <button onClick={onDecrement}>-</button>
  </div>
);

const mapStateToProps = (state, ownProps) => {
  return {
    value: state[ownProps.name]
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onIncrement: () => dispatch(Actions.increment(ownProps.name)),
    onDecrement: () => dispatch(Actions.decrement(ownProps.name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);