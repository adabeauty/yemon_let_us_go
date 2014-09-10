ddescribe('test categoryAddService:', function(){

    beforeEach(module('letGoApp'));
    var $location, localStorageService, categoryAddService;
    var store = {};
    beforeEach(inject(function($injector){

        $location = $injector.get('$location');
        localStorageService = $injector.get('localStorageService');
        categoryAddService = $injector.get('categoryAddService');
        
        spyOn(localStorageService,'get').andCallFake(function (key) {
            return store[key];
        });
        spyOn(localStorageService,'set').andCallFake(function (key,value) {
            return store[key] = value;
        });
    }));

    var ID, name, num;
    describe('test category:', function(){
        beforeEach(function(){
            ID = 'TF1001';
            name = '饮料类';
            num = 3;
        });
        it('category is ok', function(){
            var category = categoryAddService.category(ID, name, num);
            expect(category.ID).toEqual('TF1001');
            expect(category.name).toEqual('饮料类');
            expect(category.num).toEqual(3);
        });
    });
});
