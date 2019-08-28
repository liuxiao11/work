define(['common','toastr','chosen','target','radialIndicator'],function(commonJs,toastr,chosen){
    /*确认完成目标*/
    $('#confirm').click(function () {
        commonJs.alert_confirm('确认完成目标','确认完成该目标？确认后该部门的进度及状态将不可更改。','info');
    });
    /*回车搜索*/
    $('#search').bind('keypress', function (event) {
        if (event.keyCode == "13") {
            alert("回车搜索")
        }
    });
    /*环形进度条*/
    $(function () {
        commonJs.radialobj('#indicatorContainer1',20,25,5);
        commonJs.radialobj('#indicatorContainer2',100,25,5);
    });
    /*多选搜索*/
    // $.ajax({
    //     url: '',
    //     type:'post',
    //     dataType: "json",
    //     success: function (data) {
    //         for (var i = 0; i < data.res.length; i++) {
    //             $('#chosen-select').append("<option value=" + data.res[i].id + ">" + data.res[i].name + "</option>");
    //         }
    //         $("#chosen-select").chosen({
    //             width:'250px',
    //             disable_search_threshold: 5,
    //             max_shown_results:50,
    //             no_results_text: "未找到任何结果"
    //         });
    //     }
    // });
    $("#chosen-select").chosen({
        width:'98%',
        disable_search_threshold: 5,//少于n项时隐藏搜索框
        no_results_text: "未找到任何结果",
        max_shown_results:50,//最多显示条数
        search_contains: true,//关键字模糊搜索
    });
    /*提交评分*/
    $('#submit-scr').click(function () {
        toastr.success('提交数据成功');
        // toastr.error('Error');
    })
});