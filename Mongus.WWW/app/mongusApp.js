var app =
angular.module("mongusApp", ["ngMaterial", "ngRoute", "chart.js", "ui.router"])
.config(function ($routeProvider, $locationProvider, $mdThemingProvider, $provide, $mdIconProvider, $stateProvider) {

    $stateProvider
      .state("Home", {
          title: 'Home',
          url: "/",
          templateUrl: "/app/components/main/mainContent.html"
        })
      .state("Values", {
          title: "Values",
          url: "/values",
          controller: "valuesController",
          controllerAs: "vm",
          templateUrl: "/app/components/values/values.html"
        })
      .state("Register", {
          title: "Sign Up",
          url: "/register",
          controller: "registerController",
          controllerAs: "vm",
          templateUrl: "/app/components/register/register.html"
        })
      .state("Users", {
          title: "Users",
          url: "/users",
          controller: "usersController",
          //controllerAs: "vm",
          templateUrl: "/app/components/users/users.html"
        })
      .state("Clients", {
          title: "Clients",
          url: "/clients",
          controller: "clientsController",
          //controllerAs: "vm",
          templateUrl: "/app/components/clients/clients.html"
        })
      .state("Charts", {
          title: "Chartus",
          url: "/charts",
          controller: "chartsController",
          //controllerAs: "vm",
          templateUrl: "/app/components/charts/charts.html"
        })
      .state("ChartsGoogle", {
          title: "Google Charts",
          url: "/chartsGoogle",
          controller: "chartsGoogleController",
          controllerAs: "vm",
          tempateUrl: "/app/components/chartsGoogle/chartsGoogle.html"
        })
      .state("HighCharts", {
          title: "Hight Charts",
          url: "/highCharts",
          controller: "highChartsController",
          //controllerAs: "vm",
          templateUrl: "/app/components/highCharts/highCharts.html"
        });


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

app.run(['$rootScope', '$state', '$stateParams', '$log', function ($rootScope, $state, $stateParams, $log) {

    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    //$rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {

    //    $log.debug('successfully changed states');

    //    $log.debug('event', event);
    //    $log.debug('toState', toState);
    //    $log.debug('toParams', toParams);
    //    $log.debug('fromState', fromState);
    //    $log.debug('fromParams', fromParams);
    //});

    $rootScope.$on('$stateNotFound', function (event, unfoundState, fromState, fromParams) {

        $log.error('The requested state was not found: ', unfoundState);

    });

    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {

        $log.error('An error occurred while changing states: ', error);

        $log.debug('event', event);
        $log.debug('toState', toState);
        $log.debug('toParams', toParams);
        $log.debug('fromState', fromState);
        $log.debug('fromParams', fromParams);
    });

  $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
    $rootScope.title = toState.title;
    });

}]);