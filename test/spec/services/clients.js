'use strict';

describe('Service: clients', function () {

  // load the service's module
  beforeEach(module('gameStoreApp'));

  // instantiate service
  var clients;
  beforeEach(inject(function (_clients_) {
    clients = _clients_;
  }));

  it('should do something', function () {
    expect(!!clients).toBe(true);
  });

});
