'use strict';

describe('Directive: demo', function () {
  beforeEach(module('sagepointApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<demo></demo>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the demo directive');
  }));
});
