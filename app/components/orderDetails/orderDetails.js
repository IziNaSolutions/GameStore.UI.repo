'use strict';

/**
 * @ngdoc function
 * @name gameStoreApp.controller:OederdetailsCtrl
 * @description
 * # OrderDetailsCtrl
 * Controller of the gameStoreApp
 */
angular.module('gameStoreApp')
    .controller('OrderDetailsCtrl', function(orders, $routeParams, session, $log, $location, $rootScope) {
        var orderDetails = this;

        orderDetails.orderID = $routeParams.orderID;
        orderDetails.userName = session.get().userName;
        orderDetails.order = {};
        orderDetails.show = false;

        $log.info('orderID:', orderDetails.orderId)

        orders.getPastOrders(orderDetails.userName)
            .then(function(res) {
                $log.info("getPastOrders response:", res);
                orderDetails.allOrders = res;
                for (var i = 0; i < orderDetails.allOrders.length; i++) {
                    if (orderDetails.allOrders[i].orderID == orderDetails.orderID)
                        orderDetails.show = true;
                }
                if (orderDetails.show == false) {
                    $rootScope.showHeaders = false;
                    $location.path('/404');
                }



            });


        // TODO - fixme
        function getOrderGames() {
            if (orderDetails.orderID !== undefined) {
                orders.getOrderGames(orderDetails.orderID).then(function(res) {
                    orderDetails.order = res;
                });
            }
        };




    });