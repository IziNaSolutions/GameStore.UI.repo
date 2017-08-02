'use strict';

/**
 * @ngdoc function
 * @name gameStoreApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the gameStoreApp
 */
angular.module('gameStoreApp')
    .controller('LoginCtrl', function($location, $log, auth, $rootScope, session,clients) {

        /********* init **********/

        var login = this;

        /******** models ********/

        login.message = {
            text: '',
            class: '',
            fail: false,
        };

        login.ans1 = '';
        login.ans2 = '';
        login.recPass = '';

        /********** functions ******/
        login.recoverPass = function(){
            clients.recoverPassword(login.recoverUserName,login.ans1,login.ans2).then(function(res) {
                $log.info("recoverPass response:", res);
                
                if(!res){
                    login.recPass = false;
                    if(!login.recoverUserName) {
                        alert('please fill user name in order to recover password')
                    }
                    if(!login.ans1){
                        alert('please fill firt answer in order to recover password')
                    }
                    if(!login.ans2){
                        alert('please fill second answer in order to recover password')
                    }
                    else(alert('cannot recover password please re check you entries'))
                } 
                else{login.recPass = res["0"].password; }
            });
        }

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

    // TODO: fix redirect doesn't working after login