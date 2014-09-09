angular.module('letGoApp').service('goodsAddService', function(localStorageService){

    this.item = function(category, name, price, unit){
        return {category:category, name:name, price:price, unit:unit};
    };

    this.itemHasExist = function(itemName){

        var currentItems = localStorageService.get('allGoods');
        var exist = _.findIndex(currentItems, {name:itemName});

        return exist;
    };

    this.itemDetailSuccess = function(itemCategory, itemName, itemPrice, itemUnit){

        var itemDetailSuccess = itemCategory && itemName && itemPrice && itemUnit;
        return itemDetailSuccess;
    };
    this.saveItem = function(itemCategory, itemName, itemPrice, itemUnit){

        var currentItems = localStorageService.get('allGoods');
        if(currentItems === null){
            currentItems = [];
        }
        var newItem = this.item(itemCategory, itemName, itemPrice, itemUnit);
        currentItems.push(newItem);
        localStorageService.set('allGoods',currentItems);
    };
    this.addCategoryNum = function(itemCategory){

        var currentCategory = localStorageService.get('category');

        _(currentCategory).forEach(function(category) {
            if(category.name === itemCategory){
                return category.num++;
            }
        });

        localStorageService.set('category',currentCategory);
    };
    this.saveButton = function(itemCategory, itemName, itemPrice, itemUnit){

        var itemHasExist = this.itemHasExist(itemName);

        var itemDetailSuccess = this.itemDetailSuccess(itemCategory.name, itemName, itemPrice, itemUnit);

        if(!itemDetailSuccess){
            alert('请填写完整商品信息!');
            this.add = true;
        }else{
            if(itemHasExist != -1){
                alert('此商品已存在,请重新输入!');
                this.add = true;
            }else{
                this.saveItem(itemCategory.name, itemName, itemPrice, itemUnit);
                this.addCategoryNum(itemCategory.name);
                this.add = false;
            }
        }
    };

    this.getAllCategories = function(){

      var category = localStorageService.get('category');
      var allCategories = [];
      _(category).forEach(function(num) {
          allCategories.push({name: num.name});

      });
      return allCategories;
    };

})
