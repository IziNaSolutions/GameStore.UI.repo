'use strict';

/**
 * @ngdoc service
 * @name gameStoreApp.products
 * @description
 * # products
 * Service in the gameStoreApp.
 */
angular.module('gameStoreApp')
  .service('products', function (commonHttp,$log) {

    

    var getAllProduct = function (){
      return commonHttp.httpCall(
        'GET',
        '/games',
        '/getAll_Items', {
        },
        null
      ).then(function (response) {
        return response.data;
      });

    }

    var getTopFive = function (){
      return commonHttp.httpCall(
        'GET',
        '/games',
        '/topfivegames', {
        },
        null
      ).then(function (response) {
        return response.data;
      });
    }

    var getCategories = function (){
      return commonHttp.httpCall(
        'GET',
        '/games',
        '/getCategories', {
        },
        null
      ).then(function (response) {
        return response.data;
      });
    }

    var getLastMonthItems = function (){
      return commonHttp.httpCall(
        'GET',
        '/games',
        '/getLastMonthItems', {
        },
        null
      ).then(function (response) {
        return response.data;
      });
    }

    var getGame = function (gameName){
      return commonHttp.httpCall(
        'GET',
        '/games',
        '/getItemByID', {
          gameName : gameName,
        },
        null
      ).then(function (response) {
        return response.data;
      });
    }

    var getItemsByCategory = function (category){
      return commonHttp.httpCall(
        'GET',
        '/games',
        '/getItemsByCategory', {
          category : category,
        },
        null
      ).then(function (response) {
        return response.data;
      });
    }

    var getStorage = function (){
      return commonHttp.httpCall(
        'GET',
        '/games',
        '/getStorage', {
        },
        null
      ).then(function (response) {
        return response.data;
      });
    }

    var updateAmount = function (){
      return commonHttp.httpCall(
        'POST',
        '/games',
        '/updateAmount', {
          gameName : gameName,
          StokeAmount : StokeAmount,
        },
        null
      ).then(function (response) {
        return response.data;
      });
    }

    var addGame = function (gameName,desc,picPath,publisher,price,stokeAmount,category){
      return commonHttp.httpCall(
        'POST',
        '/games',
        '/addGame', {
          gameName : gameName,
          desc : desc,
          picPath : picPath,
          publisher : publisher,
          price : price,
          stokeAmount : stokeAmount,
          category : category,
        },
        null
      ).then(function (response) {
        return response.data;
      });
    }

    var gamesRec = function (user){
      return commonHttp.httpCall(
        'GET',
        '/users',
        '/getRecomandation',
        null,[{
                    name: 'userName',
                    value: user
                }]
      ).then(function (response) {
        return response.data;
      });
    }


    var deleteGame = function (gameName){
      return commonHttp.httpCall(
        'DELETE',
        '/games',
        '/deleteGame', {
          gameName : gameName,          
        },
        null
      ).then(function (response) {
        return response.data;
      });
    }

    var API = {
            getAllProduct: getAllProduct,
            getTopFive: getTopFive,
            getCategories: getCategories,
            getLastMonthItems: getLastMonthItems,
            getGame: getGame,
            getItemsByCategory: getItemsByCategory,
            getStorage: getStorage,
            updateAmount: updateAmount,
            addGame: addGame,
            gamesRec:gamesRec,
            deleteGame: deleteGame,
        };

    return API;
    


    
    
    // AngularJS will instantiate a singleton by calling "new" on this function
  });
