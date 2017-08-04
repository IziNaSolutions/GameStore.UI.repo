'use strict';

/**
 * @ngdoc function
 * @name gameStoreApp.controller:CatalogCtrl
 * @description
 * # CatalogCtrl
 * Controller of the gameStoreApp
 */
angular.module('gameStoreApp')
  .controller('CatalogCtrl', function (commonHttp, session, $rootScope, products, $log, cart) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var catalog = this;

    catalog.baseUrl = commonHttp.GetServiceBaseURL();
    catalog.user = session.get().userName;

    products.getAllProduct()
      .then(function (res) {
        $log.info("getAllProduct response:", res);
        catalog.games = res;
        products.gamesRec(catalog.user)
          .then(function (res) {
            $log.info("gamesRec response:", res);
            catalog.Recgames = res;
          });

      });

    products.getTopFive()
      .then(function (res) {
        $log.info("getTopFive response:", res);
        catalog.topGames = res;
        products.getLastMonthItems()
          .then(function (res) {
            $log.info("getLastMonthItems response:", res);
            catalog.MonthGames = res;
          });

      });

    catalog.addToCart = function (game,amout,user) {
      cart.addToCart(game,amout,user).then(function(res){
        alert('one unit of game '+game+' was added to cart\n If you want to edit to amount in cart please enter your cart');
      })
      ;
    }

  });











