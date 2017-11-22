angular.module("mongusApp", ["ngMaterial", "ngRoute"])
.config(function ($routeProvider, $locationProvider, $mdThemingProvider, $provide) {

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

    //$routeProvider.when("/editor/:tripName", {
    //    controller: "tripEditorController",
    //    controllerAs: "vm",
    //    templateUrl: "/views/tripEditorView.html"
    //});

    $routeProvider.otherwise({ redirectTo: "/" });
    //$locationProvider.html5Mode(true);

    $mdThemingProvider.theme('default')
        .primaryPalette('indigo')
        .accentPalette('brown');

    $mdThemingProvider.theme('altTheme')
        .primaryPalette('orange')
        .warnPalette('green')
        .accentPalette('pink');

    $provide.value('themeProvider', $mdThemingProvider);

});