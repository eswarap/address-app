
var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello from controller");
       
    var refresh = function() {
      $http.get('/contactlist').success(function(response) {
        console.log("I got the data I requested");
        $scope.contactlist = response;
        $scope.contact = "";
      });
    };
    
    refresh();
    
    $scope.addContact = function() {
        console.log($scope.contact);
        $http.post('/api/contact/list', $scope.contact).success(function(response) {
        console.log(response);
        refresh();
        });
    };
  
}]);