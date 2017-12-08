(function () {

    "use strict";

    angular.module("if", ["ngMaterial"])
	.controller("registerController", RegisterController);

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