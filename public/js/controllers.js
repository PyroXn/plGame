'use strict';

var authControllers = angular.module('authControllers', []);

authControllers.controller('LoginCtrl', ['$scope', 'Login',
	function($scope, Login) {
		$scope.message = 'TROLL';
	}]);