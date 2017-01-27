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
  		
      $scope.showDetails = false;
  		$scope.check = function(){

  			$scope.subscriber = searchFactory.getSubscriber($scope.memberId);
        console.log($scope.subscriber);
  			$scope.memberId = angular.copy("");
  			$scope.removeSubscriberForm.$setPristine();
        if (typeof $scope.subscriber != 'undefined')
            $scope.showDetails = true;
        else
             $scope.showDetails = false;
  		}

  		$scope.accept = function(){
        $scope.removeSubscriberForm.$setPristine();
        $scope.showDetails = false;
  			console.log("accept");
  		}

  		$scope.reject = function(){
        $scope.removeSubscriberForm.$setPristine();
        $scope.showDetails = false;
  			console.log("reject");
  		}
  		  		
  }])

  .controller('EditSubscriberController',['$scope','searchFactory', function($scope,searchFactory){
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
      $scope.showDetails = false;
      $scope.check = function(){

        $scope.subscriber = searchFactory.getSubscriber($scope.memberId);
        console.log($scope.subscriber);
        $scope.memberId = angular.copy("");
        $scope.editSubscriberForm.$setPristine();
        console.log(typeof $scope.subscriber.date);
        if (typeof $scope.subscriber != 'undefined'){
            $scope.showDetails = true;
            $scope.memberDetails.name = $scope.subscriber.name;
            $scope.memberDetails.conNum = $scope.subscriber.conNum;
            $scope.memberDetails.date = new Date($scope.subscriber.date);
            $scope.memberDetails.subsnperiod = $scope.subscriber.subsnperiod;
            $scope.memberDetails.address = $scope.subscriber.address;
        }
        else
             $scope.showDetails = false;
      }

      $scope.accept = function(){
        //$scope.removeSubscriberForm.$setPristine();
        $scope.showDetails = false;
        console.log($scope.memberDetails);
       $scope.memberDetails = angular.copy(blankDetails);
        //$scope.removeSubscriberForm2.$setPristine();
        console.log("accept");
      }

      $scope.reject = function(){
       // $scope.removeSubscriberForm.$setPristine();
        $scope.showDetails = false;
        console.log("reject");
      }

  }])

  .controller('ListSubscriberController',['$scope','searchFactory', function($scope,searchFactory){

    $scope.subscribers = searchFactory.getSubscribers();

  }])

  ;
