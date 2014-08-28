angular.module('letGoApp').service('BoughtGoodsService', function(localStorageService) {

    this.BoughtItem = function(item, num){
        return {  num: num,
                  item:item
                };
    }
    // this.goodsHasExist = function(name,boughtGoods) {
    //
    //         var boughtGood;
    //         if(boughtGoods){
    //             boughtGood=false;
    //         }else{
    //             boughtGood = _.filter(boughtGoods, function(num) {return num.item.name === name; });
    //         }
		// 				return boughtGood;
    //     }
		this.addClickcount = function(direction, number){

				var clickcount = +localStorageService.get("clickcount");
				if(direction === 1){
						clickcount = clickcount + number;
						localStorageService.set("clickcount", clickcount);
				}else{
						clickcount = clickcount - number;
            // $scope.todos.join('\n')
						localStorageService.set("clickcount", clickcount);
				}

				return clickcount;
		}
		this.add_cart_num = function(item){

      var goodsHasExist = function(name,boughtGoods) {
            // console.log(boughtGoods);
              var boughtGood = false;
              if(!boughtGoods){
                  boughtGood = false;
              }else{
                  for(var i=0; i<boughtGoods.length; i++){
                    // console.log(boguthGoods[i].item.name+"----------"+name);
                      if(name == boughtGoods[i].item.name){
                          return boughtGoods[i];
                      }
                  }
                  // boughtGood = _.filter(boughtGoods, function(num) {return num.item.name === name; });
              }
              return boughtGood;
        };

				var boughtGoods = localStorageService.get("boughtGoods");

				if(boughtGoods == 0){
						boughtGoods = [];
				}
        if(boughtGoods === null){
            boughtGoods = [];
        }
				var boughtGood = goodsHasExist(item.name, boughtGoods);

				if(boughtGood){
						boughtGood.num++;
				}else{
						boughtGoods.push(this.BoughtItem(item,1));
				}

				localStorageService.set("boughtGoods", boughtGoods);
		}
    this.modifyCartItemNum = function(cartItem, direction){

        var boughtGoods = localStorageService.get("boughtGoods");

        var boughtGood = _.indexOf(boughtGoods, cartItem.item.name);

        for(var i=0; i<boughtGoods.length; i++){
            if(boughtGoods[i].item.name === cartItem.item.name){
                if(direction === 1){
                    boughtGoods[i].num++;
                }else{
                    if(boughtGoods[i].num === 1){
                      boughtGoods[i].num--;
                       var removeItem = _.remove(boughtGoods, function(boughtGood) {  return boughtGood.num === 0; });

                    }else
                        boughtGoods[i].num--;
                }
            }
        }

        localStorageService.set("boughtGoods", boughtGoods);
    }
    this.deleteItem = function(cartItem){
        var boughtGoods = localStorageService.get("boughtGoods");

        var removeItem = _.remove(boughtGoods, function(num) { return num.item.name === cartItem.item.name; });

        localStorageService.set("boughtGoods", boughtGoods);

    }
		this.generateCartGoods = function(){
        var cartList = function(className, boughtgoods){

          return {	categoryName: className,
                    boughtgoods: boughtgoods
                  };
        };

				var getGroup = function(){

            var boughtGoods = localStorageService.get("boughtGoods");
            // console.log(boughtGoods);
            var goodsObject = _.groupBy(boughtGoods, function(num) { return num.item.category; });
            var goodsArray = _.map(goodsObject);

            var drink = goodsArray[0];
            var nut = goodsArray[1];
            var snack = goodsArray[2];

						var drinks = cartList('饮料类', drink);
						var snacks = cartList('零食类', snack);
						var nuts = cartList('干果类', nut);

						localStorageService.set("drinks", drinks);
						localStorageService.set("snacks",snacks);
						localStorageService.set("nuts", nuts);

				};

				getGroup();

        var drinkClass = localStorageService.get("drinks");
				var snackClass = localStorageService.get("snacks");
				var nutClass = localStorageService.get("nuts");

				return [drinkClass, snackClass, nutClass];
		}

		this.getTotalMoney = function (){

			var boughtGoods = localStorageService.get("boughtGoods");
			var totalMoney = 0;

       _.forEach(boughtGoods, function(num) { totalMoney += num.num * num.item.price});

			return totalMoney;
		}
    this.getboughtGoodsLength = function(){
        var boughtGoods = localStorageService.get("boughtGoods");
        return  boughtGoods.length;
    }
    this.clearDate = function(){
        localStorageService.set("boughtGoods",0);
        localStorageService.set("clickcount", 0);
        localStorageService.set("drinks", 0);
        localStorageService.set("snacks", 0);
        localStorageService.set("nuts", 0);
    }

});
