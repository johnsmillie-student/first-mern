import PropTypes from "prop-types" 


function TodoItem({item}) {

    return (
        <div className="card blue-grey darken-1">
          <div className="card-content">
            <span className="card-title">{item.title}</span>
            <p>{item.description}</p>
            <p>{item.dueDate}</p>
          </div>
            
        </div>
    )
}

TodoItem.propTypes = {
    item: PropTypes.object.isRequired
};

export default TodoItem;