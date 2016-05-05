// angular.module('todo-collection')
// .controller('GroceryController', function($scope){
//     var gc = this;
//     gc.groceryList= [];
        
//       $scope.addItem = function(newItem) {
//           $scope.groceryList.push(newItem)
//           $scope.newItem = '';
//         $scope.ItemPurchased= 0;
//    }
//       $scope.reset= function(){
//                 gc.groceryList=[];
//         $scope.itemPurchased= 0;
//    }
//       $scope.removeItem = function(index) {
//           $scope.groceryList.splice(index, 1);
//     }
// });

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
    
    
    
    // gc.showDetails= function(items){
    //     gc.show = true;
    //     gc.selectedItems;
    // }
    // gc.items = GroceryService.getAllItems();
