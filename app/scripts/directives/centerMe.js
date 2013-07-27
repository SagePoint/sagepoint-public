'use strict';

angular.module('sagepointApp')
  .directive('centerMe', function ($timeout, $rootScope, $log) {
    return {
      restrict: 'C',
      replace: false,
      link: function postLink(scope, element, attrs) {

      	var resize = function() {
	      	if(parseInt(scope.windowWidth) < 480) {
	      		$(element).css("padding-left", "0");
	      		return;
	      	}

      		var inner = (function() {
      			var width = 0;
      			angular.forEach(element.children(), function(child, index){
      				width += $(child).width();
      			});

      			return width;
      		})();
      		var outter = parseInt(scope.windowWidth, 10);
      		var gutter = parseInt(outter - inner) / 2
      		$log.info(inner);
      		$log.info(outter);
      		$log.info(gutter);
      		if(inner >= outter) {
      			$(element).css("padding-left","12.5px" );
      		} else {
      			$(element).css("padding-left", gutter+"px" );

      		}
      	}

      	scope.$on('resize', resize);
  		//Bug in angular??  NO idea why, but if I broadcast resize twice, the second one works - not the first.
  		// F me.
  		$rootScope.$broadcast('resize');
  		$rootScope.$broadcast('resize');
      }
    };
  });
