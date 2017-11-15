angular.module('mongusApp', ['ngMaterial'])

.controller('HomeController', function ($scope) {
    $scope.title1 = 'Normal Button';
    $scope.title4 = 'Warn Button';
    $scope.isDisabled = true;

    $scope.googleUrl = 'http://google.com';

});