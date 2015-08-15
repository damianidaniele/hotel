'use strict';

describe('Service: someService', function () {

  // load the service's module
  beforeEach(module('hotelApp'));

  // instantiate service
  var someService;
  beforeEach(inject(function (_someService_) {
    someService = _someService_;
  }));

  it('should do something', function () {
    expect(!!someService).toBe(true);
  });

});
