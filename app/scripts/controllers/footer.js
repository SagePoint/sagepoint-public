'use strict';

angular.module('sagepointApp')
  .controller('FooterCtrl', function ($scope, $dialog, $log) {

  	$scope.showTerms = function() {
  		$dialog.dialog({
		    backdrop: true,
		    dialogFade: true,
		    keyboard: true,
		    backdropClick: true,
		    controller: 'FooterPopupCtrl'
	    }).open('views/_popupTerms.html');
  	}

  	$scope.showPrivacy = function() {
  		$dialog.dialog({
		    backdrop: true,
		    dialogFade: true,
		    keyboard: true,
		    backdropClick: true,
		    controller: 'FooterPopupCtrl'
	    }).open('views/_popupPrivacy.html');
  	}

  })
  .controller('FooterPopupCtrl', function ($scope, dialog, $log) {
  	$scope.close = function() {
  		dialog.close();
  	}
  });
