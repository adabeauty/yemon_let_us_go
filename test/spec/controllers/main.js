'use strict';

describe('Controller: ShopCtrl', function () {

  // load the controller's module
  beforeEach(module('letGoApp'));

  var $scope,BoughtGoodsService, ItemService;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector) {

    $scope = $injector.get('$rootScope').$new();
    BoughtGoodsService = $injector.get('BoughtGoodsService');
    ItemService = $injector.get('ItemService');

  }));

  creatShopCtrl = function(){

      return $controller('MainCtrl', {
        $scope: scope,
        BoughtGoodsService: BoughtGoodsService,
        ItemService: ItemService
      });
  }



  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
