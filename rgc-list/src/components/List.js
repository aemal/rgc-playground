import React from 'react'
import PropTypes from 'prop-types'

const List = ({todo,children}) => {
    return (
          children(todo)
    );
};

List.displayName = 'List';

List.propTypes = {
    todo: PropTypes.shape({
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    }).isRequired,
    children: PropTypes.string.isRequired

};

export default List;
