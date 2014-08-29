  'use strict';

angular.module('letGoApp')
  .controller('ShopCtrl', function ($scope, BoughtGoodsService, ItemService) {
    

    $scope.allItems = ItemService.loadItems();
    $scope.add_cart_num = function(item){

//        BoughtGoodsService.add_cart_num(item);
        $scope.$parent.addClickcount(1, 1);
        BoughtGoodsService.add_cart_num(item);
    }

  });
