(function () {

    "use strict";

    angular.module("app")
        .controller("LoginController", LoginController);

    function LoginController() {

        var vm = this;
        var email, passwd = "";
        var remember = false;

        vm.signIn = signIn;
        vm.googleSignIn = googleSignIn;


        function signIn(login, password) {
            var msg = "Login: " + login + " pass: " + password + " remember: " + vm.remember;
            alert(msg);
        };

        function googleSignIn() {
            alert("Google SignIn clicked!");
        };
    }

})();