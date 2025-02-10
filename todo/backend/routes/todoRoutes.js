import {
  addTodo,
  getTodos,
  getTodoById,
  updateTodo,
  deleteTodo
} from '../controllers/todoController'

const routes = (app) => {
  app.route('/todos')
  .get(getTodos) // GET endpoint
  .post(addTodo) // POST endpoint

  app.route('/todo/:TodoId')
  .get(getTodoById) // GET todo by ID
  .put(updateTodo)  // UPDATE todo by ID
  .delete(deleteTodo)
}





export default routes