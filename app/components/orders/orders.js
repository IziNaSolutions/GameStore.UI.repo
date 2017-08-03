'use strict';

/**
 * @ngdoc function
 * @name gameStoreApp.controller:OrdersCtrl
 * @description
 * # OrdersCtrl
 * Controller of the gameStoreApp
 */
angular.module('gameStoreApp')
    .controller('OrdersCtrl', function(orders, session, $log) {
        var orderSelf = this;
        orders.empty = true;
        orderSelf.userName = session.get().userName;

        orders.getPastOrders(orderSelf.userName)
            .then(function(res) {
                $log.info("getPastOrders response:", res);
                orderSelf.allOrders = res;
                if (orderSelf.allOrders.length > 0)
                    orders.empty = false;
            });



    });