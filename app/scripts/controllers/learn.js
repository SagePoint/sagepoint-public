'use strict';

angular.module('sagepointApp')
  .controller('LearnCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.pageTitle = "Learn More Page";
    $scope.pageDescription = "This is where the learn more thingies will go."

  });