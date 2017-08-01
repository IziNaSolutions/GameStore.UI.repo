'use strict';

/**
 * @ngdoc function
 * @name gameStoreApp.controller:CatalogCtrl
 * @description
 * # CatalogCtrl
 * Controller of the gameStoreApp
 */
angular.module('gameStoreApp')
  .controller('CatalogCtrl', function (commonHttp,session,$rootScope, products, $log) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var catalog = this;

    catalog.baseUrl = commonHttp.GetServiceBaseURL();
    catalog.user = session.get().userName;
    
    products.getAllProduct()
            .then(function(res) {
                $log.info("getAllProduct response:", res);
                catalog.games = res;                
                products.gamesRec(catalog.user)                
                .then(function(res)
                {
                  $log.info("gamesRec response:", res);
                  catalog.Recgames = res;                  
                });

            });
  
      });
  





