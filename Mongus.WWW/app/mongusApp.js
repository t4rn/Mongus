angular.module("mongusApp", ["ngMaterial", "ngRoute", "chart.js"])
.config(function ($routeProvider, $locationProvider, $mdThemingProvider, $provide, $mdIconProvider) {

    $routeProvider.when("/values", {
        controller: "valuesController",
        controllerAs: "vm",
        templateUrl: "/app/components/values/values.html"
    });

    $routeProvider.when("/register", {
        controller: "valuesController",
        //controllerAs: "vm",
        templateUrl: "/app/components/register/register.html"
    });

    $routeProvider.when("/users", {
        controller: "usersController",
        //controllerAs: "vm",
        templateUrl: "/app/components/users/users.html"
    });

    $routeProvider.when("/clients", {
        controller: "clientsController",
        //controllerAs: "vm",
        templateUrl: "/app/components/clients/clients.html"
    });

    $routeProvider.when("/charts", {
        controller: "chartsController",
        //controllerAs: "vm",
        templateUrl: "/app/components/charts/charts.html"
    });
    $routeProvider.when("/chartsgoogle", {
      controller: "chartsGoogleController",
      controllerAs: "vm",
      templateUrl: "/app/components/chartsGoogle/chartsGoogle.html"
    });

    $routeProvider.when("/highCharts", {
        controller: "highChartsController",
        //controllerAs: "vm",
        templateUrl: "/app/components/highCharts/highCharts.html"
    });

    //$routeProvider.when("/editor/:tripName", {
    //    controller: "tripEditorController",
    //    controllerAs: "vm",
    //    templateUrl: "/views/tripEditorView.html"
    //});

    $routeProvider.otherwise({ redirectTo: "/" });
    //$locationProvider.html5Mode(true);

    $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('brown');

    $mdThemingProvider.theme('altTheme')
        .primaryPalette('orange')
        .warnPalette('green')
        .accentPalette('pink');

    $provide.value('themeProvider', $mdThemingProvider);

    $mdIconProvider.defaultIconSet("/app/assets/svg/avatars.svg", 128);

});