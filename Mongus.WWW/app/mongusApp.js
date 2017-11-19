angular.module("mongusApp", ["ngMaterial", "ngRoute"])
.config(function ($routeProvider, $locationProvider) {

    $routeProvider.when("/values", {
        controller: "valuesController",
        controllerAs: "vm",
        templateUrl: "/app/values/values.html"
    });

    $routeProvider.when("/register", {
        controller: "valuesController",
        //controllerAs: "vm",
        templateUrl: "/app/register/register.html"
    });

    $routeProvider.when("/users", {
        controller: "userController",
        //controllerAs: "vm",
        templateUrl: "/app/user/user.html"
    });
    //$routeProvider.when("/editor/:tripName", {
    //    controller: "tripEditorController",
    //    controllerAs: "vm",
    //    templateUrl: "/views/tripEditorView.html"
    //});

    $routeProvider.otherwise({ redirectTo: "/" });
    $locationProvider.html5Mode(true);

});