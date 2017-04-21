
var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello from controller");
       
   var refresh = function() {
    $http.get('/api/contact/list').then(function(response) {
        console.log("I got the data I requested");
        $scope.contactList = response.data;
        $scope.contact = {};
      });
    };
    
    refresh();
    
    $scope.addContact = function() {
        console.log($scope.contact);
        $http.post('/api/contact/new',$scope.contact).then(function(response){
           console.log(response); 
           refresh();
        });
    };
    
    $scope.remove = function(id) {
        console.log(id);
        $http.delete('/api/contact/'+id).then(function(response){
           refresh();
        });
    };
    
    $scope.edit = function(id) {
        console.log(id);
        $http.get('/api/contact/'+id).then(function(response){
           $scope.contact = response.data; 
        });
    };
    
    $scope.update = function() {
        console.log($scope.contact._id);
        $http.put('/api/contact/'+$scope.contact._id,$scope.contact).then(function(response){
           refresh();
        });
    }
    
    $scope.deselect = function() {
     $scope.contact = "";
    }
}]);