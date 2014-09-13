'use strict';
angular.module('letGoApp')
    .controller('GoodsAddCtrl', function ($scope, $location, localStorageService, goodsAddService) {

        $scope.allCategories = goodsAddService.getAllCategories();
        $scope.saveButton = function () {

            goodsAddService.saveButton($scope.itemCategory, $scope.itemName, $scope.itemPrice, $scope.itemUnit);
            $scope.allItems = localStorageService.get('allGoods');
        };

        $scope.cancel = function () {
            $location.path('/goodsManage');
        };
    });
