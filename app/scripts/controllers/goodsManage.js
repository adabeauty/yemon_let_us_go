'use strict';

angular.module('letGoApp')
	.controller('GoodsCtrl', function($scope, localStorageService, goodsManageService){

		// $scope.allItems = localStorageService.get('allItems');
		$scope.allItems = localStorageService.get('allGoods');
		$scope.allCategories = goodsManageService.getAllCategories();

		$scope.editButton = function(){

		};

		$scope.deleteButton = function(item){

				goodsManageService.deleteButton(item);
				$scope.allItems = localStorageService.get('allGoods');

		};
		$scope.addButton = function(){

				$scope.add = true;
		};
		$scope.saveButton = function(){


				goodsManageService.saveButton($scope.itemCategory, $scope.itemName, $scope.itemPrice, $scope.itemUnit);
				$scope.allItems = localStorageService.get('allGoods');
				$scope.add = goodsManageService.add;
		};

	});
