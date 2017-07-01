'use strict';

/**
 * @ngdoc function
 * @name gameStoreApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the gameStoreApp
 */
angular.module('gameStoreApp')
    .controller('LoginCtrl', function($location, $log, auth, $rootScope, session) {

        /********* init **********/

        var login = this;

        /******** models ********/

        login.message = {
            text: '',
            class: '',
            fail: false,
        };

        /********** functions ******/

        login.submit = function() {

            login.message.text = "";
            login.message.class = 'label label-default';
            login.fail = false;

            auth.login(login.inputUserName, login.inputPassword)
                .then(function(result) {

                    if(!result){
                        login.message = {
                            text: 'connection to the server fail, please check your internet connection',
                            class: 'label label-danger',
                        };

                        return;
                    }

                    if (result.success) {

                        $rootScope.user.isConnected = true;
                        $rootScope.user.userName = result.userName;
                        $rootScope.user.role = result.type;
                        $rootScope.user.lastTime = result.lastTime;

                        // Example:
                        login.message.text = result.formattedString;
                        login.message.class = 'label label-success';

                        login.fail = false;
                        $log.info($rootScope.user);

                        // remember me!
                        if (login.remember === true) {
                            session.remember($rootScope.user);
                        }

                        // navigate after login to homepage
                        $location.path('/catalog');

                    } else {
                        login.message.text = result;
                        login.message.class = 'label label-warning';
                    } // if result.success

                }); // auth.login

        }; // login.submit

    }); // angular.controller