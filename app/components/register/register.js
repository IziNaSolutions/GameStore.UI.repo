'use strict';

/**
 * @ngdoc function
 * @name gameStoreApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the gameStoreApp
 */
angular.module('gameStoreApp')
    .controller('RegisterCtrl', function (session,commonHttp, registerService) {

        var register = this;

        registerService.getCountries().then(function(res) {
           register.countries = res;
        });





        register.user = { userName: '', password: '', re_password: '', firstName: '', lastName: '', phone: '', country: '', address: '', faveGenre1: '', faveGenre2: '', firstQ: '', secondQ: '' };
        register.game = { gameName: '', desc: '', picPath: '', publisher: '', price: '', stokeAmount: '', category: '' };

        register.genres = {
            0: 'Action',
            1: 'Fantasy',
            2: 'First-person shooter',
            3: 'SPORT',
            4: 'Strategy',
            5: 'Vehicular combat'
        };

        register.reg = function () {
            var maxLength = 50;
            var _userName = register.user.userName;
            var _password = register.user.password;
            var _rePassord = register.user.re_password;
            var _firstName = register.user.firstName;
            var validation = (Math.max(_firstName.length, maxLength) === maxLength) ? true : false;
            var _lastName = register.user.lastName;
            validation = (Math.max(_lastName.length, maxLength) === maxLength) ? true : false;
            var _phone = register.user.phone;
            validation = (Math.max(_phone.length, maxLength) === maxLength) ? true : false;
            var _country = register.user.country;
            var _address = register.user.address;
            validation = (Math.max(_address.length, maxLength) === maxLength) ? true : false;
            var _firstAns = register.user.firstQ;
            validation = (Math.max(_firstAns.length, maxLength) === maxLength) ? true : false;
            var _secAns = register.user.secondQ;
            validation = (Math.max(_secAns.length, maxLength) === maxLength) ? true : false;

            if (!_userName) { window.alert('please provide 3 to 8 letters username'); return; }
            if (_rePassord !== _password) {
                window.alert("Paswword doesn't match!\n Please insert match passwords!");
                return;
            } else if (!validation) {
                window.alert("The maximum size per field is 50 characters!");
                return;
            }
            var _categories = [register.user.faveGenre1, register.user.faveGenre2];
            validation = (register.user.faveGenre1 === register.user.faveGenre2) ? false : true;
            if (!validation) {
                window.alert("Please choose different favorite genres");
                return;
            }

            var validity = function (userName, password) {
                var validCheck = !(userName.length < 3 || userName.length > 8 || !(/^[a-zA-Z]+$/.test(userName)));
                if (!validCheck) {
                    window.alert("The user name that supplied illegal\n Please insert between 3 and 8 letters!");
                    return false;
                }
                validCheck = (/^[0-9]+$/.test(_phone));
                if (!validCheck) {
                    window.alert("phone must contains digit only!");
                    return false;
                }

                validCheck = validCheck && !(password.length < 5 || password.length > 10 || !(/^[0-9a-zA-Z]+$/.test(password)));
                if (!validCheck) {
                    window.alert("The password not llegal\n Make sure the password contains at least one digit and not allowing special characters!");
                    return false;
                }
                if (!_firstName || !_lastName || !_country || !_address || !_phone || !_firstAns || !_secAns) { window.alert("please fill all the details"); return false; }
                return true;
            };

            if (!validity(_userName, _password))
                {return;}
            registerService.registerNewUser(_userName, _password, _firstName, _lastName, _country, _address, _phone, _firstAns, _secAns, _categories);
        };       

    });