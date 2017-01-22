'use strict';

angular.module('yapp')
  .controller('OverViewController', ['$scope', function($scope){
    $scope.showDetails = false;
	
	$scope.toggleDetails = function(){
		$scope.showDetails = !$scope.showDetails;
	}
   }])
  
 
  .controller('AddSubscriberController', ['$scope',function($scope) {
    
    var blankDetails = {
    	name: "",
    	conNum: "",
    	date: "",
    	subsnperiod: "",
    	address: ""
    };

    $scope.memberDetails = {
    	name: "",
    	conNum: "",
    	date: "",
    	subsnperiod: "",
    	address: ""
    };				

    $scope.submitDetails = function(){
    	console.log($scope.memberDetails);
    	$scope.memberDetails = angular.copy(blankDetails);
    	$scope.addSubscriberForm.$setPristine();
    }


  }])

  .controller('RemoveSubscriberController',['$scope', 'searchFactory', function($scope, searchFactory){
  		
  		$scope.submitDetails = function(){
  			$scope.subscriber = searchFactory.getSubscriber($scope.memberId);
  			$scope.memberId = angular.copy(0);
  			$scope.removeSubscriberForm.$setPristine();
  		}

  		  		
  }])



  ;
