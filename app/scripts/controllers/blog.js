'use strict';

angular.module('sagepointApp')
  .controller('BlogCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.pageTitle = "Blog Page";
    $scope.pageDescription = "This is where the bloggy thingies will go."

  });
