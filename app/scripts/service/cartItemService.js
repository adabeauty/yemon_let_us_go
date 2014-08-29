angular.module('letGoApp').service('BoughtGoodsService', function(localStorageService) {

    this.BoughtItem = function(item, num){
        return {  num: num,
                  item:item
                };
    }

    this.goodsHasExist = function(name,boughtGoods) {
            var boughtGood = false;
            if(boughtGoods === null){
                boughtGood = false;
            }else{

                for(var i=0; i<boughtGoods.length; i++){

                    if(name === boughtGoods[i].item.name){
                        return boughtGoods[i];
                    }
                }
            }
            return boughtGood;
      };
		this.addClickcount = function(direction, number){

				var clickcount = +localStorageService.get("clickcount");
				if(direction === 1){
						clickcount = clickcount + number;
						localStorageService.set("clickcount", clickcount);
				}else{
						clickcount = clickcount - number;

						localStorageService.set("clickcount", clickcount);
				}

				return clickcount;
		}
		this.add_cart_num = function(item){

				var boughtGoods = localStorageService.get("boughtGoods");

//        if(  boughtGoods === ''){
//        		boughtGoods = [];
//        }
        if(localStorageService.get("boughtGoods") === null){
            boughtGoods = [];
        }
				var boughtGood = this.goodsHasExist(item.name,boughtGoods);

				if(boughtGood){
						boughtGood.num++;
				}else{
						boughtGoods.push(this.BoughtItem(item,1));
				}

				localStorageService.set("boughtGoods", boughtGoods);
		}
    this.cartList = function(className, boughtgoods){

      return {	categoryName: className,
                boughtgoods: boughtgoods
              };
    };
    this.getGroup = function(){

        var boughtGoods = localStorageService.get("boughtGoods");
        var goodsObject = _.groupBy(boughtGoods, function(num) { return num.item.category; });
        var goodsArray = _.map(goodsObject);

        var drink = goodsArray[0];
        var nut = goodsArray[1];
        var snack = goodsArray[2];

        var drinks = this.cartList('饮料类', drink);
        var snacks = this.cartList('零食类', snack);
        var nuts = this.cartList('干果类', nut);

        localStorageService.set("drinks", drinks);
        localStorageService.set("snacks",snacks);
        localStorageService.set("nuts", nuts);

    };
		this.generateCartGoods = function(){

				this.getGroup();

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
    this.processNum = function(direction,i){

        var boughtGoods = localStorageService.get("boughtGoods");
        if(direction === 1){
            boughtGoods[i].num++;
        }else{
            if(boughtGoods[i].num === 1){
              boughtGoods[i].num--;
               var removeItem = _.remove(boughtGoods, function(boughtGood) {  return boughtGood.num === 0; });

            }else {
                boughtGoods[i].num--;
            }
        }
        localStorageService.set("boughtGoods", boughtGoods);

    };
    this.modifyCartItemNum = function(cartItem, direction){

        var boughtGoods = localStorageService.get("boughtGoods");

        var boughtGood = _.indexOf(boughtGoods, cartItem.item.name);

        for(var i=0; i<boughtGoods.length; i++){
            if(boughtGoods[i].item.name === cartItem.item.name){

                this.processNum(direction, i);
            }
        }

    }
    this.deleteItem = function(cartItem){
        var boughtGoods = localStorageService.get("boughtGoods");

        var removeItem = _.remove(boughtGoods, function(num) { return num.item.name === cartItem.item.name; });

        localStorageService.set("boughtGoods", boughtGoods);

    }

    this.clearDate = function(){
        localStorageService.set("boughtGoods",'');
        localStorageService.set("clickcount", 0);
        localStorageService.set("drinks", 0);
        localStorageService.set("snacks", 0);
        localStorageService.set("nuts", 0);
    }

});
