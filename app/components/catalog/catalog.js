'use strict';

/**
 * @ngdoc function
 * @name gameStoreApp.controller:CatalogCtrl
 * @description
 * # CatalogCtrl
 * Controller of the gameStoreApp
 */
angular.module('gameStoreApp')
  .controller('CatalogCtrl', function (commonHttp, session, $rootScope, products, $log, cart, ngDialog) {
    
    var catalog = this;
    catalog.baseUrl = commonHttp.GetServiceBaseURL();

    catalog.user = session.get().userName;
    catalog.detailedGame = "";
    
    catalog.showProduct = function (gameName) {
      products.getGame(gameName)
      .then(function (res) {
       $log.info("getGame response:", res);
        catalog.detailedGame = res["0"];                
      }
      );      
    };

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

    catalog.addToCart = function (game, amout, user) {
      cart.addToCart(game, amout, user).then(function (res) {
        alert('one unit of game ' + game + ' was added to cart\n If you want to edit to amount in cart please enter your cart');
      });
    }

  });











