import mongoose from "mongoose";


const Schema = mongoose.Schema

export const ToDoSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  dueDate: {
    type: Date,
    default: Date.now
  }
})