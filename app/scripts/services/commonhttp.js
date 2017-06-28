'use strict';

/**
 * @ngdoc service
 * @name gameStoreApp.commonHttp
 * @description
 * # commonHttp
 * Service in the gameStoreApp.
 */
angular.module('gameStoreApp')
    .service('commonHttp', function($http, $log) {

        /********** Initiate ***********/

        /**
         * @desc
         * Server URL
         *    - getting the server URL dynamically,
         *      without causing cross-domain error.
         * @private
         */

        function GetServiceBaseURL() {
            var _ServiceBaseURL = '/';
            var _devPort = 5001;

            if (document.domain.indexOf('localhost') !== -1) {
                _ServiceBaseURL = 'http://localhost:' + _devPort + _ServiceBaseURL;
            }

            return _ServiceBaseURL;
        }

        var baseURL = new GetServiceBaseURL(); // dynamic;

        $log.info('service base url:', baseURL);

        /********** Private Methods ***********/

        /**
         * @private
         * @desc
         *      converting parameters JSON to parameters string
         * @param {object JSON} parameters parameters json object
         * @return {string} string structure: '?name1=value1&name2=value2,
         *                  case parameters === null / {}, return ''.
         */
        function parametersToString(parameters) {
            var result = '';

            for (var index = 0; index < parameters.length; index++) {
                var element = parameters[index];

                if (index === 0) {
                    result += '?';
                }

                result += element.name;
                result += '=';
                result += element.value;

                if (index < parameters.length - 1) {
                    result += '&';
                }

            } // for

            return result;
        } // function

        /********** Public Methods ***********/

        /**
         * Methods
         */

        /**
         * @public
         * @desc
         *        uses $http to send http requests to the server.
         * @param {string} method : 'POST', 'PUT', 'GET', 'DELETE'.
         * @param {string} controller
         * 
         * ... TODO add all the params...
         * 
         * 
         * @return {object} http response
         */
        var httpCall = function(method, controller, action, request, parameters) {

            var parametersString = parametersToString(parameters);

            return $http({
                    method: method,
                    url: baseURL + controller + action + (method === 'GET') ? parametersString : '',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: angular.toJson(request)
                })
                .then(function(response) {
                    $log.info("http call got response:", response);
                    return response;
                })
                .catch(function(response) {
                    $log.error('http call fail! response:', response);
                    return response;
                });
        };

        /**
         * API
         */
        var API = {
            httpCall: httpCall
        };

        /************ DONE *************/
        return API;
    });