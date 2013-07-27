'use strict';

angular.module('sagepointApp')
  .directive('fitvids', function ($rootScope, $log) {
    return {
      restrict: 'C',
      replace: false,
      link: function postLink(scope, element, attrs) {
      	if($rootScope.getWidth() <= 480) {
      		$log.info("fitting vids");
        	$(".fitvids").fitVids();
        }
      }
    };
  });
