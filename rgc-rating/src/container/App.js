import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';


class App extends Component {
  render() {
    return (
      <div>
        <h1>RGC Rating</h1>
        <StarRatingComponent
          name="starCount"
          starCount={5} />
      </div>
    );
  }
}

export default App;
