angular.module('todo-collection')
.controller('TodoController', function(TodoService){
    var tc = this;
    tc.showDetails= function(todo){
        tc.show = true;
        tc.selectedTodo;
    }
    tc.todo = TodoService.getAllTodos();
})