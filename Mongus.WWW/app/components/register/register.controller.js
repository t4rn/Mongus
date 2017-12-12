(function () {

    "use strict";

    angular.module("app")
	.controller("RegisterController", RegisterController);

    function RegisterController() {

        var vm = this;

        vm.googleSignIn = googleSignIn;
        vm.register = register;

        function googleSignIn() {
            alert("Google SignIn clicked!");
        };

        function register() {
            alert("Register clicked!");
        }
    }

})();