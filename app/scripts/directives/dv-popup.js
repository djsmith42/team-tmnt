'use strict';

angular.module('tmntApp')
  .directive('dvPopup', function () {
    return {
      template: '<div class="popup" style="display: none"><span ng-transclude></span></div>',
      restrict: 'A',
      transclude: true,
      link: function postLink(scope, element, attrs) {
        var selector = attrs.dvPopup,
          targets = angular.element(document.body).find(selector),
          show = false;

        targets.on('click', function () {
          show = !show;
          element.children('.popup').css('display', (show) ? 'block' : 'none');
        });

      }
    };
  });
