'use strict';

describe('Controller: ModifierpatientCtrl', function () {

  // load the controller's module
  beforeEach(module('infosPsIhmApp'));

  var ModifierpatientCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ModifierpatientCtrl = $controller('ModifierpatientCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ModifierpatientCtrl.awesomeThings.length).toBe(3);
  });
});
