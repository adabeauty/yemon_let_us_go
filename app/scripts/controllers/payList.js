'use strict';

angular.module('letGoApp')
  .controller('PayListCtrl', function ($scope, BoughtGoodsService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.boughtGoods = Localstorage.getLocalstorage("boughtGoods");
    $scope.boughtGoodsLength = BoughtGoodsService.getboughtGoodsLength();
    $scope.totalMoney = BoughtGoodsService.getTotalMoney();

    $scope.clearDate = function(){
        BoughtGoodsService.clearDate();
        $scope.$parent.clickcount = 0;
    }
  });
