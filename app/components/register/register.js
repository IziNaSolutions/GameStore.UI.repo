'use strict';

/**
 * @ngdoc function
 * @name gameStoreApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the gameStoreApp
 */
angular.module('gameStoreApp')
    .controller('RegisterCtrl', function(commonHttp, registerService, $location, $log) {

        var register = this;



        // TODO delete tests:

        // Create x2js instance with default config
        var x2js = new X2JS();

        // load file.. here
        var xmlText = "<MyRoot><test>Success</test><test2><item>val1</item><item>val2</item></test2></MyRoot>";
        var jsonObj = x2js.xml_str2json(xmlText);

        $log.info('json:', jsonObj);

        // end test


        register.user = { userName: '', password: '', re_password: '', firstName: '', lastName: '', phone: '', country: '', address: '', faveGenre1: '', faveGenre2: '', firstQ: '', secondQ: '' };

        register.genres = {
            0: 'Action',
            1: 'Fantasy',
            2: 'First-person shooter',
            3: 'SPORT',
            4: 'Strategy',
            5: 'Vehicular combat'
        }

        register.countries = {
            0: 'USA',
            1: 'Italy'
        }

        register.getCountries = function() {
            //fill countries from xml
        };




        register.reg = function() {
            let maxLength = 50;
            let _userName = register.user.userName;
            let _password = register.user.password;
            let _rePassord = register.user.re_password;
            let _firstName = register.user.firstName;
            let validation = (Math.max(_firstName.length, maxLength) === maxLength) ? true : false
            let _lastName = register.user.lastName;
            validation = (Math.max(_lastName.length, maxLength) === maxLength) ? true : false
            let _phone = register.user.phone;
            validation = (Math.max(_phone.length, maxLength) === maxLength) ? true : false
            let _country = register.user.country;
            let _address = register.user.address;
            validation = (Math.max(_address.length, maxLength) === maxLength) ? true : false
            let _firstAns = register.user.firstQ;
            validation = (Math.max(_firstAns.length, maxLength) === maxLength) ? true : false
            let _secAns = register.user.secondQ;
            validation = (Math.max(_secAns.length, maxLength) === maxLength) ? true : false

            if (!_userName) { alert('please provide 3 to 8 letters username'); }
            if (_rePassord != _password) {
                alert("Paswword doesn't match!\n Please insert match passwords!")
                return;
            } else if (!validation) {
                alert("The maximum size per field is 50 characters!")
                return;
            }
            let _categories = [register.user.faveGenre1, register.user.faveGenre2];
            validation = (register.user.faveGenre1 === register.user.faveGenre2) ? false : true
            if (!validation) {
                alert("Please choose different favorite genres")
                return;
            }

            var validity = function(userName, password) {
                let validCheck = !(userName.length < 3 || userName.length > 8 || !(/^[a-zA-Z]+$/.test(userName)));
                if (!validCheck) {
                    alert("The user name that supplied illegal\n Please insert between 3 and 8 letters!")
                    return false;
                }
                validCheck = (/^[0-9]+$/.test(_phone));
                if (!validCheck) {
                    alert("phone must contains digit only!")
                    return false;
                }

                validCheck = validCheck && !(password.length < 5 || password.length > 10 || !(/^[0-9a-zA-Z]+$/.test(password)));
                if (!validCheck) {
                    alert("The password not llegal\n Make sure the password contains at least one digit and not allowing special characters!")
                    return false;
                }
                if (!_firstName || !_lastName || !_country || !_address || !_phone || !_firstAns || !_secAns) { alert("please fill all the details"); return false; }
                return true;
            }

            if (!validity(_userName, _password))
                return;
            registerService.registerNewUser(_userName, _password, _firstName, _lastName, _country, _address, _phone, _firstAns, _secAns, _categories);
        }


    });