angular.module("clientApp", ["ngMaterial"])
.config(function ($mdIconProvider) {

    $mdIconProvider.defaultIconSet("/assets/svg/avatars.svg", 128);

});


(function () {

    "use strict";

    angular.module("clientApp")
        .controller("clientsController", clientsController)
        .service("clientService", clientService);

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

            //console.log("vm.selected: " + JSON.stringify(vm.selected));
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



    /***************      CLIENT SERVICE   ***************/



    function clientService($q) {

        var vm = this;
        var clients = [
          {
              name: 'Lia Lugo',
              avatar: 'svg-1',
              content: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue castello caerphilly chalk and cheese. Lancashire.'
          },
          {
              name: 'George Duke',
              avatar: 'svg-2',
              content: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.'
          },
          {
              name: 'Gener Delosreyes',
              avatar: 'svg-3',
              content: "Raw denim pour-over readymade Etsy Pitchfork. Four dollar toast pickled locavore bitters McSweeney's blog. Try-hard art party Shoreditch selfies. Odd Future butcher VHS, disrupt pop-up Thundercats chillwave vinyl jean shorts taxidermy master cleanse letterpress Wes Anderson mustache Helvetica. Schlitz bicycle rights chillwave irony lumberhungry Kickstarter next level sriracha typewriter Intelligentsia, migas kogi heirloom tousled. Disrupt 3 wolf moon lomo four loko. Pug mlkshk fanny pack literally hoodie bespoke, put a bird on it Marfa messenger bag kogi VHS."
          },
          {
              name: 'Lawrence Ray',
              avatar: 'svg-4',
              content: 'Scratch the furniture spit up on light gray carpet instead of adjacent linoleum so eat a plant, kill a hand pelt around the house and up and down stairs chasing phantoms run in circles, or claw drapes. Always hungry pelt around the house and up and down stairs chasing phantoms.'
          },
          {
              name: 'Ernesto Urbina',
              avatar: 'svg-2',
              content: 'Webtwo ipsum dolor sit amet, eskobo chumby doostang bebo. Bubbli greplin stypi prezi mzinga heroku wakoopa, shopify airbnb dogster dopplr gooru jumo, reddit plickers edmodo stypi zillow etsy.'
          },
          {
              name: 'Gani Ferrer',
              avatar: 'svg-4',
              content: "Lebowski ipsum yeah? What do you think happens when you get rad? You turn in your library card? Get a new driver's license? Stop being awesome? Dolor sit amet, consectetur adipiscing elit praesent ac magna justo pellentesque ac lectus. You don't go out and make a living dressed like that in the middle of a weekday. Quis elit blandit fringilla a ut turpis praesent felis ligula, malesuada suscipit malesuada."
          }
        ];

        // Promise-based API
        return {
            loadAllClients: function () {
                // Simulate async nature of real remote calls
                return $q.when(clients);
            }
        };

    }

})();