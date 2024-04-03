const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://Rushikesh2398:Rushi%402398@dbcohort.oq6sjra.mongodb.net/todo-app"
);

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo,
};
