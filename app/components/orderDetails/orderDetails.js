'use strict';

/**
 * @ngdoc function
 * @name gameStoreApp.controller:OederdetailsCtrl
 * @description
 * # OrderDetailsCtrl
 * Controller of the gameStoreApp
 */
angular.module('gameStoreApp')
    .controller('OrderDetailsCtrl', function(orders, $routeParams, session, $log, $location) {
        var orderDetails = this;

        orderDetails.orderID = $routeParams.orderID;
        orderDetails.userName = session.get().userName;
        orderDetails.order = {};
        orderDetails.show = false;

        if (session.get().userName === 'Guest' && session.get().role !== 'admin') {
            session.hideHeaders();
            $location.path('/404');
        }


        orders.getPastOrders(orderDetails.userName)
            .then(function(res) {
                $log.info("getPastOrders response:", res);
                orderDetails.allOrders = res;
                if (session.get().role === 'admin') {
                    orderDetails.show = true;
                    getOrderGames();
                } else {
                    for (var i = 0; i < orderDetails.allOrders.length; i++) {
                        if (orderDetails.allOrders[i].orderID === orderDetails.orderID)
                            {orderDetails.show = true;}
                    }
                    if (orderDetails.show === false) {
                        session.hideHeaders();
                        $location.path('/404');
                    } else {
                        getOrderGames();
                    }
                }


            });




        function getOrderGames() {
            if (orderDetails.orderID !== undefined) {
                orders.getOrderGames(orderDetails.orderID).then(function(res) {
                    orderDetails.order = res;
                });
            }
        }




    });