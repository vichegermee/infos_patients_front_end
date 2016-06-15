'use strict';

describe('Controller: SupprimerpatientCtrl', function () {

  // load the controller's module
  beforeEach(module('infosPsIhmApp'));

  var SupprimerpatientCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SupprimerpatientCtrl = $controller('SupprimerpatientCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SupprimerpatientCtrl.awesomeThings.length).toBe(3);
  });
});
