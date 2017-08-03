'use strict';

/**
 * @ngdoc function
 * @name gameStoreApp.controller:OrdersCtrl
 * @description
 * # OrdersCtrl
 * Controller of the gameStoreApp
 */
angular.module('gameStoreApp')
    .controller('OrdersCtrl', function(orders, session, $log, $location, ngDialog, $rootScope) {

        var ordersSelf = this;

        ordersSelf.empty = true;
        ordersSelf.userName = session.get().userName;
        ordersSelf.baseUrl = orders.GetServiceBaseURL();

        orders.getPastOrders(ordersSelf.userName)
            .then(function(res) {
                $log.info("getPastOrders response:", res);
                ordersSelf.allOrders = res;
                if (ordersSelf.allOrders.length > 0)
                    ordersSelf.empty = false;

                for (var i = 0; i < ordersSelf.allOrders.length; i++) {
                    ordersSelf.allOrders[i].orderDate = new Date((new Date(ordersSelf.allOrders[i].orderDate)).getTime() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString();
                    ordersSelf.allOrders[i].shipmentDate = new Date((new Date(ordersSelf.allOrders[i].shipmentDate)).getTime() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString();
                }



            });

        ordersSelf.backToCtalog = function() {
            $location.path('/catalog');
        };


        ordersSelf.clickToOpen = function(orderId) {
            $rootScope.orderID = orderId;
            console.log(orderId);
            ngDialog.open({ template: ordersSelf.baseUrl + 'order_details.html', className: 'ngdialog-theme-default' });
        };

    });