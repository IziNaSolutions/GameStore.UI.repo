'use strict';

describe('Controller: BillCtrl', function () {

  // load the controller's module
  beforeEach(module('gameStoreApp'));

  var BillCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BillCtrl = $controller('BillCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BillCtrl.awesomeThings.length).toBe(3);
  });
});
