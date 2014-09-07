'use strict';

angular.module('letGoApp')
	.controller('CategoryCtrl', function($scope, categoryManageService, localStorageService){

		$scope.category = localStorageService.get('category');


		$scope.editButton = function(categoryDetail){

			// $location.path('/categoryUpdate');
      $location.search({'id':categoryDetail.id});
		};

		$scope.deleteButton = function(every){

				categoryManageService.deleteButton(every);
				$scope.category = localStorageService.get('category');

		};

	});
