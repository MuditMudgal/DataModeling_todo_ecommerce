import mongoose from 'mongoose';
import { User } from './user.models';
import { SubTodo } from './sub_todos.models';

const todoSchema = new mongoose.Schema(
  {
    //content complete subtodo{}
    content: {
      type: String,
      required: true
    },
    complete: {
      type: Boolean,
      default: false
    },
    createdBy: {
      type: mongoose.Schema.types.ObjectId,
      ref: "User"
    },
    subTodo: [
      {
      type: mongoose.Schema.types.ObjectId,
      ref: "SubTodo"
      },
    ] // Array of subtodos
  }, { timestamps: true });

export const Todo = mongoose.models('Todo', todoSchema);
