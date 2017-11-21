(function () {

    "use strict";

    angular.module("mongusApp")
    .controller("indexController", indexController);

    function indexController($scope) {

        var vm = $scope;
        vm.theme = "default";
        //vm.webStyle = "{'background-color':'blue'}";
        //vm.myColor = "green";
        vm.defaultStyle = {
            theme: "default",
            backgroundColor: "#EEEEEE"
        };

        vm.altStyle = {
            theme: "altTheme",
            backgroundColor: "#0C2238"
        };

        vm.changeTheme = function changeTheme() {
            console.log("changing theme...");

            if (vm.theme == "default") {
                vm.theme = vm.altStyle.theme;
            }
            else {
                vm.theme = vm.defaultStyle.theme;
            }
        };

        vm.getBackgroundColor = function () {
            if (vm.theme == "default") {
                return vm.defaultStyle.backgroundColor;
            }
            else {
                return vm.altStyle.backgroundColor;
            }
        }

    }
})();