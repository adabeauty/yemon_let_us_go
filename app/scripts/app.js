'use strict';

/**
 * @ngdoc overview
 * @name letGoApp
 * @description
 * # letGoApp
 *
 * Main module of the application.
 */
angular
  .module('letGoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/cartList', {
        templateUrl: 'views/cartList.html',
        controller: 'CartListCtrl'
      })
      .when('/shop', {
        templateUrl: 'views/shop.html',
        controller: 'ShopCtrl'
      })
      .when('/payList', {
        templateUrl: 'views/payList.html',
        controller: 'PayListCtrl'
      })
      .when('/categoryManage', {
        templateUrl: 'views/categoryManage.html',
        controller: 'CategoryCtrl'
      })
      .when('/goodsManage', {
        templateUrl: 'views/goodsManage.html',
        controller: 'GoodsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
