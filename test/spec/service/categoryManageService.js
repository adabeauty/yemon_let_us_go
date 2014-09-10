describe('test: categoryManageService:', function(){

    var categoryManageService, localStorageService;
    var store = {};
    beforeEach(module('letGoApp'));
    beforeEach(inject(function($injector){

        categoryManageService = $injector.get('categoryManageService');
        localStorageService = $injector.get('localStorageService');

        spyOn(localStorageService,'get').andCallFake(function (key) {
            return store[key];
        });
        spyOn(localStorageService,'set').andCallFake(function (key,value) {
            return store[key] = value;
        });
    }));

    // var ID, name, num;
    // describe('test category:', function(){
    //     beforeEach(function(){
    //         ID = 'TF1001';
    //         name = '饮料类';
    //         num = 3;
    //     });
    //     it('category is ok', function(){
    //         var category = categoryManageService.category(ID, name, num);
    //         expect(category.ID).toEqual('TF1001');
    //         expect(category.name).toEqual('饮料类');
    //         expect(category.num).toEqual(3);
    //     });
    // });

    var currentCategories = [ {ID:'TF1001', name:'饮料类', num: 3},
                              {ID:'TF1002', name:'干果类', num: 0}
                              ];
    var deleteCategory_0, deleteCategory_1;
    describe('test:deleteButton', function(){
        beforeEach(function(){
            deleteCategory = {ID:'TF1002', name:'干果类', num: 0};
            notDeleteCategory = {ID:'TF1001', name:'饮料类', num: 3};

            localStorageService.set('category',currentCategories);
        });
        it('num is not 0', function(){
            categoryManageService.deleteButton(notDeleteCategory);
            var category = localStorageService.get('category');
            expect(category.length).toBe(2);
        });
        it('num is 0', function(){
            categoryManageService.deleteButton(deleteCategory);
            var category = localStorageService.get('category');
            expect(category.length).toBe(1);
        });
    });

    // var currentIDExist, currentIDNoExist;
    // describe('test IDHasExist:', function(){
    //     beforeEach(function(){
    //
    //         currentIDExist = 'TF1001';
    //         currentIDNotExist = 'TF1003';
    //
    //         localStorageService.set('category',currentCategories);
    //     });
    //     it(' ID exist',function(){
    //         var existResult = categoryManageService.IDHasExist(currentIDExist);
    //         expect(existResult).toBe(0);
    //     });
    //     it(' ID does not exist',function(){
    //         var existResult = categoryManageService.IDHasExist(currentIDNotExist);
    //         expect(existResult).toBe(-1);
    //     });
    // });
    //
    // var currentNameExist, currentNameNoExist;
    // describe('test nameHadExist:', function(){
    //     beforeEach(function(){
    //
    //         currentNameExist = '饮料类'
    //         currentNameNoExist = '家电类';
    //
    //         localStorageService.set('category',currentCategories);
    //     });
    //     it('name exist', function(){
    //         var existResult = categoryManageService.nameHadExist(currentNameExist);
    //         expect(existResult).toBe(0);
    //     });
    //     it('name does not exist', function(){
    //         var existResult = categoryManageService.nameHadExist(currentNameNoExist);
    //         expect(existResult).toBe(-1);
    //     });
    // });
    //
    // var currentID, currentName;
    // var currentCategories ;
    // describe('test addNewCateogory()', function(){
    //     beforeEach(function(){
    //
    //         currentID = 'TF1004';
    //         currentName = '家电类';
    //         currentCategories = [ {ID:'TF1001', name:'饮料类', num: 3},
    //                                   {ID:'TF1002', name:'干果类', num: 0}
    //                                   ];
    //
    //         spyOn(categoryManageService,'category').andReturn({ID:'TF1004', name:'家电类', num: 0});
    //     });
    //     it('category is null', function(){
    //
    //         localStorageService.set('category','');
    //
    //         var currentCategory = localStorageService.get('category');
    //
    //         categoryManageService.addNewCateogory(currentID, currentName);
    //         expect(categoryManageService.category).toHaveBeenCalledWith(currentID, currentName, '0');
    //
    //         var currentCategory = localStorageService.get('category');
    //         expect(currentCategory.length).toEqual(1);
    //
    //         expect(currentCategory[0].name).toEqual('家电类');
    //         expect(currentCategory[0].ID).toEqual('TF1004');
    //         expect(currentCategory[0].num).toEqual(0);
    //     });
    //     it('category isnot null', function(){
    //
    //           localStorageService.set('category',currentCategories);
    //
    //           categoryManageService.addNewCateogory(currentID, currentName);
    //
    //           expect(categoryManageService.category).toHaveBeenCalledWith(currentID, currentName, '0');
    //
    //           var currentCategory = localStorageService.get('category');
    //           expect(currentCategory.length).toEqual(3);
    //     });
    // });
    // var currentCategories ;
    // var currentID, currentName;
    // describe('test: saveButton()', function(){
    //     beforeEach(function(){
    //         currentID = 'TF1004';
    //         currentName = '家电类';
    //         currentCategories = [ {ID:'TF1001', name:'饮料类', num: 3},
    //                                   {ID:'TF1002', name:'干果类', num: 0}
    //                                   ];
    //         localStorageService.set('category',currentCategories);
    //
    //     });
    //     it('ID exist', function(){
    //         spyOn(categoryManageService,'IDHasExist').andReturn(1);
    //         spyOn(categoryManageService,'nameHadExist');
    //
    //         categoryManageService.saveButton(currentID, currentName);
    //
    //         expect(categoryManageService.IDHasExist).toHaveBeenCalledWith(currentID);
    //         expect(categoryManageService.nameHadExist).toHaveBeenCalledWith(currentName);
    //         expect(categoryManageService.add).toEqual(true);
    //     });
    //     it('name exist', function(){
    //         spyOn(categoryManageService,'nameHadExist').andReturn(1);
    //         spyOn(categoryManageService,'IDHasExist');
    //
    //         categoryManageService.saveButton(currentID, currentName);
    //
    //         expect(categoryManageService.IDHasExist).toHaveBeenCalledWith(currentID);
    //         expect(categoryManageService.nameHadExist).toHaveBeenCalledWith(currentName);
    //         expect(categoryManageService.add).toEqual(true);
    //     });
    //     it('name and ID are not exist', function(){
    //         spyOn(categoryManageService, 'nameHadExist').andReturn(-1);
    //         spyOn(categoryManageService, 'IDHasExist').andReturn(-1);
    //         spyOn(categoryManageService, 'addNewCateogory');
    //
    //         categoryManageService.saveButton(currentID, currentName);
    //
    //         expect(categoryManageService.IDHasExist).toHaveBeenCalledWith(currentID);
    //         expect(categoryManageService.nameHadExist).toHaveBeenCalledWith(currentName);
    //         expect(categoryManageService.addNewCateogory).toHaveBeenCalledWith(currentID, currentName);
    //         expect(categoryManageService.add).toEqual(false);
    //     });
    // });
});
