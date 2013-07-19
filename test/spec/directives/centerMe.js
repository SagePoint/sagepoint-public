'use strict';

describe('Directive: centerMe', function () {
  beforeEach(module('sagepointApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<center-me></center-me>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the centerMe directive');
  }));
});
