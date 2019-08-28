define(['common','validator'],function(commonJs){
    $("#aaa").click(function () {
        /*模态框成功/错误信息*/
        // commonJs.modal_sm('成功信息','成功信息成功信息');
        // $('#myModalInfo').modal('show');

        /*警告框成功/错误信息*/
        commonJs.alert_message('成功Success','成功Success成功Success成功Success','success');
        // commonJs.alert_message('错误信息Danger','错误信息Danger错误信息Danger错误信息Danger','danger');
        // commonJs.alert_confirm('确认信息Info','确认信息Info确认信息Info需要确认吗','warning');
    });
    $(document).ready(function () {
        commonJs.equalTo();
        $.validate({form: '#userForm'});
    });
});