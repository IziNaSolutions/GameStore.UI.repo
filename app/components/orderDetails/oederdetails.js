'use strict';

/**
 * @ngdoc function
 * @name gameStoreApp.controller:OederdetailsCtrl
 * @description
 * # OederdetailsCtrl
 * Controller of the gameStoreApp
 */
angular.module('gameStoreApp')
    .controller('OederdetailsCtrl', function(orders, $rootScope) {
        var orderDetails = this;

        orderDetails.orderId = $rootScope.orderID;
        orderDetails.order;


        function getOrderGames() {
            if (orderDetails.orderId !== undefined) {
                orders.getOrderGames(orderDetails.orderId).then(function(res) {
                    orderDetails.order = res;
                });
            }
        };




    });