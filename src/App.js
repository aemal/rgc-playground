import React, { Component } from 'react';
import Rating from './Rating';
import Todo from './Todo';

class App extends Component {
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
        {id: 31, todoItem: 'Code challenge'},
        {id: 41, todoItem: 'Do nothing!'}
    ];

    return (
      <div>
        <Todo
          todoListDataSource={todoListDataSource1}
          customComponents={Rating}
        />
        <hr/>
        <Todo
          todoListDataSource={todoListDataSource2}
          customComponents={Rating}
        />
        <hr/>
        <Todo
          todoListDataSource={todoListDataSource2}
        />
      </div>
    );
  }
}

export default App;
