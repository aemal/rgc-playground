import React, { Component } from 'react';
import Rating from '../components/Rating';


class App extends Component {
  render() {
    return (
      <div>
        <h1>RGC Rating</h1>
        <Rating
          name="starCount"
          starCount={5} />
      </div>
    );
  }
}

export default App;
