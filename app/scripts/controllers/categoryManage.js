'use strict';

angular.module('letGoApp')
	.controller('CategoryCtrl', function($scope, $location, categoryManageService, localStorageService){

		$scope.category = localStorageService.get('category');


		$scope.editButton = function(categoryDetail){

      // $location.search({'ID':categoryDetail.ID});
			localStorageService.set('updateCategory', categoryDetail);
			// console.log($location.search().ID);
		};

		$scope.deleteButton = function(every){

				categoryManageService.deleteButton(every);
				$scope.category = localStorageService.get('category');

		};

	});
