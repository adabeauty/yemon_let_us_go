'use strict';

angular.module('letGoApp')
    .controller('CartListCtrl', function ($scope, BoughtGoodsService, localStorageService) {

        function downloadWeb(){

            $scope.cartGoods = BoughtGoodsService.generateCartGoods();
            $scope.totalMoney = BoughtGoodsService.getTotalMoney();
            $scope.totalNumber = +localStorageService.get('clickcount');
        }

        $scope.$emit('to-parent-navigator-incart');

        downloadWeb();

        $scope.modifyCartItemNum = function (cartItem, direction) {

            BoughtGoodsService.modifyCartItemNum(cartItem, direction);

            $scope.$emit('to-parent-changeClickCount', direction, 1);

            downloadWeb();
        };

        $scope.deleteItem = function (cartItem) {

            BoughtGoodsService.deleteItem(cartItem);

            $scope.$emit('to-parent-changeClickCount', 0, cartItem.num);

            downloadWeb();
        };


    });
