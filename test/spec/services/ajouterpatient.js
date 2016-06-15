'use strict';

describe('Service: ajouterPatient', function () {

  // load the service's module
  beforeEach(module('infosPsIhmApp'));

  // instantiate service
  var ajouterPatient;
  beforeEach(inject(function (_ajouterPatient_) {
    ajouterPatient = _ajouterPatient_;
  }));

  it('should do something', function () {
    expect(!!ajouterPatient).toBe(true);
  });

});
