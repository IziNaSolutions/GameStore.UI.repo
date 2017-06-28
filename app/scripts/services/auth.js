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

        /**
         * API
         */

        var API = {
            // TODO
        };

        // METHODS

        /**
         * @desc login to the server
         *        - if 'remember-me' on, saving to cookie.
         * @param {string} username
         * @param {string} password
         * 
         * @return {void}
         */
        var login = function(username, password) {
            // TODO
        }

        var register = function(params) {
            // TODO
        }

        var logout = function(params) {
            // TODO ? (no server support yet.)
            // cookie.
        }

        /************* DONE *************/
        return API;
    });