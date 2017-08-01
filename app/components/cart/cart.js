'use strict';

/**
 * @ngdoc function
 * @name gameStoreApp.controller:CartCtrl
 * @description
 * # CartCtrl
 * Controller of the gameStoreApp
 */
angular.module('gameStoreApp')
    .controller('CartCtrl', function(cart, session, $log, commonHttp) {

            /////// init /////////

            var cartSelf = this;

            cartSelf.user = session.get();

            cartSelf.baseUrl = commonHttp.GetServiceBaseURL();

            // cartSelf.cartProducts = [{
            //         gameName: 'fifa17',
            //         price: 10,
            //         amountInCart: 2,
            //         image: '/images/' + 'fifa17.jpg',
            //     },
            //     {
            //         gameName: 'fifa17',
            //         price: 10,
            //         amountInCart: 2,
            //         image: '/images/' + 'fifa17.jpg',
            //     },
            // ];

            cartSelf.total = 0;

            cart.getCartInfo(cartSelf.user.userName)
                .then(function(res) {
                    $log.info("getCartInfo response:", res);
                    cartSelf.cartProducts = res;

                    for (var i = 0; i < cartSelf.cartProducts.length; i++) {
                        cartSelf.total += cartSelf.cartProducts[i].price * cartSelf.cartProducts[i].amountInCart;
                    }

                });
            cartSelf.refresh = function() {
                cartSelf.getCartInfo();
            };

        }


    });