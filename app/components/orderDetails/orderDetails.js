'use strict';

/**
 * @ngdoc function
 * @name gameStoreApp.controller:OederdetailsCtrl
 * @description
 * # OrderDetailsCtrl
 * Controller of the gameStoreApp
 */
angular.module('gameStoreApp')
    .controller('OrderDetailsCtrl', function(orders, $routeParams, session, $log) {
        var orderDetails = this;

        orderDetails.orderID = $routeParams.orderID;
        orderDetails.order = {};

        $log.info('orderID:', orderDetails.orderId)


        // TODO - fixme
        function getOrderGames() {
            if (orderDetails.orderID !== undefined) {
                orders.getOrderGames(orderDetails.orderID).then(function(res) {
                    orderDetails.order = res;
                });
            }
        };




    });