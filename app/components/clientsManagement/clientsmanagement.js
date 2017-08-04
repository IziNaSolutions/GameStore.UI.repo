'use strict';

/**
 * @ngdoc function
 * @name gameStoreApp.controller:ClientsmanagementCtrl
 * @description
 * # ClientsmanagementCtrl
 * Controller of the gameStoreApp
 */
angular.module('gameStoreApp')
  .controller('ClientsManagementCtrl', function (session, commonHttp, clients, $log, $location) {


    var clientsManagement = this;
    clientsManagement.baseUrl = commonHttp.GetServiceBaseURL();

    function check() {
      if (session.get().userName == 'Guest') {
        session.hideHeaders();
        $location.path('/404');
      }
    }
    check();


    clients.getUsers()
      .then(function (res) {
        $log.info("getUsers response:", res);
        clientsManagement.users = res;
      });

    clientsManagement.deleteUser = function (userName) {
      if (!userName)
        alert('you must choose a user');
      clients.deleteUser(userName)
        .then(function (res) {
          $log.info("deleteUser response:", res);
          clients.getUsers()
            .then(function (res) {
              $log.info("getUsers response:", res);
              clientsManagement.users = res;
            });

        });
    }

    clientsManagement.setAdmin = function (userName, value) {
      if (!userName) {
        alert('you must choose a user');
        return;
      }
      if (value === "set value") {
        alert('you must choose a value');
        return;
      }
      clients.setAdmin(userName, value)
        .then(function (res) {
          $log.info("setAdmin response:", res);
        });

    }

    clientsManagement.register = function () {
      $location.path('/register');
    }


  });
