'use strict';

/**
 * @ngdoc function
 * @name gameStoreApp.controller:GamesmanagementCtrl
 * @description
 * # GamesmanagementCtrl
 * Controller of the gameStoreApp
 */
angular.module('gameStoreApp')
  .controller('GamesManagementCtrl', function (session,commonHttp, products,$log,$location) {
    

    var gamesManagement = this;
    gamesManagement.baseUrl = commonHttp.GetServiceBaseURL();
    gamesManagement.game = { gameName: '', desc: '', picPath: '', publisher: '', price: '', stokeAmount: '', category: ''};

    function check() {
      if (session.get().userName === 'Guest') {
        session.hideHeaders();
        $location.path('/404');
      }
    }
    check();

    gamesManagement.genres = {
            0: 'Action',
            1: 'Fantasy',
            2: 'First-person shooter',
            3: 'SPORT',
            4: 'Strategy',
            5: 'Vehicular combat'
        };

    products.getAllProduct()
      .then(function (res) {
        $log.info("getAllProduct response:", res);
        gamesManagement.games = res;        
      });

    gamesManagement.deleteGame = function (gameName) {
      if (!gameName)
        {window.alert('you must choose a game'); 
        return; 
      }
      products.deleteGame(gameName)
        .then(function (res) {          
          $log.info("deleteGame response:", res);
          products.getAllProduct()
            .then(function (res) {
              $log.info("getAllProduct response:", res);
              gamesManagement.games = res;
            });
                                       
        });
    };
    gamesManagement.register = function() {
      $location.path('/gameRegister');
    };

    gamesManagement.addGame = function (){
      gamesManagement.regGame();      
    };

    gamesManagement.regGame = function() {
            var maxLength = 50;
            var _gameName = gamesManagement.game.gameName;
            var _desc = gamesManagement.game.desc;
            var validation = (Math.max(_desc.length, maxLength) === maxLength) ? true : false;
            var _picPath = gamesManagement.game.picPath;
            var _publisher = gamesManagement.game.publisher;
            validation = (Math.max(_publisher.length, maxLength) === maxLength) ? true : false;
            var _price = gamesManagement.game.price;            
            var _stokeAmount = gamesManagement.game.stokeAmount;            
            var _category = gamesManagement.game.category;
            

            if (!_gameName) { window.alert('please provide a gameName'); return;}
            if (!validation) {
                window.alert("The maximum size per field is 50 characters!");
                return;
            }            

            var validity = function(gameName) {
                var validCheck = !(gameName.length < 3 || gameName.length > 20 || !(/^[a-zA-Z]+$/.test(gameName)));
                if (!validCheck) {
                    window.alert("The game name that supplied illegal\n Please insert between 3 and 20 letters!");
                    return false;
                }
                validCheck = (/^[0-9]+$/.test(_price));
                if (!validCheck) {
                    window.alert("price must contains digit only!");
                    return false;
                }
                validCheck = (/^[0-9]+$/.test(_stokeAmount));
                if (!validCheck) {
                    window.alert("stockAmount must contains digit only!");
                    return false;
                }
                                
                if (!_picPath || !_publisher || !_category) { window.alert("please fill all the details"); return false; }
                return true;
            };
            if (!validity(_gameName))
                {return;}
            products.addGame(_gameName, _desc, _picPath, _publisher, _price, _stokeAmount, _category);
        };





  });
