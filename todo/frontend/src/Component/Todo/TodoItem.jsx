import PropTypes from "prop-types" 


function TodoItem({item}) {

    return (
        <div className="card blue-grey darken-1">
          <div className="card-content">
            <span className="card-title amber-text text-darken-4">{item.title}</span>
            <p>{item.description}</p>
            <p>{formatDateToInputDate(new Date(item.dueDate))}</p>
          </div>
            
        </div>
    )
}

TodoItem.propTypes = {
    item: PropTypes.object.isRequired
};

export default TodoItem;function formatDateToInputDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');  // Months are zero-indexed, so add 1
    const day = String(date.getDate()).padStart(2, '0');  // Pad day if single digit
  
    return `${year}-${month}-${day}`;  // Return formatted date
  }