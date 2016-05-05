angular.module('todo-collection')
.service('BrilliantIdeasService', function($q, $http){
	this.getIdeas =  function(){
		var t = localStorage.getIdeas('ideas');
		if(t){
			console.log('Ideas Data:', JSON.parse(t))
			return JSON.parse(t)
		}
		console.log('Ideas Data:', [])
		return [];
	}
	this.saveIdeas =  function(ideas){
	localStorage.setIdea('idea', JSON.stringify(ideas));
		console.log('Idea Data Saved:', ideas);
	}
})