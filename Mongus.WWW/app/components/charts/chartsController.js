(function () {

    "use strict";

    angular.module("mongusApp")
	.controller("chartsController", chartsController);

    function chartsController($scope, $http, $mdDialog) {

        var vm = this;
        var urlForApi = API_URL + "/api/users/";
        vm.isBusy = false;
    }


})();