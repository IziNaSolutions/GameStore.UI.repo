'use strict';

/**
 * @ngdoc function
 * @name gameStoreApp.controller:CatalogCtrl
 * @description
 * # CatalogCtrl
 * Controller of the gameStoreApp
 */
angular.module('gameStoreApp')
  .controller('CatalogCtrl', function ($http,$rootScope, $location, session, $log) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var self = this;
    self.url = 'http://localhost:5001/games/getAll_Items';
    $http.get(self.url).success(function(data)
    {
      self.games=data;
      self.url2 = 'http://localhost:5001/users/getRecomandation?userName='; //todo: change to be according to userName;
      self.url2 += $rootScope.user;
    $http.get(self.url2).success(function(data)
    {
      self.Recgames=data;
    });

  });

  });



