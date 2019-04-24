/* eslint-disable react/react-in-jsx-scope */
import React, { Component } from 'react';
import Context from './Context';

class Provider extends Component {
  render() {
    return (
      <Context.Provider value={{...this.props}}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Provider;