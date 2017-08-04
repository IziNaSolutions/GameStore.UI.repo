'use strict';

describe('Controller: GamesmanagementCtrl', function () {

  // load the controller's module
  beforeEach(module('gameStoreApp'));

  var GamesmanagementCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GamesmanagementCtrl = $controller('GamesmanagementCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GamesmanagementCtrl.awesomeThings.length).toBe(3);
  });
});
