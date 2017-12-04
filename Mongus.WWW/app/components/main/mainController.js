(function () {

    "use strict";

    angular.module("mongusApp")
    .controller("mainController", mainController);

    function mainController($mdSidenav, $mdMedia, $state, $log) {

        var vm = this;
        vm.theme = "default";
        vm.userFullName = "John Smith";
        vm.showMenuButton = true;
        vm.isSidebarOpen = $mdMedia('gt-sm');
        vm.toggleSidebar = toggleSidebar;

        //$log.debug("current state: " + JSON.stringify($state.current));

        //vm.currentState = $state.current.name;

        vm.subPages = [
            { state: "Home", icon: "home" },
            { state: "Values", icon: "local_atm" },
            { state: "Register", icon: "face" },
            { state: "Users", icon: "supervisor_account" },
            { state: "Clients", icon: "contacts" }
        ];
        vm.changeState = changeState;


        function changeState(stateName) {
            $log.debug("going to page: " + stateName + " from: " + $state.current.name);
            $state.go(stateName);
            //vm.currentState = stateName.charAt(0).toUpperCase() + stateName.slice(1);
        };

        vm.defaultStyle = {
            theme: "default",
            backgroundColor: "#EEEEEE",
            color: "black"
        };

        vm.altStyle = {
            theme: "altTheme",
            backgroundColor: "#0C2238",
            color: "white"
        };

        vm.myStyle = {
            background: vm.defaultStyle.backgroundColor,
            color: vm.defaultStyle.color
        };

        vm.changeTheme = function changeTheme() {
            console.log("changing theme...");

            if (vm.theme === "default") {
                vm.theme = vm.altStyle.theme;
                vm.myStyle.background = vm.altStyle.backgroundColor;
                vm.myStyle.color = vm.altStyle.color;
            }
            else {
                vm.theme = vm.defaultStyle.theme;
                vm.myStyle.background = vm.defaultStyle.backgroundColor;
                vm.myStyle.color = vm.defaultStyle.color;
            }
        };

        function toggleSidebar() {
            vm.isSidebarOpen = !vm.isSidebarOpen;
            //$mdSidenav("sidenav").toggle();
        };

        vm.openMenu = function ($mdMenu, ev) {
            $mdMenu.open(ev);
        };
    }
})();