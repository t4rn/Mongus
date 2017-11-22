(function () {

    "use strict";

    angular.module("mongusApp")
	.controller("chartsController", chartsController);

    function chartsController($scope, $http, $mdDialog) {

        var vm = this;

        /************************ Checkings *****************/

        vm.chartCheckingsLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        vm.chartCheckingsSeries = ['Amount'];
        vm.chartCheckingsData = [28, 48, 40, 19, 86, 27, 90, 65, 59, 20, 81, 56];

        vm.chartCheckingsOptions = {
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false,
                    },
                    ticks: {
                        fontSize: 15,
                    }
                }],
                yAxes: [{
                    id: 'y-axis-1',
                    type: 'linear',
                    display: false,
                    position: 'left'
                }, {
                    id: 'y-axis-2',
                    type: 'linear',
                    display: false,
                    position: 'right'
                }]
            },

        };

        vm.chartCheckingsClick = function (points, evt) {
            console.log(points, evt);
        };

        vm.chartCheckingsDatasetOverride = [{
            yAxisID: 'y-axis-1'
        }, {
            yAxisID: 'y-axis-2'
        }];

        vm.chartCheckingsRandomize = function () {
            vm.chartCheckingsData = [];

            for (var i = 0; i < 12; i++) {
                var random = Math.floor(Math.random() * 100);
                vm.chartCheckingsData.push(random);
            }
        }



        /************************ Available funds *****************/


        vm.chartFundsData = [55, 45];
        vm.chartFundsLabels = ["Credit", "Factoring"];

        vm.chartCashFlowClick = function (points, evt) {
            console.log(points, evt);
        };

        vm.chartFundsRandomize = function () {
            vm.chartFundsData = [];

            for (var i = 0; i < 2; i++) {
                var random = Math.floor(Math.random() * 100);
                vm.chartFundsData.push(random);
            }
        };



        /************************ Cash flow *****************/


        vm.chartCashFlowLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        vm.chartCashFlowSeries = ['Flow'];
        vm.chartCashFlowData = [[650, 590, 800, 801, 506, 505, 400, 234, 456, 678, 890, 235]];

        vm.chartCashFlowClick = function (points, evt) {
            console.log(points, evt);
        };
        vm.chartCashFlowDatasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
        vm.chartCashFlowOptions = {
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false,
                    }
                }],
                yAxes: [
                  {
                      id: 'y-axis-1',
                      type: 'linear',
                      display: true,
                      position: 'left',
                      gridLines: {
                          display: false,
                      }
                  },
                  {
                      id: 'y-axis-2',
                      type: 'linear',
                      display: false,
                      position: 'right'
                  }
                ]
            }
        };

        vm.chartCashFlowRandomize = function () {
            vm.chartCashFlowData = [];

            for (var j = 0; j < 12; j++) {
                var random = Math.floor(Math.random() * 1000);
                vm.chartCashFlowData.push(random);
            }
        }


        /************************ Accounting *****************/


        vm.chartAccountingLabels = ["January", "February", "March", "April", "May", "June", "July"];
        vm.chartAccountingSeries = ['Series A', 'Series B'];
        vm.chartAccountingData = [[650, 590, 800, 801, 506, 505, 400], [280, 408, 400, 190, 860, 207, 900]];

        vm.chartAccountingClick = function (points, evt) {
            console.log(points, evt);
        };
        vm.chartAccountingDatasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
        vm.chartAccountingOptions = {
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false,
                    }
                }],
                yAxes: [
                  {
                      id: 'y-axis-1',
                      type: 'linear',
                      display: true,
                      position: 'left',
                      gridLines: {
                          display: false,
                      }
                  },
                  {
                      id: 'y-axis-2',
                      type: 'linear',
                      display: false,
                      position: 'right'
                  }
                ]
            }
        };

        vm.chartAccountingRandomize = function () {
            vm.chartAccountingData = [];

            for (var i = 0; i < 2; i++) {
                var tempTab = [];
                for (var j = 0; j < 12; j++) {
                    var random = Math.floor(Math.random() * 1000);
                    tempTab.push(random);
                }
                vm.chartAccountingData.push(tempTab);
            }
        }
    }

})();