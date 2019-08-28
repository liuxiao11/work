define(['common','validator'],function(commonJs){
    /*modal框 中内容 删除*/
    $(document).on('click','.delConfirm',function () {
        var that = this;
        commonJs.alert_confirm('删除','确定要删除吗?','warning',that,del);
    });
    /*删除的回调*/
    function del(that){
        $(that).parents('td').parents('tr').remove();
    }
    /*模板删除*/
    commonJs.confirm('删除','确定要删除吗?','myModalDel');
    /*回车搜索*/
    $('#search').bind('keypress', function (event) {
        if (event.keyCode == "13") {
            var search = $('#search').val();
            alert("回车搜索"+search)
        }
    });
    /*表单校验*/
    $(document).ready(function () {
        $.validate({form: '#userForm'});
        $.validate({form: '#userFormIn'});
        $.validate({form: '#userFormAs'});
        $.validate({form: '#userFormTo'});
    });
    /*添加考核指标*/
    $('#indexFw').click(function () {
        var indexIn = $('form[id="userFormIn"] input[name="indexIn"]').val();
        var indexCl = $('form[id="userFormIn"] input[name="indexCl"]').val();
        var indexWe = $('form[id="userFormIn"] input[name="indexWe"]').val();
        var tr = $('#indexTable tbody tr').last();
        tr.after('<tr><td>'+indexIn+'</td><td>'+indexCl+'</td><td>'+indexWe+'</td><td><a href="#" class="delConfirm">删除</a></td></tr>');
    });
    /*添加评价流程*/
    $('#assessFw').click(function () {

        var assessLi = $('form[id="userFormAs"] input[name="assessLi"]').val();
        var assessPe = $('form[id="userFormAs"] input[name="assessPe"]').val();
        var assessWe = $('form[id="userFormAs"] input[name="assessWe"]').val();
        var tr = $('#accessTable tbody tr').last();
        tr.after('<tr><td>'+assessLi+'</td><td>'+assessPe+'</td><td>'+assessWe+'</td><td><a href="#" class="delConfirm">删除</a></td></tr>');
    });
    /*添加总分级别*/
    $('#totalFw').click(function () {
        var totalLe = $('form[id="userFormTo"] input[name="totalLe"]').val();
        var totalMin = $('form[id="userFormTo"] input[name="totalMin"]').val();
        var totalMax = $('form[id="userFormTo"] input[name="totalMax"]').val();
        var tr = $('#totalTable tbody tr').last();
        tr.after('<tr><td>'+totalLe+'</td><td>'+totalMin+'</td><td>'+totalMax+'</td><td><a href="#" class="delConfirm">删除</a></td></tr>');
        // tr.after('<tr><td>'+11+'</td><td>'+22+'</td><td>'+33+'</td><td><a href="#" class="delConfirm">删除</a></td></tr>');
        // $('#totalTable tbody').html();
        // var testtr = $('#totalTable tbody tr');
        // var a = $('#totalTable tbody').html(testtr);
        // console.log(a)
    })
});