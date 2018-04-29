import React, { Component, Fragment } from 'react';
import Rating from '../components/Rating';


class App extends Component {
  render() {
    return (
      <Fragment>
        <h1>RGC Rating</h1>
        <Rating
          id={2} />
      </Fragment>
    );
  }
}

export default App;
