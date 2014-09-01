'use strict';

angular.module('letGoApp')
	.controller('CategoryCtrl', function($scope, categoryManageService, localStorageService){

		$scope.category = localStorageService.get('category');


		$scope.editButton = function(){

		};

		$scope.deleteButton = function(every){

				categoryManageService.deleteButton(every);
				$scope.category = localStorageService.get('category');

		};
		$scope.addButton = function(){

				$scope.add = true;
		};
		$scope.saveButton = function(){

				categoryManageService.saveButton($scope.currentID, $scope.currentName);
				$scope.category = localStorageService.get('category');
				$scope.add = categoryManageService.add;
		};

	});
