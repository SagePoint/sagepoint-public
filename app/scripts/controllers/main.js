'use strict';

angular.module('sagepointApp')
  .controller('MainCtrl', function ($scope, $http, $log) {

  	$scope.requester = {};
	$scope.method = 'POST';
	$scope.url = 'request.php';

  	$scope.submit = function(requestForm) {
  		if(requestForm.$valid) {
  			$scope.requester = angular.copy(requestForm)
  			$log.info("Form is valid!");
			$scope.code = null;
			$scope.response = null;

			$http.post($scope.url, {
			    name: $scope.requester.name,
			    email: $scope.requester.email,
			}).success(function (data, status, headers, config) {
			    // TODO
			}).error(function (data, status, headers, config) {
			    // TODO
			});
  		} else {
  			$log.info("Nope");
  		}
  	};

  	$scope.submitClass = function(requestForm) {
  		if(requestForm.$valid) {
  			return "submit clickable";
  		} else {
  			return "submit not-clickable";
  		}

  	}
  });
