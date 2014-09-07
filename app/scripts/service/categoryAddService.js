angular.module('letGoApp').service('categoryAddService', function(localStorageService){


    this.category = function(ID, name, num){
        return {ID:ID, name:name, num:num};
    };
    this.IDHasExist = function(currentID){

        var currentCategory = localStorageService.get('category');
        var exist = _.findIndex(currentCategory, {ID:currentID});

        return exist;
    };
    this.nameHadExist = function(currentName){

        var currentCategory = localStorageService.get('category');
        var exist = _.findIndex(currentCategory, {name:currentName});

        return exist;
    };
    this.addNewCateogory = function(currentID, currentName){

        var currentCategory = localStorageService.get('category');

        if(currentCategory === ''){
            currentCategory =[];
        }
        var current = this.category(currentID, currentName, '0');

        currentCategory.push(current);
        localStorageService.set('category',currentCategory);

    };

    this.saveButton = function(currentID, currentName){

        var IDHasExist = this.IDHasExist(currentID);
        var nameHadExist = this.nameHadExist(currentName);
        if(IDHasExist != -1){
            alert('此ID已经存在,请重新输入ID!');
            // this.add = true;
        }else{
            if(nameHadExist != -1){
                alert('此商品分类已经存在,请重新输入!');
                // this.add = true;
            }else{
                this.addNewCateogory(currentID, currentName);
                // this.add = false;
            }
        }
      };
});
