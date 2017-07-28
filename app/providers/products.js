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
        'get',
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
        'get',
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
        'get',
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
        'get',
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
        'get',
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
        'get',
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
        'get',
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
        'post',
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
        'post',
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


    var deleteGame = function (gameName){
      return commonHttp.httpCall(
        'delete',
        '/games',
        '/deleteGame', {
          gameName : gameName,          
        },
        null
      ).then(function (response) {
        return response.data;
      });
    }


    


    
    
    // AngularJS will instantiate a singleton by calling "new" on this function
  });
