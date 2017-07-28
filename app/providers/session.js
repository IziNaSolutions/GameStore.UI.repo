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

    var _cookieKey = 'GameStoreUser';

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
     *      use the $cookies provider to store the user object
     *      as a cookie at the client computer.
     * 
     * @return {string} cookie key name
     * 
     * @param {user} user 
     */
    function remember(user) {

      var currentDate = new Date(Date.now());
      $log.info('current Date:', currentDate);

      var expiration = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDay() + 1);

      $cookies.putObject(
        _cookieKey,
        user, {
          expires: expiration,
        }
      );

      $log.info('session.remember user:', user);
      $log.info('session.remember expiration date:', expiration);
      $log.info('session.remember cookie key:', _cookieKey);
    }

    /**
     * @public
     * @desc
     * 
     *  TODO - Amit
     *  
     * @return {user} current session
     */
    function get() {
      var storedUser = null;

      storedUser = $cookies.getObject(_cookieKey);
      $log.debug('stored cookie:', storedUser);

      if (!$rootScope.isConnected && storedUser !== null && storedUser !== undefined) {
        $rootScope.user = storedUser;
        $rootScope.user.isConnected = true;
        $log.debug('is session.get() -> took cookie');
      }

      $log.info('in session.get()', $rootScope.user);

      return $rootScope.user;
    }

    /**
     * @public
     * 
     * @desc
     *      logging the user out - delete cookie
     */
    function logout() {

      $rootScope.user = {
        isConnected: false,
        role: 'guest',
        userName: 'Guest',
      };

      // TODO - amit to test - see if exception not thrown here if cookie not exists...
      $cookies.remove(_cookieKey);

    }


    // API
    var API = {
      get: get,
      remember: remember,
      connect: connect,
      logout: logout,
    };

    //////// root scope methods publish //////

    $rootScope.logout = logout;
    $rootScope.get = get;

    ////////////// DONE ////////////////
    return API;

  });