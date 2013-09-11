'use strict';

angular.module('sagepointApp')
  .controller('LearnCtrl', function ($scope, $location) {

    $scope.scrollDown = function() {
		$("html, body").animate({ scrollTop: $(document).height() }, "slow",function() {
			$("#requester-name").focus();
		});
    };

    $scope.downloadFile = function(path) {
    	$location.path(path);
    }

  });