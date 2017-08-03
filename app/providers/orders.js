'use strict';

/**
 * @ngdoc service
 * @name gameStoreApp.orders
 * @description
 * # orders
 * Service in the gameStoreApp.
 */
angular.module('gameStoreApp')
    .service('orders', function(commonHttp, $log) {

        ///////////// Initiate ///////////

        ///////////// Private Methods //////////


        //////////// Public Methods ////////////

        var confirmNewOrder = function(userName, currency, shipDate) {

            return commonHttp.httpCall(
                'PUT',
                '/orders',
                '/confirmNewOrder', {
                    userName: userName,
                    currency: currency,
                    shipDate: shipDate
                },
                null
            ).then(function(response) {
                return response.data;
            });
        };



        var getPastOrders = function(userName) {
            return commonHttp.httpCall(
                'GET',
                '/orders',
                '/getUserOrders',
                null, [{
                    name: 'userName',
                    value: userName
                }]

            ).then(function(response) {
                return response.data;
            });
        };

        var API = {
            confirmNewOrder: confirmNewOrder,
            getPastOrders: getPastOrders,
        };

        return API;


    });