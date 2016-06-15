'use strict';

describe('Service: regimeService', function () {

  // load the service's module
  beforeEach(module('infosPsIhmApp'));

  // instantiate service
  var regimeService;
  beforeEach(inject(function (_regimeService_) {
    regimeService = _regimeService_;
  }));

  it('should do something', function () {
    expect(!!regimeService).toBe(true);
  });

});
