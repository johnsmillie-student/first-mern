import mongoose from 'mongoose'
import { ToDoSchema } from '../models/todoModel'


const Todos = mongoose.model('Todos', ToDoSchema)

export const addTodo = async (req, res) => {
  let newTodo = new Todos(req.body)
  console.log(newTodo);
  try {
    const todo = await newTodo.save()
    res.json(todo)
  } catch(err) {
    res.send(err)
  }
}

export const getTodos = async (req, res) => {
  try{
    const todos = await Todos.find({})
    res.json(todos)
  } catch(err) {
    res.send(err)
  }
}

export const getTodoById = async (req, res) => {
  try{
    const todo = await Todos.findById(req.params.TodoId)
    res.json(todo)
  } catch(err) {
    res.send(err)
  }
}

export const  updateTodo = async (req, res) => {
  try{
    const todo = await Todos.findOneAndUpdate(
      { _id: req.params.TodoId },
      req.body,
      {new: true}
    )
    res.json(todo)
  } catch(err) {
    res.send(err)
  }

}

export const deleteTodo = async (req, res) => {
  try{
    await Todos.deleteOne({ _id: req.params.TodoId } )
    res.json( { message: "Successfully deleted Todo" })
  } catch(err) {
    res.send(err)
  }
}