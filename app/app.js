'use strict';

/**
 * @ngdoc overview
 * @name gameStoreApp
 * @description
 * # gameStoreApp
 *
 * Main module of the application.
 */
angular
    .module('gameStoreApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        '720kb.datepicker',
        'ngDialog',

    ])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'components/main/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/about', {
                templateUrl: 'components/about/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'about'
            })
            .when('/404', {
                templateUrl: '404.html',
            })
            .when('/login', {
                templateUrl: 'components/login/login.html',
                controller: 'LoginCtrl',
                controllerAs: 'login'
            })
            .when('/postlogin', {
                templateUrl: 'components/login/postLogin.html',
                controller: 'CatalogCtrl',
                controllerAs: 'catalog'
            })
            .when('/bill', {
                templateUrl: 'components/bill/bill.html',
                controller: 'BillCtrl',
                controllerAs: 'bill'
            })
            .when('/cart', {
                templateUrl: 'components/cart/cart.html',
                controller: 'CartCtrl',
                controllerAs: 'cartSelf'
            })
            .when('/catalog', {
                templateUrl: 'components/catalog/catalog.html',
                controller: 'CatalogCtrl',
                controllerAs: 'catalog'
            })
            .when('/clientsManagement', {
                templateUrl: 'components/clientsManagement/clientsManagement.html',
                controller: 'ClientsManagementCtrl',
                controllerAs: 'clientsManagement'
            })
            .when('/gamesManagement', {                
                templateUrl: 'components/gamesManagement/gamesManagement.html',
                controller: 'GamesManagementCtrl',
                controllerAs: 'gamesManagement'
            })
            .when('/inventory', {
                templateUrl: 'components/inventory/inventory.html',
                controller: 'InventoryCtrl',
                controllerAs: 'inventory'
            })
            .when('/orders', {
                templateUrl: 'components/orders/orders.html',
                controller: 'OrdersCtrl',
                controllerAs: 'ordersSelf'
            })
            .when('/ordersManagement', {
                templateUrl: 'components/ordersManagement/ordersManagement.html',
                controller: 'ordersManagementCtrl',
                controllerAs: 'ordersManagement'
            })
            .when('/register', {
                templateUrl: 'components/register/register.html',
                controller: 'RegisterCtrl',
                controllerAs: 'registerCtrl'
            })            
            .when('/gameRegister', {
                templateUrl: 'components/gamesManagement/gameRegister.html',
                controller: 'GamesManagementCtrl',
                controllerAs: 'gamesManagement'
            })
            .when('/order_details/:orderID', {
                templateUrl: 'components/orderDetails/orderDetails.html',
                controller: 'OrderDetailsCtrl',
                controllerAs: 'orderDetails'
            })
            .when('/pay', {
                templateUrl: 'components/bill/bill.html',
                controller: 'BillCtrl',
                controllerAs: 'bill',
            })
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.hashPrefix('');

    });