import React, { Component, Fragment } from 'react';
import Counter from './Counter';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Counter name="First" />
        <Counter name="Second" />
        <Counter name="Third" />
      </Fragment>
    );
  }
}

export default App;
