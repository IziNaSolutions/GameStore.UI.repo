'use strict';

/**
 * @ngdoc function
 * @name gameStoreApp.controller:OrdersmanagementCtrl
 * @description
 * # OrdersmanagementCtrl
 * Controller of the gameStoreApp
 */
angular.module('gameStoreApp')
    .controller('ordersManagementCtrl', function (session, orders,$location) {

        var ordersManagement = this;
        ordersManagement.empty = false;

        function check() {
            if (session.get().userName === 'Guest') {
                session.hideHeaders();
                $location.path('/404');
            }
        }
        check();

        orders.getAllOrders()
            .then(function (res) {
                ordersManagement.allOrders = res;
                if (ordersManagement.allOrders.length > 0)
                    {ordersManagement.empty = false;}

                for (var i = 0; i < ordersManagement.allOrders.length; i++) {                    
                    ordersManagement.allOrders[i].orderDate = new Date(ordersManagement.allOrders[i].orderDate).toLocaleDateString();
                    ordersManagement.allOrders[i].shipmentDate = new Date(ordersManagement.allOrders[i].shipmentDate).toLocaleDateString();
                }



            });
    });