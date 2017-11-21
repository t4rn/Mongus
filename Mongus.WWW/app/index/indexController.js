(function () {

    "use strict";

    angular.module("mongusApp")
    .controller("indexController", indexController);

    function indexController($scope, $mdSidenav) {

        var vm = $scope;
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
    }
})();