(function () {

    "use strict";

    angular.module("mongusApp")
	.controller("chartsController", chartsController);

    function chartsController() {

        var vm = this;
        var paddingLeftRight = {
            left: 10,
            right: 10,
            top: 0,
            bottom: 0
        };

        /************************ Checkings *****************/

        vm.chartCheckingsLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        vm.chartCheckingsSeries = ['Amount'];
        vm.chartCheckingsData = [[28, 48, 40, 19, 86, 27, 90, 65, 59, 20, 81, 56]];

        vm.chartCheckingsOptions = {
            layout: {
                padding: paddingLeftRight
            },
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

        vm.fundsData = [55, 45, 11];
        var fundsSum = 0;
        for (var i = 0; i < vm.fundsData.length; i++) { fundsSum += vm.fundsData[i]; }

        vm.doughnutText = "Funds sum is: " + vm.fundsData.reduce((a, b) => a + b, 0) + " $";
        vm.doughnutTextSmall = "Available funds";
        vm.fundsLabels = ["Credit", "Factoring", "Rest"];

        vm.fundsOptions = {
            cutoutPercentage: 70,
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 20,
                    bottom: 68
                }
            },
            responsive: true,
            legend: {
                display: false,
                position: 'top',
            },
            title: {
                display: false,
                text: 'title'
            },
            animation: {
                animateScale: true,
                animateRotate: true
            }
        };

        vm.chartCashFlowClick = function (points, evt) {
            console.log(points, evt);
        };

        vm.chartFundsRandomize = function () {
            vm.fundsData = [];

            for (var i = 0; i < 3; i++) {
                var random = Math.floor(Math.random() * 100);
                vm.fundsData.push(random);
            }

            vm.doughnutText = "Funds sum is: " + vm.fundsData.reduce((a, b) => a + b, 0) + " $";
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
            layout: {
                padding: paddingLeftRight
            },
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
            layout: {
                padding: paddingLeftRight
            },
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
            layout: {
                padding: paddingLeftRight
            },
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