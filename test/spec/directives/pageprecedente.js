'use strict';

describe('Directive: pagePrecedente', function () {

  // load the directive's module
  beforeEach(module('infosPsIhmApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<page-precedente></page-precedente>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the pagePrecedente directive');
  }));
});
