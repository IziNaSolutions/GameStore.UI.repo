'use strict';

/**
 * @ngdoc service
 * @name gameStoreApp.register
 * @description
 * # register
 * Service in the gameStoreApp.
 */
angular.module('gameStoreApp')
    .service('registerService', function(commonHttp, $location, $http) {
        // AngularJS will instantiate a singleton by calling "new" on this function
        var baseUrl = commonHttp.GetServiceBaseURL();


        var registerNewUser = function(userName, password, firstName, lastName, country, address, phone, ansFirstQ, ansSecondQ, categories) {
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
            ).then(function(response) {
                alert('Registration completed!\n Now you can log in')
                $location.path('/login')
                return response.data;
            });
        }

        function getCountries() {
            return commonHttp.httpCall(
                'GET',
                '/xml',
                '/countries.xml',
                null, null
            ).then(function(response) {
                var x2js = new X2JS();
                let conv = x2js.xml_str2json(response.data);
                let countries = conv['Countries']['Country'];
                let display2 = Array();
                for (let i = 0; i < countries.length; i++) {
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