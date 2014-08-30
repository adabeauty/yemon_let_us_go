angular.module('letGoApp').service('categoryManageService', function(localStorageService){

    this.category = function(ID, name, num){
        return {ID:ID, name:name, num:num};
    }
    this.deleteButton = function(every){

        var currentCategory = localStorageService.get('category');
        if(every.num != 0){
            alert('此分类不能删除');
        }else{
            var evens = _.remove(currentCategory, function(num) { return every.ID === num.ID});
        }
        localStorageService.set('category',currentCategory);

    };
      this.IDHasExist = function(currentID){

          var currentCategory = localStorageService.get('category');
          var exist = _.findIndex(currentCategory, {ID:currentID});

          return exist;
      };
      this.saveButton = function(currentID, currentName){

          var currentCategory = localStorageService.get('category');

          if(currentCategory === null){
              currentCategory =[];
          }

          var IDHasExist = this.IDHasExist(currentID);
          if(IDHasExist != -1){
              alert('此ID已经存在,请重新输入ID!');
          }else{
              var current = this.category(currentID, currentName, '0');
              currentCategory.push(current);
              localStorageService.set('category',currentCategory);
          }
      };
      
});
