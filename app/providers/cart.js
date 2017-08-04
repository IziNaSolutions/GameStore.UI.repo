'use strict';

/**
 * @ngdoc service
 * @name gameStoreApp.cart
 * @description
 * # cart
 * Service in the gameStoreApp.
 */
angular.module('gameStoreApp')
    .service('cart', function(commonHttp, $log) {

        ///////////// Initiate ///////////

        ///////////// Private Methods //////////


        //////////// Public Methods ////////////


        var getCartInfo = function(userName) {

            return commonHttp.httpCall(
                'GET',
                '/cart',
                '/getCartInfo',
                null, [{
                    name: 'userName',
                    value: userName
                }]

            ).then(function(response) {
                return response.data;
            });
        };

        var GetServiceBaseURL = function() {
            return commonHttp.GetServiceBaseURL();
        }

        var addToCart = function(gameName, amount, userName) {
            $log.debug('in cart.addToCart( ' + userName + ', ' + gameName + ', ' + amount + ' )');

            return commonHttp.httpCall(
                'POST',
                '/cart',
                '/addToCart', {
                    userName: userName,
                    gameName: gameName,
                    amount: amount
                },
                null
            ).then(function(response) {
                return response.data;
            });
        };

        var updateItemAmountAtCart = function(gameName, amount, userName) {
            if (amount === 0) {
                return commonHttp.httpCall(
                    'DELETE',
                    '/cart',
                    '/deleteItemFromCart', {
                        userName: userName,
                        gameName: gameName,
                    },
                    null
                ).then(function(response) {
                    return response.data;
                });
            } else {
                return commonHttp.httpCall(
                    'PUT',
                    '/cart',
                    '/updateItemAmountAtCart', {
                        userName: userName,
                        gameName: gameName,
                        amount: amount,
                    },
                    null
                ).then(function(response) {
                    return response.data;
                });
            }
        };

        var API = {
            getCartInfo: getCartInfo,
            addToCart: addToCart,
            updateItemAmountAtCart: updateItemAmountAtCart,
            GetServiceBaseURL: GetServiceBaseURL,
        };

        return API;



    });