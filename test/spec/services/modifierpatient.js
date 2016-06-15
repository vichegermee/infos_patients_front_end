'use strict';

describe('Service: modifierPatient', function () {

  // load the service's module
  beforeEach(module('infosPsIhmApp'));

  // instantiate service
  var modifierPatient;
  beforeEach(inject(function (_modifierPatient_) {
    modifierPatient = _modifierPatient_;
  }));

  it('should do something', function () {
    expect(!!modifierPatient).toBe(true);
  });

});
