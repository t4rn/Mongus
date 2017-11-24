(function () {

    "use strict";

    angular.module("mongusApp")
    .controller("navbarController", navbarController);

    function navbarController($mdSidenav) {

        var vm = this;
        vm.theme = "default";

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

            if (vm.theme == "default") {
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

        vm.toggleSidebar = function () {
            $mdSidenav("leftSidebar").toggle();
        };

        vm.openMenu = function ($mdMenu, ev) {
            $mdMenu.open(ev);
        };
    }
})();