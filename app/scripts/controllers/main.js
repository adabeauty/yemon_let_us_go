'use strict';

/**
 * @ngdoc function
 * @name letGoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the letGoApp
 */
angular.module('letGoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
