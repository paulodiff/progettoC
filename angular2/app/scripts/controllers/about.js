'use strict';

/**
 * @ngdoc function
 * @name angular2App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angular2App
 */
angular.module('angular2App')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
