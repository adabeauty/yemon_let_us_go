'use strict';


angular.module('letGoApp')
  .controller('clickCountCtrl', function ($scope, BoughtGoodsService, localStorageService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.clickcount = +localStorageService.get("clickcount");


    $scope.addClickcount = function (direction, number){

        $scope.clickcount = BoughtGoodsService.addClickcount(direction, number);

      }

  });
