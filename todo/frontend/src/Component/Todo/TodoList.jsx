import TodoItem from "./TodoItem";
import PropTypes from "prop-types" 

function TodoList({tds}) {
    
    return (
        <div>
            {tds.map((todo, index) => (
              <TodoItem key={index} item={todo}/>
            ))}
        </div>
    )  // end of return
}

TodoList.propTypes = {
    tds: PropTypes.arrayOf(PropTypes.object).isRequired
};
export default TodoList;

//  <TodoItem item={todo}/>