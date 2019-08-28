define(['common','exporting'],function(commonJs){
// Build the chart
    var data = {
        name:'占比',
        data: [{
            name: '可控',
            y: 60,
            sliced: true,//突出显示
            selected: true
        }, {
            name: '有风险',
            y: 25
        }, {
            name: '失控',
            y: 10
        }, {
            name: '未更新',
            y: 5
        }],
        colors: ['rgba(26, 187, 156, 1)', 'rgba(255, 153, 0, 1)', 'rgba(204, 0, 0, 1)', 'rgba(204, 204, 204, 1)']
    };
    commonJs.operation(data,'operation-container');
    commonJs.operation(data,'operation-container11');
    commonJs.operation(data,'operation-container12');
    commonJs.operation(data,'operation-container13');
    var data1 = {
        name:'占比',
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
        colors: ['#3071a9', '#2aabd2', '#5cb85c','#2b542c', '#d4d4d4'],
    };
    commonJs.operation(data1,'operation-container1');
    commonJs.operation(data1,'operation-container2');
    // $.getJSON('data.json', function(data) {
    // options.series[0].data = data;
    // var chart = Highcharts.chart('operation-container2', options2);
    // });
});