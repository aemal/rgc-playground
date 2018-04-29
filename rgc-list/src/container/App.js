import React, { Component } from 'react'
import Lists from '../components/Lists'
import TodoData from '../data/data'
class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello, World</h1>
        <Lists todo={TodoData}>
            {(todo) => <ul>{todo}</ul>}
        </Lists>
      </div>
    )
  }
}

export default App
