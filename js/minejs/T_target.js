define(['common','toastr','chosen','target','bootstrap_select','validator'],function(commonJs,toastr,chosen){
    /*确认完成目标*/
    $('#confirm').click(function () {
        commonJs.alert_confirm('确认完成目标','确认完成该目标？确认后该部门的进度及状态将不可更改。','info');
    });
    /*环形进度条*/
    // $(function () {
    //     commonJs.radialobj('#indicatorContainer4',10);
    //     commonJs.radialobj('#indicatorContainer5',30);
    //     commonJs.radialobj('#indicatorContainer6',80);
    // });
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
        width:'250px',
        disable_search_threshold: 5,//少于n项时隐藏搜索框
        no_results_text: "未找到任何结果",
        max_shown_results:50,//最多显示条数
        search_contains: true,//关键字模糊搜索
    });
    /*回车加ctrl搜索*/
    $('#commentCon').bind('keypress', function (event) {
        if ((event.keyCode == '13'|| event.keyCode == '10' )&& event.ctrlKey) {
            alert('回车加ctrl')
        }
    });
    /*表单验证*/
    $(document).ready(function () {
        $.validate({form: '#userForm'});
    });
    /*新增关键结果*/
    $(document).on('click','#addKey',function () {
        var demoKey = $(this).parents('.addKey').siblings('.keyRes').eq(0).html();
        $(this).parents('.addKey').before('<div class="keyRes"><div class="removeKeyR pull-right"><a href="#" class="removeKey" style="color: #1ABB9C;">- 删除此项</a></div>'+demoKey+'</div>');
    });
    /*删除关键结果*/
    $(document).on('click','.removeKeyR>.removeKey',function () {
        var key = $(this).parents('.keyRes');
        key.remove();
    });
    /*选择父目标*/
    $(document).on('click','#parent-targ',function () {
        var selectValue = $("input[name='father_select_raido']:checked").parent().parent().find('td:eq(1)').text();
        $('#chosePt').text(selectValue);
    });
});