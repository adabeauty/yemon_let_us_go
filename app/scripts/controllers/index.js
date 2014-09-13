'use strict';


angular.module('letGoApp')
    .controller('clickCountCtrl', function ($scope, BoughtGoodsService, localStorageService) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.clickcount = +localStorageService.get("clickcount");

        $scope.$on('to-parent-navigator-inmain', function () {
            $scope.home = true;
            $scope.shop = false;
            $scope.categoryManage = false;
            $scope.goodsManage = false;
            $scope.cart = false;
        });

        $scope.$on('to-parent-navigator-inshop', function () {
            $scope.home = false;
            $scope.shop = true;
            $scope.categoryManage = false;
            $scope.goodsManage = false;
            $scope.cart = false;
        });

        $scope.$on('to-parent-navigator-incategoryManage', function () {
            $scope.home = false;
            $scope.shop = false;
            $scope.categoryManage = true;
            $scope.goodsManage = false;
            $scope.cart = false;
        });

        $scope.$on('to-parent-navigator-ingoodsManage', function () {
            $scope.home = false;
            $scope.shop = false;
            $scope.categoryManage = false;
            $scope.goodsManage = true;
            $scope.cart = false;
        });

        $scope.$on('to-parent-navigator-incart', function () {
            $scope.home = false;
            $scope.shop = false;
            $scope.categoryManage = false;
            $scope.goodsManage = false;
            $scope.cart = true;
        });

        $scope.$on('to-parent-changeClickCount', function (changeClickCount, addDirection, number) {

            $scope.clickcount = BoughtGoodsService.addClickcount(addDirection, number);
        });

        $scope.$on('to-parent-clearClickCount', function () {

            $scope.clickcount = 0;
        });

    });
