angular.module('letGoApp')
  .controller('categoryAddCtrl', function($scope){

      $scope.saveButton = function(){

          // categoryManageService.saveButton($scope.currentID, $scope.currentName);
          $scope.category = localStorageService.get('category');
          // $scope.add = categoryManageService.add;
      };
  });
