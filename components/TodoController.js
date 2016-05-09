
angular.module('todo-collection') 
.controller('TodoController', function() {
    var tc =this;
    tc.list =[];
      tc.addTodo = function(newTodo) {
          tc.list.push(newTodo)
          tc.newTodo = '';
       tc.todoCompleted= 0;
   }
      tc.reset= function(){
                tc.list=[];
        tc.todoCompleted= 0;
   }
      tc.removeTodo = function(index) {
          tc.list.splice(index, 1);
    }
});