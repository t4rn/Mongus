var app = angular.module("app", ["ngMaterial"])
    .controller("panel2Controller", panel2Controller);

function panel2Controller($mdSidenav, $scope) {
    $scope.header
    var vm = this;

    vm.openMenu = function ($mdMenu, ev) {
        $mdMenu.open(ev);
    };

    vm.toggleSidebar = function () {
        $mdSidenav("sidenav").toggle();
    };

};


app.directive("scroll", function ($window) {
    return function (scope, element, attrs) {
        scope.isHeaderMax = true;

        angular.element($window).bind("scroll", function () {

            var icons = angular.element(document.querySelectorAll('.md-header-icon'));
            var headerAvatar = document.querySelector('.header-containt');

            if (this.pageYOffset >= 50) {
                scope.boolChangeClass = true;
                scope.isHeaderMax = false;
                scope.myStyle = {
                    'margin-top': '170px'
                };
                element.css('background-color', '#fff');
                iconTextColor('#000');
                headerAvatar.classList.add('hide');
            } else {
                scope.boolChangeClass = false;
                scope.myStyle = { 'margin-top': '476px' };
                scope.isHeaderMax = true;
                iconTextColor('#fff');
                headerAvatar.classList.remove('hide');
            }
            scope.$apply();

            function iconTextColor(color) {
                for (var i = 0; i < icons.length; i++) {
                    icons[i].style.color = color;
                }
            }

        });
    };
});