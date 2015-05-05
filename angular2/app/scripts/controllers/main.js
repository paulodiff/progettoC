'use strict';

/**
 * @ngdoc function
 * @name angular2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angular2App
 */
angular.module('angular2App')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
