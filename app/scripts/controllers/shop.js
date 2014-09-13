'use strict';

angular.module('letGoApp')
    .controller('ShopCtrl', function ($scope, BoughtGoodsService, localStorageService) {

        $scope.$emit('to-parent-navigator-inshop');

//    $scope.allItems = ItemService.loadItems();
        $scope.allItems = localStorageService.get('allGoods');
        $scope.add_cart_num = function (item) {

            $scope.$emit('to-parent-changeClickCount', 1, 1);
            BoughtGoodsService.add_cart_num(item);
        }

    });
