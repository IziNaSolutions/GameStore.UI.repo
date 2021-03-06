'use strict';

/**
 * @ngdoc function
 * @name gameStoreApp.controller:CartCtrl
 * @description
 * # CartCtrl
 * Controller of the gameStoreApp
 */
angular.module('gameStoreApp')
    .controller('CartCtrl', function (cart, session, $log, $location, products) {

        /////// init /////////

        var cartSelf = this;
        cartSelf.show = false;
        cartSelf.user = session.get();
        cartSelf.empty = false;
        cartSelf.detailedGame = "";

        function check() {
            if (session.get().userName === 'Guest') {
                session.hideHeaders();
                $location.path('/404');
            }
        }
        check();

        cartSelf.baseUrl = cart.GetServiceBaseURL();

        cartSelf.total = 0;

        getCartInfo();

        function getCartInfo() {
            cartSelf.total = 0;
            cart.getCartInfo(cartSelf.user.userName)
                .then(function (res) {
                    $log.info("getCartInfo response:", res);
                    cartSelf.cartProducts = res;
                    if (cartSelf.cartProducts !== null && cartSelf.cartProducts.length > 0) {
                        for (var i = 0; i < cartSelf.cartProducts.length; i++) {
                            cartSelf.total += cartSelf.cartProducts[i].price * cartSelf.cartProducts[i].amountInCart;
                        }
                        cartSelf.show = true;
                    } else {
                        cartSelf.empty = true;
                    }
                });
        }

        cartSelf.showProduct = function (gameName) {
            products.getGame(gameName)
                .then(function (res) {
                    $log.info("getGame response:", res);
                    cartSelf.detailedGame = res["0"];
                }
                );
        };


        cartSelf.refresh = function (product) {
            if (product.amountInCart !== product.quantity) {
                cartSelf.show = false;
                cartSelf.total = 0;
                cart.updateItemAmountAtCart(product.gameName, product.quantity, cartSelf.user.userName).then(function (res) {
                    console.log(res);
                    getCartInfo();
                });
            }
        };

        cartSelf.delete = function (product) {
            cartSelf.show = false;
            cartSelf.total = 0;
            cart.updateItemAmountAtCart(product.gameName, 0, cartSelf.user.userName).then(function (res) {
                console.log(res);
                getCartInfo();
            });
        };

        cartSelf.navigateTo = function (next) {
            $location.path('/' + next);
        };






    });