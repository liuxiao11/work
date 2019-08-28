define(['common','toastr','validator'],function(commonJs,toastr){
    /*回车搜索*/
    $('#search').bind('keypress', function (event) {
        if (event.keyCode == "13") {
            var search = $('#search').val();
            alert("回车搜索"+search)
        }
    });
    /*同步通讯录*/
    $('#sync-phoneBook').click(function () {
        toastr.success('数据同步成功');
        // toastr.error('Error');
    });
    /*表单校验*/
    $(document).ready(function () {
        $.validate({form: '#userForm'});
    });
});