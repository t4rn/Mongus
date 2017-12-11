(function () {
    'use strict';
    var app = angular.module('app');
    app.controller("highChartsController", highChartsController);

    function highChartsController($scope,$window, chartData) {
        var vm = this;
        console.log("11");
        $scope.$on('$viewContentLoaded', function () {
            var checkingsChart = createCheckingsChart();
            var cashChart = createCashChart();
            var pieChart = createPieChart();
            var accountingChart = createAccountingChart();

            vm.chartCheckingsRandomize = function () {
                checkingsChart.update({
                    series: [{
                        data: chartData.getCheckings()
                    }]
                });
            };

            vm.chartCashFlowRandomize = function () {
                cashChart.update({
                    series: [{
                        data: chartData.getCashFlow()
                    }]
                });
            };
            vm.chartFundsRandomize = function () {
                pieChart.update({
                    series: [{
                        data: chartData.getAvailableFunds()
                    }]
                });
            };

            vm.chartAccountingRandomize = function () {
                accountingChart.update({
                    series: chartData.getAccounting()
                });
            }
            //$window.resize();
        });
        //var checkingsChart = createCheckingsChart();
        //console.log("22");
        //var cashChart = createCashChart();
        //var pieChart = createPieChart();
        //var accountingChart = createAccountingChart();

        



        function createCheckingsChart() {
            return new Highcharts.chart('checkingsChart', {
                chart: {
                    type: 'column',
                    backgroundColor: 'rgba(255, 255, 255, 0.0)',
                    reflow:true
                },
                title: {
                    text: 'Checkings'
                },
                xAxis: {
                    categories: chartData.getMonths(),
                    lineWidth: 0,
                    minorGridLineWidth: 0,
                    lineColor: 'transparent',
                    minorTickLength: 0,
                    tickLength: 0,
                    gridLineWidth: 0,
                    tickLength: 0,
                    tickWidth: 0,
                },
                yAxis: {
                    lineWidth: 0,
                    minorGridLineWidth: 0,
                    lineColor: 'transparent',
                    minorTickLength: 0,
                    tickLength: 0,
                    gridLineWidth: 0,
                    tickLength: 0,
                    tickWidth: 0,
                    labels: {
                        enabled: false
                    },
                    title: {
                        text: null
                    },
                },
                tooltip: {
                    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    column: {
                        pointPadding: 0.2,
                        borderWidth: 0
                    },
                    line: {
                        dashStyle: "dot"
                    },
                    series: {
                        colorByPoint: true
                    }

                },
                series: [{
                    showInLegend: false,
                    data: chartData.getCheckings()

                }]
            });
        };
        function createCashChart() {

            return new Highcharts.chart('cashChart', {
                chart: {
                    type: 'area',
                    zoomType: 'x',
                    backgroundColor: 'rgba(255, 255, 255, 0.0)'

                },
                title: {
                    text: 'Cash Flow'
                },
                xAxis: {
                    categories: chartData.getMonths(),
                    lineWidth: 0,
                    minorGridLineWidth: 0,
                    lineColor: 'transparent',
                    minorTickLength: 0,
                    tickLength: 0,
                    gridLineWidth: 0,
                    tickLength: 0,
                    tickWidth: 0
                },
                yAxis: {
                    lineWidth: 0,
                    minorGridLineWidth: 0,
                    lineColor: 'transparent',
                    labels: {
                        enabled: false
                    },
                    title: {
                        text: null
                    },
                    minorTickLength: 0,
                    tickLength: 0,
                    gridLineWidth: 0,
                    tickLength: 0,
                    tickWidth: 0
                },
                legend: {
                    enabled: false
                },
                plotOptions: {
                    area: {
                        fillColor: "#99CCFF",
                        marker: {
                            radius: 2
                        },
                        lineWidth: 1,
                        states: {
                            hover: {
                                lineWidth: 1
                            }
                        },
                        threshold: null
                    }
                },

                series: [{
                    type: 'area',
                    showInLegend: false,
                    data: chartData.getCashFlow()
                }]
            });
        };
        function createPieChart() {
            return new Highcharts.chart({
                chart: {
                    renderTo: 'fundsChart',
                    type: 'pie',
                    backgroundColor: 'rgba(255, 255, 255, 0.0)'
                },
                title: {
                    text: 'Available funds'
                },
                yAxis: {
                    labels: {
                        enabled: false
                    },
                    title: {
                        text: null
                    }
                },
                plotOptions: {
                    pie: {
                        shadow: true,
                        colors: ["#EFEFEF", "#99CCFF"]
                    }
                },
                tooltip: {
                    formatter: function () {
                        return '<b>' + this.point.name + '</b>: ' + this.y + ' %';
                    }
                },
                series: [
                    {
                        data: chartData.getAvailableFunds(),
                        size: '100%',
                        innerSize: '70%',
                        showInLegend: false,
                        dataLabels: {
                            enabled: false
                        }
                    }
                ]
            });

        };
        function createAccountingChart() {
            return new Highcharts.chart({
                chart: {
                    renderTo: 'accountingChart',
                    type: 'area',
                    backgroundColor: 'rgba(255, 255, 255, 0.0)'
                },
                title: {
                    text: 'Accounting'
                },
                xAxis: {
                    categories: chartData.getMonths(),
                    lineWidth: 0,
                    minorGridLineWidth: 0,
                    lineColor: 'transparent',
                    minorTickLength: 0,
                    tickLength: 0,
                    gridLineWidth: 0,
                    tickLength: 0,
                    tickWidth: 0

                },
                yAxis: {
                    lineWidth: 0,
                    minorGridLineWidth: 0,
                    lineColor: 'transparent',
                    labels: {
                        enabled: false
                    },
                    title: {
                        text: null
                    },
                    minorTickLength: 0,
                    tickLength: 0,
                    gridLineWidth: 0,
                    tickLength: 0,
                    tickWidth: 0
                },
                plotOptions: {
                    area: {
                        marker: {
                            enabled: false,
                            symbol: 'circle',
                            radius: 2,
                            states: {
                                hover: {
                                    enabled: true
                                }
                            }
                        }
                    }
                },
                series: chartData.getAccounting()
            });
        };

    }

})();

(function () {
    var chartData = function () {

        var getCheckings = function () {
            return randomizeSeries(12);
        };

        var getCashFlows = function () {
            return randomizeSeries(12);
        };

        var getAvailableFunds = function () {
            var firstValue = randomizeSingle(100);

            return [["Factoring", firstValue], ["Credit", 100 - firstValue]];
        };

        var getAccounting = function () {
            return [{
                showInLegend: false,
                name: "A",
                data: randomizeSeries(12),
                color: "#EFEFEF"
            },
            {
                showInLegend: false,
                name: "B",
                data: randomizeSeries(12),
                color: "#99CCFF"
            }];
        };
        var getMonths = function () {
            return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        }

        return {
            getCheckings: getCheckings,
            getCashFlow: getCashFlows,
            getAvailableFunds: getAvailableFunds,
            getAccounting: getAccounting,
            getMonths: getMonths
        };
    }

    function randomizeSeries(length) {
        var seria = [];
        for (var i = 0; i < length; i++) {
            seria.push(randomizeSingle(1000));
        }
        return seria;
    }
    function randomizeSingle(multiplier) {
        return Math.floor(Math.random() * multiplier);
    }
    var appModule = angular.module("app");
    appModule.factory("chartData", chartData);
})();