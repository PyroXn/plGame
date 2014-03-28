'use strict';

var plGame = angular.module('plGame', [
  'ngRoute',
  'authControllers',
  'authServices'
]);

plGame.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.when('/login', {
      templateUrl: 'views/login.jade',
      controller: 'LoginCtrl'
    }).
    otherwise({
      redirecTo: '/'
    });
  }]);