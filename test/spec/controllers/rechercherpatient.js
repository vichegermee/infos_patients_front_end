'use strict';

describe('Controller: RechercherpatientctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('infosPsIhmApp'));

  var RechercherpatientctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RechercherpatientctrlCtrl = $controller('RechercherpatientctrlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RechercherpatientctrlCtrl.awesomeThings.length).toBe(3);
  });
});
