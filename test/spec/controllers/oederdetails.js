'use strict';

describe('Controller: OederdetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('gameStoreApp'));

  var OederdetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OederdetailsCtrl = $controller('OederdetailsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(OederdetailsCtrl.awesomeThings.length).toBe(3);
  });
});
