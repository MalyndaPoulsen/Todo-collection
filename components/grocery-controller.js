angular.module('todo-collection')
.controller('GroceryController', function(GroceryService){
    var gc = this;
    gc.showDetails= function(items){
        gc.show = true;
        gc.selectedItems;
    }
    gc.items = GroceryService.getAllItems();
})