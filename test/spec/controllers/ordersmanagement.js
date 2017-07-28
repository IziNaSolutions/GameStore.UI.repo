'use strict';

describe('Controller: OrdersmanagementCtrl', function () {

  // load the controller's module
  beforeEach(module('gameStoreApp'));

  var OrdersmanagementCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OrdersmanagementCtrl = $controller('OrdersmanagementCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(OrdersmanagementCtrl.awesomeThings.length).toBe(3);
  });
});
