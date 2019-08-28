define(['jquery','bootstrap','validator'],function($){
    $(document).ready(function () {
        $.validate({form: '#userForm',});
        $.validate({form: '#userForm1'});
    });
});