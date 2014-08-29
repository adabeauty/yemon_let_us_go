describe('cartItemService test: ', function(){

    var BoughtGoodsService,localStorageService;
    var store = {};
    beforeEach(module('letGoApp'));

    beforeEach(inject(function ($injector){

        BoughtGoodsService = $injector.get('BoughtGoodsService');
        localStorageService =  $injector.get('localStorageService');

        spyOn(localStorageService,'get').andCallFake(function (key) {
            return store[key];
        });
        spyOn(localStorageService,'set').andCallFake(function (key,value) {
            return store[key] = value;
        });

    }));
    describe('test boughtItem():',function(){
        it('item class generator:',function(){
            var boughtItem = BoughtGoodsService.BoughtItem({category:'饮料类', name:'可口可乐', price:'3.00', unit:'瓶'}, 3);
            expect(boughtItem).toEqual({num:3,
                                        item:{category:'饮料类', name:'可口可乐', price:'3.00', unit:'瓶'}
                                       });
        });
    });
    describe('test addClickcount:', function(){
        beforeEach(function(){
            localStorageService.set('clickcount', 10);
        });
        it('up click count work:', function(){

            // localStorageService.set('clickcount', 10);
            var clickCount_up = BoughtGoodsService.addClickcount(1, 5);
            expect(clickCount_up).toBe(15);

        });
        it('down click count work:', function(){

            localStorageService.set('clickcount', 10);
            var clickCount_down = BoughtGoodsService.addClickcount(0, 5);
            expect(clickCount_down).toBe(5);

        });
    });

    var item, existItem, noExistItem, boughtItem;
    beforeEach(function(){

        newItem = {category:'饮料类', name:'可口可乐', price:'3.00', unit:'瓶'};
        boughtItem = {num:1, item:{category:'饮料类', name:'可口可乐', price:'3.00', unit:'瓶'}};
        noExistItem = {category:'饮料类', name:'雪碧', price:'3.00', unit:'瓶'};

    });
    var exist_name, unexist_name;
    describe('test goodsHasExist():',function(){
        beforeEach(function(){
            exist_name = '可口可乐';
            unexist_name = '雪碧';
        });
        it('goods exist:',function(){
            var result = BoughtGoodsService.goodsHasExist(exist_name, [boughtItem]);
            console.log(result);
            expect(result.item.name).toEqual('可口可乐');
        });
        it('goods unExist:',function(){
            var result = BoughtGoodsService.goodsHasExist(unexist_name, [boughtItem]);
            console.log(result);
            expect(result).toEqual(false);
        });
    });

    describe('test add_cart_num():',function(){

        beforeEach(function(){

            localStorageService.set('boughtGoods', boughtItem);

        });

        it('boughtGoods is 0',function(){

            spyOn(BoughtGoodsService,'goodsHasExist').andReturn(false);

            spyOn(BoughtGoodsService,'BoughtItem').andReturn(boughtItem);

            localStorageService.set('boughtGoods', 0);
            BoughtGoodsService.add_cart_num(newItem);

            var boughtGoods = localStorageService.get('boughtGoods');

            expect(BoughtGoodsService.goodsHasExist).toHaveBeenCalled();
            expect(BoughtGoodsService.BoughtItem).toHaveBeenCalled();
            expect(boughtGoods[0].item.name).toEqual('可口可乐');
            expect(boughtGoods[0].num).toEqual(1);
        });

        it('boughtGoods is exist',function(){

            spyOn(BoughtGoodsService,'goodsHasExist').andReturn(boughtItem);
            BoughtGoodsService.add_cart_num(boughtItem);

            var boughtGoods = localStorageService.get('boughtGoods');

            expect(BoughtGoodsService.goodsHasExist).toHaveBeenCalled();
            expect(boughtGoods.num).toEqual(2);
        });

    });

    var className;
    describe('test cartList()', function(){

        beforeEach(function(){
            className = '饮料类';
        });
        it('cartList work',function(){
            var cartList_result = BoughtGoodsService.cartList(className, boughtItem);
            console.log(cartList_result);
            expect(cartList_result.categoryName).toEqual('饮料类');
        });

    });

    var boughtItems;
    describe('test getgroup():', function(){

        beforeEach(function(){
            boughtItems = [ {num:1, item:{category:'饮料类', name:'可口可乐', price:'3.00', unit:'瓶'}},
                            {num:3, item:{category:'零食类', name:'可比克', price:'4.50', unit:'袋'}},
                            {num:4, item:{category:'干果类', name:'开心果', price:'15.00', unit:'袋'}}
                          ];
            localStorageService.set('boughtGoods', boughtItems);

        });
        it('getgroup work',function(){
            BoughtGoodsService.getGroup();

            var drinks = localStorageService.get("drinks");
            var nuts = localStorageService.get("nuts");
            var snacks = localStorageService.get("snacks");

            expect(drinks.categoryName).toEqual('饮料类');

        });

    });

    var getGroup_item;
    describe('test generateCartGoods():',function(){

        beforeEach(function(){
            getGroup_item = [ { categoryName:'饮料类',
                                boughtgoods:{num:1, item:{category:'饮料类', name:'可口可乐', price:'3.00', unit:'瓶'}}
                              },
                              { categoryName:'零食类',
                                boughtgoods:{num:3, item:{category:'零食类', name:'可比克', price:'4.50', unit:'袋'}}
                              },
                              { categoryName:'干果类',
                                boughtgoods:{num:4, item:{category:'干果类', name:'开心果', price:'15.00', unit:'袋'}}
                              }
                            ];
            spyOn(BoughtGoodsService,'getGroup').andCallFake(function(){

                localStorageService.set("drinks",getGroup_item[0]);
                localStorageService.set("snacks",getGroup_item[1]);
                localStorageService.set("nuts",getGroup_item[2]);
            });
        });

        it('invoke getGroup', function(){

            var generateCartGoods_result = BoughtGoodsService.generateCartGoods();
            expect(BoughtGoodsService.getGroup).toHaveBeenCalled();

        });

        it('the length of generateCartGoods', function(){

            var generateCartGoods_result = BoughtGoodsService.generateCartGoods();
            expect(generateCartGoods_result.length).toBe(3);

        });

        it('the content of generateCartGoods', function(){

            var generateCartGoods_result = BoughtGoodsService.generateCartGoods();
            console.log(generateCartGoods_result);
            expect(generateCartGoods_result[1].categoryName).toEqual('零食类');
            expect(generateCartGoods_result[0].boughtgoods.num).toBe(1);
            expect(generateCartGoods_result[2].boughtgoods.item.name).toEqual('开心果');
            expect(generateCartGoods_result[2].boughtgoods.item.price).toEqual('15.00');

        });
    });

})
