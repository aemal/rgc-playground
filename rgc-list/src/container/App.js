import React, { Component } from 'react'
import Lists from '../components/Lists'
import TodoData from '../data/data'
class App extends Component {
  render() {
    return (
      <div>
        <h1>ReactGeek</h1>
        <Lists todo={TodoData} rating={false}>
            {todo => todo.text}
        </Lists>
      </div>
    )
  }
}

export default App
