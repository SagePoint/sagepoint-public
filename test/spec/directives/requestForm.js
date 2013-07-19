'use strict';

describe('Directive: requestForm', function () {
  beforeEach(module('sagepointApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<request-form></request-form>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the requestForm directive');
  }));
});
