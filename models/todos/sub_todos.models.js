import mongoose from mongoose;

const subTodoSchema = new mongoose.Schema(
  {
    //content markasDone createdAt
    content: {  
      type: string,
      required: true
    },
    complete: {
      type: Boolean,
      default: false
    },
    createdBy: {
      type: mongoose.Schema.types.ObjectId,
      ref: "User"
    }
  }, {timestamps : true}
)

export const SubTodo = mongoose.models("SubTodo", subTodoSchema)