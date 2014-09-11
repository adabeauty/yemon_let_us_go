// 'use strict';
describe('Controller: ShopCtrl', function () {

  beforeEach(module('letGoApp'));

  var $scope,BoughtGoodsService, ItemService, $controller,creatShopCtrl;

  beforeEach(inject(function ($injector) {

    $scope = $injector.get('$rootScope').$new();
    BoughtGoodsService = $injector.get('BoughtGoodsService');
    ItemService = $injector.get('ItemService');

    $controller = $injector.get('$controller');

    creatShopCtrl = function(){

        return $controller('ShopCtrl', {
          $scope: $scope,
          BoughtGoodsService: BoughtGoodsService,
          ItemService: ItemService
        });
    }
  }));

  describe('items list', function(){

      beforeEach(function(){

          spyOn(ItemService,'loadItems');
          spyOn($scope, "$emit");

          creatShopCtrl();

      });
      it('should get length goods', function () {

        expect(ItemService.loadItems).toHaveBeenCalled();
        expect($scope.$emit).toHaveBeenCalledWith('to-parent-navigator-inshop');
      });

  });

  var item;
  describe('add cart number', function(){

      beforeEach(function(){

          item = {category:'饮料类', name:'可口可乐', price:'3.00', unit:'瓶'};

          spyOn(BoughtGoodsService, 'add_cart_num');

          creatShopCtrl();
      });

      it('add cart', function(){

          spyOn($scope, "$emit");
          $scope.add_cart_num(item);

          expect($scope.$emit).toHaveBeenCalledWith('to-parent-changeClickCount', 1,1);
          expect(BoughtGoodsService.add_cart_num).toHaveBeenCalledWith(item);

      });
  });


});
