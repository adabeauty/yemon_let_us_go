// 'use strict';
describe('test index :', function () {

    beforeEach(module('letGoApp'));

    var $scope, $rootScope, BoughtGoodsService, localStorageService;

    beforeEach(inject(function ($injector) {

        $rootScope = $injector.get('$rootScope');
        $scope = $injector.get('$rootScope').$new();
        BoughtGoodsService = $injector.get('BoughtGoodsService');
        localStorageService = $injector.get('localStorageService');

        $controller = $injector.get('$controller');

        creatclickCountCtrl = function () {

            return $controller('clickCountCtrl', {
                $scope: $scope,
                BoughtGoodsService: BoughtGoodsService,
                localStorageService: localStorageService
            });
        }
    }));

    describe('localStorageService', function () {
        beforeEach(function () {
            spyOn(localStorageService, 'get');
            creatclickCountCtrl();

        });
        it('localStorageService.get is ok', function () {
            expect(localStorageService.get).toHaveBeenCalled();
        });

    });

    describe('test to-parent-navigator-inmain', function () {
        beforeEach(function () {
            creatclickCountCtrl();
        });
        it('to-parent-navigator-inmain is ok', function () {

            $scope.$digest();
            $rootScope.$broadcast('to-parent-navigator-inmain');
            expect($scope.home).toEqual(true);

        });
    });

    describe('test to-parent-navigator-inshop', function () {
        beforeEach(function () {
            creatclickCountCtrl();
        });
        it('to-parent-navigator-inshop is ok', function () {

            $scope.$digest();
            $rootScope.$broadcast('to-parent-navigator-inshop');
            expect($scope.shop).toEqual(true);

        });
    });

    describe('test to-parent-navigator-incategoryManage', function () {
        beforeEach(function () {
            creatclickCountCtrl();
        });
        it('to-parent-navigator-incategoryManage is ok', function () {

            $scope.$digest();
            $rootScope.$broadcast('to-parent-navigator-incategoryManage');
            expect($scope.categoryManage).toEqual(true);

        });
    });

    describe('test to-parent-navigator-ingoodsManage', function () {
        beforeEach(function () {
            creatclickCountCtrl();
        });
        it('to-parent-navigator-ingoodsManage is ok', function () {

            $scope.$digest();
            $rootScope.$broadcast('to-parent-navigator-ingoodsManage');
            expect($scope.goodsManage).toEqual(true);

        });
    });

    describe('test to-parent-navigator-incart', function () {
        beforeEach(function () {
            creatclickCountCtrl();
        });
        it('to-parent-navigator-incart is ok', function () {

            $scope.$digest();
            $rootScope.$broadcast('to-parent-navigator-incart');
            expect($scope.cart).toEqual(true);

        });
    });

    describe('to-parent-changeClickCount', function () {
        beforeEach(function () {
            creatclickCountCtrl();
            spyOn(BoughtGoodsService, 'addClickcount');
        });
        it('to-parent-changeClickCount is ok', function () {

            $scope.$digest();
            $rootScope.$broadcast('to-parent-changeClickCount');
            expect(BoughtGoodsService.addClickcount).toHaveBeenCalled();

        });
    });

    describe('to-parent-clearClickCount', function () {
        beforeEach(function () {
            creatclickCountCtrl();
        });
        it('to-parent-clearClickCount is ok', function () {

            $scope.$digest();
            $rootScope.$broadcast('to-parent-clearClickCount');
            expect($scope.clickcount).toBe(0);

        });
    });
});
