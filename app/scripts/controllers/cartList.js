'use strict';

angular.module('letGoApp')
    .controller('CartListCtrl', function ($scope, BoughtGoodsService, localStorageService) {

        $scope.$emit('to-parent-navigator-incart');
        $scope.cartGoods = BoughtGoodsService.generateCartGoods();
        $scope.totalMoney = BoughtGoodsService.getTotalMoney();
        $scope.totalNumber = +localStorageService.get("clickcount");

        $scope.modifyCartItemNum = function (cartItem, direction) {

            BoughtGoodsService.modifyCartItemNum(cartItem, direction);

            $scope.$emit('to-parent-changeClickCount', direction, 1);

            $scope.cartGoods = BoughtGoodsService.generateCartGoods();
            $scope.totalMoney = BoughtGoodsService.getTotalMoney();
            $scope.totalNumber = +localStorageService.get("clickcount");
        }

        $scope.deleteItem = function (cartItem) {

            BoughtGoodsService.deleteItem(cartItem);

            $scope.$emit('to-parent-changeClickCount', 0, cartItem.num);

            $scope.cartGoods = BoughtGoodsService.generateCartGoods();
            $scope.totalMoney = BoughtGoodsService.getTotalMoney();
            $scope.totalNumber = +localStorageService.get("clickcount");
        }

    });
