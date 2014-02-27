'use strict';

ddescribe('TestCtrl', function () {
  beforeEach(module('tmntApp'));
  var scope;

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    $controller('TestCtrl', {
      $scope: scope
    });
  }));

  it('counts lots of mouse clicks', function() {
    for (var i=0; i<33; i++) {
        scope.mouseClicked();
    }
    expect(scope.clickCount).toBe(33)
  });

  it('determines if click count is odd', function() {
    scope.mouseClicked();
    expect(scope.isEven).toBe(false);
    expect(scope.isOdd).toBe(true);
  })

  it('determines if click count is even', function() {
    scope.mouseClicked();
    scope.mouseClicked();
    expect(scope.isEven).toBe(true);
    expect(scope.isOdd).toBe(false);
  })

  it('downloads frogs from server on click', inject(function($httpBackend) {
    $httpBackend.expectGET('/frogs').respond([{name: 'Kermit'},{name: 'Frog'}]);
    scope.downloadFrogs();
    $httpBackend.flush()
    expect(scope.frogs).toEqual([{name: 'Kermit'}, {name: 'Frog'}]);
  }));

  it('downloads OTHER frogs from server on click', inject(function($httpBackend) {
    $httpBackend.expectGET('/frogs').respond([{name: 'Frog'}]);
    scope.downloadFrogs();
    $httpBackend.flush()
    expect(scope.frogs).toEqual([{name: 'Frog'}]);
  }));
});

describe('TeamCtrl', function () {
  beforeEach(module('tmntApp'));

  var scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    $controller('TeamCtrl', {
      $scope: scope
    });
  }));

  it('responds to the button click', function () {
      expect(false).toBe(false);
  });
});
