angular.module('todo-collection')
.controller('CalculatorController', function(CalculatorService){
    var cc = this;
    
    
    
    cc.showDetails = function(todo){
        cc.show = true;
        cc.selectedToDo= todo;
    }
    cc.todos = CalculatorService.getAllToDos();
})