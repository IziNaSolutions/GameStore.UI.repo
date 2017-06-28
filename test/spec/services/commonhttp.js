'use strict';

describe('Service: commonHttp', function () {

  // load the service's module
  beforeEach(module('gameStoreApp'));

  // instantiate service
  var commonHttp;
  beforeEach(inject(function (_commonHttp_) {
    commonHttp = _commonHttp_;
  }));

  it('should do something', function () {
    expect(!!commonHttp).toBe(true);
  });

});
