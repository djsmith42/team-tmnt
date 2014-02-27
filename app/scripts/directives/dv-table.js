'use strict';

angular.module('tmntApp')
  .directive('dvTable', function () {
    return {
      templateUrl: 'views/directives/dv-table.html',
      restrict: 'A',
      scope: {
        dvTable: '=',
        dvTableHeaders: '='
      }
    };
  });
