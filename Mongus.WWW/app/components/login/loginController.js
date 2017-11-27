(function () {

    "use strict";

    angular.module("login", ["ngMaterial"])
	.controller("loginController", LoginController);

    function LoginController() {

        var vm = this;
        var email, passwd = "";
        var remember = false;

        vm.Signin = Signin;
        vm.GoogleSignIn = GoogleSignIn;

        function Signin() {
            var msg = "Email: " + vm.email + " Pass: " + vm.passwd + " rememberme: " + vm.remember;
            alert(msg);
        };

        function GoogleSignIn() {
            alert("Google SignIn clicked!");
        };
    }

})();