'use strict';

/**
 * @ngdoc service
 * @name gameStoreApp.register
 * @description
 * # register
 * Service in the gameStoreApp.
 */
angular.module('gameStoreApp')
  .service('registerService', function (commonHttp,$location) {
    // AngularJS will instantiate a singleton by calling "new" on this function


    var registerNewUser = function (userName,password,firstName,lastName,country,address,phone,ansFirstQ,ansSecondQ,categories){
      return commonHttp.httpCall(
        'POST',
        '/users',
        '/register', {
          userName : userName,
          password : password,
          firstName : firstName,
          lastName : lastName,
          country : country,
          address : address,
          phone : phone,
          ansFirstQ : ansFirstQ,
          ansSecondQ : ansSecondQ,
          categories : categories
        },null
      ).then(function (response) {
        alert('Registration completed!\n Now you can log in')
        $location.path('/login')
        return response.data;
      });
    }   

    var API = {
            registerNewUser: registerNewUser            
        };

    return API;
  });
