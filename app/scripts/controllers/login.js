'use strict';

angular.module('sagepointApp')
  .controller('LoginCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.pageTitle = "Login Page";
    $scope.pageDescription = "This is where the support thingies will go - or will redirect to the login page, or something like that"

  });
