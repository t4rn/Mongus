(function () {

    "use strict";

    angular.module("app")
	.controller("RegisterController", RegisterController);

    RegisterController.$inject = ["$scope"];

    function RegisterController($scope) {

        var vm = this;
        vm.emailExistsError = "An account with that email already exists in our system. Login to access your account.";
        vm.user = {
            firstName: "a",
            lastName: "b",
            email: "test@if.com",
            passwd: "1"
        };

        vm.googleSignIn = googleSignIn;
        vm.register = register;

        ///////////

        $scope.$watch('vm.user.email', function () {
            vm.registerForm.email.$setValidity('emailExists', true);
        });


        function googleSignIn() {
            alert("Google SignIn clicked!");
        };

        function register(form) {
            console.log("user: " + JSON.stringify(vm.user));

            if (vm.user.email == "test@if.com") {
                form.email.$setValidity('emailExists', false);
            }
            else {
                alert("Your account has been created!");
            }

        }
    }

})();