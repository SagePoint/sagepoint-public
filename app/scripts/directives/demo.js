'use strict';

angular.module('sagepointApp')
.directive('demo', function () {
	return {
		templateUrl: 'views/_demo.html',
		restrict: 'E',
		replace: true,
		link: function postLink(scope, element, attrs) {
			$('.carousel').carousel({
				interval: 5000
			})
		}
	};
});
