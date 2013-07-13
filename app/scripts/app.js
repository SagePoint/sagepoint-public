'use strict';

angular.module('sagepointApp', [])
.config(function ($routeProvider, $locationProvider) {
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
});
