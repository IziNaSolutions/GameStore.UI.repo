'use strict';

/**
 * @ngdoc function
 * @name gameStoreApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gameStoreApp
 */
angular.module('gameStoreApp')
    .controller('MainCtrl', function($rootScope, $location, session, $log) {

        //////////// init main /////////////

        var main = this;

        $rootScope.user = session.get();
        $log.info('mainCtrl.$rootScope.user:', $rootScope.user);



        /* log functions: */
        /*
        $log.info("info");
        $log.debug("debug");
        $log.warn("warn");
        $log.error("error");
        */
    });