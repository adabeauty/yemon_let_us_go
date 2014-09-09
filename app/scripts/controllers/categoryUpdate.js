'use strict';

angular.module('letGoApp')
  .controller('categoryUpdateCtrl', function($scope, $location, localStorageService, cagtegoryUpdateService){

    $scope.updateObject = localStorageService.get('updateCategory');

    $scope.updateCategory = function(){

        localStorageService.set('updateCategory', $scope.updateObject);
        cagtegoryUpdateService.updateCategory();
        $location.path('/categoryManage');
        // $scope.updateObject = {};
        // localStorageService.set('updateCategory', $scope.updateObject);
    };
  });
