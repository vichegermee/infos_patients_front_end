'use strict';

describe('Controller: AjouterpatientCtrl', function () {

  // load the controller's module
  beforeEach(module('infosPsIhmApp'));

  var AjouterpatientCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AjouterpatientCtrl = $controller('AjouterpatientCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AjouterpatientCtrl.awesomeThings.length).toBe(3);
  });
});
