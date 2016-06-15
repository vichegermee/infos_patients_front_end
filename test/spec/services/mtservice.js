'use strict';

describe('Service: mtService', function () {

  // load the service's module
  beforeEach(module('infosPsIhmApp'));

  // instantiate service
  var mtService;
  beforeEach(inject(function (_mtService_) {
    mtService = _mtService_;
  }));

  it('should do something', function () {
    expect(!!mtService).toBe(true);
  });

});
