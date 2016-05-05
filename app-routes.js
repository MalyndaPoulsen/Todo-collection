angular.module("todo-collection")
.config(function($stateProvider){
    $stateProvider
    
    $stateProvider
  
    .state('todo',{
        url: '/todo',
        templateUrl: 'components/todo.html',
        controller: 'TodoController',
        controllerAs: 'tc'
    })
    .state('calculator',{
        url: '/calculator',
        templateUrl: 'components/calculator.html',
        controller: 'CalculatorController',
        controllerAs: 'cc'
    })
    .state('grocery',{
        url: '/grocery',
        templateUrl: 'components/grocery.html',
        controller: 'GroceryController',
        controllerAs: 'gc'
    })
    .state('brilliantIdeas',{
        url: '/brilliantIdeas',
        templateUrl: 'components/brilliantIdeas.html',
        controller: 'BrilliantIdeasController',
        controllerAs: 'bc'
    })
    
})