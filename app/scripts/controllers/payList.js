'use strict';

angular.module('letGoApp')
  .controller('PayListCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.boughtGoods = Localstorage.getLocalstorage("boughtGoods");
    $scope.boughtGoodsLength = getboughtGoodsLength();
    $scope.totalMoney = gettotalMoney();

    $scope.clearDate = function(){

        Localstorage.setLocalstorage("boughtGoods",0);
        Localstorage.setLocalstorage("clickcount", 0);
        Localstorage.setLocalstorage("drinks", 0);
        Localstorage.setLocalstorage("snacks", 0);
        Localstorage.setLocalstorage("nuts", 0);
        $scope.$parent.clickcount = 0;
    }
  });

function getboughtGoodsLength(){
    var boughtGoods = Localstorage.getLocalstorage("boughtGoods");
    return  boughtGoods.length;
}

function gettotalMoney(){
    var boughtGoods = Localstorage.getLocalstorage("boughtGoods");
    var totalMoney = 0;
    // console.log(boughtGoods);
    for(var i=0; i<boughtGoods.length; i++){
        // console.log(boughtGoods[i].item.price);
        var price =  boughtGoods[i].item.price;
        var num = boughtGoods[i].num;
        totalMoney += price*num;
    }
    return totalMoney;
}
