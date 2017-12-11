(function () {

    "use strict";

    var app = angular.module("app", ["ngMaterial", "chart.js", "ui.router"])
        .config(configBlock);

    configBlock.$inject = ["$locationProvider", "$mdThemingProvider", "$provide", "$mdIconProvider", "$stateProvider"];

    function configBlock($locationProvider, $mdThemingProvider, $provide, $mdIconProvider, $stateProvider) {

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: true,
            rewriteLinks: true
        });

        var defaultTemplateUrl = {
            templateUrl: "/app/components/layout/layout.html"
        };

        $stateProvider
          .state("home", {
              title: "Home",
              url: "/",
              views: {
                  "": defaultTemplateUrl,
                  "content@home": {
                      templateUrl: "/app/components/home/home.html"
                  }
              },
          })
          .state("values", {
              title: "Values",
              url: "/values",
              views: {
                  "": defaultTemplateUrl,
                  "content@values": {
                      templateUrl: "/app/components/values/values.html"
                  }
              }
          })
          .state("signup", {
              title: "Sign Up",
              url: "/signup",
              controller: "signupController",
              controllerAs: "vm",
              views: {
                  "": defaultTemplateUrl,
                  "content@signup": {
                      templateUrl: "/app/components/signup/signup.html"
                  }
              }
          })
          .state("users", {
              title: "Users",
              url: "/users",
              controller: "usersController",
              views: {
                  "": defaultTemplateUrl,
                  "content@users": {
                      templateUrl: "/app/components/users/users.html"
                  }
              }
          })
          .state("clients", {
              title: "Clients",
              url: "/clients",
              controller: "clientsController",
              //controllerAs: "vm",
              views: {
                  "": defaultTemplateUrl,
                  "content@clients": {
                      templateUrl: "/app/components/clients/clients.html"
                  }
              }
          })
          .state("charts", {
              title: "Chart.js",
              url: "/charts",
              controller: "chartsController",
              //controllerAs: "vm",
              views: {
                  "": defaultTemplateUrl,
                  "content@charts": {
                      templateUrl: "/app/components/charts/charts.html"
                  }
              }
          })
          //.state("login", {
          //    title: "Login",
          //    url: "/loginus",
          //    views: {
          //        "": {
          //            templateUrl: "/app/components/login/login.html",
          //            controller: "LoginController",
          //        },
          //        "content@login": {
          //            templateUrl: "/app/components/login/login.content.html"
          //        }
          //    }
          //})
          .state("notFound", {
              title: "Page not found",
              views: {
                  "": defaultTemplateUrl,
                  "content@notFound": {
                      template: "<h3 style='text-align:center'>Page not found...</h3>"
                  }
              }
          })
        ;


        $mdThemingProvider.theme('default')
          .primaryPalette('blue')
          .accentPalette('brown');

        $mdThemingProvider.theme('altTheme')
          .primaryPalette('orange')
          .warnPalette('green')
          .accentPalette('pink');

        $provide.value('themeProvider', $mdThemingProvider);

        $mdIconProvider.defaultIconSet("/assets/svg/avatars.svg", 128);

    };



    app.run(runBlock);

    runBlock.$inject = ["$rootScope", "$state", "$stateParams", "$log"];

    function runBlock($rootScope, $state, $stateParams, $log) {

        //$rootScope.$state = $state;
        //$rootScope.$stateParams = $stateParams;

        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {

            //$log.debug(toState);
            $rootScope.title = toState.title;

            //$log.debug('successfully changed states');
            //$log.debug('event', event);
            //$log.debug('toState', toState);
            //$log.debug('toParams', toParams);
            //$log.debug('fromState', fromState);
            //$log.debug('fromParams', fromParams);
        });

        $rootScope.$on('$stateNotFound', function (event, unfoundState, fromState, fromParams) {
            $log.error('The requested state was not found: ', unfoundState);
            $state.go("notFound");
        });

        $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
            $log.error('An error occurred while changing states: ', error);

            $log.debug('event', event);
            $log.debug('toState', toState);
            $log.debug('toParams', toParams);
            $log.debug('fromState', fromState);
            $log.debug('fromParams', fromParams);
        });

    };

})();
