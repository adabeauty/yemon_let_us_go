'use strict';

angular.module('letGoApp')
	.controller('CategoryCtrl', function($scope, $location, categoryManageService, localStorageService){

		$scope.category = localStorageService.get('category');


		$scope.editButton = function(categoryDetail){

			localStorageService.set('updateCategory', categoryDetail);
		};

		$scope.deleteButton = function(every){

				categoryManageService.deleteButton(every);
				$scope.category = localStorageService.get('category');

		};
	});
