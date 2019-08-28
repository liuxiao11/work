define(["common","exporting"],function(commonJs){
    // Build the chart
    $(document).ready(function() {
        var options1 = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie',
                backgroundColor: 'none',
            },
            title: {
                text: ''
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                name: '占比',
                colorByPoint: true,
                data: [{
                    name: 'S',
                    y: 60,
                    sliced: true,
                    selected: true
                }, {
                    name: 'A',
                    y: 25
                }, {
                    name: 'B+',
                    y: 10
                }, {
                    name: 'B',
                    y: 3
                }, {
                    name: 'B-',
                    y: 2
                }],
            }],
            legend:{
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'top',
                borderWidth: 0,
                itemMarginTop:10
            },
            colors: ['rgba(0, 102, 102, 1)', 'rgba(0, 128, 0, 1)', 'rgba(0, 102, 204, 1)','rgba(27, 174, 239, 1)', 'rgba(204, 204, 204, 1)'],
            credits:'enabled',
            exporting:[{
                buttons:[{
                    exportButton:'enabled',
                }]
            }],
        };
        var chart1 = Highcharts.chart('operation-container1', options1);
        var options2 = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie',
                backgroundColor: 'none',
            },
            title: {
                text: ''
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                name: '占比',
                colorByPoint: true,
                data: [{
                    name: 'S',
                    y: 60,
                    sliced: true,
                    selected: true
                }, {
                    name: 'A',
                    y: 25
                }, {
                    name: 'B+',
                    y: 10
                }, {
                    name: 'B',
                    y: 3
                }, {
                    name: 'B-',
                    y: 2
                }],
            }],
            legend:{
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'top',
                borderWidth: 0,
                itemMarginTop:10
            },
            colors: ['rgba(0, 102, 102, 1)', 'rgba(0, 128, 0, 1)', 'rgba(0, 102, 204, 1)','rgba(27, 174, 239, 1)', 'rgba(204, 204, 204, 1)'],
            credits:'enabled',
            exporting:[{
                buttons:[{
                    exportButton:'enabled',
                }]
            }],
        };
        var chart2 = Highcharts.chart('operation-container2', options2);
        // $.getJSON('data.json', function(data) {
        // options.series[0].data = data;
        // var chart = Highcharts.chart('operation-container2', options1);
        // });
    });
});