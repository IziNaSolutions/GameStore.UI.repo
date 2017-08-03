'use strict';

describe('Service: oederDetails', function () {

  // load the service's module
  beforeEach(module('gameStoreApp'));

  // instantiate service
  var oederDetails;
  beforeEach(inject(function (_oederDetails_) {
    oederDetails = _oederDetails_;
  }));

  it('should do something', function () {
    expect(!!oederDetails).toBe(true);
  });

});
