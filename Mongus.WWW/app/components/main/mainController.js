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
        vm.subPages = [
            { state: "home", name: "Home", icon: "home" },
            { state: "values", name: "Values", icon: "local_atm" },
            { state: "register", name: "Register", icon: "face" },
            { state: "users", name: "Users", icon: "supervisor_account" },
            { state: "clients", name: "Clients", icon: "contacts" }
        ];
        //vm.currentState = $state.current.name;
        //vm.changeState = changeState;


        // obsolete - done automatically
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
            color: "gray"
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