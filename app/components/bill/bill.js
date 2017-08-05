'use strict';

/**
 * @ngdoc function
 * @name gameStoreApp.controller:BillCtrl
 * @description
 * # BillCtrl
 * Controller of the gameStoreApp
 */
angular.module('gameStoreApp')
    .controller('BillCtrl', function (cart, $log, $location, session, orders) {


        var bill = this;

        bill.currency = "USD";
        bill.factor = 1;
        bill.units = '$';
        bill.baseUrl = cart.GetServiceBaseURL();
        bill.dateBad = false;
        bill.userName = session.get().userName;
        bill.creditCard = "";
        bill.orderComplete = false;
        bill.stock = true;



        function check() {
            if (session.get().userName === 'Guest') {
                session.hideHeaders();
                $location.path('/404');
            }
        }

        check();

        bill.date = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString();
        getCartInfo();

        bill.chooseDate = function () {
            bill.date = new Date(bill.date).toLocaleDateString();
            var today = new Date();
            var dateShipment = new Date(bill.date);
            var timeDiff = Math.abs(dateShipment.getTime() - today.getTime());
            var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
            if (diffDays < 7)
            { bill.dateBad = true; }
            else
            { bill.dateBad = false; }
        };



        bill.getCartInfo = function () {
            bill.total = 0;
            cart.getCartInfo(bill.userName)
                .then(function (res) {
                    $log.info("in Bill - getCartInfo response:", res);
                    bill.cartProducts = res;
                    if (bill.cartProducts !== null && bill.cartProducts.length > 0) {
                        for (var i = 0; i < bill.cartProducts.length; i++) {
                            bill.total += bill.cartProducts[i].price * bill.cartProducts[i].amountInCart;
                            if (bill.cartProducts[i].amountInCart > bill.cartProducts[i].stock)
                            { bill.stock = false; }
                        }
                        if (bill.currency === 'NIS') {
                            bill.factor = 3.8;
                            bill.units = 'NIS';
                        }
                        bill.show = true;
                    } else {
                        bill.empty = true;
                    }
                });
        };
        bill.setFactor = function (currency) {
            if (currency === 'NIS') {
                bill.factor = 3.8;
                bill.units = 'NIS';
            } else {
                bill.factor = 1;
                bill.units = '$';
            }
        };
        bill.payment = function () {
            var regex = new RegExp("^[0-9]{16}$");
            if (!regex.test(bill.creditCard) && bill.total > 0)
                {bill.total > 0 ? window.alert("Error: The credit cart is not according the pattern") : window.alert("Error: The cart is empty!")}
            else if (bill.stock === false)
                {window.alert("In some games there are not enough in stock");}
            else if (session.get().userName !== 'Guest') {
                orders.confirmNewOrder(bill.userName, bill.currency, bill.date).then(function (res) {
                    console.log(res);
                    orders.getPastOrders(bill.userName).then(function (res) {

                        bill.orderID = res[res.length - 1].orderID;
                        bill.orderComplete = true;
                    });
                    //getCartInfo();

                });
            } else {
                session.hideHeaders();
                $location.path('/404');
            }
        };

        bill.backToCart = function () {
            $location.path('/cart');
        };

        bill.getToOrders = function () {
            $location.path('/orders');
        };


        bill.calculate = function () { };


    });