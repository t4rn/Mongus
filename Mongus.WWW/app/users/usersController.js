(function () {

    "use strict";

    angular.module("mongusApp")
	.controller("usersController", usersController);

    function usersController($scope, $http, $mdDialog, $q) {

        var vm = $scope;
        var urlForApi = API_URL + "/api/users/";
        vm.isBusy = false;
        vm.usersAll = [];

        // initial users getting
        getUsersAll();

        // add dialog
        vm.showAddUserDialog = function (ev) {
            $mdDialog.show({
                controller: AddUserController,
                templateUrl: '/app/users/addUser.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                fullscreen: $scope.customFullscreen, // Only for -xs, -sm breakpoints.
            })
            .then(function (data) {
                console.log("Dialog closed properly, result: " + data);
            }, function () {
                console.log("Add User dialog cancelled...");
                //alert('You cancelled the dialog.');
            });
        };

        // get user by Id
        vm.getUserById = function (ev, userId) {
            console.log("getUserById START for Id: " + userId);

            $http.get(urlForApi + userId)
                            .then(function (response) {
                                // succcess
                                var user = response.data;
                                console.log("GET success, data: " + JSON.stringify(user));
                                var dialogContent = "User: " + user.FirstName + " " + user.LastName + " born on " + user.BirthDate
                                    + " was created on " + user.CreateDate;
                                showDialog(dialogContent, ev);
                            }, function (error) {
                                // failure
                                var err = JSON.stringify(error);
                                console.log(err);
                                showDialog(err, ev);
                            })
                .finally(function () {
                    vm.isBusy = false;
                });
        }

        function AddUserController($scope, $mdDialog) {

            vm = $scope;
            var presentDate = new Date();

            vm.maxDate = new Date(
              presentDate.getFullYear(),
              presentDate.getMonth(),
              presentDate.getDate()
            );

            vm.newUser = {
                firstName: "Jan",
                lastName: "Kowalski",
                login: "jkowalski",
                email: "asd@asd.pl",
                passwd: "haslo",
                birthDate: new Date()
            };

            vm.saveUser = function () {
                console.log("SaveUser START");
                console.log("newUser: " + JSON.stringify(vm.newUser));

                addUser(vm.newUser);

                $mdDialog.hide();
            };

            vm.cancel = function () {
                console.log("Cancel START");
                $mdDialog.cancel();
            };
        }

        function addUser(user) {
            console.log("adding user do DB: " + JSON.stringify(user));

            vm.isBusy = true;

            $http.post(urlForApi, user)
                        .then(function (response) {
                            // succcess
                            var result = JSON.stringify(response.data);
                            console.log("POST success, data: " + result);
                        }, function (error) {
                            // failure
                            var err = JSON.stringify(error);
                            console.log(err);
                            alert("error: " + err);
                        })
            .finally(function () {
                vm.isBusy = false;
            });
        };

        function getUsersAll() {
            console.log("getUsersAll START");
            vm.isBusy = true;

            $http.get(urlForApi)
                        .then(function (response) {
                            // succcess
                            angular.copy(response.data, vm.usersAll);

                            console.log("usersAll: " + JSON.stringify(vm.usersAll));

                        }, function (error) {
                            // failure
                            var err = JSON.stringify(error);
                            console.log(err);
                            alert("error: " + err);
                        })
            .finally(function () {
                vm.isBusy = false;
            });
        }

        function showDialog(text, event) {
            $mdDialog.show(
                  $mdDialog.alert()
                    .parent(angular.element(document.querySelector('#popupContainer')))
                    .clickOutsideToClose(true)
                    .title('Process succeded!')
                    .textContent(text)
                    .ariaLabel('Aria Label?')
                    .ok('Ok!')
                    .targetEvent(event));
        }
    }


})();