import PropTypes from 'prop-types'

const List = ({ render, todo }) => {
    return (
          render(todo)
    );
};

List.displayName = 'List';

List.propTypes = {
    todo: PropTypes.shape({
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    }).isRequired,
    render: PropTypes.func.isRequired
};


export default List;
