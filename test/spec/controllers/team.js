'use strict';

describe('Controller: TeamCtrl', function () {

  // load the controller's module
  beforeEach(module('tmntApp'));

  var TeamCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TeamCtrl = $controller('TeamCtrl', {
      $scope: scope,
      team: 10
    });
  }));

  it('should attach a team to the scope', function () {
    expect(scope.team).toBe(10);
  });
});
