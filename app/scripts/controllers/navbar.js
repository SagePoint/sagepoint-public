'use strict';

angular.module('sagepointApp')
.controller('NavbarCtrl', function ($scope, $location, $dialog, $log) {

	$scope.redirect = function(url) {
		$location.path(url);
	};

	$scope.navClass = function (page) {
		var currentRoute = $location.path().substring(1) || 'home';
		return page === currentRoute ? 'active' : '';
	};

	$scope.showComingSoon = function() {
		$dialog.dialog({
			backdrop: true,
			dialogFade: true,
			keyboard: true,
			backdropClick: true,
			controller: 'NavbarPopupCtrl'
		}).open('views/_popupComingSoon.html');
	}

})
.controller('NavbarPopupCtrl', function ($scope, dialog, $timeout, $log) {

	var end = new Date('09/01/2013 12:0 AM');
    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;

    $scope.showRemaining = function() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {
        	$scope.launchCountdown = "Should be done!";
        } else {
       		var days = Math.floor(distance / _day);
        	var hours = Math.floor((distance % _day) / _hour);
        	var minutes = Math.floor((distance % _hour) / _minute);
        	var seconds = Math.floor((distance % _minute) / _second);

        	$scope.launchCountdown = days + " Days : " + hours + " Hours : " + minutes + " Minutes : " + seconds + " Seconds";
        }

    };

    $scope.launchCountdown = $scope.showRemaining();

	$scope.close = function() {
		dialog.close();
	}

	$scope.onTimeout = function() {
		$scope.showRemaining();
		$timeout($scope.onTimeout, 1000);
	}

	$timeout($scope.onTimeout, 1000);

});

