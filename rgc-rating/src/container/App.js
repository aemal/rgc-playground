import React, { Component } from 'react';
import Rating from '../components/Rating';


class App extends Component {
  render() {
    return (
      <div>
        <h1>RGC Rating</h1>
        <Rating
          id={2} />
      </div>
    );
  }
}

export default App;
