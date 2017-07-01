'use strict';

describe('Controller: CatalogCtrl', function () {

  // load the controller's module
  beforeEach(module('gameStoreApp'));

  var CatalogCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CatalogCtrl = $controller('CatalogCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CatalogCtrl.awesomeThings.length).toBe(3);
  });
});
