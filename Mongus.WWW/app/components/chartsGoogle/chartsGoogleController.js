(function() {

  "use strict";

  angular.module("mongusApp")
    .controller("chartsGoogleController", chartsController);


  function chartsController() {

    pieChart();
    barChart();
    columnChart();
    lineChart();
    areaChart();


    function pieChart() {
      google.charts.load('current', { 'packages': ['corechart'] });
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Credit', 30],
          ['Factoring', 20],
          ['Rest', 50]
        ]);

        var options = {
          title: 'Available funds',
          pieHole: 0.5,
          width: '100%',
          height: '100%'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        drawusChartus(data, options, chart);
      }
    }

    function barChart() {
      google.charts.load("current", { packages: ["imagebarchart"] });
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Year', 'Sales', 'Expenses'],
          ['2004', 1000, 400],
          ['2005', 1170, 460],
          ['2006', 660, 1120],
          ['2007', 1030, 540]
        ]);

        var options = {
          width: '100%',
          height: '100%',
          min: 0,
          tooltip: { isHtml: true }
        }

        var chart = new google.visualization.ImageBarChart(document.getElementById('chart_div'));

        drawusChartus(data, options, chart);
      }

    }

    function columnChart() {
      google.charts.load('current', { 'packages': ['bar'] });
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Sales', 'Expenses', 'Profit'],
          ['2014', 1000, 400, 200],
          ['2015', 1170, 460, 250],
          ['2016', 660, 1120, 300],
          ['2017', 1030, 540, 350]
        ]);

        var options = {
          chart: {
            title: 'Company Performance',
            subtitle: 'Sales, Expenses, and Profit: 2014-2017',
          },
          width: '100%',
          height: '100%'
        };

        var chart = new google.charts.Bar(document.getElementById('columnchart_material'));


        drawusChartus(data, google.charts.Bar.convertOptions(options), chart);
      }

    }

    function lineChart() {
      google.charts.load("current", { packages: ["imagelinechart"] });
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Sales', 'Expenses'],
          ['2004', 1000, 400],
          ['2005', 1170, 460],
          ['2006', 660, 1120],
          ['2007', 1030, 540]
        ]);

        var options = {
          tooltip: { isHtml: true },
          legend: 'none',
          width: '100%',
          height: '100%'
        };


        var chart = new google.visualization.ImageLineChart(document.getElementById('chart_line'));

        drawusChartus(data, options, chart);
      }

    }

    function areaChart() {
      google.charts.load('current', { 'packages': ['corechart'] });
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Sales', 'Expenses'],
          ['2013', 1000, 400],
          ['2014', 1170, 460],
          ['2015', 660, 1120],
          ['2016', 1030, 540]
        ]);

        var options = {
          title: 'Company Performance',
          hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
          vAxis: { minValue: 0 },
          tooltip: { isHtml: true },
          width: '100%',
          height: '100%'
        };

        var chart = new google.visualization.AreaChart(document.getElementById('chart_area'));

        drawusChartus(data, options, chart);
      }
    }


    function drawusChartus(data, options, chart) {
      chart.draw(data, options);

      window.addEventListener('resize',
        function() {
          chart.draw(data, options);
        },
        false);
    }
  }

})();