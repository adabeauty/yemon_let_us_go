'use strict';


angular.module('letGoApp')
  .controller('clickCountCtrl', function ($scope, BoughtGoodsService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.clickcount = Localstorage.getLocalstorage("clickcount");


    $scope.addClickcount = function (direction, number){

        $scope.clickcount = BoughtGoodsService.addClickcount(direction, number);

      }

  });
