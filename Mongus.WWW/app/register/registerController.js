
"use strict";

// getting the existing module
angular.module("mongusApp")
.controller("registerController", registerController)
.service("myService", myService);

function registerController($scope, myService) {

    $scope.SaveUser = function () {

        var User =
        {
            FName: $scope.fName,
            LName: $scope.lName,
            Email: $scope.uEmail,
            Password: $scope.uPwd,
            UserName: $scope.uName
        };

        var response = myService.AddUser(User);
        response.then(function (data) {
            if (data.data == "1") {

                clearFields();
                alert("User Created !");
                window.location.href = "/Register/Login";
            } else if (data.data == "-1") {

                alert("user already present !");
            } else {

                clearFields();
                alert("Invalid data entered !");
            }
        });
    }

    function clearFields() {
        $scope.fName = "";
        $scope.lName = "";
        $scope.uEmail = "";
        $scope.uPwd = "";
        $scope.uName = "";
        $scope.userForm.$setPristine();
    }
};

function myService() {
    this.AddUser = function (User) {
        var response = $http
        ({
            method: "post",
            url: "/Register/AddUser",
            data: JSON.stringify(User),
            dataType: "json"
        });
        return response;
    };
}