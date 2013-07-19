'use strict';

angular.module('sagepointApp')
  .directive('centerMe', function ($timeout) {
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
      		if(inner >= outter) {
      			$(element).css("padding-left","12.5px" );
      		} else {
      			$(element).css("padding-left", gutter+"px" );

      		}
      	}


      	scope.$on('resize', resize);
      	resize();

      }
    };
  });
