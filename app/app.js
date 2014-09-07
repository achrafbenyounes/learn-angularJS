'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

app.controller("WelcomeUsersControler", function() {
   alert("Welcome Mr Achraf Ben Younes, you do an awsome job for learning "
   + "Angular JS"); 
   
   var listUsers = ["Stephane kendergi", "Achraf BEN YOUNES", "Oussama Ben younes"];
   this.users = listUsers;
   this.show = true;
});

