'use strict';

angular.module('letGoApp')
	.controller('GoodsCtrl', function($scope,localStorageService, goodsManageService){

		$scope.allItems = localStorageService.get('allItems');
		$scope.allCategories = goodsManageService.allCategories();
		console.log($scope.allCategories);
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


				goodsManageService.saveButton($scope.itemCategory.name, $scope.itemName, $scope.itemPrice, $scope.itemUnit);
				$scope.allItems = localStorageService.get('allItems');
				$scope.add = goodsManageService.add;
		};

	});
