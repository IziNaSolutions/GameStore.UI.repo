'use strict';

/**
 * @ngdoc function
 * @name gameStoreApp.controller:BillCtrl
 * @description
 * # BillCtrl
 * Controller of the gameStoreApp
 */
angular.module('gameStoreApp')
    .controller('BillCtrl', function(cart, $log, $location, session, orders) {

        var bill = this;
        bill.baseUrl = cart.GetServiceBaseURL();
        bill.dateBad = false;
        bill.userName = session.get().userName;
        bill.creditCard;
        bill.orderComplete = false;
        bill.stock = true;


        bill.date = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString();
        getCartInfo();

        bill.chooseDate = function() {
            bill.date = new Date(bill.date).toLocaleDateString();
            let today = new Date();
            let dateShipment = new Date(bill.date);
            let timeDiff = Math.abs(dateShipment.getTime() - today.getTime());
            let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
            if (diffDays < 7)
                bill.dateBad = true;
            else
                bill.dateBad = false;
        };



        function getCartInfo() {
            bill.total = 0;
            cart.getCartInfo(bill.userName)
                .then(function(res) {
                    $log.info("in Bill - getCartInfo response:", res);
                    bill.cartProducts = res;
                    if (bill.cartProducts != null && bill.cartProducts.length > 0) {
                        for (var i = 0; i < bill.cartProducts.length; i++) {
                            bill.total += bill.cartProducts[i].price * bill.cartProducts[i].amountInCart;
                            if (bill.cartProducts[i].amountInCart > bill.cartProducts[i].stock)
                                bill.stock = false;
                        }
                        bill.show = true;
                    } else {
                        bill.empty = true;
                    }
                });
        };

        bill.payment = function() {
            var regex = new RegExp("^[0-9]{16}$");
            if (!regex.test(bill.creditCard) && bill.total > 0)
                bill.total > 0 ? alert("Error: The credit cart is not according the pattern") : alert("Error: The cart is empty!")
            else if (bill.stock === false)
                alert("In some games there are not enough in stock");
            else {
                orders.confirmNewOrder(bill.userName, 'USD', bill.date).then(function(res) {
                    console.log(res.status);
                    getCartInfo();
                })
            }
        };

        bill.backToCart = function() {
            $location.path('/cart');
        };



    });