'use strict';

describe('Service: supprimerPatient', function () {

  // load the service's module
  beforeEach(module('infosPsIhmApp'));

  // instantiate service
  var supprimerPatient;
  beforeEach(inject(function (_supprimerPatient_) {
    supprimerPatient = _supprimerPatient_;
  }));

  it('should do something', function () {
    expect(!!supprimerPatient).toBe(true);
  });

});
