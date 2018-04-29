import React, { Component, Fragment } from 'react'
import Lists from '../components/Lists'
import TodoData from '../data/data'

class App extends Component {
  render() {
    return (
      <Fragment>
        <h1>React Geeks</h1>
        <Lists todo={TodoData} rating={false}>
            {todo => todo.text}
        </Lists>
      </Fragment>
    )
  }
}

export default App
