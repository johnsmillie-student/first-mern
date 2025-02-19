
import './App.css'
import TodoForm from './Todo/TodoForm';
import TodoList from './Todo/TodoList';
//import TodoItem from './Todo/TodoItem';
import axios from 'axios';
import {useState, useEffect} from 'react';



function App () {

  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState();
  const url = "http://localhost:4001";


  useEffect(() => {
    function fetchData()  {
     axios.get(url + "/todos")
     .then((response) => {
      setTodos(response.data);
     })
      .catch ((error) => {
        console.error('Error fetching data:', error);
      });
    }
    fetchData();
    }, []);
 
    useEffect(() => {
      console.log(todos);  // Logs the updated state when it changes
    }, [todos]);  // This effect runs whenever `data` changes
    
    function setTodo(e,todo){
      e.preventDefault();
      setSelectedTodo(todo);
    }

    function addTodo(todo){
      let resp = "";
      axios.post(url + "/todos", todo)
     .then((response) => {
      setTodos([...todos, todo]);
      resp = response.status;
     })
     .catch((error) => {
       console.error('Error adding todo:', error);
       resp = error.responseText
     });
     return resp;
    }

  return (
    <div className="container-fluid">
      <div className='row'>
        <div className='col s7 blue-grey-text text-lighten-4'>
          <h2>Add New Todo</h2>
          <TodoForm  addTodo={addTodo} />
        </div>
        <div className='col s5'>
          <ul className='collection with-header blue-grey'>
            <li className='collection-header blue-grey lighten-4 black-text'><h3>Todos</h3></li>
            {todos && todos.length > 0 ? (todos.map((td, index) => 
              <li key={index} className='collection-item cyan-text text-darken-3' onClick={(e) => {setTodo(e,td)}}><h5>{td.title} </h5></li>
            
            )) : (
            <li className='collection-item'>No Todos</li>
            )}
          </ul>
        </div> 
      </div>
     { selectedTodo != undefined &&
      <div className='row'>
        <div className='col s12 blue-grey-text text-lighten-4'>
          <h3 >{selectedTodo.title}</h3>
          <p >{selectedTodo.description}</p>
          <p>{formatDateToInputDate(new Date(selectedTodo.dueDate))}</p>
        </div> 
      </div>
     }
      <div className='row'>
         <TodoList tds={todos} />
      </div>
      
    </div>
  );
  }


export default App


function formatDateToInputDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');  // Months are zero-indexed, so add 1
  const day = String(date.getDate()).padStart(2, '0');  // Pad day if single digit

  return `${year}-${month}-${day}`;  // Return formatted date
}