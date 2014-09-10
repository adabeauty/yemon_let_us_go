describe('test categoryAdd:', function(){

    beforeEach(module('letGoApp'));
    var $scope, $location, categoryAddService, $controller, creatCategoryAddCtrl;
    beforeEach(inject(function($injector){
        $scope = $injector.get('$rootScope').$new();
        $location = $injector.get('$location');
        categoryAddService = $injector.get('categoryAddService');

        $controller = $injector.get('$controller');
        creatcategoryAddCtrl = function(){
            return $controller('CategoryAddCtrl',{
                $scope: $scope,
                $location: $location,
                categoryAddService: categoryAddService
            });
        }
    }));

    describe('test saveButton:', function(){

        beforeEach(function(){
            creatcategoryAddCtrl();
        });
        it('saveButton is ok', function(){
            spyOn(categoryAddService, 'saveButton');
            $scope.saveButton();
            expect(categoryAddService.saveButton).toHaveBeenCalledWith($scope.currentID, $scope.currentName);
        });
    });

    describe('test cancel:', function(){

        beforeEach(function(){
            creatcategoryAddCtrl();
        });
        it('cancel is ok', function(){
            spyOn($location, 'path');
            $scope.cancel();
            expect($location.path).toHaveBeenCalledWith('/categoryManage');
        });
    });

});
