(function () {

    "use strict";

    angular.module("mongusApp")
	.controller("clientsController", clientsController);

    function clientsController(clientService, $mdSidenav) {

        var vm = this;

        vm.selected = null;
        vm.clients = [];
        vm.selectClient = selectClient;
        vm.toggleList = toggleUsersList;
        vm.share = share;

        users.loadAllClients().then(function (clients) {
            vm.clients = [].concat(clients);
            vm.selected = clients[0];
        });

        function selectClient(client) {
            console.log("selectClient with id: " + client);
            vm.selected = angular.isNumber(client) ? vm.clients(client) : null;

            console.log("vm.selected: " + vm.selected);
        }

    }


})();