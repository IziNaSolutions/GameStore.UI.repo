'use strict';

/**
 * @ngdoc function
 * @name gameStoreApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gameStoreApp
 */
angular.module('gameStoreApp')
  .controller('MainCtrl', function ($rootScope, $location, session, $log) {

    //////////// init main /////////////

    var main = this;

    $rootScope.user = session.get();
    $log.info('mainCtrl.$rootScope.user:', $rootScope.user);

    if ($rootScope.menu === undefined) {

      $rootScope.menu = [{
          label: 'Home',
          route: '#/',
          roles: ['guest', 'user', 'admin']
        },
        {
          label: 'Login',
          route: '#/login',
          roles: ['guest']
        },
        {
          label: 'Cart',
          route: '#/cart',
          roles: ['user', 'admin']
        },
        {
          label: 'Register',
          route: '#/register',
          roles: ['guest']
        },
        {
          label: 'About',
          route: '#/about',
          roles: ['guest', 'user', 'admin']
        },
        {
          label: 'Catalog',
          route: '#/catalog',
          roles: ['guest', 'user', 'admin'],
          controller: 'CatalogCtrl'
          
          
        },
      ];

      $rootScope.menuActive = '/';
    }

    $rootScope.$on('$routeChangeSuccess', function (e, curr, prev) {
      $rootScope.menuActive = $location.path();

      // $log.debug("user:", $rootScope.user);
      // $log.debug('e:', e);
      // $log.debug('curr:', curr);
      // $log.debug('prev:', prev);
    });

    /* log functions: */
    /*
    $log.info("info");
    $log.debug("debug");
    $log.warn("warn");
    $log.error("error");
    */
  });
