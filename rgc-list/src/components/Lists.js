import React from 'react'
import PropTypes from 'prop-types'

 const Lists = ({todo, children}) => {
  const mappedTodo = todo.map(todo => {
      return <li key={todo.id}>{children(todo)}</li>
    })
    return (
          <ul>
            {mappedTodo}
          </ul>
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
