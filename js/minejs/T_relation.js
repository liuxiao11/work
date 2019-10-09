define(['common','chosen','orgchart'],function(commonJs,chosen){
    $("#reset").click(function () {
        window.location.reload()
    });
    $("#chosen-select-join").chosen({
        width:'98%',
        disable_search_threshold: 5,//少于n项时隐藏搜索框
        no_results_text: "未找到任何结果",
        max_shown_results:50,//最多显示条数
        search_contains: true,//关键字模糊搜索
    });
    // /*环形进度条*/
    // commonJs.radialobj('#indicatorContainer7',20,25,5);
    // commonJs.radialobj('#indicatorContainer8',100,25,5);
    $(function() {
        var datascource = {
            'name': '目标1',
            'id':'1111---1',
            'title': '张三',
            'target': '公司目标',
            'progress':70,
            'weight':10,
            'children': [
                { 'name': '目标2', 'title': '张三' ,'target': '部门目标','progress':70,'weight':15,},
                { 'name': '目标3', 'title': '张三','target': '部门目标','progress':50,'weight':10,
                    'children': [
                        { 'name': '目标4', 'title': '张三','target': '个人目标','progress':20 ,'weight':13,},
                        { 'name': '目标5', 'title': '张三','target': '个人目标','progress':60,'weight':20,'collapsed': true,
                            'children':[
                                { 'name': '目标4', 'title': '张三','target': '个人目标','progress':20,'weight':5,'className': 'slide-up'  },
                            ]}
                    ]
                },
                { 'name': '目标6', 'title': '张三','target': '部门目标','progress':50 ,'weight':15,},
                { 'name': '目标8', 'title': '张三','target': '部门目标','progress':40 ,'weight':10,},
            ]
        };
        var oc = $('#chart-container1').orgchart({
            'data' : datascource,
            'nodeContent': 'title',
            'nodeTarget': 'target',
            'nodeProgress': 'progress',
            'nodeWeight': 'weight',
            'pan': true,//通过鼠标拖放来控制OrgChart
            'zoom': true,//通过鼠标滚轮放大或缩放OrgChart
            'visibleLevel':3,
        });
        oc.$chartContainer.on('touchmove', function(event) {
            event.preventDefault();
        });
        /*点击某个node*/
        oc.$chart.find('.node').click(function () {
            console.log($(this)[0].id);
            $('#myModal').modal({
                remote:"./target-modal.html"
            });
        })

    });
    $(function() {
        var datascource = {
            'name': '目标1',
            'title': '张三',
            'target': '公司目标',
            'progress':'0',
            'weight':10,
        };
        var oc = $('#chart-container2').orgchart({
            'data' : datascource,
            'nodeContent': 'title',
            'nodeTarget': 'target',
            'nodeProgress': 'progress',
            'nodeWeight': 'weight',
            'pan': true,//通过鼠标拖放来控制OrgChart
            'zoom': true,//通过鼠标滚轮放大或缩放OrgChart
            'visibleLevel':3
        });
        oc.$chartContainer.on('touchmove', function(event) {
            event.preventDefault();
        });

    });
});