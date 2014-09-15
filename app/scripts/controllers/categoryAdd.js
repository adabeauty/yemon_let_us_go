'use strict';

angular.module('letGoApp')
    .controller('CategoryAddCtrl', function ($scope, $location, categoryManageService) {

        $scope.saveButton = function () {

            categoryManageService.saveButton($scope.currentID, $scope.currentName);
        };

        $scope.cancel = function () {
            $location.path('/categoryManage');
        };
    });
