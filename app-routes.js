angular.module("todo-collection")
.config(function($stateProvider){
    $stateProvider
    
       .state('home',{
        url: '',
        templateUrl: 'components/home.html'
    })
   
    .state('todo',{
        url: '/todo',
        templateUrl: 'components/todo.html',
        controller: 'TodoController',
        controllerAs: 'tc'
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
    .state('brilliantIdeas2',{
        url: '/brilliantIdeas2',
        templateUrl: 'components/brilliantIdeas2.html',
        controller: 'BrilliantIdeas2Controller',
        controllerAs: 'bcc'
    })

    
})