(function () {

    "use strict";

    angular.module("mongusApp")
    .controller("mainController", mainController);

    function mainController($mdSidenav, $mdMedia) {

        var vm = this;
        vm.theme = "default";
        vm.userFullName = "John Smith";
        vm.showMenuButton = true;
        vm.isSidebarOpen = $mdMedia('gt-sm');
        vm.toggleSidebar = toggleSidebar;
        vm.currentPage = "Home";
        vm.subPages = [
            { url: "/", name: "Home", icon: "home" },
            { url: "/#!/values", name: "Values", icon: "local_atm" },
            { url: "/#!/register", name: "Register", icon: "face" },
            { url: "/#!/users", name: "Users", icon: "supervisor_account" },
            { url: "/#!/clients", name: "Clients", icon: "contacts" },
            { url: "/#!/charts", name: "Charts", icon: "insert_chart" },
            { url: "/#!/chartsgoogle", name: "Charts Google", icon: "pie_chart" },
            { url: "/#!/highCharts", name: "Highcharts", icon: "multiline_chart" }
        ];
        vm.changePage = changePage;


        function changePage(pageName) {
            vm.currentPage = pageName;
            console.log("page name: " + pageName);
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

        function toggleSidebar() {
            vm.isSidebarOpen = !vm.isSidebarOpen;
            //$mdSidenav("sidenav").toggle();
        };

        vm.openMenu = function ($mdMenu, ev) {
            $mdMenu.open(ev);
        };
    }
})();