'use strict';

/**
 * @ngdoc service
 * @name gameStoreApp.auth
 * @description
 * # auth
 * Service in the gameStoreApp.
 */
angular.module('gameStoreApp')
    .service('auth', function(commonHttp) {

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
            // TODO
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
        var register = function(user) {
            // TODO
        };

        /**
         * @public
         * @desc logs out from the system
         *       # Notes: no server support yet.
         */
        var logout = function() {
            // TODO ? (no server support yet.)
            // cookie.
        };

        /**
         * API
         */
        var API = {
            login: login,
            logout: logout,
            register: register
        };

        /************* DONE *************/
        return API;
    });