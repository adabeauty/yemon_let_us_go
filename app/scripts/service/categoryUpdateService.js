angular.module('letGoApp').service('cagtegoryUpdateService', function(localStorageService){

     this.getUpdateCategory = function (ID) {
        var categorys = localStorageService.get('categorys');
        return _.find(categorys,{'ID':ID});
      };
    this.updateCategory = function(){

        var updateObeject = localStorageService.get('updateCategory');
        var allCategories = localStorageService.get('category');
        var index = _.findIndex(allCategories, {'ID': updateObeject.ID});
        allCategories[index] = updateObeject;

        localStorageService.set('category', allCategories);
    };
});
