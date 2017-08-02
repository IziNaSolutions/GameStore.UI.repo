'use strict';

/**
 * @ngdoc service
 * @name gameStoreApp.clients
 * @description
 * # clients
 * Service in the gameStoreApp.
 */
angular.module('gameStoreApp')
  .service('clients', function (commonHttp) {
    recoverPassword

    var recoverPassword = function (userName,ans1,ans2){
      return commonHttp.httpCall(
        'GET',
        '/users',
        '/recoverPassword', null,
                    [{
                    name: 'userName',
                    value: userName
                },
                {
                    name: 'ansfirst',
                    value: ans1
                },
                {
                    name: 'ansSec',
                    value: ans2
                }]
        
      ).then(function (response) {
        return response.data;
      });
    }

    var API = {
      recoverPassword: recoverPassword
    }
    return API;

  });
