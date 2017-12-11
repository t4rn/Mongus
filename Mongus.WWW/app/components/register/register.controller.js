(function () {

    "use strict";

    angular.module("if", ["ngMaterial"])
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