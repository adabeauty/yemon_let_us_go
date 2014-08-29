'use strict';

angular.module('letGoApp')
  .controller('PayListCtrl', function ($scope, BoughtGoodsService, localStorageService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.boughtGoods = localStorageService.get("boughtGoods");
    $scope.boughtGoodsLength = BoughtGoodsService.getboughtGoodsLength();
    $scope.totalMoney = BoughtGoodsService.getTotalMoney();

    $scope.clearDate = function(){
      
        BoughtGoodsService.clearDate();
        $scope.$emit('to-parent-clearClickCount');
    }
  });
