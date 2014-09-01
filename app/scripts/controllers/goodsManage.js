'use strict';

angular.module('letGoApp')
	.controller('GoodsCtrl', function($scope,localStorageService, goodsManageService){

		$scope.allItems = localStorageService.get('allItems');

		$scope.editButton = function(){
				
		};

		$scope.deleteButton = function(item){

				goodsManageService.deleteButton(item);
				$scope.allItems = localStorageService.get('allItems');

		};
		$scope.addButton = function(){

				$scope.add = true;
		};
		$scope.saveButton = function(){


				goodsManageService.saveButton($scope.itemCategory, $scope.itemName, $scope.itemPrice, $scope.itemUnit);
				$scope.category = localStorageService.get('category');
				$scope.add = goodsManageService.add;
		};

	});
