'use strict';

angular.module('sagepointApp')
  .controller('CompanyCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.pageTitle = "Company Page";
    $scope.pageDescription = "This is where the company thingies will go."

  });
