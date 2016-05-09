
angular.module('todo-collection') 
.controller('GroceryController', function() {
    var gc =this;
    gc.list =[];
      gc.addItem = function(newItem) {
          gc.list.push(newItem)
          gc.newItem = '';
       gc.itemPurchased= 0;
   }
      gc.removeItem = function(index) {
          gc.list.splice(index, 1);
    }
});
    

