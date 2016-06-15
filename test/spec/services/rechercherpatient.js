'use strict';

describe('Service: rechercherPatient', function () {

  // load the service's module
  beforeEach(module('infosPsIhmApp'));

  // instantiate service
  var rechercherPatient;
  beforeEach(inject(function (_rechercherPatient_) {
    rechercherPatient = _rechercherPatient_;
  }));

  it('should do something', function () {
    expect(!!rechercherPatient).toBe(true);
  });

});
