'use strict';

/**
 * @ngdoc function
 * @name gameStoreApp.controller:ClientsmanagementCtrl
 * @description
 * # ClientsmanagementCtrl
 * Controller of the gameStoreApp
 */
angular.module('gameStoreApp')
  .controller('ClientsManagementCtrl', function (commonHttp, clients,$log,$location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var clientsManagement = this;
    clientsManagement.baseUrl = commonHttp.GetServiceBaseURL();

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

    clientsManagement.register = function (){
      $location.path('/register');
    }


  });
