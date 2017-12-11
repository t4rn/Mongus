(function () {

    "use strict";

    angular.module("app")
	.controller("clientsController", clientsController);

    function clientsController(clientService, $mdSidenav, $log, $mdBottomSheet) {

        var vm = this;

        vm.selected = null;
        vm.clients = [];
        vm.selectClient = selectClient;
        vm.toggleSidenav = toggleSidenav;
        vm.share = share;

        clientService.loadAllClients().then(function (clients) {
            vm.clients = [].concat(clients);
            vm.selected = clients[0];
            $log.log("vm.clients.length: " + vm.clients.length);
        });

        function selectClient(client) {
            vm.selected = angular.isNumber(client) ? vm.clients[client] : client;

            console.log("vm.selected: " + JSON.stringify(vm.selected));
        }

        function toggleSidenav() {
            $mdSidenav("sidenav-left").toggle();
        }


        function share(selectedClient) {
            $log.log("Im in share... " + selectedClient.name);

            $mdBottomSheet.show({
                controller: ClientSheetController,
                controllerAs: "csc",
                templateUrl: "/app/components/clients/bottomsheet.html",
                parent: angular.element(document.querySelector("#content"))
            });

            function ClientSheetController() {
                this.client = selectedClient;
                this.items = [
                    { name: "Phone", icon: "phone", icon_url: "/assets/svg/phone.svg" },
                    { name: "Twitter", icon: "twitter", icon_url: "/assets/svg/twitter.svg" },
                    { name: "Google", icon: "google_plus", icon_url: "/assets/svg/google_plus.svg" },
                    { name: "Hangout", icon: "hangouts", icon_url: "/assets/svg/hangouts.svg" },
                ];

                this.performAction = function (action) {
                    $mdBottomSheet.hide();
                };
            }
        }
    }

})();