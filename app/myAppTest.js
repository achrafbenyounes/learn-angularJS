'use strict';

// Declare app level module which depends on views, and components
angular.module('myAppTest', ['app'  
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

function WelcomeControler() {
   alert("Welcome Mr Achraf Ben Younes, you do an awsome job for learning "
   + "Angular JS");
}

