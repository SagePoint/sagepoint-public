'use strict';

angular.module('sagepointApp', ['ui.bootstrap'])
.config(function ($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
    })
    .when('/learn', {
        templateUrl: 'views/learn.html',
        controller: 'LearnCtrl'
    })
    .when('/company', {
        templateUrl: 'views/coming-soon.html',
        controller: 'CompanyCtrl'
    })
    .when('/blog', {
        templateUrl: 'views/coming-soon.html',
        controller: 'BlogCtrl'
    })
    .when('/support', {
        templateUrl: 'views/coming-soon.html',
        controller: 'SupportCtrl'
    })
    .when('/login', {
        templateUrl: 'views/coming-soon.html',
        controller: 'LoginCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });

    $httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
    $locationProvider.html5Mode(false);
})
.run(function($rootScope) {
    $rootScope.showVersionInfo = true;
    $rootScope.versionTag = '0.1';

    $rootScope.openComingSoon = function () {
        $rootScope.shouldBeOpen = true;
    };

    $rootScope.closeComingSoon = function () {
        $rootScope.shouldBeOpen = false;
    };

    $rootScope.comingSoonOpts = {
        backdropFade: true,
        dialogFade:true
    };

	$rootScope.getWidth = function() {
		return document.body.clientWidth;
	};

	$rootScope.$watch($rootScope.getWidth, function(newValue) {
		$rootScope.windowWidth = newValue;
	});

    $rootScope.submitClass = function(requestForm) {
        if(requestForm.$valid) {
            return "submit clickable";
        } else {
            return "submit not-clickable";
        }
    }

	window.onresize = function(){
		$rootScope.$apply();
		$rootScope.$broadcast('resize');
	};
});
