angular.module('letGoApp')
  .controller('CategoryAddCtrl', function($scope, $location, categoryAddService){

      $scope.saveButton = function(){

          categoryAddService.saveButton($scope.currentID, $scope.currentName);
      };

      $scope.cancel = function(){
          $location.path('/categoryManage');
      };
  });
