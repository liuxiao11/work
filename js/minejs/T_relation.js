define(['common','orgchart'],function(commonJs){
    $("#reset").click(function () {
        window.location.reload()
    });

    $(function() {
        var datascource = {
            'name': '目标1',
            'title': '张三',
            'target': '公司目标',
            'progress':70,
            'children': [
                { 'name': '目标2', 'title': '张三' ,'target': '部门目标','progress':70},
                { 'name': '目标3', 'title': '张三','target': '部门目标','progress':50,
                    'children': [
                        { 'name': '目标4', 'title': '张三','target': '个人目标','progress':20 },
                        { 'name': '目标5', 'title': '张三','target': '个人目标','progress':60,'collapsed': true,
                            'children':[
                                { 'name': '目标4', 'title': '张三','target': '个人目标','progress':20,'className': 'slide-up'  },
                                { 'name': '目标4', 'title': '张三','target': '个人目标','progress':20,'className': 'slide-up'  },
                                { 'name': '目标4', 'title': '张三','target': '个人目标','progress':20,'className': 'slide-up'  },
                            ]}
                    ]
                },
                { 'name': '目标6', 'title': '张三','target': '部门目标','progress':50 },
                { 'name': '目标7', 'title': '张三','target': '部门目标','progress':70 },
                { 'name': '目标8', 'title': '张三','target': '部门目标','progress':40 },
            ]
        };
        var oc = $('#chart-container1').orgchart({
            'data' : datascource,
            'nodeContent': 'title',
            'nodeTarget': 'target',
            'nodeProgress': 'progress',
            'pan': true,//通过鼠标拖放来控制OrgChart
            'zoom': true,//通过鼠标滚轮放大或缩放OrgChart
            'visibleLevel':3
        });
        oc.$chartContainer.on('touchmove', function(event) {
            event.preventDefault();
        });

    });
    $(function() {
        var datascource = {
            'name': '目标1',
            'title': '张三',
            'target': '公司目标',
            'progress':'0',
        };
        var oc = $('#chart-container2').orgchart({
            'data' : datascource,
            'nodeContent': 'title',
            'nodeTarget': 'target',
            'nodeProgress': 'progress',
            'pan': true,//通过鼠标拖放来控制OrgChart
            'zoom': true,//通过鼠标滚轮放大或缩放OrgChart
            'visibleLevel':3
        });
        oc.$chartContainer.on('touchmove', function(event) {
            event.preventDefault();
        });

    });
    $(function() {
        var datascource = {
            'name': '目标1',
            'title': '张三',
            'target': '公司目标',
            'progress':70,
            'children': [
                { 'name': '目标2', 'title': '张三' ,'target': '部门目标','progress':70},
                { 'name': '目标3', 'title': '张三','target': '部门目标','progress':50}
            ]
        };
        var oc = $('#chart-container2').orgchart({
            'data' : datascource,
            'nodeContent': 'title',
            'nodeTarget': 'target',
            'nodeProgress': 'progress',
            'pan': true,//通过鼠标拖放来控制OrgChart
            'zoom': true,//通过鼠标滚轮放大或缩放OrgChart
            'visibleLevel':3
        });
        oc.$chartContainer.on('touchmove', function(event) {
            event.preventDefault();
        });

    });
});