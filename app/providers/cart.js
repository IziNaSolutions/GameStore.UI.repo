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

        var addToCart = function(gameName, amount, userName) {
            $log.debug('in cart.addToCart( ' + userName + ', ' + gameName + ', ' + amount + ' )');

            return commonHttp.httpCall(
                'POST',
                '/cart',
                '/addToCart', {
                    userName: userName,
                    game: gameName,
                    amount: amount
                },
                null
            ).then(function(response) {
                return response.data;
            });
        };

        var API = {
            getCartInfo: getCartInfo,
            addToCart: addToCart,
        };

        return API;



    });