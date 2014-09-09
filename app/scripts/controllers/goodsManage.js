'use strict';

angular.module('letGoApp')
	.controller('GoodsCtrl', function($scope, $location, localStorageService, goodsManageService){

		$scope.allGoods = localStorageService.get('allGoods');
		// $scope.allCategories = goodsManageService.getAllCategories();

		$scope.editButton = function(){

		};

		$scope.deleteButton = function(item){

				goodsManageService.deleteButton(item);
				$scope.allGoods = localStorageService.get('allGoods');

		};
		$scope.addButton = function(){

				$location.path('/goodsAdd');
		};
		// $scope.saveButton = function(){
		//
		//
		// 		goodsManageService.saveButton($scope.itemCategory, $scope.itemName, $scope.itemPrice, $scope.itemUnit);
		// 		$scope.allItems = localStorageService.get('allGoods');
		// 		$scope.add = goodsManageService.add;
		// };

	});
