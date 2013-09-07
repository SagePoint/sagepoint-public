'use strict';

angular.module('sagepointApp')
  .controller('LearnCtrl', function ($scope, $location) {

    $scope.pageTitle = "Learn More Page";
    $scope.pageDescription = "This is where the learn more thingies will go."

    $scope.scrollDown = function() {
		$("html, body").animate({ scrollTop: $(document).height() }, "slow",function() {
			$("#requester-name").focus();
		});
    };

    $scope.downloadFile = function(path) {
    	$location.path(path);
    }

  });