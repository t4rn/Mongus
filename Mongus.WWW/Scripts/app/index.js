(function () {
    'use strict';

    angular.module('MongusApp', ['ngMaterial'])
        .controller('HomeController', HomeController);

    function HomeController($scope) {
        $scope.currentNavItem = 'page1';

        $scope.goto = function (page) {
            console.log("Goto " + page);
        }
    }
})();