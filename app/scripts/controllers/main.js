'use strict';

angular.module('sagepointApp')
  .controller('MainCtrl', function ($scope, $http, $dialog, $log) {

  	$scope.requester = {};
	$scope.method = 'POST';

  	$scope.submit = function(requestForm) {
  		if(requestForm.$valid) {
  			$scope.requester = angular.copy(requestForm)

			$http.post('request.php', {
			    name: $scope.requester.name,
			    email: $scope.requester.email,
			}).success(function (data, status, headers, config) {
			}).error(function (data, status, headers, config) {
				$log.error("Oops, there was a problem sending your request.");
			});

		    $dialog.dialog({
			    backdrop: true,
			    keyboard: true,
			    dialogFade: true,
			    backdropClick: true,
			    controller: 'SurveyCtrl'
		    }).open('views/_popupSurvey.html');

  		} else {
  			$log.info("Nope");
  		}
  	};

  })

  .controller('SurveyCtrl', function($scope, $dialog, dialog, $http, $log) {
  	$scope.close = function() {
  		dialog.close();
  	}

  	$scope.companySize = "Less than 20";
  	$scope.industry = "Computer Software"

  	$scope.submit = function(requester) {
		$http.post('survey.php', {
			name: $("#requester-name").val(),
			email: $("#requester-email").val(),
		    companySize: $scope.companySize,
		    industry: $scope.industry
		}).success(function (data, status, headers, config) {
		    $log.info("survey sent");
		    $dialog.messageBox("Thanks for you input!", "We'll get back to you soon",  [{result:'ok', label: 'OK', cssClass: 'btn-primary'}]).open()

		}).error(function (data, status, headers, config) {
			$log.info("error sending survey")
		});
		dialog.close();
		$("#requester-name").val("");
		$("#requester-email").val("");
  	}
  });
