define(['common','chosen','bootstrap_select','validator'],function(commonJs,chosen){
    /*指标删除*/
    commonJs.confirm('删除','确定要删除吗?','myModalDel');
    /*回车搜索*/
    $('#search').bind('keypress', function (event) {
        if (event.keyCode == "13") {
            var search = $('#search').val();
            alert("回车搜索"+search)
        }
    });
    /*多选搜索*/
    // $.ajax({
    //     url: '',
    //     type:'post',
    //     dataType: "json",
    //     success: function (data) {
    //         for (var i = 0; i < data.res.length; i++) {
    //             $('#chosen-select-join').append("<option value=" + data.res[i].id + ">" + data.res[i].name + "</option>");
    //         }
    //         $("#chosen-select-join").chosen({
    //             width:'250px',
    //             disable_search_threshold: 5,
    //             max_shown_results:50,
    //             no_results_text: "未找到任何结果"
    //             search_contains: true,//关键字模糊搜索
    //         });
    //     }
    // });
    $("#chosen-select-join").chosen({
        width:'100%',
        disable_search_threshold: 5,//少于n项时隐藏搜索框
        no_results_text: "未找到任何结果",
        max_shown_results:50,//最多显示条数
        search_contains: true,//关键字模糊搜索
    });
    /*表单校验*/
    $(document).ready(function () {
        $.validate({form: '#userForm'});
        $.validate({form: '#userForm1'});
        $.validate({form: '#userForm2'});
        $.validate({form: '#userForm3'});
        $.validate({form: '#userForm4'});
        $.validate({form: '#userForm5'});
    });
});