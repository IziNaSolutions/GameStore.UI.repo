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
            })
            .when('/404', {
                templateUrl: '404.html',
            })
            .when('/login', {
                templateUrl: 'components/login/login.html',
                controller: 'LoginCtrl',
                controllerAs: 'login'
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
                controller: 'OrdersManagementCtrl',
                controllerAs: 'ordersManagement'
            })
            .when('/register', {
                templateUrl: 'components/register/register.html',
                controller: 'RegisterCtrl',
                controllerAs: 'register'
            })
            .when('/order_details', {
                templateUrl: 'components\orderDetails\orderDetails.html',
                controller: 'orderDetailsCtrl',
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