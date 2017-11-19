(function () {

    "use strict";

    // getting the existing module
    angular.module("mongusApp")
	.controller("valuesController", valuesController);

    function valuesController($scope, $http, $mdDialog) {

        var vm = $scope;
        var urlForApi = API_URL + "/api/values/";
        vm.isBusy = false;
        vm.valueId = null;
        vm.values = [];

        vm.isGetValueDisabled = function () {
            if (vm.valueId != null && vm.valueId != undefined) {
                return false;
            }
            else {
                return true;
            }
        };

        vm.getValueById = function (ev) {
            var id = vm.valueId;

            if (id != null) {

                var apiUrl = urlForApi + id; // != null ? API_URL + "/api/values/" + id : API_URL + "/api/values/";

                console.log("Starting GET for Id: " + id + " and url: " + apiUrl);

                $http.get(apiUrl)
                    .then(function (response) {
                        // succcess
                        var result = JSON.stringify(response.data);
                        console.log("GET success, data: " + result);

                        showDialog("Response from server for Id: " + id + " is: " + result, ev);

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
            else {
                showDialog("No ID provided!", ev);
            }
        };

        vm.getAllValues = function (ev) {
            console.log("getAllValues START");

            $http.get(urlForApi)
                .then(function (response) {
                    // succcess
                    var result = JSON.stringify(response.data);
                    console.log("GET success, data: " + result);

                    angular.copy(response.data, vm.values);
                    //showDialog("Response from server is: " + result, ev);

                }, function (error) {
                    // failure
                    var err = JSON.stringify(error);
                    console.log(err);
                    alert("error: " + err);
                })
                .finally(function () {
                    vm.isBusy = false;
                });

            console.log("getAllValues END");
        };

        vm.showTable = function () {
            if (vm.values != null && vm.values.length > 0) {
                return true;
            }
            else {
                return false;
            }
        };

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

        // controller end
    }
})();