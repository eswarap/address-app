
var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello from controller");
       
    $http({
        method : 'GET',
        url : '/api/contact/list'
    }).then(function(response){
        $scope.contactList = response.data;
        console.log("data received");
    },function(error) {
        console.log("no data received");        
    });
    
    $http({
        method:'POST',
        url:'api/contact/new'
    }).then(function(response){

        console.log(" new contact created");       
    },function(error) {
        console.log("no data received");        
    });
  
}]);