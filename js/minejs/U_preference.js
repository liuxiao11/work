define(['common','bootstrap_switch'],function(commonJs){
    /* bootstrap开关控件，初始化 */
    $(function () {
        /* 初始化控件 */
        $(".checkbox").bootstrapSwitch({
            onText: "开启",      // 设置ON文本  
            offText: "关闭",    // 设置OFF文本  
            onColor: "success",// 设置ON文本颜色     (info/success/warning/danger/primary)  
            offColor: "success",  // 设置OFF文本颜色        (info/success/warning/danger/primary)  
            size: "mini",    // 设置控件大小,从小到大  (mini/small/normal/large)  
            handleWidth: "30",//设置控件宽度
            // 当开关状态改变时触发  
            onSwitchChange: function (event, state) {
                var ProductId = event.target.defaultValue;
                if (state == true) {
                    //开启
                    commonJs.modal_sm('开启邮件通知', '邮件地址检查失败！请填写正确的邮箱地址。');
                    $('#myModalInfo').modal('show');
                } else {
                    //关闭
                }
            },
        });
    });
});