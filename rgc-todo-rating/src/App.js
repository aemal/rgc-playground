import React, { Component } from 'react';
import Rating from './Rating';
import Todo from './Todo';

class App extends Component {
  state = {
    individualRating: null
  }

  ratingDefaultStyle = {
    backgroundColor: '#ffddee',
    padding: '10px'
  }

  individualRatingCallBack(rate) {
    this.setState({ individualRating: rate });
  }

  render() {
    const todoListDataSource1 = [
        {id: 1, todoItem: 'Learn React'},
        {id: 2, todoItem: 'Learn Redux'},
        {id: 3, todoItem: 'Have fun!!!'},
        {id: 4, todoItem: 'Have more fun!!!'}
    ];

    const todoListDataSource2 = [
        {id: 11, todoItem: 'Go gym'},
        {id: 21, todoItem: 'Spend time on youtube'},
        {id: 31,  todoItem: 'Code challenge'},
        {id: 41, todoItem: 'Do nothing!'}
    ];

    return (
      <div>
        <p>Todo list 1</p>
        <Todo
          todoListDataSource={todoListDataSource1}
          customC   omponents={(props) =>
            <Rating
              {...props}
              ratingStyle={this.ratingDefaultStyle}
            />}
        />
        <hr/>
        <p>Todo list 2</p>
        <Todo
          todoListDataSource={todoListDataSource2}
          customComponents={Rating}
        />
        <hr/>
        <Todo
          todoListDataSource={todoListDataSource2}
        />
        <hr/>
        <div>
          <p>It is an individual usage of Rating component</p>
          <Rating id={10000} valueCallback={this.individualRatingCallBack.bind(this)} /><span>Value for AJAX or anything else: {this.state.individualRating}</span>
        </div>
      </div>
    );
  }
}



export default App;