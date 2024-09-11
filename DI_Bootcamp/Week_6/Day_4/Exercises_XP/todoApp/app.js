const TodoList = require('./todo.js');

const myTodoList = new TodoList();

myTodoList.addTask('Buy groceries');
myTodoList.addTask('Walk the dog');
myTodoList.addTask('Read a book');

myTodoList.markComplete('Walk the dog');

console.log('All tasks:', myTodoList.listTasks());
