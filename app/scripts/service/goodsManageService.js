angular.module('letGoApp').service('goodsManageService', function(localStorageService){

    this.item = function(category, name, price, unit){
        return {category:category, name:name, price:price, unit:unit};
    };

    this.itemHasExist = function(itemName){

        var currentItems = localStorageService.get('allItems');
        var exist = _.findIndex(currentItems, {name:itemName});

        return exist;
    };

    this.itemDetailSuccess = function(itemCategory, itemName, itemPrice, itemUnit){

        var itemDetailSuccess = itemCategory && itemName && itemPrice && itemUnit;
        return itemDetailSuccess;
    };
    this.saveItem = function(temCategory, itemName, itemPrice, itemUnit){

        var currentItems = localStorageService.get('allItems');
        if(currentItems === null){
            currentItems = [];
        }
        var newItem = this.item(temCategory, itemName, itemPrice, itemUnit);
        currentItems.push(newItem);
        localStorageService.set('allItems',currentItems);
    }
    this.saveButton = function(itemCategory, itemName, itemPrice, itemUnit){

        var itemHasExist = this.itemHasExist(itemName);

        var itemDetailSuccess = this.itemDetailSuccess(itemCategory, itemName, itemPrice, itemUnit);

        if(!itemDetailSuccess){
            alert('请填写完整商品信息!');
            this.add = true;
        }else{
            if(itemHasExist != -1){
                alert('此商品已存在,请重新输入!');
                this.add = true;
            }else{
                this.saveItem(itemCategory, itemName, itemPrice, itemUnit);
                this.add = false;
            }
        }
    };
    this.processCategory = function(item){

        var currentCategory = localStorageService.get('category');

        _(currentCategory).forEach(function(category) {
            if(category.name === item.category){
                return category.num--;
            }
        });

        localStorageService.set('category',currentCategory);
    };
    this.deleteButton =function(item){

        var currentItems = localStorageService.get('allItems');
        var evens = _.remove(currentItems, function(num) { return item.name === num.name});
        localStorageService.set('allItems',currentItems);

        this.processCategory(item);

    };

    this.allCategories = function(){

      var category = localStorageService.get('category');
      var allCategories = [];
      _(category).forEach(function(num) {
          allCategories.push({name: num.name});

      });
      return allCategories;
    };

})
