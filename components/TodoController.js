// angular.module('todo-collection')
// .controller('TodoController', function(TodoService){
//     var tc =this;
   
//     tc.showDetails= function(todo){
//         tc.show = true;
//         tc.selectedTodo;
//     }
//     tc.todo = TodoService.getAllTodos();

//     tc.list =[];
//       tc.addTodo = function(newTodo) {
//           tc.list.push(newTodo)
//           tc.newTodo = '';
//        tc.todoCompleted= 0;
//    }
//       tc.reset= function(){
//                 tc.list=[];
//         tc.todoCompleted= 0;
//    }
//       tc.removeTodo = function(index) {
//           tc.list.splice(index, 1);
//     }
// });
   


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