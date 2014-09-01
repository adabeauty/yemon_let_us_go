describe('test categoryManage:', function(){

    beforeEach(module('letGoApp'));
    var $scope, categoryManageService, localStorageService, creatCategoryCtrl;
    beforeEach(inject(function($injector){

        $scope = $injector.get('$rootscope').$new();
        categoryManageService = $injector.get('categoryManageService');
        localStorageService = $injector.get('localStorageService');

        creatCategoryCtrl = function(){
            return $controller('CategoryCtrl', {
                $scope: $scope,
                categoryManageService: categoryManageService,
                localStorageService :localStorageService
            });
        }
    }));

    describe('test category:', function(){
        beforeEach(function(){
            spyOn(localStorageService, 'get');
            creatCategoryCtrl();
        });
        it('category is ok', function(){
            expect().toHaveBeenCalledWith('category');
        });
    });
});
