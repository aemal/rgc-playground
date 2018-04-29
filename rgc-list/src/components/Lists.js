import React from 'react'
import PropTypes from 'prop-types'
import List from './List'
import Rating from './Rating'

 const Lists = ({todo, children, rating}) => {
  const mappedTodo = todo.map(todo => {
      return(
        <li key={todo.id}>
          <List
            render={children}
            rating={rating}
            todo={todo} />
            {rating
              ? <Rating
                  id={todo.id} />
              : null}
        </li>
      )
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
    id: PropTypes.string.isRequired,
    })).isRequired,
    children: PropTypes.func.isRequired,
    rating: PropTypes.bool
}

export default Lists
