'use strict';

angular.module('sagepointApp')
.directive('requestForm', function () {
	return {
		templateUrl: 'views/_requestForm.html',
		restrict: 'C',
		transclude: true,
		replace: true,
	    link: function postLink(scope, iElement, iAttrs) {
	    	$("input").placeholder();
	    }

	};
});
