'use strict';

describe('Controller: ListeselectCtrl', function () {

  // load the controller's module
  beforeEach(module('infosPsIhmApp'));

  var ListeselectCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListeselectCtrl = $controller('ListeselectCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ListeselectCtrl.awesomeThings.length).toBe(3);
  });
});
