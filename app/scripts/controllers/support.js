'use strict';

angular.module('sagepointApp')
  .controller('SupportCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.pageTitle = "Support Page";
    $scope.pageDescription = "This is where the support thingies will go - or will redirect to the support page, or something like that"

  });
