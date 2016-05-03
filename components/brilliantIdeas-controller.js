angular.module('todo-collection')
.controller('BrilliantIdeasController', function(BrilliantIdeasService){
    var bc = this;
    bc.showDetails= function(idea){
        bc.show = true;
        bc.selectedIdea;
    }
    bc.ideas = BrilliantIdeasService.getAllIdeas();
})