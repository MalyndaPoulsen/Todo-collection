angular.module('todo-collection')
.service('GroceryService', function($q, $http){
	this.getItem =  function(){
		var t = localStorage.getItems('ideas');
		if(t){
			console.log('Items Data:', JSON.parse(t))
			return JSON.parse(t)
		}
		console.log('Items Data:', [])
		return [];
	}
	this.saveItems =  function(items){
	localStorage.setItem('item', JSON.stringify(items));
		console.log('Item Data Saved:', items);
	}
})