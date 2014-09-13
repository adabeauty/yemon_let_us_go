'use strict';

angular.module('letGoApp')
    .controller('MainCtrl', function ($scope) {

        $scope.$emit('to-parent-navigator-inmain');
    });
