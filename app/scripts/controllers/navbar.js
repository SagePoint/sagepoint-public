'use strict';

angular.module('sagepointApp')
  .controller('NavbarCtrl', function ($scope, $location, $log) {

	$scope.redirect = function(url) {
		$location.path(url);
	};

	$scope.navClass = function (page) {
		var currentRoute = $location.path().substring(1) || 'home';
		return page === currentRoute ? 'active' : '';
	};

  });
