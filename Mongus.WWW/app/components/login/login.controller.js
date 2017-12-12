(function () {

    "use strict";

    angular.module("app")
        .controller("LoginController", LoginController);

    function LoginController() {

        var vm = this;
        var email, passwd = "";
        var remember = false;

        vm.signin = signin;
        vm.googleSignIn = googleSignIn;
        vm.register = register;


        function signin() {
            var msg = "Email: " + vm.email + " Pass: " + vm.passwd + " rememberme: " + vm.remember;
            alert(msg);
        };

        function googleSignIn() {
            alert("Google SignIn clicked!");
        };

        function register() {
            $window.location.href = '/register.html';
        }
    }

})();