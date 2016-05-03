angular.module("todo-collection")
.config(function($stateProvider){
    $stateProvider
    
    $stateProvider
  
    .state('todo',{
        url: '/todo',
        templateUrl: 'components/todo/todo.html',
        controller: 'todo-controller',
        controllerAs: 'tc'
    })
      .state('calculator',{
        url: '/calculator',
        templateUrl: 'components/calculator/calculator.html',
        controller: 'calculator-controller',
        controllerAs: 'cc'
    })
         .state('grocery',{
        url: '/grocery',
        templateUrl: 'components/grocery/grocery.html',
        controller: 'grocery-controller',
        controllerAs: 'gc'
    })
           .state('brillianIdeas',{
        url: '/brilliantIdeas',
        templateUrl: 'components/brilliantIdeas/brilliantIdeas.html',
        controller: 'brilliantIdeas-controller',
        controllerAs: 'bc'
    })
    
})