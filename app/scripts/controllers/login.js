'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('yapp')
  .controller('LoginController',['$scope','$location', function($scope, $location) {

  	$scope.login = {email:"",pwd:""};
	$scope.invalidSelection = false;
	
    $scope.submit = function() {

      $location.path('/dashboard');

      return false;
    }

  }]);
