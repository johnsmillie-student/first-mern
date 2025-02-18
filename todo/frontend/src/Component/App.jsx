
import './App.css'
import TodoForm from './Todo/TodoForm';
import TodoList from './Todo/TodoList';
//import TodoItem from './Todo/TodoItem';
import axios from 'axios';
import {useState, useEffect} from 'react';



function App () {

  const [todos, setTodos] = useState([]);
  const url = "http://localhost:4001/todos";


  /*useEffect(() => {
    axios.get(url)
    .then(response => {
      console.log(response.data); 
       // this will log the data received from the server.  You can manipulate this data as needed.  For now, we'll just set it to the state.
      setTodos(response.data);
      console.log("Todos after setTodos");
      console.log(todos);
    })
      .catch((error) => {
        console.log(error);
      });
    
  }, []);*/

  useEffect(() => {
    const fetchData = async () => {
     axios.get(url)
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
    

  return (
    <div className="container-fluid">
      <div className='row'>
        <div className='col s12'><h1>Todo App</h1></div>
      </div>
      <div className='row'>
        <h2>Add New Todo</h2>
          <TodoForm />
      </div>
      <div className='row'>
         <TodoList tds={todos} />
      </div>
      
    </div>
  );
  }


export default App
