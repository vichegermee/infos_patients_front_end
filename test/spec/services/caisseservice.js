'use strict';

describe('Service: caisseService', function () {

  // load the service's module
  beforeEach(module('infosPsIhmApp'));

  // instantiate service
  var caisseService;
  beforeEach(inject(function (_caisseService_) {
    caisseService = _caisseService_;
  }));

  it('should do something', function () {
    expect(!!caisseService).toBe(true);
  });

});
