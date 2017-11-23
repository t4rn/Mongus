﻿(function () {

    "use strict";

    angular.module("mongusApp")
	.controller("chartsController", chartsController);

    function chartsController($scope, $http, $mdDialog) {

        var vm = this;

        /************************ Checkings *****************/

        vm.chartCheckingsLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        vm.chartCheckingsSeries = ['Amount'];
        vm.chartCheckingsData = [[28, 48, 40, 19, 86, 27, 90, 65, 59, 20, 81, 56]];

        vm.chartCheckingsOptions = {
            datasetFill: false,
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false,
                    },
                    ticks: {
                        fontSize: 15,
                        beginAtZero: true
                    }
                }],
                yAxes: [{
                    id: 'y-axis-1',
                    type: 'linear',
                    display: true,
                    position: 'left',
                    ticks: {
                        beginAtZero: true
                    }
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
            var tempTab = [];
            for (var i = 0; i < 12; i++) {
                var random = Math.floor(Math.random() * 100);
                tempTab.push(random);
            }

            vm.chartCheckingsData.push(tempTab);
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
                      },
                      ticks: {
                          beginAtZero: true
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
            var tempTab = [];

            for (var j = 0; j < 12; j++) {
                var random = Math.floor(Math.random() * 1000);
                tempTab.push(random);
            }

            vm.chartCashFlowData.push(tempTab);
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
                      },
                      ticks: {
                          beginAtZero: true
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

        /************************ Goals *****************/

        vm.chartGoalsLabels = ["Savings", "Sales", "Expenses"];
        vm.chartGoalsSeries = ["Amount"];
        vm.chartGoalsData = [[22, 48, 40]];

        vm.chartGoalsOptions = {
            datasetFill: false,
            scales: {
                xAxes: [{
                    display: true,
                    gridLines: {
                        display: false,
                    },
                    ticks: {
                        fontSize: 15,
                    }
                }],
                yAxes: [{
                    display: true,
                    position: 'left'
                }, {
                    display: false,
                    position: 'right'
                }]
            },
        };


        vm.chartGoalsOptions = {
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false,
                    },
                    ticks: {
                        beginAtZero: true
                    }
                }],
            },

        };

        vm.chartGoalsClick = function (points, evt) {
            console.log(points, evt);
        };

        vm.chartGoalsDatasetOverride = [];

        vm.chartGoalsRandomize = function () {
            vm.chartGoalsData = [];
            var tempTab = [];
            for (var i = 0; i < 3; i++) {
                var random = Math.floor(Math.random() * 100);
                tempTab.push(random);
            }

            vm.chartGoalsData.push(tempTab);
        }


    }

})();