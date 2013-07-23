'use strict';

angular.module('sagepointApp')
  .controller('LoginCtrl', function ($scope, $location, $timeout) {

    $scope.pageTitle = "Login";
    $scope.pageDescription = "You are being redirected to the SagePoint login portal. Just give us a sec...";
	$timeout(function() {
		location.href =  "//portal.sagepointsoftware.com/account/login";
	}, 1000);
  });
