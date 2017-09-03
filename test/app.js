import angular from 'angular';
import 'angular-mocks/angular-mocks';
import '../src/app'
import { expect } from 'chai'
describe('PasswordController', function() {
  beforeEach(angular.mock.module('app'));

  var $controller;

  beforeEach(angular.mock.inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('$scope.grade', function() {
    it('sets the strength to "strong" if the password length is >8 chars', function() {
      var $scope = {};
      var controller = $controller('PasswordController', { $scope: $scope });
      $scope.password = 'longerthaneightchars';
      $scope.grade();
      expect($scope.strength).to.be.equal('strong');
    });
  });
});
