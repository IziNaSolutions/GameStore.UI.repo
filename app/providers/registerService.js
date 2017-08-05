'use strict';

/**
 * @ngdoc service
 * @name gameStoreApp.register
 * @description
 * # register
 * Service in the gameStoreApp.
 */
angular.module('gameStoreApp')
    .service('registerService', function (commonHttp, $location,session) {
        // AngularJS will instantiate a singleton by calling "new" on this function
        var baseUrl = commonHttp.GetServiceBaseURL();
        

        var registerNewUser = function (userName, password, firstName, lastName, country, address, phone, ansFirstQ, ansSecondQ, categories) {
            return commonHttp.httpCall(
                'POST',
                '/users',
                '/register', {
                    userName: userName,
                    password: password,
                    firstName: firstName,
                    lastName: lastName,
                    country: country,
                    address: address,
                    phone: phone,
                    ansFirstQ: ansFirstQ,
                    ansSecondQ: ansSecondQ,
                    categories: categories
                }, null
            ).then(function (response) {
                alert(response.data);
                if (!session.get().isConnected) {
                    $location.path('/login');
                }
                else {$location.path('/clientsManagement');}
                return response.data;
            });
        };

        function getCountries() {
            return commonHttp.httpCall(
                'GET',
                '/xml',
                '/countries.xml',
                null, null
            ).then(function (response) {
                var x2js = new X2JS();
                var conv = x2js.xml_str2json(response.data);
                var countries = conv['Countries']['Country'];
                var display2 = Array();
                for (var i = 0; i < countries.length; i++) {
                    display2[i] = countries[i].Name;
                }
                countries = display2;
                return countries;
            });            
        }

        

        var API = {
            registerNewUser: registerNewUser,
            getCountries: getCountries,
        };

        return API;
    });