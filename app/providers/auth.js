'use strict';

/**
 * @ngdoc service
 * @name gameStoreApp.auth
 * @description
 * # auth
 * Service in the gameStoreApp.
 */
angular.module('gameStoreApp')
    .service('auth', function(commonHttp, $log) {

        /********** Initiate ***********/


        /********** Private Methods ***********/


        /********** Public Methods ***********/

        // METHODS

        /**
         * @public
         * @desc login to the server
         *        - if 'remember-me' on, saving to cookie.
         *        - navigate to homepage
         * @param {string} username
         * @param {string} password
         */
        var login = function(username, password) {

            $log.debug('in auth.login(' + username + ', ' + password + ')');

            return commonHttp.httpCall(
                'POST',
                '/users',
                '/login', {
                    userName: username,
                    password: password,
                },
                null
            ).then(function(response) {
                return response.data;
            });
        };

        /**
         * @public
         * @desc sign in user to the server,
         *        - the server creates a new user and store it (to it's DB)
         *        > the controller navigates to login
         * @param {user} user
         *     "userName": {string},
         *     "password": {string},
         *     "firstName": {string},
         *     "lastName": {string},
         *     "country": {string - from XML file},
         *     "address": {string},
         *     "phone": "0506543210",
         *     "ansFirstQ": "DOG",
         *     "ansSecondQ": "MILANO",
         *     "categories": ["SPORT","Action"]
         * 
         * @return {boolean} true case success
         */

        /**
         * @public
         * @desc logs out from the system
         *       # Notes: no server support yet.
         */

        /**
         * API
         */
        var API = {
            login: login,
        };

        /************* DONE *************/
        return API;
    });