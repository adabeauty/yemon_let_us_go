'use strict';

angular.module('letGoApp')
  .controller('CartListCtrl', function ($scope, BoughtGoodsService,localStorageService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.cartGoods = BoughtGoodsService.generateCartGoods();
    $scope.totalMoney = BoughtGoodsService.getTotalMoney();
    $scope.totalNumber  = +localStorageService.get("clickcount");

    $scope.modifyCartItemNum = function (cartItem, direction){

        BoughtGoodsService.modifyCartItemNum(cartItem, direction);

        $scope.$parent.addClickcount(direction, 1);
        $scope.cartGoods = BoughtGoodsService.generateCartGoods();
        $scope.totalMoney = BoughtGoodsService.getTotalMoney();
        $scope.totalNumber  = +localStorageService.get("clickcount");
      }

      $scope.deleteItem = function(cartItem){

          BoughtGoodsService.deleteItem(cartItem);

          $scope.$parent.addClickcount(0, cartItem.num);

          $scope.cartGoods = BoughtGoodsService.generateCartGoods();
          $scope.totalMoney = BoughtGoodsService.getTotalMoney();
          $scope.totalNumber  = +localStorageService.get("clickcount");
      }

  });
