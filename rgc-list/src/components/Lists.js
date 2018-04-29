import React from 'react'
import PropTypes from 'prop-types'

 const Lists = ({todo, children}) => {
  const mappedTodo = todo.map(todo => {
      return <li key={todo.id}>{todo.text}</li>
    })
    return (
          children(mappedTodo)
    )
}


Lists.displayName = 'Lists'

Lists.propTypes = {
    todo: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    })).isRequired,
    children: PropTypes.func.isRequired
};

export default Lists
