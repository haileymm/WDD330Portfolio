import Todos from "./Todos.js";

let date = new Date().getTime();
let element = "ul";

const Todo = new Todos(date.toString(), element);
Todo.listTodos();
let addTaskBtn = document.getElementById('addTaskBtn');
addTaskBtn.addEventListener("click", Todo.addTodo, false);