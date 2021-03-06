// 'use strict';
describe('test categoryUpdate', function () {

    beforeEach(module('letGoApp'));
    var $scope, $location, localStorageService, categoryManageService, $controller, creatCategoryUpdateCtrl;
    beforeEach(inject(function ($injector) {

        $scope = $injector.get('$rootScope').$new();
        $location = $injector.get('$location');
        localStorageService = $injector.get('localStorageService');
        categoryManageService = $injector.get('categoryManageService');
        $controller = $injector.get('$controller');
        creatCategoryUpdateCtrl = function () {
            return $controller('CategoryUpdateCtrl', {
                $scope: $scope,
                $location: $location,
                localStorageService: localStorageService,
                categoryManageService: categoryManageService
            });
        }
    }));

    beforeEach(function () {
        spyOn(localStorageService, 'get');
        creatCategoryUpdateCtrl();
    });

    describe('test updateObject', function () {

        it('updateObject is ok', function () {
            expect(localStorageService.get).toHaveBeenCalledWith('updateCategory');
        });
    });

    describe('test updateCategory', function () {
        beforeEach(function () {
            spyOn(localStorageService, 'set');
            spyOn(categoryManageService, 'updateCategory');
            spyOn($location, 'path');

            $scope.updateCategory();
        });
        it('updateCategory is ok', function () {
            expect(localStorageService.set).toHaveBeenCalledWith('updateCategory', $scope.updateObject);
            expect(localStorageService.set).toHaveBeenCalled();
            expect($location.path).toHaveBeenCalledWith('/categoryManage');
        });
    });

    describe('test cancel', function () {
        beforeEach(function () {
            spyOn($location, 'path');
            $scope.cancel();
        });
        it('cancel is ok', function () {
            expect($location.path).toHaveBeenCalledWith('/categoryManage');
        });
    });
});
