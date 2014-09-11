// 'use strict';
describe('test goodsManageService:', function(){

    beforeEach(module('letGoApp'));

    var goodsManageService, localStorageService;
    var store = {};
    beforeEach(inject(function($injector){

        goodsManageService = $injector.get('goodsManageService');
        localStorageService = $injector.get('localStorageService');

        spyOn(localStorageService,'get').andCallFake(function (key) {
            return store[key];
        });
        spyOn(localStorageService,'set').andCallFake(function (key,value) {
            return store[key] = value;
        });
    }));

    describe('test decreaseCategoryNum:', function(){
        var item, category;
        beforeEach(function(){
            category = [{ID:'TF1001', name:'饮料类', num: 3}];
            localStorageService.set('category', category);

            item = {category:'饮料类',  name:'可乐', price:'3.00', unit:'瓶'};
        });
        it('processCategory is ok', function(){
            goodsManageService.decreaseCategoryNum(item);
            var result = localStorageService.get('category');

            expect(result[0].num).toEqual(2);
        });
    });

    describe('test deleteButton:', function(){
        var item, allItems;
        beforeEach(function(){

            item = {category:'饮料类',  name:'可乐', price:'3.00', unit:'瓶'};
            allItems = [  {category:'饮料类',  name:'可乐', price:'3.00', unit:'瓶'},
                          {category:'饮料类',  name:'橙汁', price:'3.00', unit:'瓶'}
                        ];
            localStorageService.set('allGoods', allItems);

            spyOn(goodsManageService, 'decreaseCategoryNum');
        });
        it('deleteButton is ok', function(){
            goodsManageService.deleteButton(item);
            var allItems = localStorageService.get('allGoods');

            expect(goodsManageService.decreaseCategoryNum).toHaveBeenCalledWith(item);
            expect(allItems.length).toBe(1);
        });
    });

});
