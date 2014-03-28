'use strict';

var authServices = angular.module('authServices', ['ngResource']);

authServices.factory('Login', ['$resource',
  function($resource){
    return $resource('/login', {}, {
      query: {method:'GET'}
    });
  }]);
