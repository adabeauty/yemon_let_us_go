angular.module('letGoApp').service('BoughtGoodsService', function() {

    this.BoughtItem = function(item, num){
        return {  num: num,
                  item:item
                };
    }
    this.goodsHasExist = function(name,boughtGoods) {

            var boughtGood;
            if(boughtGoods){
                boughtGood=false;
            }else{
                boughtGood = _.filter(boughtGoods, function(num) {return num.item.name === name; });
            }
						return boughtGood;
        }
		this.addClickcount = function(direction, number){

				var clickcount = Localstorage.getLocalstorage("clickcount");
				if(direction === 1){
						clickcount = clickcount + number;
						Localstorage.setLocalstorage("clickcount", clickcount);
				}else{
						clickcount = clickcount - number;
						Localstorage.setLocalstorage("clickcount", clickcount);
				}

				return clickcount;
		}
		this.add_cart_num = function(item){

				var boughtGoods = Localstorage.getLocalstorage("boughtGoods");
				if(boughtGoods === 0){
						boughtGoods = [];
				}
        if(boughtGoods === null){
            boughtGoods = [];
        }
				var boughtGood = this.goodsHasExist(item.name, boughtGoods);
				if(boughtGood){
						boughtGood.num++;
				}else{
						boughtGoods.push(this.BoughtItem(item,1));
				}

				Localstorage.setLocalstorage("boughtGoods", boughtGoods);
		}
    this.modifyCartItemNum = function(cartItem, direction){

        var boughtGoods = Localstorage.getLocalstorage("boughtGoods");

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

        Localstorage.setLocalstorage("boughtGoods", boughtGoods);
    }
    this.deleteItem = function(cartItem){
        var boughtGoods = Localstorage.getLocalstorage("boughtGoods");

        var removeItem = _.remove(boughtGoods, function(num) { return num.item.name === cartItem.item.name; });

        Localstorage.setLocalstorage("boughtGoods", boughtGoods);

    }
		this.generateCartGoods = function(){
        var cartList = function(className, boughtgoods){

          return {	categoryName: className,
                    boughtgoods: boughtgoods
                  };
        };

				var getGroup = function(){

						var boughtGoods = Localstorage.getLocalstorage("boughtGoods");

            var goodsObject = _.groupBy(boughtGoods, function(num) { return num.item.category; });
            var goodsArray = _.map(goodsObject);

            var drink = goodsArray[0];
            var nut = goodsArray[1];
            var snack = goodsArray[2];

						var drinks = cartList('饮料类', drink);
						var snacks = cartList('零食类', snack);
						var nuts = cartList('干果类', nut);

						Localstorage.setLocalstorage("drinks", drinks);
						Localstorage.setLocalstorage("snacks",snacks);
						Localstorage.setLocalstorage("nuts", nuts);

				};

				getGroup();

				var drinks = Localstorage.getLocalstorage("drinks");
				var snacks = Localstorage.getLocalstorage("snacks");
				var nuts = Localstorage.getLocalstorage("nuts");

				return [drinks, snacks, nuts];
		}

		this.getTotalMoney = function (){

			var boughtGoods = Localstorage.getLocalstorage("boughtGoods");
			var totalMoney = 0;

       _.forEach(boughtGoods, function(num) { totalMoney += num.num * num.item.price});

			return totalMoney;
		}
    this.getboughtGoodsLength = function(){
        var boughtGoods = Localstorage.getLocalstorage("boughtGoods");
        return  boughtGoods.length;
    }
    this.clearDate = function(){
        Localstorage.setLocalstorage("boughtGoods",0);
        Localstorage.setLocalstorage("clickcount", 0);
        Localstorage.setLocalstorage("drinks", 0);
        Localstorage.setLocalstorage("snacks", 0);
        Localstorage.setLocalstorage("nuts", 0);
    }

});
