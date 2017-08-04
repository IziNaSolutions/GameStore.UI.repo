'use strict';

/**
 * @ngdoc function
 * @name gameStoreApp.controller:OrdersmanagementCtrl
 * @description
 * # OrdersmanagementCtrl
 * Controller of the gameStoreApp
 */
angular.module('gameStoreApp')
    .controller('ordersManagementCtrl', function(session, orders) {

        var ordersManagement = this;
        ordersManagement.empty = false;

        orders.getAllOrders()
            .then(function(res) {
                ordersManagement.allOrders = res;
                if (ordersManagement.allOrders.length > 0)
                    ordersManagement.empty = false;

                for (var i = 0; i < ordersManagement.allOrders.length; i++) {
                    ordersManagement.allOrders[i].orderDate = new Date((new Date(ordersManagement.allOrders[i].orderDate)).getTime() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString();
                    ordersManagement.allOrders[i].shipmentDate = new Date((new Date(ordersManagement.allOrders[i].shipmentDate)).getTime() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString();
                }



            });
    });