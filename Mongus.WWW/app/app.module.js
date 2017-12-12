(function () {

    "use strict";

    var app = angular.module("app", ["ngMaterial", "chart.js", "ui.router"])
        .config(configBlock)
        .factory("injectCSS", injectCSS);

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

        var defaultCss = {
            load: ["injectCSS", function (obj) {
                return obj.setCSS("mainCss", "assets/css/site.css");
            }]
        };

        var loginRegisterCss = {
            load: ["injectCSS", function (obj) {
                return obj.setCSS("loginRegisterCss", "assets/css/login.css");
            }]
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
              resolve: defaultCss
          })
          .state("values", {
              title: "Values",
              url: "/values",
              views: {
                  "": defaultTemplateUrl,
                  "content@values": {
                      templateUrl: "/app/components/values/values.html"
                  }
              },
              resolve: defaultCss
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
              },
              resolve: defaultCss
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
              },
              resolve: defaultCss
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
              },
              resolve: defaultCss
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
              },
              resolve: defaultCss
          })
          .state("login", {
              title: "Login",
              url: "/loginus",
              views: {
                  "": {
                      templateUrl: "/app/components/shared/loginregister.html",
                      controller: "LoginController",
                      controllerAs: "vm",
                  },
                  "content@login": {
                      templateUrl: "/app/components/login/login.html"
                  }
              },
              resolve: loginRegisterCss
          })
          .state("register", {
              title: "Register",
              url: "/registrus",
              views: {
                  "": {
                      templateUrl: "/app/components/shared/loginregister.html",
                      controller: "RegisterController",
                      controllerAs: "vm",
                  },
                  "content@register": {
                      templateUrl: "/app/components/register/register.html"
                  }
              },
              resolve: loginRegisterCss
          })
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

    injectCSS.$inject = ["$q"];

    function injectCSS($q) {
        var injectCSS = {};
        injectCSS.setCSS = setCSS;

        function setCSS(id, url) {
            var tries = 0,
              deferred = $q.defer(),
              link;

            if (document.getElementById('link#' + id) == null) {
                link = createLink(id, url);
                link.onload = deferred.resolve;
                var headElement = document.getElementsByTagName('head')[0];
                headElement.append(link);
            }

            return deferred.promise;
        };

        function createLink(id, url) {
            var link = document.createElement('link');
            link.id = id;
            link.rel = "stylesheet";
            link.type = "text/css";
            link.href = url;
            return link;
        }

        return injectCSS;
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
