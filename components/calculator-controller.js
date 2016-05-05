angular.module('todo-collection')
.controller('CalculatorController', function(){
    var cc = this;
    cc.total =[];
    
    cc.addResult = function(newResult){
        cc.total.push(newResult)
        cc.newResult ={};
    }
    if ($scope.operator == 'Miles to Kilometers') {
        return $scope.a * 1.609;
    }
    if ($scope.operator == 'Kilometers to Miles') {
        return $scope.a * 0.62137;
    }
    if ($scope.operator == 'Fahrenheit & Celsius') {
        return $scope.a / 32;
    }
    if ($scope.operator == 'Celsius & Fahrenheit') {
        return ($scope.a * 9 / 5) + 32;
    }
    if ($scope.operator == 'Pounds & Kilograms') {
        return $scope.a / 2.2;
    }
    if ($scope.operator == 'Kilograms & Pounds') {
        return $scope.a * 2.2;
    }
    if ($scope.operator == 'Inches in Feet') {
        return $scope.a * 12;
    }
    if ($scope.operator == 'Feet in Inches') {
        return $scope.a / 12;
    }
      if ($scope.operator == 'BMI') {
        return $scope.a / 12;
    }
    if ($scope.operator == 'Loan Payments') {
        return $scope.a / $scope.b;
    }

})
