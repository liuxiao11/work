define(['common','exporting'],function(commonJs){
    // Build the chart
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
                name: '81~100%',
                y: 60,
                sliced: true,
                selected: true
            }, {
                name: '61~80%',
                y: 25
            }, {
                name: '41~60%',
                y: 10
            }, {
                name: '21~40%',
                y: 3
            }, {
                name: '0~20%',
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
    var options3 = {
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
                name: '1~4次',
                y: 60,
                sliced: true,
                selected: true
            }, {
                name: '5~8次',
                y: 25
            }, {
                name: '9~12次',
                y: 10
            }, {
                name: '13次以上',
                y: 3
            }, {
                name: '从未更新',
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
        colors: ['#3071a9', '#2aabd2', '#5cb85c','#2b542c', '#d4d4d4'],
        credits:'enabled',
        exporting:[{
            buttons:[{
                exportButton:'enabled',
            }]
        }],
    };
    var chart3 = Highcharts.chart('operation-container3', options3);
    var options4 = {
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
                name: '1~4次',
                y: 60,
                sliced: true,
                selected: true
            }, {
                name: '5~8次',
                y: 25
            }, {
                name: '9~12次',
                y: 10
            }, {
                name: '13次以上',
                y: 3
            }, {
                name: '从未更新',
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
        colors: ['#3071a9', '#2aabd2', '#5cb85c','#2b542c', '#d4d4d4'],
        credits:'enabled',
        exporting:[{
            buttons:[{
                exportButton:'enabled',
            }]
        }],
    };
    var chart4 = Highcharts.chart('operation-container4', options4);
    // $.getJSON('data.json', function(data) {
    // options.series[0].data = data;
    // var chart = Highcharts.chart('operation-container1', options1);
    // });
});