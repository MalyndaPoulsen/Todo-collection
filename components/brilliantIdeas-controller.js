

angular.module('todo-collection')
    .controller('BrilliantIdeasController', function() {
        var bc= this;
        
        bc.ideaList = [];
        bc.addIdea = function(newIdea) {
            bc.ideaList.push(bc.newIdea)
            bc.newIdea= "";
            bc.ideaCompleted= 0;
        }
        bc.reset= function(){
            bc.ideaList=[];
            bc.ideaCompleted=0;
        }
        bc.removeIdea = function(index) {
           bc.ideaList.splice(index, 1);
        }
    });
    
