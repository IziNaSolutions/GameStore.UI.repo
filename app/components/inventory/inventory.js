'use strict';

/**
 * @ngdoc function
 * @name gameStoreApp.controller:InventoryCtrl
 * @description
 * # InventoryCtrl
 * Controller of the gameStoreApp
 */
angular.module('gameStoreApp')
  .controller('InventoryCtrl', function (session,commonHttp, products, $log, $location) {
    
    var inventory = this;
    inventory.baseUrl = commonHttp.GetServiceBaseURL();

    function check() {
      if (session.get().userName == 'Guest') {
        session.hideHeaders();
        $location.path('/404');
      }
    }
    check();

    products.getAllProduct()
      .then(function (res) {
        $log.info("getAllProduct response:", res);
        inventory.games = res;
      });

    inventory.getStyle = function (amount) {
      if (amount < 4) {
        console.log(amount);
        return { 'color': 'red' };
      }
    }

    inventory.updateAmount = function (gameName, StokeAmount) {
      if(!gameName)
      alert('you must choose a game');      
      if(!StokeAmount || StokeAmount<0 || StokeAmount>100)
      alert('please choose amount bigger then zero and less then 100');
      products.updateAmount(gameName, StokeAmount)
        .then(function (res) {
          $log.info("updateAmount response:", res);
          products.getAllProduct()
            .then(function (res) {
              $log.info("getAllProduct response:", res);
              inventory.games = res;
            });
          //inventory.games = res;                               
        });
    }

  });
