import PropTypes from "prop-types";


function TodoForm({addTodo}) {
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const todo = {
            title: e.target.title.value,
            description: e.target.description.value,
            dueDate: e.target.date.value
        }
        console.log("Todo Object: " + todo);
        const result = addTodo(todo);
        document.getElementById('result').innerHTML = result;
        e.target.reset();
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)} >
                
                  <div className=" input-field">  
                    <input  type="text" name="title" id="title" required />
                    <label htmlFor="title">Title</label>
                </div>
                <div className=" input-field">  
                    <textarea name="description" id="description" className="materialize-textarea" />
                    <label htmlFor="description">Description</label>
                </div>
                <div className="input-field">
                    <input type="text" className="datepicker" id="date" name="dueDate"></input>
                    <label htmlFor="date">Date</label>
                </div>

                <button className="btn waves-effect waves-light" type="submit" name="submitAdd">Submit
                  <i className="material-icons right"></i>
                </button>
        
            </form>
            <p id="result"></p>
        </div>
    )
}

export default TodoForm;

TodoForm.propTypes = {
    addTodo: PropTypes.func.isRequired
}

  // Or with jQuery

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.datepicker');
    M.Datepicker.init(elems, {
      format: 'yyyy-mm-dd',  // Format the date as you prefer
      autoClose: true     // Automatically close the picker after selecting a date
    });
  });