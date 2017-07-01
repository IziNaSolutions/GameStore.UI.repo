'use strict';

/**
 * @ngdoc service
 * @name gameStoreApp.session
 * @description
 * # session
 * 
 *  after the user is logged in, the 'user' object is being
 *  stored at the $rootScope for later use in all of the application.
 * 
 * Service in the gameStoreApp.
 * @param $cookies
 * @param $rootScope
 */
angular.module('gameStoreApp')
  .service('session', function ($cookies, $rootScope, $log) {

    ///////////// Initiate ///////////

    if ($rootScope.user === undefined) {
      $rootScope.user = {
        isConnected: false,
        role: 'guest',
        userName: 'Guest',
      };
    }

    ///////////// Private Methods //////////


    //////////// Public Methods ////////////

    // METHODS

    /**
     * @public
     * @desc
     * 
     *    TODO - Amit
     * 
     * @param {user} user 
     *     "userName": {string},
     *     "password": {string},
     *     "firstName": {string},
     *     "lastName": {string},
     *     "country": {string - from XML file},
     *     "address": {string},
     *     "phone": {string},
     *     "ansFirstQ": {string},
     *     "ansSecondQ": {string},
     *     "categories": {string[]}
     */
    function connect(user) {
      $rootScope.user = user;
      $log.info('user: ' + user.userName + ' session is logged in', user);
    }

    /**
     * @public
     * @desc
     * 
     *  TODO - Amit
     *  
     * @return {user} current session
     */
    function getSession() {
      return $rootScope.user;
    }


    // API
    var API = {
      // TODO - Expose Public Methods
    };

    //************* DONE *************/
    return API;

  });
