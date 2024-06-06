/*
 * Todo {
    title: string,
    description: string,
    completed: boolean
 }
 */
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://revanth:mongoDB1021@cluster0.ddhmf2m.mongodb.net/todos"
);
const todoSchema = mongoose.Schema({
  title: string,
  description: string,
  completed: boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = { todo };
