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
    

    var recoverPassword = function (userName, ans1, ans2) {
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
    };

    var getUsers = function () {
      return commonHttp.httpCall(
        'GET',
        '/users',
        '/getUsers', null, null

      ).then(function (response) {
        return response.data;
      });
    };

    var deleteUser = function (userName) {
      return commonHttp.httpCall(
        'DELETE',
        '/users',
        '/deleteUser',
        {
          userName: userName,
        }, null
      ).then(function (response) {
        //alert(userName + ' deleted successfully and list will be refreshed');
        return response.data;
      });
    };

    var setAdmin = function (userName, value) {
      return commonHttp.httpCall(
        'PUT',
        '/users',
        '/setAdmin',
        {
          userName: userName,
          value: parseInt(value),
        }, null
      ).then(function (response) {
        return response.data;
      });
    };







    var API = {
      recoverPassword: recoverPassword,
      deleteUser: deleteUser,
      getUsers: getUsers,
      setAdmin: setAdmin

    };
    return API;

  });
