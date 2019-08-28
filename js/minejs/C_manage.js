define(['common','chosen','moment','datetimepicker','bootstrap_select','validator','paging','bootstrapValidator'],function(commonJs,chosen){
    /*分页*/
    setPage(1,10);
    function setPage(pageCurrent, pageSum) {
        $("#paging").bootstrapPaginator({
            bootstrapMajorVersion: 3,//设置版本号
            currentPage: pageCurrent,// 当前页
            totalPages: pageSum,// 总页数
            numberOfPages: 5,//	设置控件显示的页码数。
            size: "small",//控件大小
            itemTexts:function(type,page, current){//控件文字
                switch (type) {
                    case "first":
                        return "首页";
                    case "prev":
                        return "上一页";
                    case "next":
                        return "下一页";
                    case "last":
                        return "尾页";
                    case "page":
                        return page;
                }
            },
            //当单击操作按钮的时候, 执行该函数, 调用ajax渲染页面
            onPageClicked: function (event,originalEvent,type,page) {
                // 把当前点击的页码赋值给currentPage, 调用ajax,渲染页面
                currentPage = page;
                alert(page)
            }
        })
    }
    /* modal 框审批流程删除*/
    $(document).on('click','.delConfirm',function () {
        commonJs.alert_confirm('删除','确定要删除吗?','warning');
    });
    /*考核删除*/
    commonJs.confirm('删除','确定要删除吗?','myModalDel');
    /*日期选择*/
    var picker1 = $('#datetimepicker1').datetimepicker({
        format: 'yyyy-mm-dd hh:ii:ss',
        dateFormat: 'yyyy-mm-dd',//日期显示格式
        timeFormat:'HH:mm:ss',//时间显示格式
        todayBtn:  1,
        autoclose: 1,
        minView:0,  //0表示可以选择小时、分钟   1只可以选择小时
        minuteStep:1,//分钟间隔1分钟
    });
    var picker2 = $('#datetimepicker2').datetimepicker({
        format: 'yyyy-mm-dd hh:ii:ss',
        dateFormat: 'yyyy-mm-dd',//日期显示格式
        timeFormat:'HH:mm:ss',//时间显示格式
        todayBtn:  1,
        autoclose: 1,
        minView:0,  //0表示可以选择小时、分钟   1只可以选择小时
        minuteStep:1,//分钟间隔1分钟
        useCurrent: false
    });
    picker1.on("changeDate", function (e) {
        $('#datetimepicker2').datetimepicker('setStartDate',e.date);
    });
    picker2.on("changeDate", function (e) {
        $('#datetimepicker1').datetimepicker('setEndDate',e.date);
    });
    /*回车搜索*/
    $('#search').bind('keypress', function (event) {
        if (event.keyCode == "13") {
            var search = $('#search').val();
            alert("回车搜索"+search)
        }
    });
    /*表单校验*/
    $("#userForm").bootstrapValidator({
        message: '输入值不合法',
        excluded: [":disabled"],
        fields: {
            manageName: {
                message: '考核名称验证失败',
                validators: {
                    notEmpty: {
                        message: '考核名称不能为空'
                    },
                    stringLength: {/*长度校验*/
                        min: 2,
                        max: 20,
                        message: '长度2-20'
                    }
                }
            },
            manageExplain: {
                message: '考核说明验证失败',
                validators: {
                    notEmpty: {
                        message: '考核说明不能为空'
                    },
                    stringLength: {/*长度校验*/
                        min: 2,
                        max: 50,
                        message: '长度2-50'
                    }
                }
            },
            datetimeStart: {
                trigger: "change",
                validators: {
                    notEmpty: {
                        message: '请选择开始时间'
                    }
                }
            }, datetimeEnd: {
                trigger: "change",
                validators: {
                    notEmpty: {
                        message: '请选择结束时间'
                    },
                    callback: {
                        message: '开始时间必须小于结束时间',
                        callback: function (value, validator, $field) {
                            let other = validator.getFieldElements('datetimeStart').val();//获得另一个的值
                            let start = new Date(other.replace("-", "/").replace("-", "/"));
                            let end = new Date(value.replace("-", "/").replace("-", "/"));
                            if (start <= end) {
                                return true;
                            }
                            return false;
                        }
                    }
                }
            }

        }
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
    //             width:'100%',
    //             disable_search_threshold: 5,
    //             max_shown_results:50,
    //             no_results_text: "未找到任何结果",
    //             search_contains: true,//关键字模糊搜索
    //         });
    //
    //     }
    // });

    $("#chosen-select-join").chosen({
        width:'100%',
        disable_search_threshold: 5,//少于n项时隐藏搜索框
        no_results_text: "未找到任何结果",
        max_shown_results:50,//最多显示条数
        search_contains: true,//关键字模糊搜索
    });
    $("#chosen-select").chosen({
        width:'100%',
        disable_search_threshold: 5,//少于n项时隐藏搜索框
        no_results_text: "未找到任何结果",
        max_shown_results:50,//最多显示条数
        search_contains: true,//关键字模糊搜索
    });
    $("#chosen-select").val(['1231','1232']);//设置默认选中值
    $('#chosen-select').trigger('chosen:updated');//更新选项

    /*添加审批流程*/
    $('#submitManage').click(function () {
        var targetM = $('form[id="userFormM"] input[name="targetM"]').val();
        var targetP = $('form[id="userFormM"] select[name="targetP"]').val();
        var targetNewP = targetP.join(',');
        var tr = $('#manageTable tbody tr').last();
        tr.after('<tr><td>'+targetM+'</td><td>'+targetNewP+'</td><td><a href="#" class="delConfirm">删除</a></td></tr>');
    })
});