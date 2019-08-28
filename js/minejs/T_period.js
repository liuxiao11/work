define(['common','moment','datetimepicker','bootstrapValidator'],function(commonJs){
    commonJs.confirm('删除','确定要删除吗?','myModalDel');
    //开始日期
    var picker1 = $('#datetimepicker1').datetimepicker({
        format: 'yyyy-mm-dd hh:ii:ss',
        dateFormat: 'yyyy-mm-dd',//日期显示格式
        timeFormat:'HH:mm:ss',//时间显示格式
        todayBtn:  1,
        autoclose: 1,
        minView:0,  //0表示可以选择小时、分钟   1只可以选择小时
        minuteStep:1,//分钟间隔1分钟
    });
    //结束日期
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
    /*验证*/
    $("#userForm").bootstrapValidator({
        message: '输入值不合法',
        excluded: [":disabled"],
        fields: {
            periodName: {
                message: '周期名称验证失败',
                validators: {
                    notEmpty: {
                        message: '周期名称不能为空'
                    },
                    stringLength: {/*长度校验*/
                        min: 2,
                        max: 20,
                        message: '长度2-20'
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
});